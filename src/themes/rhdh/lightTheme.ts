import { palettes } from "@backstage/theme";
import { type PaletteOptions } from "@mui/material";
import { type ThemeConfigPalette } from "../../types";

export const customLightTheme = (): ThemeConfigPalette => {
  const palette: (typeof palettes)["light"] & PaletteOptions = palettes.light;
  return {
    ...palette,
    primary: {
      main: "#0066CC",
    },
    secondary: {
      main: "#0066CC",
    },
    navigation: {
      background: "#222427",
      indicator: "#0066CC",
      color: "#ffffff",
      selectedColor: "#ffffff",
      navItem: {
        hoverBackground: "#3c3f42",
      },
      submenu: {
        background: "#222427",
      },
    },
    text: {
      primary: "#151515",
      secondary: "#757575",
    },
    rhdh: {
      general: {
        disabledBackground: "#D2D2D2",
        disabled: "#6A6E73",
        formControlBackgroundColor: "#FFF",
        mainSectionBackgroundColor: "#FFF",
        headerBottomBorderColor: "#C7C7C7",
        cardBackgroundColor: "#FFF",
        sidebarBackgroundColor: "#212427",
        sidebarItemSelectedBackgroundColor: "#4F5255",
        cardBorderColor: "#C7C7C7",
        tableTitleColor: "#181818",
        tableSubtitleColor: "#616161",
        tableColumnTitleColor: "#151515",
        tableRowHover: "#F5F5F5",
        tableBorderColor: "#E0E0E0",
        tableBackgroundColor: "#FFF",
        tabsBottomBorderColor: "#D2D2D2",
        contrastText: "#FFF",
      },
      primary: {
        main: "#0066CC",
        focusVisibleBorder: "#0066CC",
      },
      secondary: {
        main: "#0066CC",
        focusVisibleBorder: "#0066CC",
      },
      cards: {
        headerTextColor: "#151515",
        headerBackgroundColor: "#FFF",
        headerBackgroundImage: "none",
      },
    },
  };
};
