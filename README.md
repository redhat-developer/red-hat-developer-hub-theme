# 🎨 MUI-themes

This package contains some (simple?) themes for the
[MUI Material UI](https://mui.com/material-ui/) component libray
and a [Storybook](https://storybook.js.org/) to test them.

🚧 We will move this package to another shared org (hopefully soon) 🚧

# The examples below aren't tested yet!

## Install dependencies

```
npm install @jerolimov/mui-themes
```

## Use a Material UI v4 theme provider

See: [Material UI v4 - Theming doc](https://v4.mui.com/customization/theming/)

Summary: Wrap your application code into a `ThemeProvider` component:

```tsx
import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { muiV4LightThemeOptions } from '@jerolimov/mui-themes';

const theme = createTheme(muiV4LightThemeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* your app components or other providers */}
    </ThemeProvider>
  );
}
```

## Use a MUI v5 theme provider

See: [MUI v5 - Theming doc](https://mui.com/material-ui/customization/theming/)

Summary: Wrap your application code into a `ThemeProvider` component:

```tsx
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { muiV5LightThemeOptions } from '@jerolimov/mui-themes';

const theme = createTheme(muiV5LightThemeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* your app components or other providers */}
    </ThemeProvider>
  );
}
```

## Use the Backstage configuration

See: [Backstage - Using your Custom Theme doc](https://backstage.io/docs/getting-started/app-custom-theme/#using-your-custom-theme)

Tl;dr: Backstage uses MUI v5 `adaptTheme` feature to use a v5 theming object to create theming objects for Material UI v4 and MUI v5, also if the most Backstage components uses Material UI v4 components at the moment. This allow each plugin to migrate individual from v4 to v5.

Summary: In your `packages/app/src/App.tsx` add this new dependency:

```tsx
import { createApp } from '@backstage/app-defaults';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/WbSunny'; ???

// Exact API tbd...
import { backstageDarkTheme, backstageLightTheme } from '@jerolimov/mui-themes';

const app = createApp({
  apis: ...,
  plugins: ...,
  themes: [
    {
      id: 'light-theme',
      title: 'Light theme',
      variant: 'light',
      icon: <LightIcon />,
      Provider: ({ children }) => (
        <ThemeProvider theme={backstageLightTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
    {
      id: 'dark-theme',
      title: 'Dark theme',
      variant: 'dark',
      icon: <DarkIcon />,
      Provider: ({ children }) => (
        <ThemeProvider theme={backstageDarkTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
  ]
})
```

## Or with the Backstage unitied theme provider (for example in test cases)

```tsx
import React from 'react';
import { createUnifiedTheme, UnifiedThemeProvider } from '@backstage/theme';

import { TODO } from '@jerolimov/mui-themes';

const theme = createUnifiedTheme(TODO);

export default function App() {
  return (
    <UnifiedThemeProvider theme={theme}>
      {/* your app components or other providers */}
    </UnifiedThemeProvider>
  );
}
```

## RHDH

* how to use this with dynamic plugins?
* how to apply customizatons (overrides)
