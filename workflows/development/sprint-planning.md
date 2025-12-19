# Sprint Planning Workflow

A structured workflow for preparing and executing sprint planning sessions.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                   SPRINT PLANNING WORKFLOW                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Story Groomer    →  2. Architect       →  3. UX Designer    │
│  (Refine Backlog)       (Technical Review)    (Design Review)   │
│         │                     │                    │            │
│         ▼                     ▼                    ▼            │
│  4. AI Engineer      →  5. Test Writer     →  6. Sprint Ready   │
│  (If AI involved)       (Test Planning)       (Final Backlog)   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stages

### Stage 1: Backlog Refinement
**Agent**: Story Groomer
**Tasks**:
- Review candidate stories
- Clarify requirements
- Write acceptance criteria
- Split large stories
- Identify dependencies

### Stage 2: Technical Review
**Agent**: Architect
**Tasks**:
- Assess technical complexity
- Identify architectural concerns
- Flag technical debt items
- Suggest implementation approaches
- Note integration points

### Stage 3: Design Review
**Agent**: UX Designer
**Tasks**:
- Review UI/UX requirements
- Ensure design specs exist
- Identify design dependencies
- Note accessibility requirements
- Flag user research needs

### Stage 4: AI Assessment (Conditional)
**Agent**: AI Engineer
**Condition**: Stories involving AI/ML
**Tasks**:
- Assess AI complexity
- Identify data requirements
- Note model considerations
- Estimate AI development effort

### Stage 5: Test Planning
**Agent**: Test Writer
**Tasks**:
- Review acceptance criteria
- Identify test scenarios
- Estimate testing effort
- Note automation opportunities
- Flag integration test needs

### Stage 6: Sprint Readiness
**Consolidate all input into sprint-ready backlog**

## Usage

```
/workflow sprint-planning [list of story IDs or descriptions]
```

## Input Required

- Candidate stories for sprint
- Sprint goal/theme
- Team capacity
- Current velocity
- Known blockers

## Output

- Refined, estimated stories
- Technical notes per story
- Design requirements
- Test plans
- Recommended sprint scope
- Risk assessment
