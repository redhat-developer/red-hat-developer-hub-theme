import { palettes } from "@backstage/theme";
import { type PaletteOptions } from "@mui/material";
import { type ThemeConfigPalette } from "../../types";

export const customLightTheme = (): ThemeConfigPalette => {
  const palette: (typeof palettes)["light"] & PaletteOptions = palettes.light;
  return {
    ...palette,
    primary: {
      ...palette.primary,
      main: "#0066CC",
      dark: "#004080",
    },
    secondary: {
      ...palette.secondary,
      main: "#8476D1",
      dark: "#6753AC",
    },
    navigation: {
      ...palette.navigation,
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
        searchBarBorderColor: "#E4E4E4",
        formControlBackgroundColor: "#FFF",
        mainSectionBackgroundColor: "#FFF",
        headerBackgroundColor: "#FFF",
        headerTextColor: "#151515",
        headerBottomBorderColor: "#C7C7C7",
        cardBackgroundColor: "#FFF",
        sideBarBackgroundColor: "#212427",
        cardSubtitleColor: "#000",
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
        containedButtonBackground: "#0066CC",
        textHover: "#004080",
        focusVisibleBorder: "#0066CC",
        dark: "#004080",
      },
      secondary: {
        main: "#8476D1",
        containedButtonBackground: "#8476D1",
        textHover: "#6753AC",
        focusVisibleBorder: "#8476D1",
        dark: "#6753AC",
      },
    },
  };
};
