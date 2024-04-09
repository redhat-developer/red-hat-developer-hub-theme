import React from "react";
import { ConfigApi, configApiRef, useApi } from "@backstage/core-plugin-api";

export type BrandingThemeColors = {
  primaryColor?: string;
  headerColor1?: string;
  headerColor2?: string;
  navigationIndicatorColor?: string;
};

export const useBrandingThemeColors = (
  themeName: string,
): BrandingThemeColors => {
  let configApi: ConfigApi | undefined = undefined;
  try {
    configApi = useApi(configApiRef);
  } catch (err) {
    // useApi won't be initialized initially in createApp theme provider, and will get updated later
  }
  return React.useMemo(() => {
    const brandingThemeColors: BrandingThemeColors = {};
    if (configApi) {
      brandingThemeColors.primaryColor = configApi.getOptionalString(
        `app.branding.theme.${themeName}.primaryColor`,
      );
      brandingThemeColors.headerColor1 = configApi.getOptionalString(
        `app.branding.theme.${themeName}.headerColor1`,
      );
      brandingThemeColors.headerColor2 = configApi.getOptionalString(
        `app.branding.theme.${themeName}.headerColor2`,
      );
      brandingThemeColors.navigationIndicatorColor =
        configApi.getOptionalString(
          `app.branding.theme.${themeName}.navigationIndicatorColor`,
        );
    }
    return brandingThemeColors;
  }, [configApi]);
};
