const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'my-app', 'dist');
const dest = path.join(__dirname, 'dist');

async function copyDir(srcDir, destDir) {
  await fs.promises.mkdir(destDir, { recursive: true });
  const entries = await fs.promises.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

(async () => {
  try {
    if (!fs.existsSync(src)) {
      console.error('Source dist not found:', src);
      process.exit(1);
    }

    // Remove existing dest if exists
    if (fs.existsSync(dest)) {
      await fs.promises.rm(dest, { recursive: true, force: true });
    }

    try {
      await fs.promises.rename(src, dest);
      console.log('Moved dist to', dest);
    } catch (err) {
      // fallback to copy
      console.log('Rename failed, copying instead...', err.message);
      await copyDir(src, dest);
      // remove src after copy
      await fs.promises.rm(src, { recursive: true, force: true });
      console.log('Copied dist to', dest);
    }
  } catch (err) {
    console.error('Error moving dist:', err);
    process.exit(1);
  }
})();
