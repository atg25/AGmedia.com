# Single-Page Conversion - Quick Quality Gate Checklist

Use this checklist at each phase to ensure quality before committing.

---

## Phase 1: Pre-Conversion Backup ✓

```bash
# Complete these before proceeding:
□ Feature branch created: feature/single-page-conversion
□ All files committed to main
□ Screenshots taken of all 5 pages
□ Content inventory documented
□ Interactive features listed
□ Rollback plan ready

# Commit when complete:
git add docs/conversion/
git commit -m "docs: Add single-page conversion planning documentation"
```

---

## Phase 2: Content Consolidation ✓

```bash
# Complete these before proceeding:
□ All 5 pages analyzed
□ Content condensed (Services: 800→400 words)
□ Content condensed (Process: 600→300 words)
□ Content condensed (Case Studies: 1200→400 words)
□ Content condensed (FAQs: 500→300 words)
□ Section order finalized
□ No essential info lost
□ All links converted to anchors

# Commit when complete:
git add docs/conversion/content-map.md
git add docs/conversion/content-consolidated.txt
git commit -m "docs: Complete content consolidation for single-page conversion"
```

---

## Phase 3: HTML Structure ✓

```bash
# Validation:
npx html-validate src/index-single.html

# Complete these before proceeding:
□ Valid HTML5
□ All section IDs unique
□ Anchor navigation functional
□ Proper heading hierarchy (one h1)
□ All images have alt text
□ Forms have proper labels
□ Mobile nav structure intact
□ No broken links
□ Semantic HTML used

# Commit when complete:
git add src/index-single.html
git commit -m "feat: Create single-page HTML structure with anchor navigation"
```

---

## Phase 4: CSS Optimization ✓

```bash
# Validation:
npx stylelint src/main-single.css
ls -lh src/main-single.css  # Should be < 50KB

# Complete these before proceeding:
□ CSS validates
□ Smooth scrolling works
□ Active nav updates on scroll
□ Scroll-to-top button styled
□ FAQ accordion styled
□ No unused CSS (< 20%)
□ Mobile responsive (320px, 768px, 1024px, 1920px)
□ Consistent colors
□ Hover states on interactive elements
□ Fixed header doesn't overlap content

# Commit when complete:
git add src/main-single.css
git commit -m "style: Optimize CSS for single-page layout with smooth scrolling"
```

---

## Phase 5: JavaScript Enhancement ✓

```bash
# Validation:
npx eslint src/main-single.js
grep -n "console.log" src/main-single.js  # Should be empty

# Complete these before proceeding:
□ No console errors
□ Scroll-spy updates active nav
□ Anchor links scroll smoothly
□ Mobile menu closes on link click
□ Scroll-to-top appears after 300px
□ FAQ accordion opens/closes
□ Lazy loading works
□ Section animations trigger
□ Form validation works
□ Testimonial slider functions
□ Works on mobile devices
□ Code documented

# Browser testing:
□ Chrome (latest)
□ Firefox (latest)
□ Safari (latest)
□ Mobile Safari
□ Chrome Mobile

# Commit when complete:
git add src/main-single.js
git commit -m "feat: Add scroll-spy, lazy loading, and interactive elements for single-page"
```

---

## Phase 6: Testing & Optimization ✓

```bash
# Run all validations:
npx html-validate src/index-single.html
npx stylelint src/main-single.css
npx eslint src/main-single.js
npx lighthouse http://localhost:8000/src/index-single.html --view
npx @axe-core/cli src/index-single.html

# Target Scores:
# Lighthouse Performance: > 90
# Lighthouse Accessibility: > 95
# Lighthouse Best Practices: > 90
# Lighthouse SEO: > 90

# Complete these before proceeding:
□ All links work (no 404s)
□ All images load
□ Forms validate and submit
□ Smooth scrolling works
□ Mobile menu works
□ Interactive elements work
□ No console errors
□ No CSS rendering issues

□ Tested 6+ screen sizes
□ Mobile navigation functional
□ Content readable on all devices
□ No horizontal scroll on mobile
□ Touch targets > 44px

□ Lighthouse Accessibility > 95
□ WCAG 2.1 AA compliant
□ Keyboard navigation works
□ Screen reader friendly
□ Color contrast sufficient

□ Lighthouse Performance > 90
□ Page load < 3 seconds
□ LCP < 2.5s
□ FID < 100ms
□ CLS < 0.1
□ Images optimized

□ Lighthouse SEO > 90
□ Meta descriptions present
□ Proper heading hierarchy
□ Structured data added
□ Open Graph tags present

□ Chrome tested
□ Firefox tested
□ Safari tested
□ Edge tested
□ Mobile browsers tested

# Commit when complete:
git add src/
git add docs/conversion/testing-report.md
git commit -m "test: Complete QA testing and optimization for single-page site"
```

---

## Phase 7: Deployment ✓

```bash
# Backup and swap files:
cd src
mv index.html index-multi.html
mv index-single.html index.html
mv main.css main-multi.css
mv main-single.css main.css
mv main.js main-multi.js
mv main-single.js main.js

# Complete these before deploying:
□ Old files backed up
□ New files renamed to production names
□ Local testing passed
□ README updated
□ CHANGELOG created

# Deploy:
git add .
git commit -m "deploy: Launch single-page website version"
git checkout main
git merge feature/single-page-conversion
git push origin main
git tag -a v2.0.0 -m "Single-page website launch"
git push origin v2.0.0

# Post-deployment verification:
□ Site accessible at live URL
□ No 404 errors on live
□ Images load on live
□ Forms work on live
□ Mobile works on live
□ No console errors on live
□ GitHub Actions successful
```

---

## Emergency Rollback

If anything goes wrong:

```bash
# Quick rollback
git checkout main
git revert HEAD
git push origin main

# Or manual restore
cd src
mv index.html index-single.html
mv index-multi.html index.html
mv main.css main-single.css
mv main-multi.css main.css
mv main.js main-single.js
mv main-multi.js main.js

git add .
git commit -m "rollback: Restore multi-page version"
git push origin main
```

---

## Quick Commands Reference

```bash
# Start local server
python -m http.server 8000
# Visit: http://localhost:8000/src/

# Create feature branch
git checkout -b feature/single-page-conversion

# Validate HTML
npx html-validate src/index-single.html

# Validate CSS
npx stylelint src/main-single.css

# Lint JavaScript
npx eslint src/main-single.js

# Run Lighthouse
npx lighthouse http://localhost:8000/src/index-single.html --view

# Check accessibility
npx @axe-core/cli src/index-single.html

# Check broken links
npx broken-link-checker http://localhost:8000/src/index-single.html

# Git status
git status
git diff

# Commit pattern
git add <files>
git commit -m "type: description"
git push origin feature/single-page-conversion
```

---

## Commit Message Conventions

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Formatting, styling
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance
- `deploy:` - Deployment

---

**Remember:** Don't skip quality gates! Each gate ensures the next phase has a solid foundation.
