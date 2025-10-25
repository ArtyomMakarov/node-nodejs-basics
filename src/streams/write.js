import { createWriteStream } from "fs";

const write = async () => {
  const readableStream = process.stdin;
  const writableStream = createWriteStream("./files/fileToWrite.txt");

  readableStream.pipe(writableStream);

  readableStream.on("data", (chunk) => {
    const chunkStringified = chunk.toString();

    if (chunkStringified.includes("CLOSE")) {
      readableStream.unpipe(writableStream);
    }
  });
};

await write();
