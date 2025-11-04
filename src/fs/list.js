import { readdir } from "fs/promises";

const list = async () => {
  await readdir("./files")
    .then((files) => console.log(files))
    .catch((_) => {
      throw new Error("FS operation failed");
    });
};

await list();
