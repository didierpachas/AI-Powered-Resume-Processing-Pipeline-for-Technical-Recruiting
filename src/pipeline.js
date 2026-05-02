import { fetchNewResumes } from "./emailService.js";
import { processResume } from "./aiProcessor.js";
import { generateDocument } from "./docGenerator.js";

export async function runPipeline() {
  const resumes = await fetchNewResumes();

  for (const resume of resumes) {
    try {
      const structuredData = await processResume(resume);
      const docUrl = await generateDocument(structuredData);

      console.log(`✅ Resume processed: ${docUrl}`);
    } catch (error) {
      console.error("❌ Error processing resume:", error.message);
    }
  }
}
