# API Reference

This document provides detailed API reference for the Website Template components and utilities.

## Components API

### Copyright Component

**Location**: `src/components/Copyright.tsx`

A simple footer component that displays copyright information.

#### Props

```typescript
// No props required
```

#### Usage

```tsx
import Copyright from "@/components/Copyright";

<Copyright />;
```

#### Returns

-   JSX.Element: Copyright footer with current year

---

### ModeSwitch Component

**Location**: `src/components/ModeSwitch.tsx`

A toggle component for switching between dark and light themes.

#### Props

```typescript
// No props required
```

#### Usage

```tsx
import ModeSwitch from "@/components/ModeSwitch";

<ModeSwitch />;
```

#### State Management

-   Uses `useState` hook for mode state
-   Persists preference in localStorage
-   Updates theme provider on change

#### Returns

-   JSX.Element: Theme toggle switch with icons

---

### ProTip Component

**Location**: `src/components/ProTip.tsx`

A component that displays helpful tips or information.

#### Props

```typescript
// No props required
```

#### Usage

```tsx
import ProTip from "@/components/ProTip";

<ProTip />;
```

#### Returns

-   JSX.Element: Pro tip card with icon and text

---

## Theme API

### Theme Configuration

**Location**: `src/theme.ts`

Material-UI theme configuration with dark/light mode support.

#### Theme Object Structure

```typescript
interface Theme {
    palette: {
        mode: "light" | "dark";
        primary: PaletteColor;
        secondary: PaletteColor;
        // ... other palette colors
    };
    typography: TypographyOptions;
    spacing: SpacingOptions;
    breakpoints: BreakpointsOptions;
    // ... other theme properties
}
```

#### Usage

```tsx
import { useTheme } from "@mui/material/styles";
import theme from "@/theme";

// In component
const theme = useTheme();
```

#### Theme Properties

-   `palette`: Color configuration
-   `typography`: Font settings
-   `spacing`: Spacing unit configuration
-   `breakpoints`: Responsive breakpoints

---

## Next.js App Router API

### Layout Component

**Location**: `src/app/layout.tsx`

Root layout component with theme providers.

#### Props

```typescript
interface RootLayoutProps {
    children: React.ReactNode;
}
```

#### Features

-   Theme provider setup
-   Dark/light mode support
-   CSS baseline
-   Hydration handling

#### Usage

```tsx
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <InitColorSchemeScript attribute="class" />
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ModeSwitch />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
```

### Page Components

**Location**: `src/app/*/page.tsx`

Page components for different routes.

#### Props

```typescript
// No props required for page components
```

#### Usage

```tsx
export default function Page() {
    return (
        <div>
            <h1>Page Content</h1>
        </div>
    );
}
```

---

## Utility Functions

### Theme Utilities

#### useTheme Hook

```typescript
import { useTheme } from "@mui/material/styles";

const theme = useTheme();
```

#### Theme Access

```typescript
// Access theme values
const primaryColor = theme.palette.primary.main;
const spacing = theme.spacing(2);
const breakpoint = theme.breakpoints.up("md");
```

### Component Utilities

#### Styled Components

```typescript
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
}));
```

#### sx Prop Usage

```typescript
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

---

## TypeScript Interfaces

### Component Props

#### CopyrightProps

```typescript
interface CopyrightProps {
    // No props required
}
```

#### ModeSwitchProps

```typescript
interface ModeSwitchProps {
    // No props required
}
```

#### ProTipProps

```typescript
interface ProTipProps {
    // No props required
}
```

### Theme Interfaces

#### Custom Theme

```typescript
interface CustomTheme extends Theme {
    custom: {
        gradient: string;
        shadow: string;
    };
}
```

#### Theme Options

```typescript
interface CustomThemeOptions extends ThemeOptions {
    custom?: {
        gradient?: string;
        shadow?: string;
    };
}
```

---

## Event Handlers

### Theme Toggle

```typescript
const handleThemeToggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
};
```

### Component Events

```typescript
// Button click handler
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Handle click event
};

// Form submit handler
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
};
```

---

## Configuration Options

### Next.js Configuration

**File**: `next.config.mjs`

```typescript
const nextConfig = {
    // Configuration options
    output: "standalone",
    images: {
        domains: ["example.com"],
    },
    compress: true,
    poweredByHeader: false,
};
```

### TypeScript Configuration

**File**: `tsconfig.json`

```json
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "es6"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "incremental": true,
        "plugins": [
            {
                "name": "next"
            }
        ],
        "paths": {
            "@/*": ["./src/*"]
        }
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
}
```

---

## Error Handling

### Component Error Boundaries

```typescript
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }: { error: Error }) {
    return (
        <div role="alert">
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
        </div>
    );
}

export default function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <YourComponent />
        </ErrorBoundary>
    );
}
```

### Theme Error Handling

```typescript
try {
    const theme = createTheme(themeOptions);
} catch (error) {
    console.error("Theme creation failed:", error);
    // Fallback to default theme
}
```

---

## Performance Considerations

### Component Optimization

```typescript
import { memo } from "react";

const OptimizedComponent = memo(({ data }: { data: any[] }) => {
    // Component logic
    return <div>{data.length} items</div>;
});
```

### Theme Optimization

```typescript
// Avoid creating theme objects in render
const theme = useMemo(() => createTheme(themeOptions), []);
```

---

## Testing Utilities

### Component Testing

```typescript
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
```

### Theme Testing

```typescript
import { createTheme } from "@mui/material/styles";

test("theme has correct colors", () => {
    const theme = createTheme({
        palette: {
            primary: { main: "#1976d2" },
        },
    });

    expect(theme.palette.primary.main).toBe("#1976d2");
});
```
