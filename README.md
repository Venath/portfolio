# Venath Randima — Portfolio

A personal portfolio website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), showcasing who I am, my academics, and the projects I've worked on.

Live site: [venath.github.io/portfolio](https://venath.github.io/portfolio/)

## About

Hi, I'm **Venath Randima**, an undergraduate Software Engineering student at SLIIT. This site is my corner of the web — it introduces who I am, lists the academic and personal projects I've built, and links out to my social profiles and resume.

## Features

- Responsive, mobile-first layout
- Light and dark mode toggle
- Animated hero section with typing effect (powered by `typed.js`)
- Scroll-triggered animations (powered by `AOS`)
- Sections for **About Me**, **Academics**, **Academic Projects**, and **Personal Projects**
- Downloadable resume
- Links to GitHub, LinkedIn, YouTube, and Twitter

## Tech Stack

- **Framework:** Next.js 12
- **UI:** React 18, Tailwind CSS 3
- **Icons:** react-icons
- **Animations:** AOS, typed.js
- **Utilities:** moment, @headlessui/react
- **Backend (optional):** Firebase

## Project Structure

```
portfolio/
├── pages/              # Next.js pages (routes)
│   ├── _app.js
│   ├── _document.js
│   ├── index.js        # Main portfolio page
│   ├── Header.js
│   └── api/
├── public/             # Static assets (images, resume, fonts)
├── styles/             # Global styles
│   └── globals.css
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 14 or later
- npm (comes with Node.js)

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/Venath/portfolio.git
cd portfolio
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page auto-reloads as you edit files.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Customization

Most of the portfolio content lives in `pages/index.js`. To make this your own:

1. Replace the images in `public/` (avatar, project screenshots, resume PDF).
2. Update the hero section text, bio, and social links in `pages/index.js`.
3. Edit the **Academics** and **Projects** sections with your own entries.
4. Tweak colors, fonts, and breakpoints in `tailwind.config.js`.

## Connect

- GitHub: [@Venath](https://github.com/Venath)
- LinkedIn: [Venath Randima](https://www.linkedin.com/in/venath-randima-b3b425281/)
- YouTube: [@team_ramp](https://www.youtube.com/@team_ramp)

## License

This project is for personal/portfolio use. Feel free to fork it as a starting point for your own portfolio — a credit back is appreciated but not required.
