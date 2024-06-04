import React from "react";
import { ConfigApi, configApiRef, useApi } from "@backstage/core-plugin-api";

type PrimaryColors = {
  [key: string]: string | undefined;
};

type SecondaryColors = {
  [key: string]: string | undefined;
};

export type BrandingThemeColors = {
  primary?: PrimaryColors;
  secondary?: SecondaryColors;
  headerColor1?: string;
  headerColor2?: string;
  navigationIndicatorColor?: string;
};

const colorKeys = [
  "main",
  "containedButtonBackground",
  "textHover",
  "focusVisibleBorder",
  "dark",
];

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

      brandingThemeColors.primary = colorKeys.reduce((acc, key) => {
        acc[key] = configApi.getOptionalString(
          `app.branding.theme.${themeName}.primary.${key}`,
        );
        return acc;
      }, {} as PrimaryColors);

      brandingThemeColors.secondary = colorKeys.reduce((acc, key) => {
        acc[key] = configApi.getOptionalString(
          `app.branding.theme.${themeName}.secondary.${key}`,
        );
        return acc;
      }, {} as SecondaryColors);
    }
    return brandingThemeColors;
  }, [configApi]);
};
