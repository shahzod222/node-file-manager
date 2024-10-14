import os from "os";
import { byeUser } from "./utils/byeUser.js";
import { helloUser } from "./utils/helloUser.js";
import { getUsername } from "./utils/getUsername.js";
import { getCurDir } from "./utils/getCurDir.js";
import { manager } from "./manager.js";

export const app = () => {
  const userName = getUsername();

  helloUser(userName);
  process.chdir(os.homedir());
  getCurDir();

  const rs = process.stdin;

  rs.on("data", (chunk) => {
    const command = chunk.toString().trim();

    if (command === ".exit") {
      byeUser(userName);
    }

    manager(command);
  });

  process.on("SIGINT", () => {
    byeUser(userName);
  });
};
