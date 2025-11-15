# Shafi Ahmed - Portfolio Website

A modern, minimal portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and glassmorphism effects.

## Features

- 🎨 **Clean, Minimal Design** - Inspired by Anthropic's design system with sketch paper background
- ⚡ **Fast & Performant** - Built with Vite for lightning-fast development
- 🎭 **Smooth Animations** - Fluid interactions with Framer Motion including:
  - Waterfall loading animations
  - Floating text effects on hover
  - Smooth section transitions
  - Custom cursor with blur effects
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **Type-Safe** - Written in TypeScript
- 💎 **Glassmorphism** - Modern frosted glass effects on cards and navigation
- 🎯 **Smart Navigation** - Active section highlighting based on scroll position
- 🌊 **Interactive Effects** - Floating name animation, project hover effects, and skill tree visualization

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 20.10.0 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/            # Portfolio data
│   └── portfolio.ts
├── App.tsx          # Main app component
└── index.css        # Global styles
```

## Customization

To customize the portfolio with your own information:

1. Edit `src/data/portfolio.ts` with your personal information, experience, skills, and projects
2. Update the color scheme in `tailwind.config.js` if desired
3. Replace social media links and contact information

## Design Inspiration

This portfolio is inspired by:
- **Anthropic** - Clean, minimal aesthetic with coral accents
- **Modern Portfolio Practices** - Single-page design with smooth scrolling

## Key Sections

- **Hero** - Animated introduction with floating name effect
- **About** - Personal background with tech tree visualization
- **Experience** - Work history with waterfall animation on load
- **Skills** - Interactive hierarchical tree structure with hover effects
- **Projects** - Featured projects with zig-zag layout and floating hover effects
- **Contact** - Get in touch section with social links

## Color Palette

- **Primary Accent**: `#d97757` (Anthropic Coral)
- **Text Primary**: `#2a2a2a` (Slate Dark)
- **Background**: `#f5f5f0` (Sketch Paper)
- **Glass Elements**: Semi-transparent white with backdrop blur

## Deployment

This project is optimized for deployment on platforms like:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**

Simply connect your repository and the platform will auto-detect the Vite configuration.

## License

MIT License - feel free to use this as a template for your own portfolio!

## Author

**Shafi Ahmed**
- GitHub: [@ita004](https://github.com/ita004)
- LinkedIn: [Shafi Ahmed](https://www.linkedin.com/in/shafi-ah01/)
- Email: shfahmd001@gmail.com
