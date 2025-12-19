const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

/**
 * Read a markdown file and return its contents
 */
function readFile(filePath) {
  const fullPath = path.join(baseDir, filePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return fs.readFileSync(fullPath, 'utf-8');
}

/**
 * List all available agents
 */
function listAgents() {
  const agents = { development: [], marketing: [] };

  ['development', 'marketing'].forEach(category => {
    const dir = path.join(baseDir, 'agents', category);
    if (fs.existsSync(dir)) {
      agents[category] = fs.readdirSync(dir)
        .filter(f => f.endsWith('.md'))
        .map(f => f.replace('.md', ''));
    }
  });

  return agents;
}

/**
 * List all available workflows
 */
function listWorkflows() {
  const workflows = { development: [], marketing: [] };

  ['development', 'marketing'].forEach(category => {
    const dir = path.join(baseDir, 'workflows', category);
    if (fs.existsSync(dir)) {
      workflows[category] = fs.readdirSync(dir)
        .filter(f => f.endsWith('.md'))
        .map(f => f.replace('.md', ''));
    }
  });

  return workflows;
}

/**
 * Get a specific agent's content
 */
function getAgent(category, name) {
  return readFile(`agents/${category}/${name}.md`);
}

/**
 * Get a specific workflow's content
 */
function getWorkflow(category, name) {
  return readFile(`workflows/${category}/${name}.md`);
}

/**
 * Get all agents combined
 */
function getAllAgents() {
  return readFile('agents.md');
}

/**
 * Get all workflows combined
 */
function getAllWorkflows() {
  return readFile('workflows.md');
}

/**
 * Get everything combined (agents + workflows)
 */
function getAll() {
  return `${getAllAgents()}\n\n---\n\n${getAllWorkflows()}`;
}

module.exports = {
  listAgents,
  listWorkflows,
  getAgent,
  getWorkflow,
  getAllAgents,
  getAllWorkflows,
  getAll,

  // Convenience exports for common agents
  agents: {
    development: {
      get architect() { return getAgent('development', 'architect'); },
      get codeReviewer() { return getAgent('development', 'code-reviewer'); },
      get testWriter() { return getAgent('development', 'test-writer'); },
      get debugger() { return getAgent('development', 'debugger'); },
      get documentationWriter() { return getAgent('development', 'documentation-writer'); },
      get refactorer() { return getAgent('development', 'refactorer'); },
      get aiEngineer() { return getAgent('development', 'ai-engineer'); },
      get uxDesigner() { return getAgent('development', 'ux-designer'); },
      get storyGroomer() { return getAgent('development', 'story-groomer'); },
      get taskPlanner() { return getAgent('development', 'task-planner'); },
      get productManager() { return getAgent('development', 'product-manager'); },
      get userResearcher() { return getAgent('development', 'user-researcher'); },
    },
    marketing: {
      get contentStrategist() { return getAgent('marketing', 'content-strategist'); },
      get copywriter() { return getAgent('marketing', 'copywriter'); },
      get seoSpecialist() { return getAgent('marketing', 'seo-specialist'); },
      get socialMediaManager() { return getAgent('marketing', 'social-media-manager'); },
      get analyticsAnalyst() { return getAgent('marketing', 'analytics-analyst'); },
      get emailMarketer() { return getAgent('marketing', 'email-marketer'); },
    }
  },

  // Convenience exports for common workflows
  workflows: {
    development: {
      get featureImplementation() { return getWorkflow('development', 'feature-implementation'); },
      get featureDefinition() { return getWorkflow('development', 'feature-definition'); },
      get fullCodeReview() { return getWorkflow('development', 'full-code-review'); },
      get bugFix() { return getWorkflow('development', 'bug-fix'); },
      get sprintPlanning() { return getWorkflow('development', 'sprint-planning'); },
    },
    marketing: {
      get contentCampaign() { return getWorkflow('marketing', 'content-campaign'); },
      get productLaunch() { return getWorkflow('marketing', 'product-launch'); },
    }
  }
};
