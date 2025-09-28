# Best Practice

## Group imports

-   There should be three import groups.
-   Sort imports inside each group alphabetically.

```tsx
import * as React from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import ModeSwitch from '@/components/ModeSwitch';
import theme from '@/theme';
```