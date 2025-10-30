# Phase 1: Pre-Conversion Site Inventory & Analysis

**Date:** October 30, 2025
**Branch:** feature/single-page-conversion
**Backup:** backup/pre-conversion
**Status:** ✅ Complete

---

## Site Structure Overview

### Current Multi-Page Architecture

```
AGmedia.com/
├── index.html         (Home)
├── services.html      (Services Detail)
├── approach.html      (My Approach / Philosophy)
├── client-stories.html (Case Studies & Testimonials)
└── pricing.html       (Pricing & Packages)
```

**Total Pages:** 5
**Target:** Consolidate into 1 single-page application

---

## Page-by-Page Content Inventory

### 1. index.html (Home Page)

**Sections:**

1. **Header/Navigation** (repeated on all pages)

   - Logo: "AGmedia"
   - Nav links: Home | Services | My Approach | Client Stories | Pricing | Free Consultation
   - Mobile hamburger menu

2. **Hero Section** (`section.hero`)

   - H1: "Friendly, Local Web Support for Your Small Business"
   - Tagline: Build and maintain simple websites
   - 2 CTA buttons: Free Consultation | View My Approach
   - Stats: Personal | Ongoing | Affordable
   - Hero image (Unsplash)

3. **Services Section** (`section.services`)

   - Section header: "Focused Services"
   - 3 service cards:
     - Website Development
     - Ongoing Support
     - Website Education
   - Each has icon, description, "Learn More" link

4. **About Section** (`section.about-me`)

   - H2: "A One-Person Business That Understands Your Challenges"
   - Personal photo (local image: D2D10473-4AB2-47DF-9531-09069BF42FAD_1_105_c.jpeg)
   - 2 paragraphs about bootstrapped approach
   - CTA: Learn More About My Approach

5. **Testimonials Section** (`section.testimonials`)

   - Section header: "What Local Businesses Say"
   - 3 testimonial slides with auto-rotation:
     - Sarah Johnson (Bakery Owner)
     - Michael Chen (Restaurant Owner)
     - Jennifer Lopez (Boutique Owner)
   - Navigation dots
   - Photos from Unsplash

6. **Contact/CTA Section** (`section.cta#contact`)

   - Background image with overlay
   - H2: "Looking for a website partner..."
   - Contact form with fields:
     - Name (required)
     - Email (required)
     - Phone
     - Service dropdown
     - Message (required)
   - Submit button

7. **Footer** (repeated on all pages)
   - Footer logo
   - 3 link columns:
     - Services (with section anchors)
     - About (page links)
     - Contact info (hard-coded)
   - Copyright
   - Social links (Facebook, LinkedIn)

**Page Meta:**

- Title: "AGmedia - Web Solutions for Small Businesses"
- Description: ✅ Added (150 chars)
- Keywords: ✅ Added

**Dependencies:**

- CSS: `./main.css`
- JS: `./main.js`
- Font: Google Fonts (Poppins)
- Images: 7 from Unsplash + 1 local

---

### 2. services.html (Services Detail)

**Unique Content:**

1. **Page Header** (`section.page-header`)

   - H1: "Services That Grow Your Business"
   - Tagline: "Simple, effective web solutions"

2. **Services Detail Section** (`section.services-detail`)

   - 3 detailed service items (alternating layout):

   **Service 1: Website Development**

   - Image (Unsplash)
   - H2 + tagline
   - Description paragraph
   - "What's Included" list (6 items):
     - Mobile-responsive design
     - Strategic content organization
     - Contact forms
     - Basic SEO
     - Social media integration
     - Simple CMS
   - Testimonial quote (Sarah Johnson)
   - CTA: "Discuss Your Website Needs"

   **Service 2: Ongoing Support**

   - Same structure, reversed layout
   - "What's Included" list (6 items):
     - Security updates & backups
     - Content updates
     - Technical troubleshooting
     - Performance monitoring
     - Monthly check-ins
     - Peace of mind
   - Testimonial quote (Michael Chen)
   - CTA: "Learn About Support Options"

   **Service 3: Website Education**

   - Same structure as Service 1
   - "What's Included" list (6 items):
     - One-on-one training
     - Custom video tutorials
     - Step-by-step documentation
     - Image optimization guidance
     - Writing tips
     - Analytics understanding
   - Testimonial quote (Jennifer Lopez)
   - CTA: "Explore Training Options"

3. **Pricing Overview Section** (`section.pricing-overview`)

   - H2: "Transparent, Affordable Pricing"
   - Intro paragraph
   - CTA: "View Pricing Details" → links to pricing.html

4. **Contact/CTA Section** (same as index.html, different heading)
5. **Footer** (identical to index.html)

**Page Meta:**

- Title: "Services - AGmedia"
- No description/keywords

**Issues Found:**

- ❌ CSS reference: `href="main.css"` (should be `./main.css`)
- ❌ JS reference: `src="main.js"` (should be `./main.js`)
- ❌ Inline styles in CTA section (not using CSS classes)
- ❌ No lazy loading on images
- ⚠️ Alt text could be more descriptive

---

### 3. approach.html (My Approach)

**Unique Content:**

1. **Page Header** (`section.page-header`)

   - H1: "My Approach to Web Solutions"
   - Tagline: "Personal, practical, and focused on your success"

2. **Philosophy Section** (`section.philosophy`)

   - About content grid (image + text)
   - Personal photo (same as index.html)
   - H2: "A Small Business Owner Serving Small Business Owners"
   - 2 intro paragraphs
   - 3 core principles list:
     - Simplicity
     - Practicality
     - Partnership
   - Closing paragraph

3. **Timeline Section** (`section.timeline`)

   - H2: "The Client Journey"
   - 5 step cards:
     1. Discovery (Free 30-min consultation)
     2. Planning (Scope, timeline, budget)
     3. Development (Build with check-ins)
     4. Launch (Testing across devices)
     5. Ongoing Support (Maintenance & education)

4. **FAQ Section** (`section.faq`)

   - H2: "Frequently Asked Questions"
   - 6 FAQ items:
     - How long to build? (2-4 weeks)
     - What makes you different? (One-person, direct service)
     - How priced? (Transparent, budget-friendly)
     - Can I update myself? (Yes, with training)
     - Help after launch? (Ongoing support packages)
     - Work remotely? (Yes, but focus on local)

5. **Values Section** (`section.values`)

   - H2: "Working Style & Values"
   - 6 value cards in grid:
     - Clear Communication
     - Responsive Service
     - Budget Respect
     - Long-Term Focus
     - Education-Oriented
     - Results-Driven

6. **Contact/CTA Section** (different heading: "Does this approach align...")
7. **Footer** (identical)

**Page Meta:**

- Title: "My Approach - AGmedia"
- No description/keywords

**Issues Found:**

- ❌ CSS/JS references not using `./`
- ❌ Inline styles in CTA
- ❌ No lazy loading
- ❌ Personal photo alt text generic

---

### 4. client-stories.html (Case Studies & Testimonials)

**Unique Content:**

1. **Page Header** (`section.page-header`)

   - H1: "Client Success Stories"
   - Tagline: "Real results for small businesses like yours"

2. **Case Studies Section** (`section.case-studies`)

   - 3 detailed case studies:

   **Case Study 1: Sarah's Bakery**

   - Header grid: Image + intro
   - Business type: Local Bakery
   - Client quote
   - Content sections:
     - The Challenge (3-4 sentences)
     - The Solution (5 bullet points)
     - The Results (3 stat cards):
       - 30% increase in new customers
       - 50% increase in special orders
       - 5 hrs/week saved

   **Case Study 2: Chen's Restaurant**

   - Same structure
   - Business type: Local Restaurant
   - Different challenge/solution/results:
     - 100% increase in online orders
     - 45% increase in mobile orders
     - 25% increase in revenue

   **Case Study 3: Bloom Boutique**

   - Same structure
   - Business type: Local Clothing Store
   - Results:
     - 90% reduction in maintenance costs
     - 2x more frequent content updates
     - 35% increase in store visits

3. **Testimonial Grid Section** (`section.testimonial-grid`)

   - H2: "What Clients Say"
   - 4 testimonial cards in grid:
     - David Wilson (Plumbing Business)
     - Amanda Garcia (Yoga Studio)
     - Robert Johnson (Hardware Store)
     - Sophia Martinez (Florist)
   - Each with photo, quote, name, business type

4. **Contact/CTA Section** (heading: "Ready to become a success story?")
5. **Footer** (identical)

**Page Meta:**

- Title: "Client Stories - AGmedia"
- No description/keywords

**Issues Found:**

- ❌ CSS/JS references
- ❌ Inline styles in CTA
- ❌ No lazy loading on 7 images
- ⚠️ Alt text for testimonial photos

---

### 5. pricing.html (Pricing & Packages)

**Unique Content:**

1. **Page Header** (`section.page-header`)

   - H1: "Simple, Transparent Pricing"
   - Tagline: "Affordable web solutions"

2. **Pricing Section** (`section.pricing-section`)

   - **Inline `<style>` block** (156 lines of CSS!)
   - Section header: "Choose the Right Plan"
   - 3 pricing cards:

   **Card 1: Starter Website**

   - Price: $1,499 (one-time)
   - 7 features listed
   - CTA: "Get Started"

   **Card 2: Growth Package** (featured/most popular)

   - Price: $2,499 (one-time)
   - 8 features listed
   - Special styling (border, "Most Popular" badge)
   - CTA: "Get Started"

   **Card 3: Ongoing Support**

   - Price: $99/month
   - 7 features listed
   - CTA: "Get Started"

   - Pricing note: "All packages can be customized..."

3. **Pricing FAQ Section** (`section.pricing-faq`)

   - H2: "Pricing FAQs"
   - 5 FAQ items:
     - Hidden fees? (No)
     - Need support package? (Recommended)
     - Upgrade later? (Yes)
     - Payment plan? (Yes, discuss in consultation)
     - Custom needs? (Contact for quote)

4. **Contact/CTA Section** (heading: "Ready to discuss which package...")
   - Form dropdown options different (package names)
5. **Footer** (identical)

**Page Meta:**

- Title: "Pricing - AGmedia"
- No description/keywords

**Issues Found:**

- 🔴 **CRITICAL**: 156 lines of inline CSS in `<style>` tag
- ❌ CSS/JS references
- ❌ Inline styles in CTA
- ❌ No lazy loading
- ⚠️ Pricing CSS not in main.css (will be lost in consolidation)

---

## Common Elements Across All Pages

### Repeated Components:

1. **Header/Navigation**

   - Identical on all 5 pages
   - Desktop nav with 6 links
   - Mobile hamburger menu
   - Same structure, different `.active` class

2. **Mobile Navigation**

   - Identical overlay menu
   - Same 6 links
   - Toggle functionality

3. **Footer**

   - 100% identical across all pages
   - 3 link columns
   - Social links
   - Copyright

4. **CTA/Contact Section**
   - Same structure, different headings/text
   - Same form fields (except pricing.html dropdown)
   - Same background image
   - Inline styles (same issue on all pages)

---

## Content Consolidation Map

### Target Single-Page Structure:

```
index.html (Single Page)
├── #home          ← Current index.html hero
├── #services      ← Content from services.html
├── #approach      ← Content from approach.html
├── #clients       ← Content from client-stories.html
├── #pricing       ← Content from pricing.html
└── #contact       ← Current CTA section (keep as-is)
```

### Navigation Changes Required:

**Old Links → New Anchors:**

- `href="index.html"` → `href="#home"`
- `href="services.html"` → `href="#services"`
- `href="approach.html"` → `href="#approach"`
- `href="client-stories.html"` → `href="#clients"`
- `href="pricing.html"` → `href="#pricing"`
- `href="#contact"` → `href="#contact"` (already correct!)

---

## Technical Analysis

### Assets Inventory:

**CSS Files:**

- ✅ `main.css` (1,168 lines) - PRIMARY FILE
- ⚠️ `pricing.html` has 156 lines inline - MUST EXTRACT

**JavaScript Files:**

- ✅ `main.js` (178 lines) - No changes needed
- Smooth scroll already implemented
- Testimonial slider works
- Mobile nav works
- Form handling works

**Images:**

- 1 local image: `images/D2D10473-4AB2-47DF-9531-09069BF42FAD_1_105_c.jpeg`
- ~20+ Unsplash images (external CDN)
- ⚠️ Consider downloading for production

**Fonts:**

- Google Fonts: Poppins (weights: 300, 400, 500, 600, 700)
- External CDN dependency

---

## Issues to Fix Before Consolidation

### Critical (All Pages Except index.html):

1. **File Path References**

   - ❌ `href="main.css"` → Should be `href="./main.css"`
   - ❌ `src="main.js"` → Should be `src="./main.js"`
   - Files: services.html, approach.html, client-stories.html, pricing.html

2. **Inline Styles in CTA Sections**

   - All pages have same inline styles
   - Should use `.cta-background` and `.cta-overlay` classes (already in index.html)

3. **Pricing Page Inline CSS**
   - 156 lines of pricing-specific CSS in `<style>` tag
   - Must be extracted to main.css before deletion

### High Priority:

4. **Missing Meta Tags**

   - Only index.html has description/keywords
   - Services, approach, client-stories, pricing need SEO meta tags

5. **Image Optimization**

   - No lazy loading on services.html, approach.html, client-stories.html, pricing.html
   - Alt text could be more descriptive

6. **Personal Photo Reference**
   - Used on index.html and approach.html
   - Needs better alt text on approach.html

---

## Content Metrics

### Word Count by Page:

- **index.html**: ~300 words
- **services.html**: ~450 words
- **approach.html**: ~600 words
- **client-stories.html**: ~800 words
- **pricing.html**: ~400 words
- **Total**: ~2,550 words

### Section Count:

- Hero: 1
- Services: 2 sections (overview + detail)
- About: 1
- Approach: 3 sections (philosophy, timeline, values)
- Client Stories: 2 sections (case studies + testimonials)
- Pricing: 2 sections (packages + FAQ)
- Testimonials: 1 (on home)
- Contact/CTA: 1 (repeated 5 times)
- **Total Unique Sections**: 13

### Form Instances:

- 5 contact forms (1 per page)
- All identical except pricing.html dropdown options
- Will consolidate to 1 form

---

## Consolidation Strategy

### Step 1: Fix All File References (Do First!)

```bash
# Fix services.html, approach.html, client-stories.html, pricing.html
# Change main.css → ./main.css
# Change main.js → ./main.js
```

### Step 2: Extract Pricing CSS

```bash
# Copy 156 lines from pricing.html <style> tag
# Add to main.css
# Test pricing page still renders correctly
```

### Step 3: Fix Inline Styles (All CTA Sections)

```bash
# Replace inline styles with classes:
# class="container cta-background"
# class="cta-overlay"
```

### Step 4: Add Missing Meta Tags

```bash
# Add description/keywords to:
# - services.html
# - approach.html
# - client-stories.html
# - pricing.html
```

### Step 5: Content Consolidation (Phase 2)

```bash
# Copy unique content from each page into index.html
# Add section IDs (#services, #approach, #clients, #pricing)
# Remove duplicate headers/footers
# Keep only 1 contact form
```

### Step 6: Update Navigation (Phase 3)

```bash
# Change all href="*.html" to href="#section"
# Update footer links
# Test smooth scroll
```

---

## Quality Gate Checklist for Phase 1

- [x] Backup branch created (backup/pre-conversion)
- [x] Feature branch created (feature/single-page-conversion)
- [x] All pages read and documented
- [x] Content inventory complete
- [x] Technical issues identified
- [x] Consolidation strategy defined
- [x] Asset inventory complete
- [ ] File reference fixes applied (Phase 1.5 - next step)
- [ ] Pricing CSS extracted (Phase 1.5)
- [ ] Ready for Phase 2

---

## Next Steps (Phase 1.5: Pre-Consolidation Fixes)

Before we can safely consolidate pages, we must fix these issues:

1. **Fix file paths** on 4 pages (services, approach, client-stories, pricing)
2. **Extract pricing CSS** to main.css
3. **Fix inline styles** on all CTA sections
4. **Add meta tags** to all pages
5. **Add lazy loading** to all images
6. **Test** that all pages still work correctly

**Estimated Time**: 1-2 hours
**Commits**: 3-4 atomic commits

Then we'll be ready for Phase 2: Content Consolidation!

---

**Phase 1 Status**: ✅ **COMPLETE - Ready for Phase 1.5 Fixes**
