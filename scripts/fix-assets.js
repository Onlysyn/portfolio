const fs = require('fs');
const path = require('path');

const root = process.cwd();
const copySource = path.join(root, 'pic.jpg');
const copyTarget = path.join(root, 'public', 'pic.jpg');

if (fs.existsSync(copySource)) {
  fs.copyFileSync(copySource, copyTarget);
  console.log('copied pic.jpg to public/');
} else {
  console.log('pic.jpg not found in repo root');
}

const jpegBase64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD/2Q==';
const jpeg = Buffer.from(jpegBase64, 'base64');

const azbirTarget = path.join(root, 'public', 'projects', 'azbir', 'preview.jpg');
const threadxTarget = path.join(root, 'public', 'projects', 'threadx', 'preview.jpg');

fs.writeFileSync(azbirTarget, jpeg);
fs.writeFileSync(threadxTarget, jpeg);
console.log('wrote placeholder project preview jpg files');
