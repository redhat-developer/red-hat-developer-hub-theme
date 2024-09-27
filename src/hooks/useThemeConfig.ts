import React from "react";
import { ConfigApi, configApiRef, useApi } from "@backstage/core-plugin-api";
import { ThemeConfig } from "../types";

export const useThemeConfig = (themeName: string): ThemeConfig => {
  let configApi: ConfigApi | undefined = undefined;
  try {
    configApi = useApi<ConfigApi>(configApiRef); // NOSONAR
  } catch (err) {
    // useApi won't be initialized initially in createApp theme provider, and will get updated later
  }
  return React.useMemo(() => {
    if (!configApi) {
      return {
        mode: themeName.includes("dark") ? "dark" : "light",
      };
    }
    const themeConfig =
      configApi.getOptional<ThemeConfig>(`app.branding.theme.${themeName}`) ??
      {};
    if (!themeConfig.mode) {
      themeConfig.mode = themeName.includes("dark") ? "dark" : "light";
    }

    if (Array.isArray(themeConfig?.pageTheme?.default.fontColor)) {
      themeConfig.pageTheme.default.fontColor =
        themeConfig.pageTheme.default.fontColor[0];
    }

    return themeConfig;
  }, [configApi]);
};
