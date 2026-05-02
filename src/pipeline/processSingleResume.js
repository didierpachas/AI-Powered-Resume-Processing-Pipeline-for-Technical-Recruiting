import { callAI } from "../services/aiService.js";
import { generateDocument } from "../services/outputService.js";

export async function processSingleResume(item) {
  console.log("Processing:", item.id);

  const structuredData = await callAI({
    resumeText: item.resume,
    notes: item.notes
  });

  // Ensure consistency between sections
  if (structuredData.expSummaryTable && structuredData.detailedExperience) {
    structuredData.expSummaryTable.forEach((row, i) => {
      if (structuredData.detailedExperience[i]) {
        row.desc = structuredData.detailedExperience[i].desc;
      }
    });
  }

  const output = generateDocument(structuredData);

  return output;
}
