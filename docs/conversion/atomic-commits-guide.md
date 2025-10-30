# Atomic Commits Guide
## Single-Page Conversion Project

**Atomic commits** = One logical change per commit. Each commit should:
- Be self-contained and complete
- Pass all tests
- Have a clear, descriptive message
- Be independently revertible

---

## 🎯 Commit Strategy for Each Phase

### **Phase 1: Pre-Conversion Backup**

```bash
# Commit 1: Create feature branch documentation
git add docs/conversion/content-inventory.md
git commit -m "docs: add content inventory for conversion planning"

# Commit 2: Add screenshots
git add docs/conversion/screenshots/
git commit -m "docs: add reference screenshots of current site"

# Commit 3: Document interactive features
git add docs/conversion/interactive-features.md
git commit -m "docs: document interactive features to preserve"

# Commit 4: Add rollback plan
git add docs/conversion/rollback-plan.md
git commit -m "docs: add rollback procedures for safe deployment"
```

### **Phase 2: Content Consolidation**

```bash
# Commit 1: Content extraction
git add docs/conversion/extracted-content/
git commit -m "docs: extract content from all 5 pages"

# Commit 2: Content mapping
git add docs/conversion/content-map.md
git commit -m "docs: create single-page content structure map"

# Commit 3: Condensed content
git add docs/conversion/content-consolidated.txt
git commit -m "docs: condense content to target word counts"

# Commit 4: Final content review
git add docs/conversion/content-final.md
git commit -m "docs: finalize and approve condensed content"
```

### **Phase 3: HTML Structure**

```bash
# Commit 1: Base structure
git add src/index-single.html
git commit -m "feat: create base single-page HTML structure"

# Commit 2: Hero section
git add src/index-single.html
git commit -m "feat: add hero section with updated content"

# Commit 3: Services section
git add src/index-single.html
git commit -m "feat: add services section with expandable cards"

# Commit 4: Process section
git add src/index-single.html
git commit -m "feat: add how-it-works process timeline"

# Commit 5: Testimonials section
git add src/index-single.html
git commit -m "feat: add success stories/testimonials section"

# Commit 6: Pricing section
git add src/index-single.html
git commit -m "feat: add pricing comparison section"

# Commit 7: FAQ section
git add src/index-single.html
git commit -m "feat: add FAQ accordion section"

# Commit 8: Contact section
git add src/index-single.html
git commit -m "feat: add contact form section"

# Commit 9: Navigation
git add src/index-single.html
git commit -m "feat: update navigation to anchor links"

# Commit 10: Accessibility
git add src/index-single.html
git commit -m "feat: add ARIA labels and accessibility features"

# Commit 11: Validation fix (if needed)
git add src/index-single.html
git commit -m "fix: resolve HTML validation errors"
```

### **Phase 4: CSS Optimization**

```bash
# Commit 1: Base CSS copy
git add src/main-single.css
git commit -m "style: create base CSS from main.css"

# Commit 2: Remove unused styles
git add src/main-single.css
git commit -m "style: remove multi-page specific CSS rules"

# Commit 3: Smooth scrolling
git add src/main-single.css
git commit -m "style: add smooth scroll and section spacing"

# Commit 4: Navigation styles
git add src/main-single.css
git commit -m "style: add scroll-spy active navigation styles"

# Commit 5: Section alternating backgrounds
git add src/main-single.css
git commit -m "style: add alternating section backgrounds"

# Commit 6: Scroll-to-top button
git add src/main-single.css
git commit -m "style: add scroll-to-top button styles"

# Commit 7: FAQ accordion styles
git add src/main-single.css
git commit -m "style: add FAQ accordion open/close animations"

# Commit 8: Responsive adjustments
git add src/main-single.css
git commit -m "style: optimize responsive breakpoints for single-page"

# Commit 9: Performance optimization
git add src/main-single.css
git commit -m "perf: optimize CSS for reduced file size"

# Commit 10: Validation fix (if needed)
git add src/main-single.css
git commit -m "fix: resolve CSS validation warnings"
```

### **Phase 5: JavaScript Enhancement**

```bash
# Commit 1: Base JS copy
git add src/main-single.js
git commit -m "feat: create base JavaScript from main.js"

# Commit 2: Scroll-spy implementation
git add src/main-single.js
git commit -m "feat: implement scroll-spy for active navigation"

# Commit 3: Smooth scroll polyfill
git add src/main-single.js
git commit -m "feat: add smooth scroll functionality with fallback"

# Commit 4: Scroll-to-top button
git add src/main-single.js
git commit -m "feat: add scroll-to-top button functionality"

# Commit 5: FAQ accordion
git add src/main-single.js
git commit -m "feat: add FAQ accordion interaction"

# Commit 6: Mobile menu update
git add src/main-single.js
git commit -m "feat: update mobile menu to close on section select"

# Commit 7: Lazy loading
git add src/main-single.js
git commit -m "feat: implement lazy loading for images"

# Commit 8: Section animations
git add src/main-single.js
git commit -m "feat: add intersection observer for section reveals"

# Commit 9: Performance optimization
git add src/main-single.js
git commit -m "perf: optimize event listeners and debounce scroll"

# Commit 10: Bug fixes (if needed)
git add src/main-single.js
git commit -m "fix: resolve console errors and edge cases"

# Commit 11: Code cleanup
git add src/main-single.js
git commit -m "refactor: add documentation and clean up code"
```

### **Phase 6: Testing & Optimization**

```bash
# Commit 1: Add testing documentation
git add docs/conversion/testing-report.md
git commit -m "test: document browser and device testing results"

# Commit 2: Accessibility fixes
git add src/index-single.html src/main-single.css
git commit -m "a11y: fix accessibility issues from audit"

# Commit 3: Performance optimizations
git add src/index-single.html src/main-single.css src/main-single.js
git commit -m "perf: optimize for Lighthouse performance score"

# Commit 4: SEO improvements
git add src/index-single.html
git commit -m "seo: add meta tags and structured data"

# Commit 5: Image optimization
git add src/images/
git commit -m "perf: compress and optimize images"

# Commit 6: Final validation
git add src/
git commit -m "test: pass all validation and quality gates"
```

### **Phase 7: Deployment**

```bash
# Commit 1: File swap preparation
git add src/index-multi.html src/main-multi.css src/main-multi.js
git commit -m "chore: backup multi-page files before swap"

# Commit 2: Production file swap
git add src/index.html src/main.css src/main.js
git commit -m "deploy: activate single-page website"

# Commit 3: Update documentation
git add README.md CHANGELOG.md docs/summary.md
git commit -m "docs: update documentation for single-page launch"

# Commit 4: Root redirect update (if needed)
git add index.html
git commit -m "fix: update root redirect for new structure"
```

---

## 📝 Commit Message Format

### **Structure:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

### **Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes bug nor adds feature
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes
- `a11y`: Accessibility improvements
- `seo`: SEO improvements
- `deploy`: Deployment changes

### **Scope (optional):**
- `nav`: Navigation
- `hero`: Hero section
- `services`: Services section
- `testimonials`: Testimonials
- `form`: Contact form
- `css`: Stylesheets
- `js`: JavaScript
- etc.

### **Subject:**
- Use imperative mood ("add" not "added")
- Don't capitalize first letter
- No period at the end
- Limit to 50 characters

### **Body (optional but recommended):**
- Explain WHAT and WHY, not HOW
- Wrap at 72 characters
- Separate from subject with blank line

### **Footer (optional):**
- Reference issues: `Closes #123`
- Breaking changes: `BREAKING CHANGE: description`

---

## ✅ Good Commit Examples

```bash
# Simple, clear, atomic
git commit -m "feat: add scroll-spy for active navigation"

# With scope
git commit -m "fix(nav): prevent mobile menu overlap on scroll"

# With body
git commit -m "perf: implement lazy loading for images

Reduces initial page load by deferring off-screen images.
Uses Intersection Observer API with fallback for older browsers.
Images load 300px before entering viewport for smooth UX."

# With footer
git commit -m "feat: add FAQ accordion section

Closes #42"
```

---

## ❌ Bad Commit Examples

```bash
# Too vague
git commit -m "fix stuff"
git commit -m "updates"
git commit -m "wip"

# Multiple unrelated changes
git commit -m "add FAQ section, fix nav bug, update colors, refactor JS"

# Not atomic
git commit -m "complete phase 3"

# Poor formatting
git commit -m "Added new feature."  # Don't capitalize, no period
git commit -m "fixing the navigation bug that was causing issues"  # Too long, use imperative
```

---

## 🔧 Pre-Commit Checklist

Before every commit, verify:

```bash
# 1. Only related changes staged
git status
git diff --staged

# 2. Code works (no errors)
# Test locally in browser

# 3. Validation passes (if applicable)
npx html-validate src/index-single.html
npx stylelint src/main-single.css
npx eslint src/main-single.js

# 4. Commit message is clear and follows format
# Use the commit message templates above

# 5. Changes are atomic
# If you're committing multiple unrelated things, split them!
```

---

## 🛠️ Git Hooks Setup

Create these hooks to enforce quality:

### **pre-commit hook** (`./git/hooks/pre-commit`)

```bash
#!/bin/sh

echo "Running pre-commit checks..."

# Check for console.log in JavaScript files
if git diff --cached --name-only | grep -q '\.js$'; then
  if git diff --cached | grep -E '^\+.*console\.log'; then
    echo "❌ Error: console.log() found in staged files"
    echo "   Remove console.log statements before committing"
    exit 1
  fi
fi

# Check for debugger statements
if git diff --cached | grep -E '^\+.*debugger'; then
  echo "❌ Error: debugger statement found in staged files"
  echo "   Remove debugger statements before committing"
  exit 1
fi

# Check for TODO/FIXME without ticket reference
if git diff --cached | grep -E '^\+.*(TODO|FIXME)' | grep -v '#[0-9]'; then
  echo "⚠️  Warning: TODO/FIXME found without issue reference"
  echo "   Consider adding an issue number (e.g., TODO #123)"
fi

echo "✅ Pre-commit checks passed"
exit 0
```

### **commit-msg hook** (`.git/hooks/commit-msg`)

```bash
#!/bin/sh

commit_msg_file=$1
commit_msg=$(cat "$commit_msg_file")

# Check commit message format
if ! echo "$commit_msg" | grep -qE '^(feat|fix|docs|style|refactor|perf|test|chore|a11y|seo|deploy)(\(.+\))?: .{1,50}'; then
  echo "❌ Error: Invalid commit message format"
  echo ""
  echo "Format: <type>(<scope>): <subject>"
  echo ""
  echo "Types: feat, fix, docs, style, refactor, perf, test, chore, a11y, seo, deploy"
  echo "Subject: 1-50 characters, lowercase, imperative mood, no period"
  echo ""
  echo "Examples:"
  echo "  feat: add scroll-spy for navigation"
  echo "  fix(nav): prevent mobile menu overlap"
  echo "  docs: update README with new structure"
  exit 1
fi

# Check subject line length
subject_line=$(echo "$commit_msg" | head -n1)
if [ ${#subject_line} -gt 72 ]; then
  echo "⚠️  Warning: Subject line is longer than 72 characters"
  echo "   Consider shortening your commit message"
fi

exit 0
```

### **Install hooks:**

```bash
# Make hooks executable
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/commit-msg

# Or copy from a shared location
cp docs/conversion/git-hooks/pre-commit .git/hooks/
cp docs/conversion/git-hooks/commit-msg .git/hooks/
chmod +x .git/hooks/*
```

---

## 🔄 Splitting Commits

If you accidentally stage multiple unrelated changes:

```bash
# Unstage everything
git reset

# Stage only related files
git add src/index-single.html
git commit -m "feat: add hero section"

# Stage next related group
git add src/main-single.css
git commit -m "style: add hero section styles"

# Or use interactive staging
git add -p  # Stage hunks interactively
```

---

## 📊 Commit History Goals

Aim for commit history that reads like a changelog:

```
✅ Good History:
feat: add scroll-spy for active navigation
style: add scroll-spy styles
test: verify scroll-spy on all browsers
fix: scroll-spy offset for fixed header
docs: document scroll-spy implementation

❌ Bad History:
update files
fix
more changes
final changes
actually final
```

---

## 🎯 Atomic Commit Benefits

1. **Easy to review** - Each commit is small and focused
2. **Easy to revert** - Can undo specific changes without affecting others
3. **Easy to understand** - Clear history of what changed and why
4. **Easy to debug** - Use `git bisect` to find when bugs were introduced
5. **Professional** - Shows attention to detail and good practices

---

## 📝 Quick Reference

```bash
# Check what you're about to commit
git diff --staged

# Amend last commit (if not pushed)
git commit --amend

# Split last commit (if not pushed)
git reset HEAD~1
# Then stage and commit in smaller pieces

# View commit history
git log --oneline --graph

# Search commits
git log --grep="scroll-spy"
git log --author="Andrew"

# Show what changed in a commit
git show <commit-hash>

# Interactive rebase (clean up commits before merge)
git rebase -i HEAD~5
```

---

**Remember:** Small, focused commits are easier to review, test, and revert. Think "one commit = one logical change"!