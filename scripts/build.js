#!/usr/bin/env node

/**
 * Build script for INFIN Agents
 * Combines individual agent and workflow files into single importable files.
 *
 * Usage: node scripts/build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const AGENTS_DIR = path.join(ROOT_DIR, 'agents');
const WORKFLOWS_DIR = path.join(ROOT_DIR, 'workflows');

/**
 * Recursively get all .md files in a directory
 */
function getMdFiles(dir, category = '') {
  const files = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getMdFiles(fullPath, entry.name));
    } else if (entry.name.endsWith('.md')) {
      files.push({
        path: fullPath,
        name: entry.name.replace('.md', ''),
        category: category
      });
    }
  }

  return files;
}

/**
 * Build the combined agents.md file
 */
function buildAgents() {
  const agentFiles = getMdFiles(AGENTS_DIR);

  if (agentFiles.length === 0) {
    console.log('No agent files found.');
    return;
  }

  // Group by category
  const categories = {};
  for (const file of agentFiles) {
    const cat = file.category || 'general';
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(file);
  }

  // Build combined content
  let content = `# INFIN Agents

A collection of specialized AI agents for development and marketing tasks. Use these by referencing the agent name in your prompt, e.g., "Act as the Code Reviewer Agent and review this file."

**Auto-generated from individual agent files. Do not edit directly.**

---
`;

  // Define category order
  const categoryOrder = ['development', 'marketing', 'general'];
  const sortedCategories = Object.keys(categories).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  for (const category of sortedCategories) {
    const files = categories[category];
    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

    content += `\n# ${categoryTitle} Agents\n\n---\n`;

    // Sort files alphabetically within category
    files.sort((a, b) => a.name.localeCompare(b.name));

    for (const file of files) {
      const fileContent = fs.readFileSync(file.path, 'utf-8').trim();
      // Remove the first # heading and use ## instead to maintain hierarchy
      const adjustedContent = fileContent.replace(/^# /, '## ');
      content += `\n${adjustedContent}\n\n---\n`;
    }
  }

  const outputPath = path.join(ROOT_DIR, 'agents.md');
  fs.writeFileSync(outputPath, content.trim() + '\n');
  console.log(`✓ Built agents.md (${agentFiles.length} agents)`);
}

/**
 * Build the combined workflows.md file
 */
function buildWorkflows() {
  const workflowFiles = getMdFiles(WORKFLOWS_DIR);

  if (workflowFiles.length === 0) {
    console.log('No workflow files found.');
    return;
  }

  // Group by category
  const categories = {};
  for (const file of workflowFiles) {
    const cat = file.category || 'general';
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(file);
  }

  // Build combined content
  let content = `# INFIN Workflows

Multi-agent orchestrated workflows for complex tasks. Each workflow coordinates multiple specialized agents through a defined process.

**Usage**: Reference the workflow by name, e.g., "Run the Full Code Review Workflow on this PR" or "Execute the Bug Fix Workflow for this error."

**Auto-generated from individual workflow files. Do not edit directly.**

---
`;

  // Define category order
  const categoryOrder = ['development', 'marketing', 'general'];
  const sortedCategories = Object.keys(categories).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  for (const category of sortedCategories) {
    const files = categories[category];
    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

    content += `\n# ${categoryTitle} Workflows\n\n---\n`;

    // Sort files alphabetically within category
    files.sort((a, b) => a.name.localeCompare(b.name));

    for (const file of files) {
      const fileContent = fs.readFileSync(file.path, 'utf-8').trim();
      // Remove the first # heading and use ## instead to maintain hierarchy
      const adjustedContent = fileContent.replace(/^# /, '## ');
      content += `\n${adjustedContent}\n\n---\n`;
    }
  }

  const outputPath = path.join(ROOT_DIR, 'workflows.md');
  fs.writeFileSync(outputPath, content.trim() + '\n');
  console.log(`✓ Built workflows.md (${workflowFiles.length} workflows)`);
}

/**
 * Main build function
 */
function build() {
  console.log('Building INFIN Agents...\n');

  buildAgents();
  buildWorkflows();

  console.log('\nBuild complete!');
}

// Run build
build();
