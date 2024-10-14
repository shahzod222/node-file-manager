import * as tasks from "./tasks/index.js";
import { getCurDir } from "./utils/getCurDir.js";
import { defaultCommands } from "./static/defaultCommands.js";

export const manager = async (chunk) => {
  const [command, ...args] = chunk.split(" ");

  try {
    if (!defaultCommands.includes(command)) {
      console.log("Invalid input");
      return;
    }
    await tasks[command](...args);
  } catch {
    console.log("\nOperation failed\n");
  } finally {
    getCurDir();
  }
};
