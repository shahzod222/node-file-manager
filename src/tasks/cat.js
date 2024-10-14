import fs from "fs";
import path from "path";
import { stdout } from "process";

export const cat = (filename) => {
  const filePath = path.resolve(filename);
  const rs = fs.createReadStream(filePath);

  rs.pipe(stdout);

  rs.on("end", () => stdout.write("\n"));

  rs.on("error", () => {
    console.log("\nOperation Failed\n");
  });
};
