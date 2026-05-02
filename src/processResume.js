import { buildPrompt } from "./promptBuilder.js";

/**
 * Core pipeline:
 * - Builds prompt with recruiter input
 * - Calls LLM with retry + fallback
 * - Validates structured output
 */
export async function processResume({ resumeText, recruiterNotes }) {
  const prompt = buildPrompt(recruiterNotes);

  const rawResponse = await callWithRetryAndFallback({
    prompt,
    input: resumeText
  });

  const parsed = safeParse(rawResponse);

  validateStructure(parsed);

  return parsed;
}

async function callWithRetryAndFallback({ prompt, input }) {
  const models = ["primary-model", "fallback-model"];
  const MAX_RETRIES = 3;

  let lastError;

  for (const model of models) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        console.log(`Using ${model}, attempt ${attempt}`);

        const response = await mockLLMCall({ model, prompt, input });

        return response;

      } catch (error) {
        lastError = error;

        console.warn(`Error on ${model} attempt ${attempt}: ${error.message}`);

        if (attempt < MAX_RETRIES) {
          await delay(1000 * attempt);
        }
      }
    }

    console.warn(`Switching to fallback model...`);
  }

  throw new Error(`All models failed: ${lastError?.message}`);
}

function safeParse(response) {
  try {
    return JSON.parse(response);
  } catch {
    throw new Error("Invalid JSON response from LLM");
  }
}

function validateStructure(data) {
  const requiredFields = [
    "summary",
    "strengths",
    "technicalSkills",
    "expSummaryTable"
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
}

async function mockLLMCall() {
  if (Math.random() < 0.3) {
    throw new Error("Temporary API failure");
  }

  return JSON.stringify({
    candidateName: "John D.",
    candidateTitle: "Senior Backend Engineer",
    candidateLocation: "United States",
    summary: "Senior Backend Engineer with experience in scalable systems.",
    strengths: [
      { title: "Backend Architecture", desc: "Designs scalable systems." },
      { title: "Cloud Infrastructure", desc: "Experience with AWS." },
      { title: "Collaboration", desc: "Works cross-functionally." }
    ],
    technicalSkills: [
      { category: "Programming Languages", skills: "JavaScript, Python" },
      { category: "Cloud & Infrastructure", skills: "AWS, Docker" }
    ],
    expSummaryTable: []
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
