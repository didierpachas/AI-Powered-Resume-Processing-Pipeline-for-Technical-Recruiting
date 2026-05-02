import { callLLM } from "./utils.js";

export async function processResume(resume) {
  const prompt = `
  Extract structured candidate data and return JSON.
  Apply anonymization and formatting rules.
  `;

  const result = await callLLM(prompt, resume.content);

  return result;
}
