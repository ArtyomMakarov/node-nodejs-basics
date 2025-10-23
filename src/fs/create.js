import { appendFile } from "fs/promises";
import { access, constants } from "fs";

const create = async () => {
  access("./files/fresh.txt", constants.F_OK, async (err) => {
    if (err) {
      await appendFile("./files/fresh.txt", "I am fresh and young");

      console.log("File created");
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
