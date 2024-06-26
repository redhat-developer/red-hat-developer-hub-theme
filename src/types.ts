import { UnifiedThemeOptions } from "@backstage/theme";
import { ThemeConfig as RHDHThemeConfig } from "./themes/rhdh/types";

export interface ThemeConfig {
  /**
   * @deprecated Please use `rhdh.primary.main` instead.
   */
  primaryColor1?: string;
  /**
   * @deprecated Please use `rhdh.headerColor1` instead.
   */
  headerColor1?: string;
  /**
   * @deprecated Please use `rhdh.headerColor2` instead.
   */
  headerColor2?: string;
  /**
   * @deprecated Please use `rhdh.navigationIndicatorColor` instead.
   */
  navigationIndicatorColor?: string;

  rhdh: RHDHThemeConfig;

  // Not implemented yet, but we want support this in 1.3.
  backstage: {
    fontFamily: UnifiedThemeOptions["fontFamily"];
    htmlFontSize: UnifiedThemeOptions["htmlFontSize"];
    palette: UnifiedThemeOptions["palette"];
    typography: UnifiedThemeOptions["typography"];
  };

  // Not implemented yet and no timeline for implementation.
  // patternfly: {},
}

export interface Config {
  app: {
    branding?: {
      /**
       * Base64 URI for the full logo
       * @visibility frontend
       */
      fullLogo?: string;
      /**
       * size Configuration for the full logo
       * The following units are supported: <number>, px, em, rem, <percentage>
       * @visibility frontend
       */
      fullLogoWidth?: string | number;
      /**
       * Base64 URI for the icon logo
       * @visibility frontend
       */
      iconLogo?: string;
      /**
       * Theme configuration.
       * @deepVisibility frontend
       */
      theme?: {
        [key: string]: ThemeConfig;
      };
    };
  };
}
