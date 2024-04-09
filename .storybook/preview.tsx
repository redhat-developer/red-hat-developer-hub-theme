import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { configApiRef, errorApiRef } from '@backstage/core-plugin-api';
import { translationApiRef, TranslationApi } from '@backstage/core-plugin-api/alpha';
import { ConfigReader, AlertApiForwarder, ErrorAlerter, ErrorApiForwarder } from '@backstage/core-app-api';
import { TestApiProvider } from '@backstage/test-utils';
import { MockTranslationApi } from '@backstage/test-utils/alpha';

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

import * as muiLight from "../src/themes/mui-light";
import * as muiDark from "../src/themes/mui-dark";
import * as muiHelloween from "../src/themes/mui-helloween";
import * as backstageLight from "../src/themes/backstage-light";
import * as backstageDark from "../src/themes/backstage-dark";
import * as rhdh10 from "../src/themes/rhdh-1.0";
import * as rhdh11 from "../src/themes/rhdh-1.1";
import * as rhdh from "../src/themes/rhdh";

const configApi = new ConfigReader({});
const alertApi = new AlertApiForwarder();
const errorApi = new ErrorAlerter(alertApi, new ErrorApiForwarder());
const translationApi: TranslationApi = MockTranslationApi.create();

export const apis = [
  [configApiRef, configApi],
  [errorApiRef, errorApi],
  [translationApiRef, translationApi],
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
        'MUI Light': muiLight.themeOptions,
        'MUI Dark': muiDark.themeOptions,
        'MUI Helloween': muiHelloween.options,

        'Backstage Light': backstageLight.backstageLightThemeOptions,
        'Backstage Dark': backstageDark.backstageDarkThemeOptions,

        // 'Patternfly 4 Light': patternfly4LightThemeOptions,
        // 'Patternfly 4 Dark': patternfly4DarkThemeOptions,
        // 'Patternfly 5 Light': patternfly5LightThemeOptions,
        // 'Patternfly 5 Dark': patternfly5DarkThemeOptions,

        'RHDH 1.0 Light': rhdh10.customLightTheme(rhdhColors.light),
        'RHDH 1.0 Dark': rhdh10.customDarkTheme(rhdhColors.dark),
        'RHDH 1.1 Light': rhdh11.customLightTheme(rhdhColors.light),
        'RHDH 1.1 Dark': rhdh11.customDarkTheme(rhdhColors.dark),
        'RHDH Light (latest)': rhdh.customLightTheme(rhdhColors.light),
        'RHDH Dark (latest)': rhdh.customDarkTheme(rhdhColors.dark),
      },
      defaultTheme: "RHDH 1.1 Dark",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
