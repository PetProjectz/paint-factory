# Troubleshooting

This guide helps you resolve common issues when working with the Website Template.

## Common Issues

### Build Issues

#### 1. Build Fails with TypeScript Errors

**Problem**: TypeScript compilation errors during build.

**Solutions**:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check TypeScript configuration
npx tsc --noEmit
```

#### 2. Material-UI Theme Errors

**Problem**: Theme-related TypeScript errors.

**Solutions**:

```typescript
// Ensure proper theme type extension
declare module "@mui/material/styles" {
    interface Theme {
        custom: {
            gradient: string;
            shadow: string;
        };
    }
}
```

#### 3. Build Size Too Large

**Problem**: Bundle size is unexpectedly large.

**Solutions**:

```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer

# Add to package.json
"analyze": "ANALYZE=true next build"
```

### Runtime Issues

#### 1. Hydration Mismatch

**Problem**: Server and client rendering don't match.

**Solutions**:

```tsx
// Add suppressHydrationWarning to html tag
<html lang="en" suppressHydrationWarning>

// Use useEffect for client-only code
useEffect(() => {
  // Client-only code here
}, []);
```

#### 2. Theme Not Applying

**Problem**: Material-UI theme not working correctly.

**Solutions**:

```tsx
// Check ThemeProvider is wrapping components
<ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
</ThemeProvider>;

// Verify theme import
import theme from "@/theme";
```

#### 3. Dark Mode Not Persisting

**Problem**: Dark mode preference not saved.

**Solutions**:

```tsx
// Check localStorage access
const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("themeMode") || "light";
    }
    return "light";
});

// Save to localStorage
useEffect(() => {
    localStorage.setItem("themeMode", mode);
}, [mode]);
```

### Development Issues

#### 1. Hot Reload Not Working

**Problem**: Changes not reflecting in development.

**Solutions**:

```bash
# Restart development server
npm run dev

# Clear browser cache
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Check file watching
npm run dev -- --turbo
```

#### 2. ESLint Errors

**Problem**: Linting errors in code.

**Solutions**:

```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix

# Check ESLint configuration
cat .eslintrc.json
```

#### 3. TypeScript Errors

**Problem**: TypeScript compilation errors.

**Solutions**:

```bash
# Check TypeScript configuration
npx tsc --noEmit

# Update TypeScript
npm install --save-dev typescript@latest

# Check type definitions
npm install --save-dev @types/react @types/react-dom
```

### Performance Issues

#### 1. Slow Page Load

**Problem**: Pages loading slowly.

**Solutions**:

```tsx
// Implement code splitting
import dynamic from "next/dynamic";

const LazyComponent = dynamic(() => import("./LazyComponent"), {
    loading: () => <p>Loading...</p>,
});

// Optimize images
import Image from "next/image";

<Image src="/image.jpg" alt="Description" width={500} height={300} priority />;
```

#### 2. Large Bundle Size

**Problem**: JavaScript bundle is too large.

**Solutions**:

```tsx
// Use dynamic imports
const HeavyComponent = dynamic(() => import("./HeavyComponent"));

// Optimize Material-UI imports
import { Button } from "@mui/material";
// Instead of
import { Button } from "@mui/material/Button";
```

#### 3. Memory Leaks

**Problem**: Memory usage increasing over time.

**Solutions**:

```tsx
// Clean up event listeners
useEffect(() => {
    const handleResize = () => {
        // Handle resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

// Clean up subscriptions
useEffect(() => {
    const subscription = someService.subscribe();

    return () => {
        subscription.unsubscribe();
    };
}, []);
```

### Deployment Issues

#### 1. Build Fails in Production

**Problem**: Build works locally but fails in production.

**Solutions**:

```bash
# Check Node.js version
node --version

# Use same Node.js version locally
nvm use 18

# Check environment variables
echo $NODE_ENV
```

#### 2. Static Assets Not Loading

**Problem**: Images, CSS, or JS files not loading.

**Solutions**:

```javascript
// Check next.config.mjs
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
    basePath: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
};
```

#### 3. Environment Variables Not Working

**Problem**: Environment variables not accessible.

**Solutions**:

```bash
# Check variable naming
NEXT_PUBLIC_API_URL=https://api.example.com

# Verify in component
console.log(process.env.NEXT_PUBLIC_API_URL);
```

### Browser Compatibility

#### 1. Internet Explorer Issues

**Problem**: App not working in Internet Explorer.

**Solutions**:

```json
// Update browserslist in package.json
{
    "browserslist": ["> 1%", "last 2 versions", "not dead"]
}
```

#### 2. Safari Issues

**Problem**: Issues specific to Safari.

**Solutions**:

```css
/* Add Safari-specific fixes */
-webkit-appearance: none;
-webkit-tap-highlight-color: transparent;
```

#### 3. Mobile Issues

**Problem**: Issues on mobile devices.

**Solutions**:

```tsx
// Add viewport meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />

// Use responsive design
<Box
  sx={{
    padding: { xs: 1, sm: 2, md: 3 },
  }}
>
  Content
</Box>
```

## Debugging Tools

### Browser DevTools

#### React DevTools

```bash
# Install React DevTools browser extension
# Available for Chrome, Firefox, Safari
```

#### Material-UI DevTools

```bash
# Install MUI DevTools
npm install --save-dev @mui/devtools
```

### Console Debugging

#### Theme Debugging

```tsx
import { useTheme } from "@mui/material/styles";

const theme = useTheme();
console.log("Current theme:", theme);
console.log("Palette:", theme.palette);
console.log("Spacing:", theme.spacing);
```

#### Component Debugging

```tsx
import { useEffect } from "react";

useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
}, []);
```

### Performance Debugging

#### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
npm run analyze
```

#### Performance Monitoring

```tsx
// Add performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## Getting Help

### Community Resources

1. **GitHub Issues**: Report bugs and request features
2. **Stack Overflow**: Ask technical questions
3. **Discord/Slack**: Join community channels
4. **Documentation**: Check official docs

### Useful Commands

```bash
# Check project health
npm run lint
npm run build
npm run start

# Debug mode
DEBUG=* npm run dev

# Verbose logging
npm run dev -- --verbose

# Check dependencies
npm audit
npm outdated
```

### Log Files

#### Next.js Logs

```bash
# Check build logs
npm run build 2>&1 | tee build.log

# Check runtime logs
npm run start 2>&1 | tee runtime.log
```

#### Browser Console

-   Open DevTools (F12)
-   Check Console tab for errors
-   Check Network tab for failed requests
-   Check Performance tab for bottlenecks

## Prevention

### Best Practices

1. **Regular Updates**: Keep dependencies updated
2. **Code Quality**: Use ESLint and Prettier
3. **Testing**: Write tests for critical functionality
4. **Monitoring**: Set up error tracking
5. **Documentation**: Keep docs up to date

### Maintenance

```bash
# Regular maintenance tasks
npm update
npm audit fix
npm run lint
npm run build
```

### Monitoring

```tsx
// Add error boundaries
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }: { error: Error }) {
    return (
        <div role="alert">
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
        </div>
    );
}
```

If you're still experiencing issues after trying these solutions, please:

1. Check the [GitHub Issues](https://github.com/your-repo/issues)
2. Create a new issue with detailed information
3. Include error messages, steps to reproduce, and environment details
4. Provide relevant code snippets and screenshots
