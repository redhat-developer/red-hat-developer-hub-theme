// Keep ../../../src reference here so that the files are also found from the dist folder!
import "../../../src/fonts/font.css";

import { ThemeConfig } from "../../types";
import { customDarkTheme } from "./darkTheme";
import { customLightTheme } from "./lightTheme";
import { fonts, typography } from "./typography";

export const getDefaultThemeConfig = (mode: "light" | "dark"): ThemeConfig => {
  const palette = mode === "dark" ? customDarkTheme() : customLightTheme();

  return {
    variant: "rhdh",
    mode: mode === "dark" ? "dark" : "light",
    palette,
    fontFamily: fonts.text,
    typography,
    defaultPageTheme: "default",
    pageTheme: {
      default: {
        backgroundColor: mode === "dark" ? "#0f1214" : "#ffffff",
      },
    },
    options: {},
  };
};

export { components } from "./components";
