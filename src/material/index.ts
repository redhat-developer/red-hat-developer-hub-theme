import type { ThemeOptions } from "@mui/material/styles";
import type { Options } from "./options";

export { themeOptions as darkThemeOptions } from "./dark-theme";
export { themeOptions as lightThemeOptions } from "./light-theme";
export { themeOptions as helloweenThemeOptions } from "./helloween-theme";

export const createThemeOptions = (options: Options): ThemeOptions => {
  return {
    palette: {
      mode: options.mode,
    },
  };
};
