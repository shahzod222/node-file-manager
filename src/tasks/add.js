import fs from "fs";
import path from "path";

export const add = async (filename) => {
  try {
    const filePath = path.resolve(filename);

    fs.writeFile(filePath, "");
  } catch {
    throw new Error();
  }
};
