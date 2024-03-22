import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { configApiRef, errorApiRef } from '@backstage/core-plugin-api';
import { ConfigReader, AlertApiForwarder, ErrorAlerter, ErrorApiForwarder } from '@backstage/core-app-api';
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

import * as themes from "../src/themes";

const configApi = new ConfigReader({});
const alertApi = new AlertApiForwarder();
const errorApi = new ErrorAlerter(alertApi, new ErrorApiForwarder());

export const apis = [
  [configApiRef, configApi],
  [errorApiRef, errorApi],
] as const;

const ThemeProvider = ({ theme, children }) => {
  // console.log('ThemeProvider theme', theme);
  let v4Theme, v5Theme;
  if (theme.getTheme) {
    v4Theme = theme.getTheme('v4');
    v5Theme = theme.getTheme('v5');
  } else {
    v4Theme = createV4Theme(theme);
    v5Theme = createV5Theme(theme);
  }

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

const rhdhColors = {
  light: {
    headerColor1: '#be0000',
    headerColor2: '#f56d6d',
    navigationIndicatorColor: '#be0000',
  },
  dark: {
    headerColor1: '#be0000',
    headerColor2: '#f56d6d',
    navigationIndicatorColor: '#be0000',
  },
};

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
        'MUI Light': themes.muiLightThemeOptions,
        'MUI Dark': themes.muiDarkThemeOptions,
        'MUI Helloween': themes.muiHelloweenThemeOptions,

        'Backstage Light': themes.backstageLightThemeOptions,
        'Backstage Dark': themes.backstageDarkThemeOptions,

        // 'Patternfly 4 Light': themes.patternfly4LightThemeOptions,
        // 'Patternfly 4 Dark': themes.patternfly4DarkThemeOptions,
        'Patternfly 5 Light': themes.patternfly5LightThemeOptions,
        'Patternfly 5 Dark': themes.patternfly5DarkThemeOptions,

        'RHDH 1.0 Light': themes.rhdh10.customLightTheme(rhdhColors.light),
        'RHDH 1.0 Dark': themes.rhdh10.customDarkTheme(rhdhColors.dark),
        'RHDH 1.1 Light': themes.rhdh11.customLightTheme(rhdhColors.light),
        'RHDH 1.1 Dark': themes.rhdh11.customDarkTheme(rhdhColors.dark),
      },
      defaultTheme: "MUI Light", // TODO
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
