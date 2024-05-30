import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { configApiRef, errorApiRef } from "@backstage/core-plugin-api";
import {
  translationApiRef,
  TranslationApi,
} from "@backstage/core-plugin-api/alpha";
import {
  ConfigReader,
  AlertApiForwarder,
  ErrorAlerter,
  ErrorApiForwarder,
} from "@backstage/core-app-api";
import { TestApiProvider } from "@backstage/test-utils";
import { MockTranslationApi } from "@backstage/test-utils/alpha";

import {
  themes as backstageTheme,
  createUnifiedTheme,
  UnifiedTheme,
  UnifiedThemeProvider,
} from "@backstage/theme";

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

const rhdhColors = {
  light: {
    headerColor1: "#be0000",
    headerColor2: "#f56d6d",
    navigationIndicatorColor: "#be0000",
  },
  dark: {
    headerColor1: "#be0000",
    headerColor2: "#f56d6d",
    navigationIndicatorColor: "#be0000",
  },
};

const themes: Record<string, UnifiedTheme> = {
  "Backstage Light": backstageTheme.light,
  "Backstage Dark": backstageTheme.dark,

  "RHDH Light 1-0": rhdh10.customLightTheme(rhdhColors.light),
  "RHDH Dark 1-0": rhdh10.customDarkTheme(rhdhColors.dark),
  "RHDH Light 1-1": rhdh11.customLightTheme(rhdhColors.light),
  "RHDH Dark 1-1": rhdh11.customDarkTheme(rhdhColors.dark),
  "RHDH Light latest": rhdh.customLightTheme(rhdhColors.light),
  "RHDH Dark latest": rhdh.customDarkTheme(rhdhColors.dark),
};

const defaultTheme = "RHDH Light latest";

declare global {
  interface Window {
    changeTheme: (themeName: string) => void;
  }
}

const ThemeProvider = ({ theme, children }) => {
  const [overrideTheme, setOverrideTheme] = React.useState<string | undefined>(
    undefined,
  );
  window.changeTheme = setOverrideTheme;

  const actualTheme = (overrideTheme && themes[overrideTheme]) || theme;

  return (
    <UnifiedThemeProvider
      theme={
        actualTheme.getTheme ? actualTheme : createUnifiedTheme(actualTheme)
      }
    >
      <TestApiProvider apis={apis}>{children}</TestApiProvider>
    </UnifiedThemeProvider>
  );
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
      themes,
      defaultTheme,
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
