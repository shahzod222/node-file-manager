import fs from "fs";
import fsPr from "node:fs/promises";
import path from "path";
import zlib from "zlib";

export const compress = async (filePath, dstPathDir) => {
  const srcFilenamePath = path.resolve(filePath);
  const dstFilenamePath = path.resolve(dstPathDir, `${filePath}.br`);

  try {
    await fsPr.access(srcFilenamePath);
  } catch {
    throw new Error();
  }

  try {
    await fsPr.access(dstPathDir);
  } catch {
    throw new Error();
  }

  const rs = fs.createReadStream(srcFilenamePath);
  const ws = fs.createWriteStream(dstFilenamePath);

  const brotli = zlib.createBrotliCompress();
  const stream = rs.pipe(brotli).pipe(ws);

  stream.on("finish", () => {
    console.log("Compressed!");
  });
};
