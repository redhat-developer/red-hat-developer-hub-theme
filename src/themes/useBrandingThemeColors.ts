import React from "react";
import { ConfigApi, configApiRef, useApi } from "@backstage/core-plugin-api";
import { ThemeColors as BrandingThemeColors } from "./rhdh/types";

export { ThemeColors as BrandingThemeColors } from "./rhdh/types";

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
      brandingThemeColors.headerColor1 =
        configApi.getOptionalString(
          `app.branding.theme.${themeName}.rhdh.headerColor1`,
        ) ??
        // Fallback to `headerColor1` key from RHDH release 1.0-1.2
        configApi.getOptionalString(
          `app.branding.theme.${themeName}.headerColor1`,
        );

      brandingThemeColors.headerColor2 =
        configApi.getOptionalString(
          `app.branding.theme.${themeName}.rhdh.headerColor2`,
        ) ??
        // Fallback to `headerColor2` key from RHDH release 1.0-1.2
        configApi.getOptionalString(
          `app.branding.theme.${themeName}.headerColor2`,
        );

      brandingThemeColors.navigationIndicatorColor =
        configApi.getOptionalString(
          `app.branding.theme.${themeName}.rhdh.navigationIndicatorColor`,
        ) ??
        // Fallback to `navigationIndicatorColor` key from RHDH release 1.0-1.2
        configApi.getOptionalString(
          `app.branding.theme.${themeName}.navigationIndicatorColor`,
        );

      brandingThemeColors.primary = colorKeys.reduce(
        (acc, key) => {
          acc[key] = configApi.getOptionalString(
            `app.branding.theme.${themeName}.rhdh.primary.${key}`,
          );
          return acc;
        },
        {} as Record<string, string | undefined>,
      );
      // Fallback to `primaryColor` key from RHDH release 1.0-1.2
      if (!brandingThemeColors.primary.main) {
        brandingThemeColors.primary.main = configApi.getOptionalString(
          `app.branding.theme.${themeName}.primaryColor`,
        );
      }

      brandingThemeColors.secondary = colorKeys.reduce(
        (acc, key) => {
          acc[key] = configApi.getOptionalString(
            `app.branding.theme.${themeName}.rhdh.secondary.${key}`,
          );
          return acc;
        },
        {} as Record<string, string | undefined>,
      );
    }
    return brandingThemeColors;
  }, [configApi]);
};
