import { retryWithFallback } from "../core/retryWithFallback.js";
import { buildPrompt } from "../prompts/resumePrompt.js";

export async function callAI({ resumeText, notes }) {
  const prompt = buildPrompt(resumeText, notes);

  const primaryModel = "primary-llm";
  const fallbackModel = "fallback-llm";

  const response = await retryWithFallback({
    primaryModel,
    fallbackModel,
    payload: prompt
  });

  const clean = response.replace(/^```json/, "").replace(/```$/, "");

  return JSON.parse(clean);
}
