# VS Code Setup for AGmedia Project

## 🎯 Installed Extensions

### Essential Extensions

#### HTML & Web Development
- **Auto Close Tag** (`formulahendry.auto-close-tag`)
  - Automatically adds closing tags for HTML/XML
  
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
  - Automatically renames paired HTML/XML tags
  
- **HTML CSS Support** (`ecmel.vscode-html-css`)
  - CSS IntelliSense for HTML class attributes
  
- **W3C Web Validator** (`celianriboulet.webvalidator`)
  - Validates HTML/CSS against W3C standards
  - Usage: Right-click in file → "W3C Validate"

#### CSS & Styling
- **Stylelint** (`stylelint.vscode-stylelint`)
  - Modern CSS linter
  - Auto-fixes on save
  - Configured in `.stylelintrc.json`
  
- **CSS Peek** (`pranaygp.vscode-css-peek`)
  - Jump to CSS definitions from HTML
  - Ctrl/Cmd + Click on class names

#### JavaScript
- **ESLint** (`dbaeumer.vscode-eslint`)
  - JavaScript linter
  - Auto-fixes on save
  - Configured in `.eslintrc.json`
  
- **Prettier** (`esbenp.prettier-vscode`)
  - Code formatter for HTML, CSS, JS
  - Runs on save
  - Configured in `.prettierrc.json`

#### Git Integration
- **GitLens** (`eamodio.gitlens`)
  - Supercharges Git capabilities
  - Shows line-by-line blame
  - Git history and comparisons
  
- **Git Graph** (`mhutchie.git-graph`)
  - Visual git repository graph
  - Interactive branch management
  
- **Git History** (`donjayamanne.githistory`)
  - View file history
  - Compare commits

#### Development Tools
- **Live Server** (`ritwickdey.liveserver`)
  - Local development server with live reload
  - **Usage:** Right-click `index.html` → "Open with Live Server"
  - Or click "Go Live" in status bar
  
- **Markdown Lint** (`davidanson.vscode-markdownlint`)
  - Linting for markdown files

#### AI Assistants (if you have access)
- **GitHub Copilot** (`github.copilot`)
  - AI pair programmer
  
- **GitHub Copilot Chat** (`github.copilot-chat`)
  - Conversational AI assistant

---

## ⚙️ Configuration Files

### `.vscode/settings.json`
Workspace-specific settings:
- Format on save enabled
- Auto-fix ESLint/Stylelint on save
- Tab size: 2 spaces
- Trim trailing whitespace
- Live Server port: 8000

### `.eslintrc.json`
ESLint configuration:
- ES2021 + browser environment
- 2-space indentation
- Single quotes
- Semicolons required
- Console.log warnings
- Debugger statements blocked

### `.stylelintrc.json`
Stylelint configuration:
- Standard CSS rules
- 2-space indentation
- Single quotes for strings
- Lowercase hex colors

### `.prettierrc.json`
Prettier configuration:
- Single quotes
- Semicolons
- 2-space tabs
- 100 character line width
- ES5 trailing commas

---

## 🚀 Quick Start Guide

### 1. Install Recommended Extensions
When you open the project, VS Code will prompt you to install recommended extensions.
Click **"Install All"** in the notification.

Or manually:
1. Press `Cmd/Ctrl + Shift + X` to open Extensions
2. Type `@recommended` in search
3. Install all workspace recommendations

### 2. Start Live Server
```
Right-click on src/index.html → "Open with Live Server"
```
Your site will open at `http://localhost:8000`

### 3. Enable Auto-Save
Already configured! Files auto-save when you switch focus.

---

## 🎨 Code Snippets

Custom snippets are available for faster coding:

### HTML Snippets (type and press Tab)
- `html5` - HTML5 boilerplate
- `section-container` - Section with container
- `card` - Card component
- `nav` - Navigation structure

### CSS Snippets
- `csscomment` - Section comment
- `mq` - Media query
- `flexcenter` - Flexbox centering
- `gridtemplate` - Grid template
- `cssvar` - CSS variable
- `transition` - Transition property

### JavaScript Snippets
- `addevent` - Event listener
- `qs` - Query selector
- `qsa` - Query selector all
- `foreach` - ForEach loop
- `intersectionobserver` - Intersection Observer
- `fetch` - Fetch API
- `asyncfn` - Async function with try/catch

---

## 🔍 Key Features

### 1. IntelliSense
- HTML class name completion
- CSS property suggestions
- JavaScript API hints

### 2. Linting & Validation
- Real-time error checking
- W3C HTML/CSS validation
- ESLint for JavaScript
- Stylelint for CSS

### 3. Auto-Formatting
- **Prettier** formats on save
- Consistent code style
- No manual formatting needed

### 4. Git Integration
- **GitLens** shows who wrote each line
- **Git Graph** visualizes branches
- Inline diff viewing
- Commit from VS Code

### 5. Live Reload
- Changes appear instantly in browser
- No manual refresh needed
- Mobile device testing support

---

## ⌨️ Essential Keyboard Shortcuts

### General
- `Cmd/Ctrl + P` - Quick file open
- `Cmd/Ctrl + Shift + P` - Command palette
- `Cmd/Ctrl + B` - Toggle sidebar
- `Cmd/Ctrl + J` - Toggle terminal
- `Cmd/Ctrl + /` - Toggle comment

### Editing
- `Alt + Up/Down` - Move line up/down
- `Shift + Alt + Up/Down` - Copy line up/down
- `Cmd/Ctrl + D` - Select next occurrence
- `Cmd/Ctrl + Shift + L` - Select all occurrences
- `Alt + Click` - Multi-cursor

### Navigation
- `Cmd/Ctrl + Click` - Go to definition
- `Alt + Left/Right` - Navigate back/forward
- `Cmd/Ctrl + Shift + O` - Go to symbol
- `F12` - Go to definition
- `Shift + F12` - Find all references

### Git
- `Cmd/Ctrl + Shift + G` - Open source control
- `Cmd/Ctrl + Enter` (in commit box) - Commit

### Live Server
- `Alt + L, Alt + O` - Open with Live Server
- `Alt + L, Alt + C` - Close Live Server

---

## 🛠️ Troubleshooting

### ESLint Not Working
1. Open terminal: `` Cmd/Ctrl + ` ``
2. Run: `npm install -g eslint`
3. Reload VS Code

### Stylelint Not Working
1. Open terminal
2. Run: `npm install -g stylelint stylelint-config-standard`
3. Reload VS Code

### Live Server Not Starting
1. Check if port 8000 is available
2. Change port in `.vscode/settings.json`
3. Restart VS Code

### Format on Save Not Working
1. Check Prettier is set as default formatter:
   - Right-click in file → "Format Document With..."
   - Select "Prettier - Code formatter"
   - Check "Set as default"

### Extensions Not Loading
1. `Cmd/Ctrl + Shift + P`
2. Type "Developer: Reload Window"
3. Press Enter

---

## 📦 Optional Extensions

### For Enhanced Productivity
- **Path Intellisense** - Autocomplete file paths
- **Bracket Pair Colorizer** - Color-coded brackets
- **Better Comments** - Styled code comments
- **Color Highlight** - Preview colors in CSS
- **SVG Preview** - Preview SVG files

### For Theme Customization
- **Material Icon Theme** - Better file icons
- **One Dark Pro** - Popular dark theme
- **Night Owl** - Developer-friendly theme

---

## 🔄 Keeping Extensions Updated

VS Code automatically checks for updates.

Manual update:
1. `Cmd/Ctrl + Shift + X` - Open Extensions
2. Click on gear icon
3. Select "Check for Extension Updates"

---

## 💡 Pro Tips

### 1. Multi-Cursor Editing
- Hold `Alt/Option` and click to place multiple cursors
- Edit multiple lines at once

### 2. Emmet Abbreviations
- Type `ul>li*3` and press Tab
- Creates unordered list with 3 items

### 3. Zen Mode
- `Cmd/Ctrl + K, Z` - Distraction-free coding
- Press `Esc` twice to exit

### 4. Split Editor
- `Cmd/Ctrl + \` - Split editor
- Work on HTML, CSS, JS side-by-side

### 5. Integrated Terminal
- `` Cmd/Ctrl + ` `` - Toggle terminal
- Run git commands without leaving VS Code

---

## 📚 Additional Resources

- [VS Code Tips & Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Stylelint Rules](https://stylelint.io/user-guide/rules/list)
- [Prettier Options](https://prettier.io/docs/en/options.html)

---

## 🎯 Next Steps

1. ✅ Extensions installed
2. ✅ Configuration files created
3. ✅ Code snippets ready
4. ⬜ Start Live Server
5. ⬜ Begin coding!

**You're all set!** Your VS Code is now supercharged for web development. 🚀
