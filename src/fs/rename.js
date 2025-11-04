import fs from "fs/promises";

const rename = async () => {
  await fs
    .rename("./files/wrongFilename.txt", "./files/properFilename.md")
    .catch((_) => {
      throw new Error("FS operation failed");
    });
};

await rename();
