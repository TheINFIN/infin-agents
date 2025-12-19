# Full Code Review Workflow

A comprehensive multi-stage code review process for thorough quality assurance.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    FULL CODE REVIEW WORKFLOW                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Code Reviewer    →  2. Debugger       →  3. Test Writer     │
│  (Quality & Style)      (Bug Detection)      (Coverage Gaps)    │
│         │                     │                    │            │
│         ▼                     ▼                    ▼            │
│  4. Refactorer       →  5. Architect      →  6. Final Report    │
│  (Improvements)         (Design Review)       (Summary)         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stages

### Stage 1: Code Quality Review
**Agent**: Code Reviewer
**Focus**: Style, best practices, security vulnerabilities
**Output**: List of issues by severity

### Stage 2: Bug Detection
**Agent**: Debugger
**Focus**: Potential bugs, edge cases, error handling
**Output**: Bug report with reproduction steps

### Stage 3: Test Coverage Analysis
**Agent**: Test Writer
**Focus**: Missing tests, coverage gaps, test quality
**Output**: Recommended tests to add

### Stage 4: Refactoring Opportunities
**Agent**: Refactorer
**Focus**: Code smells, simplification opportunities
**Output**: Prioritized refactoring suggestions

### Stage 5: Architecture Review
**Agent**: Architect
**Focus**: Design patterns, scalability, maintainability
**Output**: Architecture recommendations

### Stage 6: Final Summary
**Consolidate all findings into actionable report**

## Usage

```
/workflow full-code-review [target: file, folder, or PR]
```

## Input Required

- Target code to review (file path, directory, or PR number)
- Context about the code's purpose
- Any specific concerns or focus areas

## Output

A comprehensive review report containing:
1. Executive summary with overall assessment
2. Critical issues requiring immediate attention
3. Detailed findings by category
4. Prioritized action items
5. Recommendations for improvements

## Customization

Skip stages by specifying:
```
/workflow full-code-review --skip=refactorer,architect
```
