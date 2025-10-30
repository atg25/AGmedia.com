# AGmedia.com

A professional web development service website focused on providing friendly, local web support for small businesses.

## 🌐 Live Demo

Visit the live site: [AGmedia.com](https://agard.github.io/AGmedia.com/)

## 📋 About

AGmedia specializes in creating simple, effective websites for small businesses. Our approach focuses on understanding your business needs and delivering personalized solutions with ongoing support.

## 🎯 Current Project: Single-Page Conversion

This repository is undergoing a professional conversion from a multi-page to a single-page application. See our comprehensive documentation:

- **[Setup Complete Guide](docs/setup-complete.md)** - Development environment overview and quick start
- **[Implementation Plan](docs/conversion/implementation-plan.md)** - Complete 7-phase conversion strategy
- **[VS Code Setup](docs/vscode-setup.md)** - Extension configuration and productivity tools
- **[Atomic Commits Guide](docs/conversion/atomic-commits-guide.md)** - Professional git workflow

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: Testimonial slider, contact forms, and smooth scrolling
- **Mobile Navigation**: Clean hamburger menu for mobile users
- **Multiple Pages**:
  - Home
  - Services
  - Our Approach
  - Client Stories
  - Pricing

## 🛠️ Technologies

- HTML5
- CSS3 (Custom styling with CSS variables)
- Vanilla JavaScript
- Google Fonts (Poppins)

### Development Environment

- **VS Code** with 17 curated extensions
- **ESLint** for JavaScript quality
- **Stylelint** for CSS standards
- **Prettier** for automatic formatting
- **Live Server** for hot reload development
- **Git Hooks** for automated quality checks

## 🚀 Getting Started

### View Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/AGmedia.com.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AGmedia.com
   ```

3. Open `src/index.html` in your browser or use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server
   ```

4. Visit `http://localhost:8000/src/` in your browser

## 📁 Project Structure

```plaintext
AGmedia.com/
├── docs/                           # Documentation
│   ├── conversion/                 # Conversion planning
│   │   ├── implementation-plan.md
│   │   ├── quality-gates-checklist.md
│   │   ├── atomic-commits-guide.md
│   │   └── git-hooks/              # Automated checks
│   ├── setup-complete.md
│   ├── vscode-setup.md
│   ├── brand_brief.md
│   └── customer_journey_map.md
├── .vscode/                        # VS Code workspace
│   ├── extensions.json
│   ├── settings.json
│   └── *.code-snippets
├── src/                            # Source code
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── images/
├── .eslintrc.json                  # JavaScript linting
├── .stylelintrc.json               # CSS linting
├── .prettierrc.json                # Code formatting
└── README.md
```

## 🎨 Design Principles

- **Brand Archetype**: Caregiver - supportive, reliable, and nurturing
- **Color Palette**:
  - Primary: #4a6fdc (Professional Blue)
  - Secondary: #2c3e50 (Dark Slate)
  - Accent: #3498db (Bright Blue)
- **Typography**: Poppins font family for a clean, modern look

## 📝 Recent Updates

- Consolidated CSS files into a single `main.css` for better performance
- Refactored JavaScript into modular functions in `main.js`
- Implemented responsive design with mobile-first approach
- Added testimonial slider with auto-rotation
- Optimized image loading and references

## 🤝 Contributing

This is a course project for IS373 at NJIT. Feedback and suggestions are welcome!

## 📄 License

This project is part of an academic assignment at NJIT.

## 👤 Author

**Andrew Gard**

- GitHub: [@agard](https://github.com/agard)
- Institution: New Jersey Institute of Technology (NJIT)
- Course: IS373

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Inspiration from modern web design trends
