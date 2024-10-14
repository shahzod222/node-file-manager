import fs from "node:fs";
import fsPr from "node:fs/promises";
import path from "node:path";

export const mv = async (filePath, dstPathDir) => {
  const srcFilenamePath = path.resolve(filePath);
  const dstFilenamePath = path.resolve(dstPathDir, filePath);

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

  ws.on("finish", async () => {
    await fsPr.rm(srcFilenamePath);
  });

  rs.pipe(ws);
};
