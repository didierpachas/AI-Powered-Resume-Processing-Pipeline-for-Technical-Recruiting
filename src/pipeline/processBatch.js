import { fetchPendingResumes, markAsProcessing, markAsProcessed, markAsError } from "../services/inputService.js";
import { processSingleResume } from "./processSingleResume.js";

export async function processBatch({ batchSize }) {
  const allItems = await fetchPendingResumes();
  const batch = allItems.slice(0, batchSize);

  if (batch.length === 0) {
    console.log("No pending resumes.");
    return;
  }

  console.log(`Processing ${batch.length} resumes...\n`);

  for (const item of batch) {
    try {
      await markAsProcessing(item);

      const result = await processSingleResume(item);

      await markAsProcessed(item, result);

    } catch (err) {
      console.error("Error processing item:", err.message);
      await markAsError(item);
    }
  }
}
