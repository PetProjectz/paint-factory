# Getting Started

This guide will help you set up and run the Website Template project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js** (version 18.0 or higher)
-   **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)
-   **Git** for version control

### Checking Your Environment

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd web-site-template
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Start the Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure Overview

```
web-site-template/
├── docs/                   # Documentation files
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── about/         # About page
│   ├── components/        # Reusable components
│   └── theme.ts           # Material-UI theme
├── package.json           # Dependencies and scripts
└── README.md              # Project overview
```

## Available Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## First Steps

1. **Explore the Components**: Check out `src/components/` to see available components
2. **Customize the Theme**: Edit `src/theme.ts` to modify colors and styling
3. **Add New Pages**: Create new directories in `src/app/` with `page.tsx` files
4. **Modify the Layout**: Update `src/app/layout.tsx` for global changes

## Development Tips

-   Use the dark/light mode toggle to test theme switching
-   Check the browser console for any errors
-   Use TypeScript for better development experience
-   Follow the existing code structure and patterns

## Next Steps

-   Read the [Architecture Guide](./architecture.md) to understand the project structure
-   Check out [Component Documentation](./components.md) for available components
-   Learn about [Theming](./theming.md) for customization options
