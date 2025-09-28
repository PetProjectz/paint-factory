# Contributing

Thank you for your interest in contributing to the Website Template! This guide will help you get started with contributing to the project.

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn
-   Git
-   A GitHub account

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/your-username/web-site-template.git
cd web-site-template
```

3. Add the original repository as upstream:

```bash
git remote add upstream https://github.com/original-owner/web-site-template.git
```

## Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Run Linting

```bash
npm run lint
```

## Contribution Guidelines

### Code Style

-   Follow the existing code style and patterns
-   Use TypeScript for all new code
-   Follow Material-UI component patterns
-   Use meaningful variable and function names
-   Add comments for complex logic

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add new component for user authentication
fix: resolve theme switching issue in dark mode
docs: update component documentation
style: improve button hover effects
refactor: simplify theme configuration
```

### Pull Request Process

1. **Create a Feature Branch**

```bash
git checkout -b feature/your-feature-name
```

2. **Make Your Changes**

    - Write clean, well-documented code
    - Add tests if applicable
    - Update documentation as needed

3. **Test Your Changes**

```bash
npm run build
npm run lint
npm run dev
```

4. **Commit Your Changes**

```bash
git add .
git commit -m "feat: add your feature description"
```

5. **Push to Your Fork**

```bash
git push origin feature/your-feature-name
```

6. **Create a Pull Request**
    - Go to your fork on GitHub
    - Click "New Pull Request"
    - Fill out the PR template
    - Request review from maintainers

## Types of Contributions

### 🐛 Bug Reports

When reporting bugs, include:

-   Clear description of the issue
-   Steps to reproduce
-   Expected vs actual behavior
-   Screenshots if applicable
-   Environment details (OS, Node version, etc.)

### ✨ Feature Requests

For new features:

-   Describe the feature clearly
-   Explain the use case
-   Provide examples if possible
-   Consider implementation complexity

### 📚 Documentation

Help improve documentation:

-   Fix typos and grammar
-   Add missing information
-   Improve clarity
-   Add examples and code snippets

### 🎨 UI/UX Improvements

For design improvements:

-   Follow Material-UI design principles
-   Ensure accessibility
-   Test on different screen sizes
-   Consider dark/light mode compatibility

## Development Workflow

### Branch Naming

Use descriptive branch names:

-   `feature/component-name`
-   `fix/issue-description`
-   `docs/section-name`
-   `refactor/component-name`

### Testing

-   Test your changes thoroughly
-   Ensure no regressions
-   Test in both light and dark modes
-   Verify responsive design

### Code Review

-   Respond to feedback promptly
-   Make requested changes
-   Ask questions if unclear
-   Be open to suggestions

## Project Structure

### Adding New Components

1. Create component in `src/components/`
2. Follow existing component patterns
3. Add TypeScript interfaces
4. Include proper documentation
5. Update component documentation

### Adding New Pages

1. Create directory in `src/app/`
2. Add `page.tsx` file
3. Follow Next.js App Router conventions
4. Update navigation if needed

### Theme Customization

1. Modify `src/theme.ts`
2. Follow Material-UI theming patterns
3. Test in both light and dark modes
4. Update theming documentation

## Code Standards

### TypeScript

```typescript
// Use interfaces for props
interface ComponentProps {
    title: string;
    children?: React.ReactNode;
    variant?: "primary" | "secondary";
}

// Use proper typing for functions
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Handle click
};
```

### React Components

```tsx
// Use functional components with hooks
import React from "react";
import { Button } from "@mui/material";

interface MyComponentProps {
    title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
    return <Button variant="contained">{title}</Button>;
}
```

### Styling

```tsx
// Use sx prop for styling
<Box
    sx={{
        padding: 2,
        backgroundColor: "primary.main",
        "&:hover": {
            backgroundColor: "primary.dark",
        },
    }}
>
    Content
</Box>
```

## Documentation Standards

### Component Documentation

```tsx
/**
 * A reusable button component with Material-UI styling
 *
 * @param title - The button text
 * @param variant - The button variant
 * @param onClick - Click handler function
 */
interface ButtonProps {
    title: string;
    variant?: "contained" | "outlined" | "text";
    onClick?: () => void;
}
```

### README Updates

-   Keep README.md up to date
-   Include new features in documentation
-   Update installation instructions
-   Add new dependencies to package.json

## Release Process

### Version Bumping

-   Use semantic versioning (semver)
-   Update package.json version
-   Create release notes
-   Tag releases appropriately

### Changelog

-   Document all changes
-   Group by type (features, fixes, etc.)
-   Include breaking changes
-   Credit contributors

## Getting Help

### Questions and Support

-   Check existing issues and discussions
-   Ask questions in GitHub Discussions
-   Join community channels if available
-   Read the documentation thoroughly

### Resources

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Material-UI Documentation](https://mui.com/)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs/)
-   [React Documentation](https://react.dev/)

## Recognition

Contributors will be recognized in:

-   README.md contributors section
-   Release notes
-   GitHub contributors page
-   Project documentation

Thank you for contributing to the Website Template! Your contributions help make this project better for everyone.
