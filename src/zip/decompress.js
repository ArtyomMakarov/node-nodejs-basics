import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const decompress = async () => {
  const source = createReadStream("./files/archive.gz");
  const destination = createWriteStream("./files/fileToCompress.txt");

  pipeline(source, createGunzip(), destination, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await decompress();
