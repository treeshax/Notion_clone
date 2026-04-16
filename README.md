# Scribo — Build your second brain

Scribo is a premium, high-performance workspace clone inspired by Notion. It features a cinematic dark-themed interface, glassmorphic UI components, and fluid WebGL-powered animations.

![Project Preview](https://via.placeholder.com/1200x600?text=Scribo+Cinematic+Workspace)

## ✨ Features

- **Cinematic Hero Section**: Interactive `LineWaves` WebGL background powered by `ogl`.
- **Glassmorphic Navigation**: High-end, translucent navbar with blur effects and smooth hovers.
- **Spotlight Cards**: Interactive feature cards with dynamic mouse-following glow effects.
- **Premium Aesthetics**: Carefully curated HSL color palette and modern typography (Inter).
- **Responsive Design**: Fully optimized for a seamless experience across all screen sizes.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Graphics**: [OGL](https://github.com/o-g-l/ogl) (WebGL) & [GSAP](https://gsap.com/)
- **Styling**: Vanilla CSS (Modern CSS Variables & Glassmorphism)
- **Typography**: [Inter](https://rsms.me/inter/)

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd Notion_clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── components/
│   ├── ui/
│   │   ├── Navbar.jsx      # Glassmorphic header
│   │   ├── CardProps.jsx   # Spotlight/Hover logic
│   └── Hero.jsx            # LineWaves WebGL component
├── App.jsx                 # Core landing page layout
├── index.css               # Design tokens & global styles
└── main.jsx                # Entry point
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ⚡ by [Your Name/Github]
