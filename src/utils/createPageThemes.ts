import { PageTheme } from "@backstage/theme";
import { ThemeConfig } from "../types";
import { createPageTheme } from "./createPageTheme";

export const createPageThemes = (
  themeConfig: ThemeConfig | undefined,
): Record<string, PageTheme> | undefined => {
  if (!themeConfig?.pageTheme || !Object.keys(themeConfig.pageTheme).length) {
    return undefined;
  }

  const pageThemes: Record<string, PageTheme> = {};

  for (const page in themeConfig.pageTheme) {
    pageThemes[page] = createPageTheme(themeConfig.pageTheme[page]);
  }

  return pageThemes;
};
