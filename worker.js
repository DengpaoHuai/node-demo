import { parentPort } from "worker_threads";

// Simule une tâche longue
function longTask() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  return sum;
}

// Écoute les messages du thread principal
parentPort?.on("message", (msg) => {
  if (msg === "start") {
    const result = longTask();
    // Envoie le résultat au thread principal
    parentPort?.postMessage(result);
  }
});
