import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { configApiRef, errorApiRef } from '@backstage/core-plugin-api';
import { ConfigReader, AlertApiForwarder, ErrorAlerter, ErrorApiForwarder } from '@backstage/core-app-api';
import { lightTheme, darkTheme, createUnifiedTheme, UnifiedThemeProvider } from '@backstage/theme';
import { TestApiProvider } from '@backstage/test-utils';

import {
  createTheme as createV4Theme,
  ThemeProvider as MUIv4ThemeProvider,
} from '@material-ui/core/styles';

import {
  ThemeProvider as MUIv5ThemeProvider,
  // adaptV4Theme,
  createTheme as createV5Theme,
  CssBaseline,
} from "@mui/material";

import {
  lightThemeOptions,
  darkThemeOptions,
  helloweenThemeOptions,
  patternfly4LightThemeOptions,
  patternfly4DarkThemeOptions,
  patternfly5LightThemeOptions,
  patternfly5DarkThemeOptions
} from "../src/mui";

const configApi = new ConfigReader({});
const alertApi = new AlertApiForwarder();
const errorApi = new ErrorAlerter(alertApi, new ErrorApiForwarder());

export const apis = [
  [configApiRef, configApi],
  [errorApiRef, errorApi],
] as const;

const ThemeProvider = ({ theme, children }) => {
  const v4Theme = createV4Theme(theme);
  const v5Theme = createV5Theme(theme);

  let result = children;

  // Add backstage API context
  result = (
    <TestApiProvider apis={apis}>
      {result}
    </TestApiProvider>
  );

  // Add MUIv4 theme support
  result = (
    <MUIv4ThemeProvider theme={v4Theme}>
      {result}
    </MUIv4ThemeProvider>
  );

  // Add MUIv5 theme support
  result = (
    <MUIv5ThemeProvider theme={v5Theme}>
      {result}
    </MUIv5ThemeProvider>
  );

  // result = (
  //   <UnifiedThemeProvider theme={createUnifiedTheme(theme)}>
  //     {result}
  //   </UnifiedThemeProvider>
  // );

  return result;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        Light: lightThemeOptions,
        Dark: darkThemeOptions,
        Helloween: helloweenThemeOptions,
        // 'Patternfly 4 Light': patternfly4LightThemeOptions,
        // 'Patternfly 4 Dark': patternfly4DarkThemeOptions,
        'Patternfly 5 Light': patternfly5LightThemeOptions,
        'Patternfly 5 Dark': patternfly5DarkThemeOptions,
        'Backstage Light': lightTheme,
        'Backstage Dark': darkTheme,
      },
      defaultTheme: "Light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
