export async function fetchPendingResumes() {
  return [
    {
      id: "resume-1",
      resume: "Sample resume content...",
      notes: "Focus on backend experience"
    }
  ];
}

export async function markAsProcessing(item) {
  console.log(`Locking ${item.id}`);
}

export async function markAsProcessed(item, result) {
  console.log(`Processed ${item.id}`);
}

export async function markAsError(item) {
  console.log(`Error on ${item.id}`);
}
