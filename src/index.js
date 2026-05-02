import { processBatch } from "./pipeline/processBatch.js";

async function main() {
  console.log("🚀 Starting Resume Processing Pipeline...\n");

  await processBatch({
    batchSize: 3
  });

  console.log("\n✅ Pipeline execution complete");
}

main();
