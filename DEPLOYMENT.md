# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `AGmedia.com` (or any name you prefer)
4. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### 2. Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/agard/NJIT/is373/AGmedia.com
git remote add origin https://github.com/YOUR_USERNAME/AGmedia.com.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top right)
3. In the left sidebar, click "Pages"
4. Under "Source", select "GitHub Actions" (this uses our workflow file)
5. Click "Save"

### 4. Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (green checkmark)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/AGmedia.com/`

## Optimizations for GitHub Pages

✅ **Already Completed:**

- Consolidated CSS files into `main.css` for faster loading
- Consolidated JavaScript into `main.js`
- Created root-level `index.html` that redirects to `src/index.html`
- Set up GitHub Actions workflow for automatic deployment
- Added `.gitignore` to exclude unnecessary files
- Removed old, redundant CSS and JS files

## Making Updates

After the initial setup, whenever you make changes:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub (triggers automatic deployment)
git push
```

The GitHub Action will automatically deploy your changes to GitHub Pages!

## Troubleshooting

### Site Not Loading?

- Check that GitHub Pages is enabled in Settings > Pages
- Verify the workflow completed successfully in the Actions tab
- Make sure the source is set to "GitHub Actions"

### Images Not Showing?

- All image paths use relative paths, so they should work
- If issues persist, check the browser console for 404 errors

### CSS/JS Not Loading?

- Clear your browser cache
- Check that `main.css` and `main.js` exist in the `src/` folder
- Verify the file references in the HTML files

## Custom Domain (Optional)

To use a custom domain like `agmedia.com`:

1. Go to Settings > Pages
2. Under "Custom domain", enter your domain name
3. Follow GitHub's instructions to configure DNS records
4. Create a `CNAME` file in the repository root with your domain name

## Repository Structure

```
AGmedia.com/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── docs/                      # Documentation files
├── src/                       # Website source files
│   ├── *.html                # All HTML pages
│   ├── main.css              # Consolidated styles
│   ├── main.js               # Consolidated scripts
│   └── images/               # Image assets
├── .gitignore                # Git ignore rules
├── index.html                # Root redirect file
└── README.md                 # Repository README
```

## Performance Tips

The site is already optimized for GitHub Pages with:

- Single CSS file (reduces HTTP requests)
- Single JS file (reduces HTTP requests)
- Responsive images
- Clean, semantic HTML
- Mobile-first responsive design

## Questions?

If you run into issues:

1. Check the GitHub Actions logs in the "Actions" tab
2. Verify all paths are relative (no absolute URLs)
3. Make sure all referenced files exist in the repository
