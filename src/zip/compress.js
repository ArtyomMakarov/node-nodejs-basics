import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";

const compress = async () => {
  const source = createReadStream("./files/fileToCompress.txt");
  const destination = createWriteStream("./files/archive.gz");

  pipeline(source, createGzip(), destination, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await compress();
