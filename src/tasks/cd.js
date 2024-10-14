import path from "path";

export const cd = (newDir) => {
  const newDirPath = path.resolve(newDir);

  process.chdir(newDirPath);
};
