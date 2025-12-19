# Feature Implementation Workflow

A structured approach to implementing new features from planning to completion.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                 FEATURE IMPLEMENTATION WORKFLOW                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Architect        →  2. AI Engineer    →  3. Implementation  │
│  (Design & Plan)        (If AI involved)     (Write Code)       │
│         │                     │                    │            │
│         ▼                     ▼                    ▼            │
│  4. Test Writer      →  5. Code Reviewer  →  6. Documentation   │
│  (Write Tests)          (Quality Check)      (Update Docs)      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stages

### Stage 1: Architecture & Planning
**Agent**: Architect
**Tasks**:
- Analyze requirements
- Design system components
- Define interfaces and contracts
- Identify dependencies
- Create implementation plan

### Stage 2: AI System Design (Conditional)
**Agent**: AI Engineer
**Condition**: Only if feature involves AI/ML
**Tasks**:
- Design AI architecture
- Select models and tools
- Define prompts and pipelines
- Plan evaluation strategy

### Stage 3: Code Implementation
**Tasks**:
- Implement based on architecture plan
- Follow coding standards
- Write clean, documented code
- Handle errors appropriately

### Stage 4: Test Writing
**Agent**: Test Writer
**Tasks**:
- Write unit tests
- Write integration tests
- Cover edge cases
- Ensure adequate coverage

### Stage 5: Code Review
**Agent**: Code Reviewer
**Tasks**:
- Review for quality issues
- Check security concerns
- Verify best practices
- Suggest improvements

### Stage 6: Documentation
**Agent**: Documentation Writer
**Tasks**:
- Update README if needed
- Document APIs
- Add code comments
- Update changelog

## Usage

```
/workflow feature-implementation [feature description]
```

## Input Required

- Feature requirements or user story
- Acceptance criteria
- Technical constraints
- Timeline considerations

## Output

- Architecture document
- Implemented feature code
- Comprehensive tests
- Updated documentation
- Review report
