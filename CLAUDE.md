# INFIN Agents

This repository contains reusable AI agents and workflows for development tasks.

## Available Slash Commands

### Development
- `/code-review` - Expert code review for quality, security, and best practices
- `/write-tests` - Write comprehensive tests for code
- `/debug` - Systematic debugging and root cause analysis
- `/write-docs` - Generate documentation
- `/architect` - Design system architecture
- `/refactor` - Identify and suggest refactoring improvements
- `/ai-engineer` - Design AI/ML systems and prompts
- `/ux-design` - Design user experiences
- `/groom-story` - Refine user stories with acceptance criteria
- `/plan-tasks` - Break down projects into actionable tasks

## Available Agents

Full agent definitions are in the `agents/` directory:

### Development Agents
- `agents/development/code-reviewer.md`
- `agents/development/test-writer.md`
- `agents/development/debugger.md`
- `agents/development/documentation-writer.md`
- `agents/development/architect.md`
- `agents/development/refactorer.md`
- `agents/development/ai-engineer.md`
- `agents/development/ux-designer.md`
- `agents/development/story-groomer.md`
- `agents/development/task-planner.md`

### Marketing Agents
- `agents/marketing/content-strategist.md`
- `agents/marketing/copywriter.md`
- `agents/marketing/seo-specialist.md`
- `agents/marketing/social-media-manager.md`
- `agents/marketing/analytics-analyst.md`
- `agents/marketing/email-marketer.md`

## Available Workflows

Multi-agent orchestrated workflows in `workflows/`:

### Development Workflows
- `workflows/development/full-code-review.md` - Comprehensive multi-stage review
- `workflows/development/feature-implementation.md` - End-to-end feature development
- `workflows/development/bug-fix.md` - Systematic bug fixing process
- `workflows/development/sprint-planning.md` - Sprint preparation workflow

### Marketing Workflows
- `workflows/marketing/content-campaign.md` - Content marketing campaigns
- `workflows/marketing/product-launch.md` - Product launch planning

## Usage

### In Claude Code CLI
Slash commands are available automatically when this repo's `.claude/commands/` is accessible.

### In Claude Projects
1. Create a new project at claude.ai/projects
2. Add agent files as Project Knowledge
3. Reference agents in your conversations

### Importing to Another Repo
Copy or symlink the `.claude/commands/` directory to your project:
```bash
# Symlink approach
ln -s /path/to/infin-agents/.claude/commands /your/project/.claude/commands

# Or copy
cp -r /path/to/infin-agents/.claude/commands /your/project/.claude/
```
