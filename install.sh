#!/bin/bash

# INFIN Agents Installer
# Adds infin-agents as a submodule and symlinks commands to any project

set -e

REPO_URL="https://github.com/TheINFIN/infin-agents.git"
SUBMODULE_DIR=".infin-agents"
COMMANDS_DIR=".claude/commands"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

info() { echo -e "${GREEN}[INFO]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# Check if we're in a git repo
if [ ! -d ".git" ]; then
    error "Not in a git repository. Run this from your project root."
fi

# Check if submodule already exists
if [ -d "$SUBMODULE_DIR" ]; then
    warn "Submodule $SUBMODULE_DIR already exists."
    read -p "Update it instead? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        info "Updating submodule..."
        git submodule update --remote "$SUBMODULE_DIR"
        info "Done! Submodule updated."
        exit 0
    else
        error "Aborting."
    fi
fi

# Add submodule
info "Adding infin-agents as submodule..."
git submodule add "$REPO_URL" "$SUBMODULE_DIR"

# Create .claude directory if needed
if [ ! -d ".claude" ]; then
    info "Creating .claude directory..."
    mkdir -p ".claude"
fi

# Handle existing commands directory
if [ -d "$COMMANDS_DIR" ] || [ -L "$COMMANDS_DIR" ]; then
    warn "Commands directory already exists at $COMMANDS_DIR"
    read -p "Replace it with symlink to infin-agents? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf "$COMMANDS_DIR"
    else
        warn "Keeping existing commands. Symlink not created."
        info "You can manually symlink later with:"
        echo "  ln -s ../$SUBMODULE_DIR/.claude/commands $COMMANDS_DIR"
        exit 0
    fi
fi

# Create symlink
info "Creating symlink to commands..."
ln -s "../$SUBMODULE_DIR/.claude/commands" "$COMMANDS_DIR"

# Stage changes
info "Staging changes..."
git add .gitmodules "$SUBMODULE_DIR" "$COMMANDS_DIR"

info "Done! INFIN Agents installed."
echo ""
echo "Next steps:"
echo "  1. Commit the changes: git commit -m 'Add infin-agents submodule'"
echo "  2. Use slash commands in Claude Code: /code-review, /write-tests, etc."
echo ""
echo "To update agents later:"
echo "  cd $SUBMODULE_DIR && git pull origin main && cd .."
echo "  git add $SUBMODULE_DIR && git commit -m 'Update infin-agents'"
