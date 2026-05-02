import { processResume } from "./src/processResume.js";
import { generateMarkdown } from "./src/docGenerator.js";

async function run() {
  const resumeText = "Sample resume...";
  const recruiterNotes = "Focus on backend and scalability";

  const structured = await processResume({ resumeText, recruiterNotes });

  const output = generateMarkdown(structured);

  console.log(output);
}

run();
