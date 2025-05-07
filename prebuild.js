// prebuild.js - Run this before building to ensure markdown metadata is properly exported
import { processMarkdownFiles } from './src/lib/utils/mdsvex-metadata.js';

console.log('Preprocessing markdown files to generate metadata exports...');
processMarkdownFiles();
console.log('Preprocessing complete!');