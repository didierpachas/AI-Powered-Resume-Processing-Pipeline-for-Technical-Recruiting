# AI-Powered-Resume-Processing-Pipeline-for-Technical-Recruiting
Recruiting teams spend significant time manually formatting candidate resumes into standardized templates, slowing down submission speed and reducing time spent on high-value activities.

## Overview
Recruiting teams often spend a significant amount of time manually formatting candidate resumes into standardized templates for client submission. This process is repetitive, time-consuming, and reduces the time recruiters can spend on high-value activities like sourcing and candidate engagement.

This project showcases an AI-powered pipeline designed to automate that process end-to-end—transforming raw resumes into fully formatted, anonymized, client-ready profiles within seconds.

---

## Problem
- Manual resume formatting creates operational bottlenecks  
- Recruiters spend excessive time on administrative work  
- Inconsistent formatting affects candidate presentation and brand quality  
- Slower turnaround impacts ability to close competitive roles  

---

## Solution
Built an automated pipeline that:

- Ingests resumes via email  
- Processes and restructures them using LLMs  
- Applies anonymization and formatting rules  
- Generates standardized documents using predefined templates  
- Delivers a ready-to-use profile back to the recruiter  

The result is a fast, consistent, and scalable resume processing system.

---

## Architecture

**High-level workflow:**

- **Input Layer:** Gmail (resume ingestion + recruiter instructions)  
- **Processing Layer:** LLM API (structured parsing + enhancement)  
- **Validation Layer:** Prompt-based rules + JSON structure enforcement  
- **Output Layer:** Google Docs API (template-based generation)  
- **Delivery Layer:** Automated email response with document link  

---

## Key Features

### Resume Parsing & Structuring
Converts unstructured resumes into structured JSON format  

### Prompt-Based Validation
Ensures consistency, formatting rules, and output quality  

### Anonymization Logic
Removes sensitive data and standardizes company descriptions  

### Template-Based Document Generation
Produces polished, client-ready profiles aligned with brand standards  

### Recruiter Input Handling
Dynamically adapts output based on recruiter instructions  

### Fault Tolerance & Reliability
Includes retry logic, batching, and fallback mechanisms to handle API limits and failures  

---

## Impact
- ~98% reduction in manual administrative work  
- Near-instant turnaround for candidate submissions  
- Improved recruiter experience and efficiency  
- Consistent, high-quality output aligned with company branding  

---

## Tech Stack
- JavaScript (Google Apps Script)  
- LLM APIs (Gemini / OpenAI)  
- Gmail API  
- Google Docs API  
- Google Drive API  

---

## Example Workflow

1. Recruiter sends a resume via email  
2. System detects and processes the request  
3. Resume is parsed and enhanced using AI  
4. Data is structured into a predefined format  
5. A formatted document is generated automatically  
6. Recruiter receives a ready-to-use candidate profile  

---

## Repository Structure

    ai-recruiting-pipeline/
    ├── src/
    │   ├── pipeline.js        # Orchestrates the workflow
    │   ├── emailService.js    # Simulates resume ingestion
    │   ├── aiProcessor.js     # Handles LLM processing
    │   ├── docGenerator.js    # Generates output documents
    │   └── utils.js           # Retry logic + helpers
    │
    ├── config/
    │   └── config.js
    │
    ├── examples/
    │   ├── sample_input.txt
    │   └── sample_output.json
    │
    ├── index.js
    └── README.md

---

## Notes
This repository contains a **simplified and sanitized version** of the original internal tool.  
Sensitive business logic, proprietary prompts, and internal configurations have been modified or removed.

---

## Why This Matters
This project demonstrates how recruiting operations can be treated as **scalable systems—not just manual workflows**.

By combining technical recruiting expertise with automation and AI, it’s possible to:
- Increase speed without sacrificing quality  
- Standardize outputs across teams  
- Free up recruiters to focus on high-impact work  

---

## Author
**Didier Pachas**  
Senior Technical Recruiter | AI-Powered Recruiting Systems
