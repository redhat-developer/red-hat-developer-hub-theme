import { type UnifiedThemeOptions } from "@backstage/theme";

export type BackstageThemePalette = UnifiedThemeOptions["palette"];

export interface RHDHThemePalette {
  general: {
    disabledBackground: string;
    disabled: string;
    formControlBackgroundColor: string;
    mainSectionBackgroundColor: string;
    headerBottomBorderColor: string;
    cardBackgroundColor: string;
    /** @deprecated please use `sidebarBackgroundColor` instead */
    sideBarBackgroundColor?: string;
    sidebarBackgroundColor: string;
    sidebarItemSelectedBackgroundColor: string;
    cardBorderColor: string;
    tableTitleColor: string;
    tableSubtitleColor: string;
    tableColumnTitleColor: string;
    tableRowHover: string;
    tableBorderColor: string;
    tableBackgroundColor: string;
    tabsBottomBorderColor: string;
    contrastText: string;
  };

  primary: {
    main: string;
    focusVisibleBorder: string;
  };

  secondary: {
    main: string;
    focusVisibleBorder: string;
  };

  cards?: {
    headerTextColor: string;
    headerBackgroundColor: string;
    headerBackgroundImage: string;
  };
}

export type ThemeConfigPalette = BackstageThemePalette & {
  rhdh?: RHDHThemePalette;
};

// Aligned with PageTheme
export interface ThemeConfigPageTheme {
  backgroundColor?: string | string[];
  colors?: string | string[];
  shape?: string;
  backgroundImage?: string;
  fontColor?: string;
}

export interface ThemeOptions {
  components?: "rhdh" | "backstage" | "mui";

  rippleEffect?: "on" | "off";

  paper?: "patternfly" | "mui";

  buttons?: "patternfly" | "mui";

  inputs?: "patternfly" | "mui";

  accordions?: "patternfly" | "mui";

  sidebars?: "patternfly" | "mui";

  pages?: "patternfly" | "mui";

  headers?: "patternfly" | "mui";

  toolbars?: "patternfly" | "mui";

  dialogs?: "patternfly" | "mui";

  cards?: "patternfly" | "mui";

  tables?: "patternfly" | "mui";

  tabs?: "patternfly" | "mui";
}

export interface ThemeConfig {
  /** Optional key to load different defaults. Fallbacks to the latest `rhdh` theme if not defined. */
  variant?: "rhdh" | "rhdh-1.0" | "rhdh-1.1" | "rhdh-1.2.0" | "backstage";

  /** Light or dark theme. Automatically selects `dark` if the theme name contains the keyword "dark". */
  mode?: "light" | "dark";

  palette?: ThemeConfigPalette;

  fontFamily?: UnifiedThemeOptions["fontFamily"];

  htmlFontSize?: UnifiedThemeOptions["htmlFontSize"];

  typography?: UnifiedThemeOptions["typography"];

  defaultPageTheme?: string;

  pageTheme?: Record<string, ThemeConfigPageTheme>;

  options?: ThemeOptions;
}

export interface Branding {
  /**
   * Theme configuration.
   * @deepVisibility frontend
   */
  theme?: {
    [key: string]: ThemeConfig;
  };
}

export interface Config {
  app: {
    branding?: Branding;
  };
}
