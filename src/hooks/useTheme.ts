import React from "react";
import { createUnifiedTheme, type UnifiedTheme } from "@backstage/theme";
import type { ThemeConfig } from "../types";
import { useThemeOptions } from "./useThemeOptions";

/** Creates a memorized Backstage UnifiedTheme based on the given ThemeConfig. */
export const useTheme = (themeConfig: ThemeConfig): UnifiedTheme => {
  const unifiedThemeOptions = useThemeOptions(themeConfig);
  const theme = React.useMemo<UnifiedTheme>(
    () => createUnifiedTheme(unifiedThemeOptions),
    [unifiedThemeOptions],
  );
  return theme;
};
