# INFIN Agents

Reusable AI agents and workflows for Claude Code and Claude Projects.

## Quick Start

### Use in Claude Code CLI

The slash commands are immediately available when you're in this directory:

```bash
cd infin-agents
claude

# Then use commands like:
/code-review src/app.ts
/write-tests src/utils.ts
/debug "TypeError: Cannot read property..."
```

### Import into Another Project

**Option 1: Symlink (recommended)**
```bash
ln -s /path/to/infin-agents/.claude/commands /your/project/.claude/commands
```

**Option 2: Copy**
```bash
cp -r /path/to/infin-agents/.claude/commands /your/project/.claude/
```

### Install as npm Package

```bash
npm install @theinfin/agents
```

Then use in your code:

```javascript
const { agents, workflows, getAll } = require('@theinfin/agents');

// Get a specific agent
console.log(agents.development.architect);

// Get a specific workflow
console.log(workflows.development.featureImplementation);

// Get everything combined (for Claude Projects import)
console.log(getAll());

// List available agents
const { listAgents } = require('@theinfin/agents');
console.log(listAgents());
// { development: ['architect', 'code-reviewer', ...], marketing: [...] }
```

### Use in Claude Projects (claude.ai)

1. Go to [claude.ai/projects](https://claude.ai/projects)
2. Create a new project
3. Upload agent files from `agents/` as Project Knowledge
4. Or use the npm package to get combined content programmatically
5. Reference agents in conversations: *"Act as the Code Reviewer agent and review this file"*

## Available Commands

| Command | Description |
|---------|-------------|
| `/code-review` | Expert code review for quality, security, best practices |
| `/write-tests` | Write comprehensive tests |
| `/debug` | Systematic debugging and root cause analysis |
| `/write-docs` | Generate documentation |
| `/architect` | Design system architecture |
| `/refactor` | Identify refactoring improvements |
| `/ai-engineer` | Design AI/ML systems and prompts |
| `/ux-design` | Design user experiences |
| `/groom-story` | Refine user stories with acceptance criteria |
| `/plan-tasks` | Break down projects into tasks |

## Structure

```
infin-agents/
├── .claude/
│   └── commands/          # Slash commands for Claude Code
├── .githooks/
│   └── pre-commit         # Auto-rebuilds combined files on commit
├── agents/
│   ├── development/       # Development-focused agents
│   └── marketing/         # Marketing-focused agents
├── workflows/
│   ├── development/       # Multi-agent dev workflows
│   └── marketing/         # Multi-agent marketing workflows
├── scripts/
│   └── build.js           # Build script for combined files
├── agents.md              # All agents combined (auto-generated)
├── workflows.md           # All workflows combined (auto-generated)
├── CLAUDE.md              # Auto-loaded by Claude Code
└── README.md
```

## Agents

### Development
- **Code Reviewer** - Quality, security, best practices review
- **Test Writer** - Comprehensive test generation
- **Debugger** - Root cause analysis and fixing
- **Documentation Writer** - Technical documentation
- **Architect** - System design and architecture
- **Refactorer** - Code improvement suggestions
- **AI Engineer** - LLM/ML system design
- **UX Designer** - User experience design
- **Story Groomer** - User story refinement
- **Task Planner** - Task breakdown and planning

### Marketing
- **Content Strategist** - Content planning and strategy
- **Copywriter** - Persuasive marketing copy
- **SEO Specialist** - Search optimization
- **Social Media Manager** - Social strategy
- **Analytics Analyst** - Marketing analytics
- **Email Marketer** - Email campaigns

## Workflows

Workflows orchestrate multiple agents for complex tasks:

- **Full Code Review** - Multi-stage comprehensive review
- **Feature Implementation** - End-to-end feature development
- **Bug Fix** - Systematic debugging workflow
- **Sprint Planning** - Backlog refinement and planning
- **Content Campaign** - Multi-channel content creation
- **Product Launch** - Launch planning and execution

## Customization

### Modify an Agent
Edit the `.md` file in `agents/` to change behavior.

### Create a New Command
Add a new `.md` file to `.claude/commands/`:

```markdown
Your command description here.

$ARGUMENTS

---

Instructions for Claude when this command is invoked...
```

### Create a New Workflow
Add a `.md` file to `workflows/` describing the multi-agent process.

## Build System

The combined `agents.md` and `workflows.md` files are auto-generated from individual files.

### Setup (one-time)
```bash
npm run prepare   # Configures git hooks
```

### Manual Build
```bash
npm run build     # Rebuilds agents.md and workflows.md
```

### Automatic Build
When you commit changes to files in `agents/` or `workflows/`, the pre-commit hook automatically:
1. Runs the build script
2. Updates `agents.md` and `workflows.md`
3. Stages the updated files

## License

MIT
