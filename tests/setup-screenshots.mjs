// Simple script to ensure the screenshots directory exists
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screenshotsDir = path.join(__dirname, '..', 'screenshots');

// Create directory if it doesn't exist
if (!fs.existsSync(screenshotsDir)) {
  console.log('Creating screenshots directory at:', screenshotsDir);
  fs.mkdirSync(screenshotsDir, { recursive: true });
} else {
  console.log('Screenshots directory already exists at:', screenshotsDir);
} 