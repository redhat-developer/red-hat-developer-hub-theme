import React from "react";
import { configApiRef, useApi } from "@backstage/core-plugin-api";

export type ThemeColors = {
  primaryColor?: string;
  headerColor1?: string;
  headerColor2?: string;
  navigationIndicatorColor?: string;
};

export const useThemeColors = (themeName: string): ThemeColors => {
  const configApi = useApi(configApiRef);
  return React.useMemo(() => {
    const themeColors: ThemeColors = {};
    try {
      themeColors.primaryColor = configApi.getOptionalString(
        `app.branding.theme.${themeName}.primaryColor`,
      );
      themeColors.headerColor1 = configApi.getOptionalString(
        `app.branding.theme.${themeName}.headerColor1`,
      );
      themeColors.headerColor2 = configApi.getOptionalString(
        `app.branding.theme.${themeName}.headerColor2`,
      );
      themeColors.navigationIndicatorColor = configApi.getOptionalString(
        `app.branding.theme.${themeName}.navigationIndicatorColor`,
      );
    } catch (err) {
      // useApi won't be initialized initially in createApp theme provider, and will get updated later
    }
    return themeColors;
  }, [themeName, configApi]);
};
