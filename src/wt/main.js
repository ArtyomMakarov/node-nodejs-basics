import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const workers = [];
  const results = [];
  const cpus = os.cpus().length;

  for (let i = 10; i < cpus + 10; i++) {
    workers.push(
      new Worker("./worker.js", {
        workerData: { n: i },
      })
    );
  }

  for (const worker of workers) {
    worker.on("message", (message) => {
      results.push({ status: "resolved", data: message });
    });

    worker.on("error", (_) => {
      results.push({ status: "error", data: null });
    });

    worker.on("exit", (_) => {
      if (results.length === cpus) {
        console.log(results);
      }
    });
  }
};

await performCalculations();
