import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = createReadStream("./files/fileToCalculateHashFor.txt");

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });

  stream.on("error", (err) => {
    console.error(err);
  });
};

await calculateHash();
