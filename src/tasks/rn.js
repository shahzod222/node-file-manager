import fs from "fs";
import path from "path";

export const rn = async (srcFilename, dstFilename) => {
  try {
    const srcFilenamePath = path.resolve(srcFilename);
    const dstFilenamePath = path.resolve(dstFilename);

    fs.rename(srcFilenamePath, dstFilenamePath);
  } catch {
    throw new Error();
  }
};
