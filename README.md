# Laurmax Portfolio Website

A modern, interactive, one-page website for Laurmax built with cutting-edge web technologies and following the Repo-Service-View architecture pattern.

## 🚀 Tech Stack

- **Astro 5** - Static site generator with partial hydration
- **React 19** - UI components and interactions
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Modern utility-first CSS framework
- **GSAP + Framer Motion** - Advanced animations and interactions
- **Zustand** - Lightweight state management
- **i18n** - Internationalization (Polish/English)

## 🏗️ Architecture

This project follows the **Repo-Service-View** pattern for clean separation of concerns:

```
src/
├─ components/          # UI Components (View layer)
│   ├─ Hero/
│   ├─ About/
│   ├─ Services/
│   ├─ Contact/
│   ├─ icons/           # SVG Icons
│   └─ animations/      # Animation components
├─ pages/               # Astro pages and routing
├─ layouts/             # Layout templates
├─ repositories/        # Data access layer (Repository)
├─ services/            # Business logic (Service)
├─ hooks/               # View ↔ Service connection
├─ stores/              # Global state management
├─ utils/               # Utility functions
└─ i18n/                # Internationalization
```

### Data Flow

```
Repository → Service → Hook → Component
```

Components never communicate directly with repositories - everything flows through the Service layer via custom hooks.

## 🎨 Design Features

- **Modern Minimal Aesthetic** - Inspired by artpill.studio
- **Gradient-based Color System** - Blue to purple brand palette
- **Smooth Scroll Animations** - GSAP ScrollTrigger integration
- **Interactive Microinteractions** - Framer Motion hover states
- **Responsive Design** - Mobile-first approach
- **Dynamic Typography** - Inter font with dynamic scaling

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd laurmax-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Features

### Sections

1. **Hero** - Dynamic title with gradient text and CTA
2. **About** - Company information with animated statistics
3. **Services** - Interactive service cards with icons
4. **Contact** - Contact form with validation

### Interactions

- **Scroll-triggered animations** using GSAP ScrollTrigger
- **Hover microinteractions** with Framer Motion
- **Smooth scrolling** between sections
- **Language switching** (PL/EN)
- **Form validation** and submission handling

### Performance

- **Partial hydration** - Only interactive components load JavaScript
- **Optimized fonts** - Preloaded Inter font family
- **Lazy loading** - Images and components load on demand
- **SEO optimized** - Meta tags, structured data

## 🎯 Content Management

Content is centralized in the repository layer (`src/repositories/contentRepository.ts`) with support for:

- Multi-language content (English/Polish)
- Type-safe content structure
- Easy content updates without touching components

## 🔧 Customization

### Adding New Sections

1. Create component in `src/components/NewSection/`
2. Add content to `contentRepository.ts`
3. Update service layer if needed
4. Import and use in `src/pages/index.astro`

### Styling

- Use TailwindCSS utility classes
- Custom animations in `tailwind.config.mjs`
- Component-specific styles in component files

### Animations

- GSAP for scroll-triggered animations
- Framer Motion for interactions
- Custom CSS animations via Tailwind

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

The site can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

Build output is generated in the `dist/` directory.

## 📄 License

© 2024 Laurmax. All rights reserved.

---

Built with ❤️ using modern web technologies for optimal performance and user experience.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
