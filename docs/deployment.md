# Deployment

This guide covers different deployment options for the Website Template.

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Automatic Deployment

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your app

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

#### Environment Variables

Set environment variables in Vercel dashboard:

-   `NODE_ENV=production`
-   Any custom environment variables

### 2. Netlify

#### Build Settings

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Deployment Steps

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### 3. AWS Amplify

#### Build Settings

```yaml
# amplify.yml
version: 1
frontend:
    phases:
        preBuild:
            commands:
                - npm install
        build:
            commands:
                - npm run build
    artifacts:
        baseDirectory: .next
        files:
            - "**/*"
    cache:
        paths:
            - node_modules/**/*
```

### 4. Docker Deployment

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Commands

```bash
# Build image
docker build -t website-template .

# Run container
docker run -p 3000:3000 website-template
```

### 5. Self-Hosted Server

#### Build for Production

```bash
npm run build
npm run start
```

#### Using PM2

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "website-template" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Configuration

### Environment Variables

Create `.env.local` for local development:

```env
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Create `.env.production` for production:

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```

### Build Optimization

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone", // For Docker deployment
    images: {
        domains: ["your-image-domain.com"],
    },
    compress: true,
    poweredByHeader: false,
};

export default nextConfig;
```

## Performance Optimization

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
npm run build
npm run analyze
```

### Caching Strategy

```javascript
// next.config.mjs
const nextConfig = {
    async headers() {
        return [
            {
                source: "/static/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};
```

## Monitoring and Analytics

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
// In your layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
```

### Error Monitoring

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
});
```

## Security Considerations

### Security Headers

```javascript
// next.config.mjs
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin",
                    },
                ],
            },
        ];
    },
};
```

### HTTPS Configuration

-   Always use HTTPS in production
-   Configure SSL certificates
-   Use security headers

## Troubleshooting

### Common Issues

1. **Build Failures**

    - Check Node.js version compatibility
    - Clear `.next` folder and rebuild
    - Verify all dependencies are installed

2. **Environment Variables**

    - Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
    - Check variable names and values

3. **Performance Issues**

    - Use bundle analyzer to identify large dependencies
    - Implement code splitting
    - Optimize images and assets

4. **Deployment Issues**
    - Check build logs for errors
    - Verify environment configuration
    - Test locally before deploying

### Debug Commands

```bash
# Check build output
npm run build

# Analyze bundle size
npm run analyze

# Check for linting errors
npm run lint

# Test production build locally
npm run start
```
