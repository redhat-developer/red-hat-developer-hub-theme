import {
  createTheme as muiCreateV4Theme,
  Theme as V4Theme,
  ThemeOptions as V4ThemeOptions,
} from "@material-ui/core/styles";

import {
  createTheme as muiCreateV5Theme,
  Theme as V5Theme,
  ThemeOptions as V5ThemeOptions,
  adaptV4Theme,
  DeprecatedThemeOptions,
} from "@mui/material/styles";

export const createV4Theme = (options: V4ThemeOptions): V4Theme => {
  return muiCreateV4Theme(options);
};

export const createV5Theme = (options: V5ThemeOptions): V5Theme => {
  return muiCreateV5Theme(options);
};

export const createV5ThemeFromV4Theme = (
  options: DeprecatedThemeOptions,
): V5Theme => {
  return adaptV4Theme(options);
};

export const merge = <T extends Record<string, never>>(...themes: T[]): T => {
  return themes.reduce((acc, theme) => {
    return { ...acc, ...theme };
  }, {} as T);
};
