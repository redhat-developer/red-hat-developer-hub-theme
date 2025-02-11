import { palettes } from "@backstage/theme";
import { type PaletteOptions } from "@mui/material";
import { type ThemeConfigPalette } from "../../types";

export const customDarkTheme = (): ThemeConfigPalette => {
  const palette: (typeof palettes)["dark"] & PaletteOptions = palettes.dark;
  return {
    ...palette,
    primary: {
      main: "#1FA7F8",
    },
    secondary: {
      main: "#1FA7F8",
    },
    navigation: {
      background: "#0f1214",
      indicator: "#0066CC",
      color: "#ffffff",
      selectedColor: "#ffffff",
      navItem: {
        hoverBackground: "#3c3f42",
      },
      submenu: {
        background: "#0f1214",
      },
    },
    rhdh: {
      general: {
        disabledBackground: "#444548",
        disabled: "#AAABAC",
        formControlBackgroundColor: "#36373A",
        mainSectionBackgroundColor: "#0f1214",
        headerBottomBorderColor: "#A3A3A3",
        cardBackgroundColor: "#1b1d21",
        sidebarBackgroundColor: "#1b1d21",
        sidebarItemSelectedBackgroundColor: "#4F5255",
        cardBorderColor: "#A3A3A3",
        tableTitleColor: "#E0E0E0",
        tableSubtitleColor: "#E0E0E0",
        tableColumnTitleColor: "#E0E0E0",
        tableRowHover: "#0f1214",
        tableBorderColor: "#515151",
        tableBackgroundColor: "#1b1d21",
        tabsBottomBorderColor: "#444548",
        contrastText: "#FFF",
        appBarBackgroundColor: "#1b1d21",
        appBarBackgroundImage: "none",
      },
      primary: {
        main: "#1FA7F8",
        focusVisibleBorder: "#ADD6FF",
      },
      secondary: {
        main: "#1FA7F8",
        focusVisibleBorder: "#ADD6FF",
      },
      cards: {
        headerTextColor: "#FFF",
        headerBackgroundColor: "#0f1214",
        headerBackgroundImage: "none",
      },
    },
  };
};
