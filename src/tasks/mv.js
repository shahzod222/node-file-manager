import fs from "fs";
import path from "path";

export const mv = async (filePath, dstPathDir) => {
  const srcFilenamePath = path.resolve(filePath);
  const dstFilenamePath = path.resolve(dstPathDir, filePath);

  try {
    fs.access(srcFilenamePath);
  } catch {
    throw new Error();
  }

  try {
    fs.access(dstPathDir);
  } catch {
    throw new Error();
  }

  const rs = fs.createReadStream(srcFilenamePath);
  const ws = fs.createWriteStream(dstFilenamePath);

  ws.on("finish", async () => {
    fs.rm(srcFilenamePath);
  });

  rs.pipe(ws);
};
