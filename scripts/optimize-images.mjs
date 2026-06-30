#!/usr/bin/env node
/**
 * Optimise images in public/images.
 *
 * Resizes anything wider than MAX_WIDTH and recompresses jpg/jpeg/png in place,
 * only overwriting when the result is actually smaller. Run after adding new
 * images (e.g. member photos, event shots):
 *
 *   npm install        # first time, installs sharp
 *   npm run optimize:images
 *
 * Tweak MAX_WIDTH / QUALITY below if you need higher-res hero images.
 */
import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = 'public/images';
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;
const EXTS = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (EXTS.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

function fmt(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

const files = await walk(ROOT);
let savedTotal = 0;
let changed = 0;

for (const file of files) {
  try {
    const before = (await stat(file)).size;
    const input = await readFile(file);
    const img = sharp(input, { failOn: 'none' });
    const meta = await img.metadata();
    const ext = path.extname(file).toLowerCase();

    let pipeline = img.rotate();
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH });
    }
    pipeline =
      ext === '.png'
        ? pipeline.png({ compressionLevel: 9, palette: true })
        : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

    const output = await pipeline.toBuffer();
    if (output.length < before) {
      await writeFile(file, output);
      savedTotal += before - output.length;
      changed++;
      console.log(`  ✓ ${path.relative(ROOT, file)}  ${fmt(before)} → ${fmt(output.length)}`);
    }
  } catch (err) {
    console.warn(`  ! skipped ${file}: ${err.message}`);
  }
}

console.log(`\nOptimised ${changed}/${files.length} images, saved ${fmt(savedTotal)}.`);
