import fs from "node:fs/promises";
import path from "node:path";

export const ls = async () => {
  try {
    const currentDir = process.cwd();
    const listDir = await fs.readdir(currentDir);

    const promiseResults = listDir.map(async (item) => {
      const resolvedPath = path.join(currentDir, item);
      const stat = await fs.stat(resolvedPath);
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
  } catch (error) {
    console.error("An error occurred while reading the directory:", error);
  }
};
