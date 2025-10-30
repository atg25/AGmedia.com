#!/bin/bash
# Install Git Hooks for AGmedia Single-Page Conversion
# This script installs pre-commit and commit-msg hooks

echo "🔧 Installing Git hooks for AGmedia project..."

# Get the repository root directory
REPO_ROOT="$(git rev-parse --show-toplevel)"
HOOKS_DIR="$REPO_ROOT/.git/hooks"
SOURCE_DIR="$REPO_ROOT/docs/conversion/git-hooks"

# Check if we're in a git repository
if [ ! -d "$REPO_ROOT/.git" ]; then
  echo "❌ Error: Not in a git repository"
  exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p "$HOOKS_DIR"

# Install pre-commit hook
if [ -f "$SOURCE_DIR/pre-commit" ]; then
  cp "$SOURCE_DIR/pre-commit" "$HOOKS_DIR/pre-commit"
  chmod +x "$HOOKS_DIR/pre-commit"
  echo "✅ Installed pre-commit hook"
else
  echo "❌ Error: pre-commit hook not found in $SOURCE_DIR"
  exit 1
fi

# Install commit-msg hook
if [ -f "$SOURCE_DIR/commit-msg" ]; then
  cp "$SOURCE_DIR/commit-msg" "$HOOKS_DIR/commit-msg"
  chmod +x "$HOOKS_DIR/commit-msg"
  echo "✅ Installed commit-msg hook"
else
  echo "❌ Error: commit-msg hook not found in $SOURCE_DIR"
  exit 1
fi

echo ""
echo "🎉 Git hooks installed successfully!"
echo ""
echo "These hooks will now run automatically:"
echo "  • pre-commit: Checks for console.log, debugger, conflicts, etc."
echo "  • commit-msg: Validates commit message format"
echo ""
echo "To bypass hooks (not recommended):"
echo "  git commit --no-verify"
echo ""
echo "Happy committing! 🚀"
