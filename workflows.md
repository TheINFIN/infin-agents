# INFIN Workflows

Multi-agent orchestrated workflows for complex tasks. Each workflow coordinates multiple specialized agents through a defined process.

**Usage**: Reference the workflow by name, e.g., "Run the Full Code Review Workflow on this PR" or "Execute the Bug Fix Workflow for this error."

**Auto-generated from individual workflow files. Do not edit directly.**

---

# Development Workflows

---

## Bug Fix Workflow

A systematic approach to identifying, fixing, and preventing bugs.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      BUG FIX WORKFLOW                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Debugger         →  2. Code Reviewer  →  3. Test Writer     │
│  (Root Cause)           (Fix Review)         (Regression Test)  │
│         │                     │                    │            │
│         ▼                     ▼                    ▼            │
│                    4. Documentation Update                       │
│                    (If public-facing bug)                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stages

### Stage 1: Root Cause Analysis
**Agent**: Debugger
**Tasks**:
- Reproduce the bug
- Analyze error messages and logs
- Trace code execution
- Identify root cause
- Propose fix

### Stage 2: Fix Implementation & Review
**Agent**: Code Reviewer
**Tasks**:
- Implement the fix
- Review fix for side effects
- Ensure minimal change
- Check for related issues

### Stage 3: Regression Testing
**Agent**: Test Writer
**Tasks**:
- Write test that reproduces the bug
- Verify fix passes the test
- Check for regression in related areas
- Add edge case tests

### Stage 4: Documentation (Conditional)
**Agent**: Documentation Writer
**Condition**: If bug was user-facing or notable
**Tasks**:
- Update changelog
- Add to known issues if needed
- Document workarounds if applicable

## Usage

```
/workflow bug-fix [bug description or issue link]
```

## Input Required

- Bug description or error message
- Steps to reproduce
- Expected vs actual behavior
- Environment information
- Any relevant logs

## Output

- Root cause analysis report
- Fixed code with explanation
- Regression test(s)
- Documentation updates (if applicable)

## Best Practices

1. **Always reproduce first** - Verify you can see the bug
2. **Fix the root cause** - Don't just patch symptoms
3. **Minimal changes** - Don't refactor during bug fixes
4. **Test the fix** - Add test that would have caught this
5. **Check for siblings** - Similar bugs elsewhere?

---

## Feature Definition Workflow

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

---

## Feature Implementation Workflow

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

---

## Full Code Review Workflow

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

---

## Sprint Planning Workflow

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

---

# Marketing Workflows

---

## Content Campaign Workflow

A comprehensive workflow for planning and executing content marketing campaigns.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                  CONTENT CAMPAIGN WORKFLOW                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Content Strategist  →  2. SEO Specialist  →  3. Copywriter  │
│  (Strategy & Plan)         (Keyword Research)    (Create Copy)  │
│         │                       │                     │         │
│         ▼                       ▼                     ▼         │
│  4. Social Media       →  5. Email Marketer  →  6. Analytics    │
│  (Distribution Plan)      (Email Campaign)      (Measurement)   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stages

### Stage 1: Strategy Development
**Agent**: Content Strategist
**Tasks**:
- Define campaign objectives
- Identify target audience
- Develop content themes
- Create content calendar
- Set KPIs

### Stage 2: SEO Research
**Agent**: SEO Specialist
**Tasks**:
- Conduct keyword research
- Analyze competitor content
- Identify content gaps
- Optimize content briefs
- Plan internal linking

### Stage 3: Content Creation
**Agent**: Copywriter
**Tasks**:
- Write blog posts/articles
- Create landing page copy
- Develop headlines and CTAs
- Write social snippets
- Create email copy

### Stage 4: Social Distribution
**Agent**: Social Media Manager
**Tasks**:
- Adapt content for platforms
- Create social calendar
- Plan engagement strategy
- Schedule posts
- Prepare responses

### Stage 5: Email Campaign
**Agent**: Email Marketer
**Tasks**:
- Design email sequence
- Write email copy
- Set up automation
- Plan A/B tests
- Configure tracking

### Stage 6: Analytics Setup
**Agent**: Analytics Analyst
**Tasks**:
- Set up tracking
- Create dashboards
- Define success metrics
- Plan reporting cadence
- Establish baselines

## Usage

```
/workflow content-campaign [campaign topic/goal]
```

## Input Required

- Campaign objective
- Target audience description
- Timeline and budget
- Available resources
- Brand guidelines

## Output

- Content strategy document
- SEO-optimized content calendar
- Ready-to-publish content
- Social media schedule
- Email sequences
- Analytics dashboard setup

---

## Product Launch Workflow

A comprehensive workflow for planning and executing product launches.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                   PRODUCT LAUNCH WORKFLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Content Strategist  →  2. Copywriter     →  3. SEO          │
│  (Launch Strategy)         (Messaging)          (Optimization)  │
│         │                       │                    │          │
│         ▼                       ▼                    ▼          │
│  4. Email Marketer     →  5. Social Media   →  6. Analytics     │
│  (Launch Sequences)       (Launch Campaign)    (Track Launch)   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Phases

### Phase 1: Pre-Launch (4-6 weeks before)

#### Strategy Development
**Agent**: Content Strategist
- Define launch goals and KPIs
- Identify target segments
- Develop messaging framework
- Create launch timeline
- Plan content assets needed

#### Messaging & Copy
**Agent**: Copywriter
- Develop product positioning
- Write value propositions
- Create taglines and headlines
- Draft announcement copy
- Write feature descriptions

### Phase 2: Launch Preparation (2-4 weeks before)

#### SEO Setup
**Agent**: SEO Specialist
- Optimize product pages
- Create landing page structure
- Plan content for launch keywords
- Set up redirects if needed
- Prepare schema markup

#### Email Sequences
**Agent**: Email Marketer
- Teaser sequence (build anticipation)
- Announcement email
- Feature highlight series
- Social proof/testimonials
- Limited-time offers

### Phase 3: Launch Week

#### Social Campaign
**Agent**: Social Media Manager
- Launch day posts
- Feature spotlights
- User engagement plan
- Influencer coordination
- Community response strategy

#### Analytics Tracking
**Agent**: Analytics Analyst
- Real-time dashboard setup
- Conversion tracking
- Traffic source monitoring
- Funnel analysis
- Alert configuration

### Phase 4: Post-Launch (1-4 weeks after)

- Performance analysis
- Customer feedback collection
- Content optimization
- Retargeting campaigns
- Lessons learned

## Usage

```
/workflow product-launch [product name]
```

## Input Required

- Product details and features
- Target audience
- Launch date
- Competitive positioning
- Available budget
- Team resources

## Output

- Launch strategy document
- Complete messaging guide
- Content calendar
- Email sequences
- Social media plan
- Analytics dashboard
- Post-launch report template

## Timeline Template

| Week | Phase | Key Activities |
|------|-------|----------------|
| -6 | Strategy | Goals, audience, messaging framework |
| -5 | Content | Write all copy, create assets |
| -4 | Setup | Landing pages, email sequences |
| -3 | SEO | Optimization, technical setup |
| -2 | Social | Schedule posts, coordinate influencers |
| -1 | Final | Testing, team alignment, soft launch |
| 0 | Launch | Execute launch, monitor, respond |
| +1 | Analysis | Review metrics, gather feedback |
| +2-4 | Optimize | Iterate based on data |

---
