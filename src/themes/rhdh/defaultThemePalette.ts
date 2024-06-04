import { ThemeColors } from "./types";

export const defaultThemePalette = (mode: string, themeColors: ThemeColors) => {
  if (mode === "dark") {
    return {
      general: {
        disabledBackground: "#444548",
        disabled: "#AAABAC",
        searchBarBorderColor: "#57585a",
        formControlBackgroundColor: "#36373A",
        mainSectionBackgroundColor: "#0f1214",
        headerBackgroundColor: "#0f1214",
        headerTextColor: "#FFF",
        headerBottomBorderColor: "#A3A3A3",
        cardBackgroundColor: "#292929",
        focusVisibleBorder: "#ADD6FF",
        sideBarBackgroundColor: "#1b1d21",
        cardSubtitleColor: "#FFF",
        cardBorderColor: "#A3A3A3",
        tableTitleColor: "#E0E0E0",
        tableSubtitleColor: "#E0E0E0",
        tableColumnTitleColor: "#E0E0E0",
        tableRowHover: "#0f1214",
        tableBorderColor: "#515151",
        tableBackgroundColor: "#1b1d21",
        tabsBottomBorderColor: "#444548",
        contrastText: "#FFF",
      },
      primary: {
        main: themeColors.primary?.main || "#1FA7F8", // text button color, button background color
        containedButtonBackground:
          themeColors.primary?.containedButtonBackground || "#0066CC", // contained button background color
        textHover: themeColors.primary?.textHover || "#73BCF7", // text button hover color
        focusVisibleBorder:
          themeColors.primary?.focusVisibleBorder || "#ADD6FF",
        dark: themeColors.primary?.dark || "#004080", // contained button hover background color
      },
      secondary: {
        main: themeColors.secondary?.main || "#B2A3FF",
        containedButtonBackground:
          themeColors.secondary?.containedButtonBackground || "#8476D1",
        textHover: themeColors.secondary?.textHover || "#CBC1FF",
        focusVisibleBorder:
          themeColors.secondary?.focusVisibleBorder || "#D0C7FF",
        dark: themeColors.secondary?.dark || "#6753AC",
      },
    };
  }
  return {
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
      main: themeColors.primary?.main || "#0066CC",
      containedButtonBackground:
        themeColors.primary?.containedButtonBackground || "#0066CC",
      textHover: themeColors.primary?.textHover || "#004080",
      focusVisibleBorder: themeColors.primary?.focusVisibleBorder || "#0066CC",
      dark: themeColors.primary?.dark || "#004080",
    },
    secondary: {
      main: themeColors.secondary?.main || "#8476D1",
      containedButtonBackground:
        themeColors.secondary?.containedButtonBackground || "#8476D1",
      textHover: themeColors.secondary?.textHover || "#6753AC",
      focusVisibleBorder:
        themeColors.secondary?.focusVisibleBorder || "#8476D1",
      dark: themeColors.secondary?.dark || "#6753AC",
    },
  };
};
