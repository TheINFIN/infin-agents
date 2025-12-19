Execute a comprehensive multi-stage code review workflow.

$ARGUMENTS

---

You are executing the **Full Code Review Workflow** - a multi-agent process for thorough code review.

## Workflow Stages

Execute each stage in sequence, clearly labeling your output:

### Stage 1: Code Quality Review (as Code Reviewer)
- Review for style, best practices, security vulnerabilities
- List issues by severity: Critical / High / Medium / Low / Info

### Stage 2: Bug Detection (as Debugger)
- Identify potential bugs, edge cases, error handling gaps
- Document reproduction steps for any issues found

### Stage 3: Test Coverage Analysis (as Test Writer)
- Identify missing tests and coverage gaps
- Recommend specific tests to add

### Stage 4: Refactoring Opportunities (as Refactorer)
- Identify code smells and simplification opportunities
- Suggest refactorings with before/after examples

### Stage 5: Architecture Review (as Architect)
- Review design patterns, scalability, maintainability
- Note architectural concerns or recommendations

### Stage 6: Final Summary
Consolidate into a report with:
- **Executive Summary**: Overall assessment (1-2 sentences)
- **Critical Issues**: Must fix immediately
- **High Priority**: Should fix soon
- **Medium/Low Priority**: Nice to have
- **Recommendations**: Improvements for the future

## Output Format

Structure your response with clear headers for each stage. Be thorough but concise.
