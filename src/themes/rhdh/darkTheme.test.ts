import { customDarkTheme } from "./darkTheme";

describe("customDarkTheme", () => {
  it("should return the correct defaults for dark mode", () => {
    expect(customDarkTheme()).toEqual({
      background: {
        default: "#333333",
        paper: "#424242",
      },
      banner: {
        closeButtonColor: "#FFFFFF",
        error: "#E22134",
        info: "#2E77D0",
        link: "#000000",
        text: "#FFFFFF",
        warning: "#FF9800",
      },
      border: "#E6E6E6",
      bursts: {
        backgroundColor: {
          default: "#7C3699",
        },
        fontColor: "#FEFEFE",
        gradient: {
          linear: "linear-gradient(-137deg, #4BB8A5 0%, #187656 100%)",
        },
        slackChannelText: "#ddd",
      },
      errorBackground: "#FFEBEE",
      errorText: "#CA001B",
      gold: "#FFD600",
      highlight: "#FFFBCC",
      infoBackground: "#ebf5ff",
      infoText: "#004e8a",
      link: "#9CC9FF",
      linkHover: "#82BAFD",
      mode: "dark",
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
      pinSidebarButton: {
        background: "#BDBDBD",
        icon: "#404040",
      },
      primary: {
        main: "#1FA7F8",
        dark: "#004080",
      },
      secondary: {
        main: "#B2A3FF",
        dark: "#6753AC",
      },
      status: {
        aborted: "#9E9E9E",
        error: "#F84C55",
        ok: "#71CF88",
        pending: "#FEF071",
        running: "#3488E3",
        warning: "#FFB84D",
      },
      tabbar: {
        indicator: "#9BF0E1",
      },
      textContrast: "#FFFFFF",
      textSubtle: "#CCCCCC",
      textVerySubtle: "#727272",
      type: "dark",
      warningBackground: "#F59B23",
      warningText: "#000000",

      rhdh: {
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
          main: "#1FA7F8",
          containedButtonBackground: "#0066CC",
          textHover: "#73BCF7",
          focusVisibleBorder: "#ADD6FF",
          dark: "#004080",
        },
        secondary: {
          main: "#B2A3FF",
          containedButtonBackground: "#8476D1",
          textHover: "#CBC1FF",
          focusVisibleBorder: "#D0C7FF",
          dark: "#6753AC",
        },
      },
    });
  });
});