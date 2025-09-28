# Components

This document provides detailed information about all available components in the Website Template.

## Component Overview

The project includes several reusable components located in `src/components/`:

-   `Copyright.tsx` - Copyright footer component
-   `ModeSwitch.tsx` - Dark/Light mode toggle
-   `ProTip.tsx` - Pro tip component

## Component Documentation

### Copyright Component

**File**: `src/components/Copyright.tsx`

A simple footer component that displays copyright information.

#### Props

```typescript
interface CopyrightProps {
    // No props required - uses default copyright text
}
```

#### Usage

```tsx
import Copyright from "@/components/Copyright";

export default function Footer() {
    return <Copyright />;
}
```

#### Features

-   Displays current year automatically
-   Responsive design
-   Material-UI Typography component

### ModeSwitch Component

**File**: `src/components/ModeSwitch.tsx`

A toggle component for switching between dark and light themes.

#### Props

```typescript
interface ModeSwitchProps {
    // No props required - manages its own state
}
```

#### Usage

```tsx
import ModeSwitch from "@/components/ModeSwitch";

export default function Header() {
    return (
        <header>
            <ModeSwitch />
        </header>
    );
}
```

#### Features

-   Toggle between light and dark modes
-   Persists preference in localStorage
-   System preference detection
-   Material-UI Switch component
-   Icon indicators for each mode

#### State Management

-   Uses React's `useState` hook
-   Reads initial state from localStorage
-   Updates theme provider on change

### ProTip Component

**File**: `src/components/ProTip.tsx`

A component that displays helpful tips or information.

#### Props

```typescript
interface ProTipProps {
    // No props required - uses default content
}
```

#### Usage

```tsx
import ProTip from "@/components/ProTip";

export default function HomePage() {
    return (
        <div>
            <h1>Welcome</h1>
            <ProTip />
        </div>
    );
}
```

#### Features

-   Displays pro tips with icons
-   Material-UI Card component
-   Responsive design
-   Accessible markup

## Creating New Components

### Component Structure

When creating new components, follow this structure:

```tsx
import * as React from "react";
import { ComponentProps } from "@mui/material";

interface YourComponentProps {
    // Define your props here
    title?: string;
    children?: React.ReactNode;
}

export default function YourComponent({
    title = "Default Title",
    children,
    ...props
}: YourComponentProps) {
    return (
        <div {...props}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
```

### Component Guidelines

1. **TypeScript**: Always define prop interfaces
2. **Default Props**: Provide sensible defaults
3. **Props Spreading**: Use `...props` for additional props
4. **Naming**: Use PascalCase for component names
5. **Exports**: Use default exports for components

### Styling Components

#### Using Material-UI Components

```tsx
import { Button, Typography } from "@mui/material";

export default function MyComponent() {
    return (
        <Button variant="contained" color="primary">
            <Typography variant="h6">Click me</Typography>
        </Button>
    );
}
```

#### Using sx Prop

```tsx
import { Box } from "@mui/material";

export default function MyComponent() {
    return (
        <Box
            sx={{
                padding: 2,
                backgroundColor: "primary.main",
                borderRadius: 1,
            }}
        >
            Content
        </Box>
    );
}
```

#### Using styled Components

```tsx
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
}));

export default function MyComponent() {
    return <StyledButton>Custom Button</StyledButton>;
}
```

## Component Testing

### Testing Setup

```tsx
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import YourComponent from "@/components/YourComponent";

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

test("renders component correctly", () => {
    renderWithTheme(<YourComponent />);
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
});
```

## Accessibility

### ARIA Labels

```tsx
<Button aria-label="Close dialog">
    <CloseIcon />
</Button>
```

### Keyboard Navigation

```tsx
<Button
    onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
            handleClick();
        }
    }}
>
    Action
</Button>
```

### Focus Management

```tsx
import { useRef, useEffect } from "react";

export default function MyComponent() {
    const focusRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        focusRef.current?.focus();
    }, []);

    return <Button ref={focusRef}>Focus me</Button>;
}
```

## Performance Optimization

### Memoization

```tsx
import { memo } from "react";

const ExpensiveComponent = memo(({ data }: { data: any[] }) => {
    // Expensive computation
    return <div>{data.length} items</div>;
});
```

### Lazy Loading

```tsx
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}
```

## Best Practices

1. **Single Responsibility**: Each component should have one clear purpose
2. **Composition**: Prefer composition over inheritance
3. **Props Interface**: Always define TypeScript interfaces for props
4. **Default Props**: Provide sensible defaults
5. **Error Boundaries**: Wrap components in error boundaries when needed
6. **Documentation**: Document complex components with JSDoc comments
7. **Testing**: Write tests for components with complex logic
8. **Accessibility**: Follow WCAG guidelines
9. **Performance**: Use React.memo and useMemo when appropriate
10. **Consistency**: Follow established patterns in the codebase
