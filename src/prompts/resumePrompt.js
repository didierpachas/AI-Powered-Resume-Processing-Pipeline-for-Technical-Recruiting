export function buildPrompt(resumeText, notes) {
  return `
You are a Technical Resume Processor.

Instructions:
- Extract structured data
- Maintain accuracy
- Apply recruiter notes: ${notes}

Resume:
${resumeText}

Return JSON only.
`;
}
