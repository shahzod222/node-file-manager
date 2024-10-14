import fs from "fs";
import path from "path";

export const rm = async (filePath) => {
  try {
    const targetFilenamePath = path.resolve(filePath);
    fs.rm(targetFilenamePath);
  } catch {
    throw new Error();
  }
};
