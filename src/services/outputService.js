export function generateDocument(data) {
  return `
# ${data.candidateName}
${data.candidateTitle}

Generated profile ready for submission.
`;
}
