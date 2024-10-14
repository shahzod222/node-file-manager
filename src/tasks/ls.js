import fs from "fs";
import path from "path";

export const ls = async () => {
  try {
    const __dirname = process.cwd();
    const listDir = fs.readdir(__dirname);

    const promiseResults = listDir.map(async (item) => {
      const resolvedPath = path.join(__dirname, item);
      const stat = fs.stat(resolvedPath);
      return {
        name: item,
        type: stat.isDirectory() ? "directory" : "file",
      };
    });

    const resolvedResult = await Promise.all(promiseResults);

    const sortedResult = resolvedResult.sort((a, b) => {
      return a.type.localeCompare(b.type) || a.name.localeCompare(b.name);
    });

    console.table(sortedResult);
  } catch {
    throw new Error();
  }
};
