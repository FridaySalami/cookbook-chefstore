/**
 * This helper file ensures that markdown files properly export their frontmatter as metadata
 */
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import yaml from 'js-yaml';
import { globSync } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(__dirname, '../../content');

function extractFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  if (!match) return {};

  try {
    return yaml.load(match[1]);
  } catch (error) {
    console.error('Error parsing frontmatter:', error);
    return {};
  }
}

function processMarkdownFiles() {
  const files = globSync(`${contentDir}/recipes/*.md`);
  const metadataDir = path.resolve(contentDir, 'recipe-metadata');
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir, { recursive: true });
  }

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const metadata = extractFrontmatter(content);

    // Write all metadata files to recipe-metadata folder
    const basename = path.basename(file, '.md');
    const exportFile = path.join(metadataDir, `${basename}.metadata.js`);

    fs.writeFileSync(
      exportFile,
      `export const metadata = ${JSON.stringify(metadata, null, 2)};\n`
    );
  });
}

export { processMarkdownFiles };