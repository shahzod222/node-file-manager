import fs from "fs";
import path from "path";

export const cp = async (srcFilename, dstPathDir) => {
  const srcFilenamePath = path.resolve(srcFilename);
  const dstFilenamePath = path.resolve(dstPathDir, srcFilename);

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

  ws.on("finish", () => {
    console.log("File copied!");
  });

  rs.pipe(ws);
};
