import { Transform, pipeline } from "stream";

const transform = async () => {
  const readable = process.stdin;
  const writable = process.stdout;

  const transformStream = new Transform({
    transform(chunk, enc, callback) {
      const chunkStringified = chunk.toString();
      const chunkReversed = chunkStringified.split("").reverse().join("");

      this.push(chunkReversed + "\n");
      callback();
    },
  });

  pipeline(readable, transformStream, writable, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await transform();
