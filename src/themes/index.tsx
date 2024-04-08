import React from "react";
import { AppTheme } from "@backstage/core-plugin-api";
import { UnifiedTheme, UnifiedThemeProvider, themes } from "@backstage/theme";
import LightIcon from "@material-ui/icons/WbSunny";
import DarkIcon from "@material-ui/icons/WbSunny";

import * as rhdh10 from "./rhdh-1.0";
import * as rhdh11 from "./rhdh-1.1";
import * as rhdh12 from "./rhdh-1.2";

export { backstageDarkThemeOptions } from "./backstage-dark";
export { backstageLightThemeOptions } from "./backstage-light";

export { themeOptions as muiDarkThemeOptions } from "./mui-dark";
export { themeOptions as muiLightThemeOptions } from "./mui-light";
export { options as muiHelloweenThemeOptions } from "./mui-helloween";

export { themeOptions as patternfly4DarkThemeOptions } from "./patternfly-4-dark";
export { themeOptions as patternfly4LightThemeOptions } from "./patternfly-4-light";
export { themeOptions as patternfly5DarkThemeOptions } from "./patternfly-5-dark";
export { themeOptions as patternfly5LightThemeOptions } from "./patternfly-5-light";

export * as rhdh10 from "./rhdh-1.0";
export * as rhdh11 from "./rhdh-1.1";
export * as rhdh12 from "./rhdh-1.2";

const createProvider =
  (theme: UnifiedTheme): AppTheme["Provider"] =>
  ({ children }) => {
    return (
      <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
    );
  };

export const createDevAppThemes = () => {
  return [
    {
      id: "backstage-light",
      title: "Backstage Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createProvider(themes.light),
    },
    {
      id: "backstage-dark",
      title: "Backstage Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createProvider(themes.dark),
    },
    {
      id: "rhdh-1.0-light",
      title: "RHDH 1.0 Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createProvider(rhdh10.customLightTheme({})),
    },
    {
      id: "rhdh-1.0-dark",
      title: "RHDH 1.0 Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createProvider(rhdh10.customDarkTheme({})),
    },
    {
      id: "rhdh-1.1-light",
      title: "RHDH 1.1 Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createProvider(rhdh11.customLightTheme({})),
    },
    {
      id: "rhdh-1.1-dark",
      title: "RHDH 1.1 Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createProvider(rhdh11.customDarkTheme({})),
    },
    {
      id: "rhdh-1.2-light",
      title: "RHDH 1.2 Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createProvider(rhdh12.customLightTheme({})),
    },
    {
      id: "rhdh-1.2-dark",
      title: "RHDH 1.2 Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createProvider(rhdh12.customDarkTheme({})),
    },
  ];
};

export const useAllThemes = () => {
  return React.useMemo(() => createDevAppThemes(), []);
};

export const useThemes = () => {
  return React.useMemo(
    () => [
      {
        id: "light",
        title: "Light",
        variant: "light",
        icon: <LightIcon />,
        Provider: createProvider(rhdh12.customLightTheme({})),
      },
      {
        id: "dark",
        title: "Dark",
        variant: "dark",
        icon: <DarkIcon />,
        Provider: createProvider(rhdh12.customDarkTheme({})),
      },
    ],
    [],
  );
};
