export function generateMarkdown(data) {
  return `
## ${data.candidateName} — ${data.candidateTitle}

**Location:** ${data.candidateLocation}

${data.summary}

---

### Key Strengths
${data.strengths.map(s => `
**${s.title}**  
${s.desc}
`).join("\n")}

---

### Technical Skills
${data.technicalSkills.map(skill => `
**${skill.category}**  
${skill.skills}
`).join("\n")}

---

### Experience Summary
${data.expSummaryTable.map(exp => `
**${exp.role}**  
${exp.desc}  
${exp.loc}  
${exp.time}
`).join("\n")}
`;
}
