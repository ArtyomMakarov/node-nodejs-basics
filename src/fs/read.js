import { readFile } from "fs/promises";

const read = async () => {
  readFile("./files/fileToRead.txt", "utf8")
    .then((data) => console.log(data))
    .catch((_) => {
      throw new Error("FS operation failed");
    });
};

await read();
