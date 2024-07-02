import React from "react";
import { AppTheme } from "@backstage/core-plugin-api";
import {
  UnifiedTheme,
  UnifiedThemeProvider,
  createUnifiedTheme,
  themes,
} from "@backstage/theme";
import LightIcon from "@material-ui/icons/WbSunny";
import DarkIcon from "@material-ui/icons/Brightness2";
import { createTheme } from "@mui/material/styles";

import { useThemeConfig } from "../hooks/useThemeConfig";

import * as backstage from "./backstage";
import * as rhdh10 from "./rhdh-1.0";
import * as rhdh11 from "./rhdh-1.1";
import * as rhdh120 from "./rhdh-1.2.0";
import * as rhdh from "./rhdh";
import { ThemeConfig } from "../types";
import { useTheme } from "../hooks/useTheme";

const createThemeProvider = (theme: UnifiedTheme): AppTheme["Provider"] =>
  function RHDHThemeProvider({ children }) {
    return (
      <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
    );
  };

const createThemeProviderForThemeConfig = (
  themeConfig: ThemeConfig,
): AppTheme["Provider"] =>
  function RHDHThemeProviderForThemeConfig({ children }) {
    const theme = useTheme(themeConfig);
    return (
      <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
    );
  };

const createThemeProviderForThemeName = (
  themeName: string,
): AppTheme["Provider"] =>
  function RHDHThemeProviderForThemeName({ children }) {
    const themeConfig = useThemeConfig(themeName);
    const theme = useTheme(themeConfig);
    return (
      <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
    );
  };

export const getAllThemes = (): AppTheme[] => {
  return [
    {
      id: "light",
      title: "RHDH Light (latest)",
      variant: "light",
      icon: <LightIcon />,
      Provider: createThemeProviderForThemeName("light"),
    },
    {
      id: "dark",
      title: "RHDH Dark (latest)",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createThemeProviderForThemeName("dark"),
    },
    {
      id: "light-customized",
      title: "RHDH Light (customized)",
      variant: "light",
      icon: <LightIcon />,
      Provider: createThemeProviderForThemeConfig({
        mode: "light",
        variant: "rhdh",
        palette: {
          primary: { main: "#ff0000" },
          secondary: { main: "#00ff00" },
        },
      }),
    },
    {
      id: "dark-customized",
      title: "RHDH Dark (customized)",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createThemeProviderForThemeConfig({
        mode: "dark",
        variant: "rhdh",
        palette: {
          primary: { main: "#ff0000" },
          secondary: { main: "#00ff00" },
        },
      }),
    },
    {
      id: "backstage-light",
      title: "Backstage Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createThemeProvider(themes.light),
    },
    {
      id: "backstage-dark",
      title: "Backstage Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createThemeProvider(themes.dark),
    },
    {
      id: "rhdh-1.2.0-light",
      title: "RHDH 1.2.0 Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createThemeProvider(
        createUnifiedTheme(rhdh120.customLightTheme({})),
      ),
    },
    {
      id: "rhdh-1.2.0-dark",
      title: "RHDH 1.2.0 Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createThemeProvider(
        createUnifiedTheme(rhdh120.customDarkTheme({})),
      ),
    },
    {
      id: "rhdh-1.1-light",
      title: "RHDH 1.1 Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createThemeProvider(
        createUnifiedTheme(rhdh11.customLightTheme({})),
      ),
    },
    {
      id: "rhdh-1.1-dark",
      title: "RHDH 1.1 Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createThemeProvider(
        createUnifiedTheme(rhdh11.customDarkTheme({})),
      ),
    },
    {
      id: "rhdh-1.0-light",
      title: "RHDH 1.0 Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createThemeProvider(
        createUnifiedTheme(rhdh10.customLightTheme({})),
      ),
    },
    {
      id: "rhdh-1.0-dark",
      title: "RHDH 1.0 Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createThemeProvider(
        createUnifiedTheme(rhdh10.customDarkTheme({})),
      ),
    },
  ];
};

export const useAllThemes = (): AppTheme[] => {
  return React.useMemo(() => getAllThemes(), []);
};

export const getThemes = (): AppTheme[] => {
  return [
    {
      id: "light",
      title: "Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createThemeProviderForThemeName("light"),
    },
    {
      id: "dark",
      title: "Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createThemeProviderForThemeName("dark"),
    },
  ];
};

export const useThemes = (): AppTheme[] => {
  return React.useMemo(() => getThemes(), []);
};

export const useLoaderTheme = () => {
  return React.useMemo(() => {
    const latestTheme = localStorage.getItem("theme");
    const mode = latestTheme?.includes("dark") ? "dark" : "light";
    const variant = latestTheme?.includes("backstage") ? "backstage" : "rhdh";
    const themeOptions =
      variant === "backstage"
        ? backstage.getDefaultThemeConfig(mode)
        : rhdh.getDefaultThemeConfig(mode);
    return createTheme(themeOptions);
  }, []);
};
