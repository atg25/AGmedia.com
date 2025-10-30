# 🚀 Quick Reference Card - AGmedia Single-Page Conversion

Keep this handy while working on the project!

## 📋 Today's Setup Checklist

- [ ] Install VS Code extensions (`Cmd+Shift+X` → type `@recommended` → "Install All")
- [ ] Test Live Server (right-click `index.html` → "Open with Live Server")
- [ ] Verify git hooks work (try `git commit -m "test"` to see validation)
- [ ] Check linting (open `src/app.js`, add `console.log()`, see warning)
- [ ] Test formatting (make messy edits in any file, save, watch auto-format)

## ⌨️ Essential Keyboard Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Quick File Open | `Cmd+P` | `Ctrl+P` |
| Toggle Sidebar | `Cmd+B` | `Ctrl+B` |
| Toggle Terminal | Cmd+` | Ctrl+` |
| Toggle Comment | `Cmd+/` | `Ctrl+/` |
| Format Document | `Shift+Alt+F` | `Shift+Alt+F` |
| Go to Line | `Cmd+G` | `Ctrl+G` |
| Find in Files | `Cmd+Shift+F` | `Ctrl+Shift+F` |
| Multi-cursor | `Alt+Click` | `Alt+Click` |
| Move Line | `Alt+Up/Down` | `Alt+Up/Down` |
| Copy Line | `Shift+Alt+Up/Down` | `Shift+Alt+Up/Down` |
| Select Next | `Cmd+D` | `Ctrl+D` |
| Problems Panel | `Cmd+Shift+M` | `Ctrl+Shift+M` |
| Source Control | `Cmd+Shift+G` | `Ctrl+Shift+G` |
| Live Server | `Alt+L, Alt+O` | `Alt+L, Alt+O` |

## 📝 Code Snippets (Type + Tab)

### HTML
- `html5` → HTML5 boilerplate
- `section-container` → Section with container div
- `card` → Card component
- `nav` → Navigation structure

### CSS
- `csscomment` → Section comment header
- `mq` → Media query
- `flexcenter` → Flexbox centering
- `gridtemplate` → CSS Grid layout
- `cssvar` → CSS custom property
- `transition` → Transition property

### JavaScript
- `addevent` → Event listener
- `qs` → querySelector
- `qsa` → querySelectorAll
- `foreach` → forEach loop
- `intersectionobserver` → Intersection Observer setup
- `fetch` → Fetch API with error handling
- `asyncfn` → Async function with try/catch

## 🎯 Git Commit Types

```bash
feat:     New feature
fix:      Bug fix
refactor: Code restructuring (no behavior change)
style:    Formatting only (no code change)
docs:     Documentation only
test:     Adding or updating tests
chore:    Maintenance tasks (dependencies, config)
perf:     Performance improvements
```

### Commit Format
```bash
type: short description (max 50 chars)

Optional body explaining what and why.
Wrap at 72 characters.

Optional footer for issue references.
```

### Example Commits
```bash
git commit -m "feat: add smooth scroll navigation"
git commit -m "refactor: consolidate CSS into single file"
git commit -m "fix: resolve mobile menu overlap issue"
git commit -m "style: apply Prettier formatting"
git commit -m "docs: update setup instructions"
```

## 🔨 Common Git Commands

```bash
# Status and changes
git status
git diff
git diff --staged

# Stage files
git add <file>
git add .
git add -p                    # Interactive staging

# Commit
git commit -m "type: message"
git commit --amend            # Fix last commit

# Branches
git branch                    # List branches
git branch <name>             # Create branch
git checkout <branch>         # Switch branch
git checkout -b <name>        # Create and switch

# Push/Pull
git push origin <branch>
git pull origin <branch>

# History
git log --oneline
git log --graph --all         # Visual graph
```

## 🎨 Live Server Commands

```bash
# Start server
Right-click index.html → "Open with Live Server"
Or: Alt+L, Alt+O

# Stop server
Click "Port: 8000" in status bar
Or: Alt+L, Alt+C

# Opens at: http://localhost:8000
```

## 🧪 Testing Checklist

### Before Each Commit
- [ ] Code passes ESLint/Stylelint (check Problems panel)
- [ ] No console.log or debugger statements
- [ ] Code is formatted (auto-formats on save)
- [ ] Commit message follows format

### Before Each Push
- [ ] All commits have proper messages
- [ ] Code runs without errors
- [ ] Live Server shows changes correctly

### Before Phase Sign-off
- [ ] All quality gates passed (see quality-gates-checklist.md)
- [ ] Cross-browser tested
- [ ] Mobile responsive
- [ ] Accessibility checked

## 📚 Quick Documentation Links

### Your Project Docs
- [Implementation Plan](docs/conversion/implementation-plan.md) - Your roadmap
- [Quality Gates](docs/conversion/quality-gates-checklist.md) - Testing requirements
- [Atomic Commits](docs/conversion/atomic-commits-guide.md) - Git best practices
- [VS Code Setup](docs/vscode-setup.md) - Extension details
- [Setup Complete](docs/setup-complete.md) - Overview

### External Resources
- [Conventional Commits](https://www.conventionalcommits.org/)
- [VS Code Tips](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🐛 Quick Troubleshooting

### Extensions Not Working
```bash
Cmd+Shift+P → "Developer: Reload Window"
```

### Linters Not Running
```bash
npm install -g eslint stylelint stylelint-config-standard
Then: Cmd+Shift+P → "Developer: Reload Window"
```

### Git Hooks Not Running
```bash
cd docs/conversion/git-hooks
chmod +x install-hooks.sh
./install-hooks.sh
```

### Live Server Not Starting
- Check if port 8000 is in use
- Change port in `.vscode/settings.json`
- Restart VS Code

### Format on Save Not Working
1. Right-click in file → "Format Document With..."
2. Select "Prettier - Code formatter"
3. Check "Configure Default Formatter"
4. Check "Format on Save" is enabled in settings

## 🎯 Phase 1 Quick Start

```bash
# 1. Create backup branch
git checkout -b backup/pre-conversion
git push origin backup/pre-conversion

# 2. Create feature branch
git checkout main
git checkout -b feature/single-page-conversion

# 3. Follow Phase 1 in implementation-plan.md
- Document current site structure
- Create content inventory
- Audit all existing pages

# 4. Make your first commit!
git add <file>
git commit -m "docs: create pre-conversion site inventory"
```

## 💡 Pro Tips

1. **Save Often** - Auto-save is enabled, but Cmd+S ensures immediate formatting
2. **Use Snippets** - Type prefix + Tab to speed up coding
3. **Multi-cursor** - Alt+Click to edit multiple lines at once
4. **Git Graph** - Click graph icon in status bar for visual git history
5. **Zen Mode** - Cmd+K, Z for distraction-free coding (Esc twice to exit)
6. **Split Editor** - Cmd+\ to view HTML, CSS, JS side-by-side
7. **Emmet** - Type `ul>li*3` + Tab for instant HTML structure
8. **Peek Definition** - Cmd+Click on CSS class to see definition
9. **GitLens Blame** - Hover over any line to see who wrote it and when
10. **Problems Panel** - Cmd+Shift+M to see all errors/warnings

---

## 🚀 Start Coding!

Everything is set up and ready. Follow the [Implementation Plan](docs/conversion/implementation-plan.md) and make amazing progress!

**Remember:** Commit early, commit often, and enjoy the journey! 🎉

---

*Print this reference card or keep it open in a second monitor!*
