import React from "react";
import { type UnifiedThemeOptions } from "@backstage/theme";
import type { ThemeConfig } from "../types";
import * as backstage from "../themes/backstage";
import * as rhdh from "../themes/rhdh";
import * as rhdh10 from "../themes/rhdh-1.0";
import { type ThemeColors as RHDH10ThemeColors } from "../themes/rhdh-1.0/types";
import * as rhdh11 from "../themes/rhdh-1.1";
import * as rhdh120 from "../themes/rhdh-1.2.0";
import { migrateThemeConfig } from "../utils/migrateTheme";
import { mergeUnifiedThemeOptions } from "../utils/mergeTheme";
import { createPageThemes } from "../utils/createPageThemes";

/** Creates a memorized Backstage UnifiedThemeOptions based on the given ThemeConfig. */
export const useThemeOptions = (
  themeConfig: ThemeConfig,
): UnifiedThemeOptions => {
  const theme = React.useMemo<UnifiedThemeOptions>(() => {
    const mode = themeConfig.mode ?? "light";
    const variant = themeConfig.variant ?? "rhdh";

    if (variant === "rhdh-1.0") {
      return rhdh10.customDarkTheme(themeConfig as RHDH10ThemeColors);
    }
    if (variant === "rhdh-1.1") {
      return rhdh11.customDarkTheme(themeConfig as RHDH10ThemeColors);
    }
    if (variant === "rhdh-1.2.0") {
      return rhdh120.customDarkTheme(themeConfig as RHDH10ThemeColors);
    }

    let defaultThemeConfig: ThemeConfig;
    if (variant === "backstage") {
      defaultThemeConfig = backstage.getDefaultThemeConfig(mode);
    } else {
      defaultThemeConfig = rhdh.getDefaultThemeConfig(mode);
    }

    const migratedThemeConfig = migrateThemeConfig(themeConfig);
    const mergedThemeConfig = mergeUnifiedThemeOptions(
      defaultThemeConfig,
      migratedThemeConfig,
    );

    const unifiedThemeOption: UnifiedThemeOptions = {
      palette: mergedThemeConfig.palette as UnifiedThemeOptions["palette"],
      defaultPageTheme: mergedThemeConfig.defaultPageTheme,
      fontFamily: mergedThemeConfig.fontFamily,
      htmlFontSize: mergedThemeConfig.htmlFontSize,
      typography: mergedThemeConfig.typography,
    };

    unifiedThemeOption.pageTheme = createPageThemes(mergedThemeConfig);

    if (variant !== "backstage") {
      unifiedThemeOption.components = rhdh.components(mergedThemeConfig);
    }

    return unifiedThemeOption;
  }, [themeConfig]);
  return theme;
};
