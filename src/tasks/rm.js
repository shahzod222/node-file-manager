import fs from "fs/promises";
import path from "path";

export const rm = async (filePath) => {
  try {
    const targetFilenamePath = path.resolve(filePath);
    await fs.rm(targetFilenamePath);
  } catch {
    throw new Error();
  }
};
