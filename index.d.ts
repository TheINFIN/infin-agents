/**
 * List of agents by category
 */
export interface AgentList {
  development: string[];
  marketing: string[];
}

/**
 * List of workflows by category
 */
export interface WorkflowList {
  development: string[];
  marketing: string[];
}

/**
 * List all available agents
 */
export function listAgents(): AgentList;

/**
 * List all available workflows
 */
export function listWorkflows(): WorkflowList;

/**
 * Get a specific agent's markdown content
 * @param category - 'development' or 'marketing'
 * @param name - Agent name (e.g., 'architect', 'code-reviewer')
 */
export function getAgent(category: 'development' | 'marketing', name: string): string;

/**
 * Get a specific workflow's markdown content
 * @param category - 'development' or 'marketing'
 * @param name - Workflow name (e.g., 'feature-implementation', 'bug-fix')
 */
export function getWorkflow(category: 'development' | 'marketing', name: string): string;

/**
 * Get all agents combined into a single markdown string
 */
export function getAllAgents(): string;

/**
 * Get all workflows combined into a single markdown string
 */
export function getAllWorkflows(): string;

/**
 * Get everything (agents + workflows) combined
 */
export function getAll(): string;

/**
 * Convenience accessors for development agents
 */
export const agents: {
  development: {
    readonly architect: string;
    readonly codeReviewer: string;
    readonly testWriter: string;
    readonly debugger: string;
    readonly documentationWriter: string;
    readonly refactorer: string;
    readonly aiEngineer: string;
    readonly uxDesigner: string;
    readonly storyGroomer: string;
    readonly taskPlanner: string;
    readonly productManager: string;
    readonly userResearcher: string;
  };
  marketing: {
    readonly contentStrategist: string;
    readonly copywriter: string;
    readonly seoSpecialist: string;
    readonly socialMediaManager: string;
    readonly analyticsAnalyst: string;
    readonly emailMarketer: string;
  };
};

/**
 * Convenience accessors for workflows
 */
export const workflows: {
  development: {
    readonly featureImplementation: string;
    readonly featureDefinition: string;
    readonly fullCodeReview: string;
    readonly bugFix: string;
    readonly sprintPlanning: string;
  };
  marketing: {
    readonly contentCampaign: string;
    readonly productLaunch: string;
  };
};
