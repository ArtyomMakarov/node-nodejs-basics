import { cp } from "fs/promises";
import { access, constants } from "fs";

const copy = async () => {
  access("./files", constants.F_OK, async (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      await cp("./files", "./files_copy", {
        recursive: true,
        errorOnExist: true,
        force: false,
      }).catch((_) => {
        throw new Error("FS operation failed");
      });
    }
  });
};

await copy();
