export async function callLLM(prompt, content) {
  const MAX_RETRIES = 3;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      // Simulated response (no real API call)
      return mockResponse();
    } catch (error) {
      if (attempt === MAX_RETRIES) throw error;

      console.log(`Retrying... (${attempt})`);
      await delay(1000);
    }
  }
}

function mockResponse() {
  return {
    name: "Juan P.",
    title: "Senior Backend Engineer",
    summary: "Backend engineer with strong Node.js and cloud experience."
  };
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
