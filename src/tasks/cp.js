import fs from "fs";
import fsPr from "node:fs/promises";
import path from "path";

export const cp = async (srcFilename, dstPathDir) => {
  const srcFilenamePath = path.resolve(srcFilename);
  const dstFilenamePath = path.resolve(dstPathDir, srcFilename);

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

  ws.on("finish", () => {
    console.log("File copied successfully");
  });

  rs.pipe(ws);
};
