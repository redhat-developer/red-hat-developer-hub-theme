import { palettes } from "@backstage/theme";
import { ThemeConfig } from "../../types";

export const getDefaultThemeConfig = (mode: "light" | "dark"): ThemeConfig => {
  const palette = mode === "dark" ? palettes.dark : palettes.light;

  return {
    variant: "backstage",
    mode: mode === "dark" ? "dark" : "light",
    palette,
  };
};
