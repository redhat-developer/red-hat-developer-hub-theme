import type { ThemeOptions } from "@mui/material/styles";
import type { Options } from "./options";

export { themeOptions as darkThemeOptions } from "./dark-theme";
export { themeOptions as lightThemeOptions } from "./light-theme";
export { themeOptions as helloweenThemeOptions } from "./helloween-theme";
export { themeOptions as patternfly4DarkThemeOptions } from "./patternfly-4-dark-theme";
export { themeOptions as patternfly4LightThemeOptions } from "./patternfly-4-light-theme";
export { themeOptions as patternfly5DarkThemeOptions } from "./patternfly-5-dark-theme";
export { themeOptions as patternfly5LightThemeOptions } from "./patternfly-5-light-theme";

export const createThemeOptions = (options: Options): ThemeOptions => {
  return {
    palette: {
      mode: options.mode,
    },
  };
};
