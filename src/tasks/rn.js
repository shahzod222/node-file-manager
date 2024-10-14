import fsPr from "fs/promises";
import path from "path";

export const rn = async (srcFilename, dstFilename) => {
  try {
    const srcFilenamePath = path.resolve(srcFilename);
    const dstFilenamePath = path.resolve(dstFilename);

    await fsPr.rename(srcFilenamePath, dstFilenamePath);
  } catch {
    throw new Error();
  }
};
