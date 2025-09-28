# Theming

This guide covers how to customize the theme and styling in the Website Template.

## Theme Overview

The project uses Material-UI's theming system with a custom theme configuration located in `src/theme.ts`. The theme supports both light and dark modes with automatic system preference detection.

## Theme Structure

```typescript
// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    // Theme configuration
});
```

## Color Customization

### Primary Colors

```typescript
const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // Main primary color
            light: "#42a5f5", // Light variant
            dark: "#1565c0", // Dark variant
            contrastText: "#fff", // Text color on primary
        },
        secondary: {
            main: "#dc004e", // Main secondary color
            light: "#ff5983", // Light variant
            dark: "#9a0036", // Dark variant
            contrastText: "#fff", // Text color on secondary
        },
    },
});
```

### Custom Color Palette

```typescript
const theme = createTheme({
    palette: {
        custom: {
            main: "#your-color",
            light: "#your-light-color",
            dark: "#your-dark-color",
        },
    },
});

// Extend the theme type
declare module "@mui/material/styles" {
    interface Palette {
        custom: Palette["primary"];
    }
    interface PaletteOptions {
        custom?: PaletteOptions["primary"];
    }
}
```

## Typography Customization

### Font Configuration

```typescript
const theme = createTheme({
    typography: {
        fontFamily: [
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Arial",
            "sans-serif",
        ].join(","),
        h1: {
            fontSize: "2.5rem",
            fontWeight: 600,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        // ... other typography variants
    },
});
```

### Custom Typography Variants

```typescript
const theme = createTheme({
    typography: {
        // Add custom variants
        customHeading: {
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "primary.main",
        },
    },
});

// Extend the theme type
declare module "@mui/material/styles" {
    interface TypographyVariants {
        customHeading: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        customHeading?: React.CSSProperties;
    }
}
```

## Component Customization

### Global Component Overrides

```typescript
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                    fontWeight: 600,
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                },
            },
        },
    },
});
```

### Component Variants

```typescript
const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "gradient" },
                    style: {
                        background:
                            "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                        color: "white",
                    },
                },
            ],
        },
    },
});
```

## Dark Mode Support

### Theme Mode Configuration

```typescript
const lightTheme = createTheme({
    palette: {
        mode: "light",
        // Light mode colors
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        // Dark mode colors
    },
});
```

### Dynamic Theme Switching

```typescript
// In your component
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ThemeToggle() {
    const theme = useTheme();
    const [mode, setMode] = useState<"light" | "dark">("light");

    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <IconButton onClick={toggleMode}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
}
```

## Spacing and Layout

### Custom Spacing

```typescript
const theme = createTheme({
    spacing: 8, // Default spacing unit (8px)
    // Or custom spacing function
    spacing: (factor: number) => `${0.5 * factor}rem`,
});
```

### Breakpoints

```typescript
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
```

## Using the Theme in Components

### useTheme Hook

```typescript
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export default function MyComponent() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: theme.spacing(2),
                backgroundColor: theme.palette.primary.main,
                [theme.breakpoints.up("md")]: {
                    padding: theme.spacing(4),
                },
            }}
        >
            Content
        </Box>
    );
}
```

### sx Prop

```typescript
import { Box } from "@mui/material";

export default function MyComponent() {
    return (
        <Box
            sx={{
                padding: 2, // theme.spacing(2)
                backgroundColor: "primary.main", // theme.palette.primary.main
                "&:hover": {
                    backgroundColor: "primary.dark",
                },
                [theme.breakpoints.up("md")]: {
                    padding: 4,
                },
            }}
        >
            Content
        </Box>
    );
}
```

### styled Components

```typescript
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
}));
```

## Advanced Theming

### Theme Augmentation

```typescript
// Extend the theme interface
declare module "@mui/material/styles" {
    interface Theme {
        custom: {
            gradient: string;
            shadow: string;
        };
    }
    interface ThemeOptions {
        custom?: {
            gradient?: string;
            shadow?: string;
        };
    }
}

const theme = createTheme({
    custom: {
        gradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        shadow: "0 2px 8px rgba(0,0,0,0.15)",
    },
});
```

### Theme Provider Setup

```typescript
// In your root layout
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/theme";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
```

## Best Practices

### 1. Consistent Color Usage

-   Use theme colors instead of hardcoded values
-   Follow the established color palette
-   Test colors in both light and dark modes

### 2. Responsive Design

-   Use breakpoints for responsive layouts
-   Test on different screen sizes
-   Use the spacing system consistently

### 3. Performance

-   Avoid creating new theme objects in render
-   Use theme values in sx prop for better performance
-   Consider theme caching for complex applications

### 4. Accessibility

-   Ensure sufficient color contrast
-   Test with screen readers
-   Follow WCAG guidelines

### 5. Documentation

-   Document custom theme values
-   Provide examples for complex customizations
-   Keep theme configuration organized

## Troubleshooting

### Common Issues

1. **Theme not applying**: Check if ThemeProvider is wrapping your components
2. **Type errors**: Ensure proper theme augmentation
3. **Performance issues**: Avoid creating theme objects in render
4. **Dark mode not working**: Check theme mode configuration

### Debugging

```typescript
// Log theme values for debugging
console.log("Current theme:", theme);
console.log("Palette:", theme.palette);
console.log("Spacing:", theme.spacing);
```
