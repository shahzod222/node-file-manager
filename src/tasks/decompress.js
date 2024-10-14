import fs from "fs";
import fsPr from "fs/promises";
import path from "path";
import zlib from "zlib";

export const decompress = async (filePath, dstPathDir) => {
  const srcFilenamePath = path.resolve(filePath);
  const dstFilenamePath = path.resolve(
    dstPathDir,
    filePath.replace(/\.br$/, "")
  );

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

  const brotli = zlib.createBrotliDecompress();
  const stream = rs.pipe(brotli).pipe(ws);

  stream.on("finish", () => {
    console.log("Decompressed!");
  });
};
