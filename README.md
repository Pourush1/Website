# Pourush Shrestha - Portfolio Website

A modern, interactive portfolio website showcasing my journey as a Software Engineer. Built with cutting-edge technologies to deliver an immersive user experience with 3D animations, smooth transitions, and responsive design.

🌐 **Live Demo:** [https://pourushshrestha.com](https://pourushshrestha.com)

## ✨ Features

- **Interactive 3D Elements** - Engaging 3D globe and animations using Three.js
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark Theme** - Elegant dark theme for better user experience
- **Performance Optimized** - Built with Next.js 15 for optimal performance
- **Error Monitoring** - Integrated Sentry for real-time error tracking
- **Accessibility** - WCAG compliant with proper semantic HTML
- **Type Safety** - Full TypeScript implementation

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15.3.2](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### 3D & Animations

- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lottie React](https://github.com/chenqingspring/react-lottie)** - Render After Effects animations

### Utilities & Tools

- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **[Clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Monitoring & Analytics

- **[Sentry](https://sentry.io/)** - Error monitoring and performance tracking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pourushshrestha/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
│   ├── ui/                # UI components (Spotlight, TextEffect, etc.)
│   ├── Hero.tsx           # Landing section
│   ├── Experience.tsx     # Experience section
│   └── ...
├── data/                  # Static data and configurations
├── lib/                   # Utility functions
├── public/                # Static assets
└── sentry.*.config.ts     # Sentry configuration files
```

## 🎨 Key Components

- **Hero Section** - Dynamic text generation with 3D spotlights
- **Interactive Globe** - 3D globe showing global presence
- **Experience Timeline** - Professional journey visualization
- **Project Showcase** - Featured projects with animations
- **Contact Form** - Integrated feedback system

## 🔧 Configuration

The project uses several configuration files:

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint rules and settings
