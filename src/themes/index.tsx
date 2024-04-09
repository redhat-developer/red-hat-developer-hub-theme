import React from "react";
import { AppTheme } from "@backstage/core-plugin-api";
import { UnifiedTheme, UnifiedThemeProvider, themes } from "@backstage/theme";
import LightIcon from "@mui/icons-material/WbSunny";
import DarkIcon from "@mui/icons-material/Brightness2";
import { createTheme } from "@mui/material/styles";

import * as rhdh10 from "./rhdh-1.0";
import * as rhdh11 from "./rhdh-1.1";
import * as rhdh from "./rhdh";
import {
  BrandingThemeColors,
  useBrandingThemeColors,
} from "./useBrandingThemeColors";

const createProvider =
  (theme: UnifiedTheme): AppTheme["Provider"] =>
  ({ children }) => {
    return (
      <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
    );
  };

const createBrandedProvider =
  (
    brandingThemeName: string,
    brandedThemeFactory: (
      brandingThemeColors: BrandingThemeColors,
    ) => UnifiedTheme,
  ): AppTheme["Provider"] =>
  ({ children }) => {
    const brandingThemeColors = useBrandingThemeColors(brandingThemeName);
    const unifiedTheme = React.useMemo(
      () => brandedThemeFactory(brandingThemeColors),
      [brandingThemeColors],
    );
    return (
      <UnifiedThemeProvider theme={unifiedTheme}>
        {children}
      </UnifiedThemeProvider>
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
      id: "rhdh-latest-light",
      title: "RHDH Light (latest)",
      variant: "light",
      icon: <LightIcon />,
      Provider: createProvider(rhdh.customLightTheme({})),
    },
    {
      id: "rhdh-latest-dark",
      title: "RHDH Dark (Latest)",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createProvider(rhdh.customDarkTheme({})),
    },
  ];
};

export const useAllThemes = (): AppTheme[] => {
  return React.useMemo(() => createDevAppThemes(), []);
};

export const getThemes = (): AppTheme[] => {
  return [
    {
      id: "light",
      title: "Light",
      variant: "light",
      icon: <LightIcon />,
      Provider: createBrandedProvider("light", rhdh.customLightTheme),
    },
    {
      id: "dark",
      title: "Dark",
      variant: "dark",
      icon: <DarkIcon />,
      Provider: createBrandedProvider("dark", rhdh.customDarkTheme),
    },
  ];
};

export const useThemes = (): AppTheme[] => {
  return React.useMemo(() => getThemes(), []);
};

export const useLoaderTheme = () => {
  return React.useMemo(() => {
    const latestTheme = localStorage.getItem("theme");
    const unifiedTheme =
      latestTheme !== "dark"
        ? rhdh.customLightTheme({})
        : rhdh.customDarkTheme({});
    const palette = unifiedTheme.getTheme("v5")?.palette;
    return createTheme({ palette });
  }, []);
};
