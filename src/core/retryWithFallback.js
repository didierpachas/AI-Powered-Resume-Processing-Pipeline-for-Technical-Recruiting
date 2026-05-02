export async function retryWithFallback({ primaryModel, fallbackModel, payload }) {
  let model = primaryModel;

  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      console.log(`Attempt ${attempt} using ${model}`);

      const res = await fakeLLMCall(model, payload);

      if (res.success) return res.data;

    } catch (err) {
      console.log("Error:", err.message);
    }

    if (attempt === 3) {
      console.log("Switching to fallback model...");
      model = fallbackModel;
    }

    await sleep(2000);
  }

  throw new Error("All attempts failed");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Simulated LLM call
async function fakeLLMCall(model, payload) {
  return {
    success: true,
    data: JSON.stringify({
      candidateName: "John D.",
      candidateTitle: "Senior Software Engineer",
      expSummaryTable: [],
      detailedExperience: []
    })
  };
}
