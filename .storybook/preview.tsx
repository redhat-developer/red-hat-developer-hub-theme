import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { configApiRef, errorApiRef } from '@backstage/core-plugin-api';
import { translationApiRef, TranslationApi } from '@backstage/core-plugin-api/alpha';
import { ConfigReader, AlertApiForwarder, ErrorAlerter, ErrorApiForwarder } from '@backstage/core-app-api';
import { TestApiProvider } from '@backstage/test-utils';
import { MockTranslationApi } from '@backstage/test-utils/alpha';

import { themes as backstageTheme, createUnifiedTheme, UnifiedThemeProvider } from '@backstage/theme';

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
  return (
    <UnifiedThemeProvider theme={theme.getTheme ? theme : createUnifiedTheme(theme)}>
      <TestApiProvider apis={apis}>
        {children}
      </TestApiProvider>
    </UnifiedThemeProvider>
  );
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
  // parameters: {
  //   actions: { argTypesRegex: "^on[A-Z].*" },
  //   controls: {
  //     matchers: {
  //       color: /(background|color)$/i,
  //       date: /Date$/i,
  //     },
  //   },
  // },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        'Backstage Light': backstageTheme.light,
        'Backstage Dark': backstageTheme.dark,

        'RHDH 1.0 Light': rhdh10.customLightTheme(rhdhColors.light),
        'RHDH 1.0 Dark': rhdh10.customDarkTheme(rhdhColors.dark),
        'RHDH 1.1 Light': rhdh11.customLightTheme(rhdhColors.light),
        'RHDH 1.1 Dark': rhdh11.customDarkTheme(rhdhColors.dark),
        'RHDH Light (latest)': rhdh.customLightTheme(rhdhColors.light),
        'RHDH Dark (latest)': rhdh.customDarkTheme(rhdhColors.dark),
      },
      defaultTheme: "RHDH Light (latest)",
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
