import { themes } from "@backstage/theme";
import { components } from "./componentOverrides";
import { pageTheme } from "./pageTheme";
import { fonts, typography } from "./typography";
import { ThemeColors } from "./types";

export const customLightTheme = (themeColors: ThemeColors) => ({
  fontFamily: fonts.text,
  typography,
  palette: {
    ...themes.light.getTheme("v5")?.palette,
    ...(themeColors.primaryColor && {
      primary: {
        ...themes.light.getTheme("v5")?.palette.primary,
        main: themeColors.primaryColor,
      },
    }),
    navigation: {
      background: "#222427",
      indicator: themeColors.navigationIndicatorColor || "#0066CC",
      color: "#ffffff",
      selectedColor: "#ffffff",
      navItem: {
        hoverBackground: "#3c3f42",
      },
    },
    text: {
      primary: "#151515",
      secondary: "#757575",
    },
  },
  defaultPageTheme: "home",
  pageTheme: pageTheme(themeColors),
  components: components(themeColors, "light"),
});
