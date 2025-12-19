# Feature Definition Workflow

A comprehensive workflow for defining features from initial idea to development-ready specification.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                   FEATURE DEFINITION WORKFLOW                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Product Manager   →  2. User Researcher  →  3. UX Designer  │
│  (Problem & Scope)       (User Insights)        (Experience)    │
│         │                      │                     │          │
│         ▼                      ▼                     ▼          │
│  4. Copywriter        →  5. Story Groomer   →  6. Architect     │
│  (Messaging & Copy)      (User Stories)        (Technical)      │
│         │                      │                     │          │
│         ▼                      ▼                     ▼          │
│                    7. Final Specification                        │
│                    (Complete Feature Doc)                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stages

### Stage 1: Problem Definition & Scoping
**Agent**: Product Manager
**Tasks**:
- Define the problem statement clearly
- Identify target users and segments
- Articulate the business opportunity
- Set success metrics and KPIs
- Define scope (in/out)
- Assess priority (RICE or similar)
- Document assumptions and risks

**Output**: Feature brief with problem statement, target users, success metrics, and scope

### Stage 2: User Research & Insights
**Agent**: User Researcher
**Tasks**:
- Review existing user research
- Identify knowledge gaps
- Define research questions
- Create user personas (if needed)
- Map user journey for this feature
- Document jobs-to-be-done
- Synthesize insights into recommendations

**Output**: User insights document with personas, journey map, and key findings

### Stage 3: Experience Design
**Agent**: UX Designer
**Tasks**:
- Define user flows for the feature
- Create wireframes or mockups
- Specify interaction patterns
- Consider edge cases and error states
- Ensure accessibility requirements
- Document design decisions
- Create prototype (if needed)

**Output**: UX specification with flows, wireframes, and interaction details

### Stage 4: Content & Messaging
**Agent**: Copywriter
**Tasks**:
- Define voice and tone for the feature
- Write UI copy (labels, buttons, messages)
- Create error messages and help text
- Write onboarding/tutorial content
- Ensure consistency with brand voice
- Consider localization needs

**Output**: Content specification with all UI copy and messaging

### Stage 5: User Story Refinement
**Agent**: Story Groomer
**Tasks**:
- Break feature into user stories
- Write acceptance criteria for each story
- Identify story dependencies
- Estimate relative complexity
- Define definition of done
- Create story map

**Output**: Groomed backlog with estimated, prioritized stories

### Stage 6: Technical Assessment
**Agent**: Architect
**Tasks**:
- Assess technical feasibility
- Identify integration points
- Flag technical risks or dependencies
- Suggest implementation approach
- Estimate technical complexity
- Note infrastructure needs
- Consider scalability and performance

**Output**: Technical assessment with architecture notes and risk analysis

### Stage 7: Final Specification
**Consolidate all outputs into complete feature specification**

## Usage

```
/workflow feature-definition [feature idea or problem statement]
```

## Input Required

- Feature idea or problem to solve
- Business context and goals
- Target users (if known)
- Any constraints (timeline, technical, budget)
- Existing research or insights (if available)

## Output

A complete feature specification containing:

1. **Executive Summary**
   - Problem statement
   - Proposed solution
   - Success metrics
   - Priority assessment

2. **User Research**
   - Target personas
   - User journey map
   - Jobs-to-be-done
   - Key insights

3. **UX Specification**
   - User flows
   - Wireframes/mockups
   - Interaction specifications
   - Accessibility requirements

4. **Content Specification**
   - UI copy
   - Error messages
   - Help content
   - Voice and tone guidelines

5. **User Stories**
   - Story map
   - Individual stories with acceptance criteria
   - Dependencies
   - Estimates

6. **Technical Assessment**
   - Architecture considerations
   - Integration points
   - Technical risks
   - Implementation recommendations

## Customization

### Lightweight Version
For smaller features, skip or combine stages:
```
/workflow feature-definition --lightweight
```
Runs: Product Manager → UX Designer → Story Groomer

### Research-Heavy Version
For features requiring deep user understanding:
```
/workflow feature-definition --research-focus
```
Adds additional user research depth before design

## Best Practices

1. **Start with the problem** - Don't jump to solutions
2. **Involve stakeholders early** - Get buy-in on the problem definition
3. **Validate assumptions** - Use research to confirm or reject
4. **Keep scope focused** - It's easier to add than remove
5. **Document decisions** - Capture the "why" not just the "what"
6. **Iterate** - This is a collaborative process, not linear
