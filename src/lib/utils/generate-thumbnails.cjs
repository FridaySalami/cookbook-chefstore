const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Set inputDir to the actual folder containing your images
const inputDir = 'static/images/recipes/category-name/recipe-name';
const outputDir = path.join(inputDir, 'resized');
const outputWidths = [400, 800, 1200];

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

/**
 * @param {string} filePath
 * @param {string} fileName
 */
function processImage(filePath, fileName) {
  outputWidths.forEach(width => {
    const outputFile = path.join(
      outputDir,
      `${fileName}-${width}w.webp`
    );
    if (fs.existsSync(outputFile)) {
      console.log(`Skipping ${outputFile} (already exists)`);
      return;
    }
    sharp(filePath)
      .resize(width)
      .webp({ quality: 80 })
      .toFile(outputFile)
      .then(() => console.log(`Created ${outputFile}`))
      .catch(err => console.error(err));
  });
}

// Process all images in the inputDir
fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpe?g|png|webp)$/i.test(file)) {
    const filePath = path.join(inputDir, file);
    const fileName = path.parse(file).name;
    processImage(filePath, fileName);
  }
});