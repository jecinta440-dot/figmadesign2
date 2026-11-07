const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\472d94a9-3b1d-4e49-bd54-c781b40c6d07\\earth_globe_hero_1788177004296.jpg';
const assetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.copyFileSync(src, path.join(assetsDir, 'earth-globe.jpg'));
console.log('Successfully copied earth-globe.jpg to assets folder!');
