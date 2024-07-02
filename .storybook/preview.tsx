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
  UnifiedThemeOptions,
  UnifiedThemeProvider,
} from "@backstage/theme";

import * as rhdh10 from "../src/themes/rhdh-1.0";
import * as rhdh11 from "../src/themes/rhdh-1.1";
import * as rhdh120 from "../src/themes/rhdh-1.2.0";
import { ThemeConfig } from "../src/types";
import { useTheme } from "../src/hooks/useTheme";

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

type Theme =
  | { unifiedTheme: UnifiedTheme }
  | { unifiedThemeOptions: UnifiedThemeOptions }
  | { themeConfig: ThemeConfig };

const themes: Record<string, Theme> = {
  "Backstage Light": { unifiedTheme: backstageTheme.light },
  "Backstage Dark": { unifiedTheme: backstageTheme.dark },

  // Use underline instead of dot, because otherwise the theme switcher
  // will not save the selected theme in local storage.
  "RHDH Light 1-0": {
    unifiedThemeOptions: rhdh10.customLightTheme(rhdhColors.light),
  },
  "RHDH Dark 1-0": {
    unifiedThemeOptions: rhdh10.customDarkTheme(rhdhColors.dark),
  },
  "RHDH Light 1-1": {
    unifiedThemeOptions: rhdh11.customLightTheme(rhdhColors.light),
  },
  "RHDH Dark 1-1": {
    unifiedThemeOptions: rhdh11.customDarkTheme(rhdhColors.dark),
  },
  "RHDH Light 1-2-0": { unifiedThemeOptions: rhdh120.customLightTheme({}) },
  "RHDH Dark 1-2-0": { unifiedThemeOptions: rhdh120.customDarkTheme({}) },

  "RHDH Light latest": {
    themeConfig: {},
  },
  "RHDH Dark latest": {
    themeConfig: {
      mode: "dark",
    },
  },
  "RHDH Light customized old": {
    themeConfig: {
      primaryColor: "#be0000",
      headerColor1: "#be0000",
      headerColor2: "#f56d6d",
      navigationIndicatorColor: "#be0000",
    } as ThemeConfig,
  },
  "RHDH Dark customized old": {
    themeConfig: {
      mode: "dark",
      primaryColor: "#be0000",
      headerColor1: "#be0000",
      headerColor2: "#f56d6d",
      navigationIndicatorColor: "#be0000",
    } as ThemeConfig,
  },
  "RHDH Light customized new": {
    themeConfig: {
      palette: {
        primary: {
          main: "#ff0000",
        },
        secondary: {
          main: "#00ff00",
        },
      },
      defaultPageTheme: "home",
      pageTheme: {
        home: {
          backgroundColor: ["#ff0000", "#00ff00"],
        },
      },
    },
  },
  "RHDH Dark customized new": {
    themeConfig: {
      mode: "dark",
      palette: {
        primary: {
          main: "#ff0000",
        },
        secondary: {
          main: "#00ff00",
        },
      },
      defaultPageTheme: "home",
      pageTheme: {
        home: {
          backgroundColor: ["#ff0000", "#00ff00"],
        },
      },
    },
  },
};

const defaultTheme = "RHDH Light latest";

declare global {
  interface Window {
    changeTheme: (themeName: string) => void;
  }
}

const ThemeProvider = ({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) => {
  const [overrideTheme, setOverrideTheme] = React.useState<string | undefined>(
    undefined,
  );
  window.changeTheme = setOverrideTheme;

  const actualTheme = (overrideTheme && themes[overrideTheme]) || theme;

  if ("unifiedTheme" in actualTheme) {
    return (
      <UnifiedThemeProvider theme={actualTheme.unifiedTheme}>
        <TestApiProvider apis={apis}>{children}</TestApiProvider>
      </UnifiedThemeProvider>
    );
  } else if ("unifiedThemeOptions" in actualTheme) {
    return (
      <UnifiedThemeProvider
        theme={createUnifiedTheme(actualTheme.unifiedThemeOptions)}
      >
        <TestApiProvider apis={apis}>{children}</TestApiProvider>
      </UnifiedThemeProvider>
    );
  } else {
    return (
      <ThemeConfigProvider themeConfig={actualTheme.themeConfig}>
        {children}
      </ThemeConfigProvider>
    );
  }
};

const ThemeConfigProvider = ({
  themeConfig,
  children,
}: {
  themeConfig: ThemeConfig;
  children: React.ReactNode;
}) => {
  const theme = useTheme(themeConfig);
  return (
    <UnifiedThemeProvider theme={theme}>
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
