import { themes } from "@backstage/theme";
import { components } from "./componentOverrides";
import { pageTheme } from "./pageTheme";
import { fonts, typography } from "./typography";
import { ThemeColors } from "./types";

export const customDarkTheme = (themeColors: ThemeColors) => ({
  fontFamily: fonts.text,
  typography,
  palette: {
    ...themes.dark.getTheme("v5")?.palette,
    ...(themeColors.primaryColor && {
      primary: {
        ...themes.light.getTheme("v5")?.palette.primary,
        main: themeColors.primaryColor,
      },
    }),
    navigation: {
      background: "#0f1214",
      indicator: themeColors.navigationIndicatorColor || "#0066CC",
      color: "#ffffff",
      selectedColor: "#ffffff",
      navItem: {
        hoverBackground: "#3c3f42",
      },
    },
  },
  defaultPageTheme: "home",
  pageTheme: pageTheme(themeColors),
  components: components(themeColors, "dark"),
});
