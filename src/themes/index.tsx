import React from "react";
import { AppTheme } from "@backstage/core-plugin-api";
import { UnifiedTheme, UnifiedThemeProvider, themes } from "@backstage/theme";
import LightIcon from "@mui/icons-material/WbSunny";
import DarkIcon from "@mui/icons-material/Brightness2";

import * as rhdh10 from "./rhdh-1.0";
import * as rhdh11 from "./rhdh-1.1";
import * as rhdh12 from "./rhdh-1.2";
import { useThemeColors } from "./useThemeColors";

const createProvider =
  (theme: UnifiedTheme): AppTheme["Provider"] =>
  ({ children }) => {
    return (
      <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
    );
  };

export const createDevAppThemes = (): AppTheme[] => {
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

export const useAllThemes = (): AppTheme[] => {
  return React.useMemo(() => createDevAppThemes(), []);
};

export const useThemes = (): AppTheme[] => {
  const lightThemeColors = useThemeColors("light");
  const lightTheme = React.useMemo(
    () => rhdh12.customLightTheme(lightThemeColors),
    [lightThemeColors],
  );
  const darkThemeColors = useThemeColors("dark");
  const darkTheme = React.useMemo(
    () => rhdh12.customLightTheme(darkThemeColors),
    [darkThemeColors],
  );
  return React.useMemo(
    () => [
      {
        id: "light",
        title: "Light",
        variant: "light",
        icon: <LightIcon />,
        Provider: createProvider(lightTheme),
      },
      {
        id: "dark",
        title: "Dark",
        variant: "dark",
        icon: <DarkIcon />,
        Provider: createProvider(darkTheme),
      },
    ],
    [],
  );
};
