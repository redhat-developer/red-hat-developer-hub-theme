export interface ThemeConfig {
  colors: ThemeColors;
}

export interface ThemeColors {
  /**
   * primaryColor Configuration for the instance
   * The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   */
  primaryColor?: string;
  /**
   * Header Theme color Configuration for the instance
   * The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   */
  headerColor1?: string;
  /**
   * Header Theme color Configuration for the instance
   * The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   */
  headerColor2?: string;
  /**
   * Navigation Side Bar Indicator color Configuration for the instance
   * The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   */
  navigationIndicatorColor?: string;
  general?: {
    [key: string]: string | undefined;
  };
  primary?: {
    [key: string]: string | undefined;
  };
  secondary?: {
    [key: string]: string | undefined;
  };
}
