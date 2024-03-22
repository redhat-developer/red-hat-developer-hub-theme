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

import { deepOrange, orange } from "@mui/material/colors";

type ThemeOptions = V4ThemeOptions & V5ThemeOptions & DeprecatedThemeOptions;

export const options: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: deepOrange,
    secondary: orange,
  },
};

export const createV4Theme = (): V4Theme => {
  return muiCreateV4Theme(options);
};

export const createV5ThemeX = (): V5Theme => {
  return muiCreateV5Theme(options);
};

export const createV5Theme = (): V5Theme => {
  return adaptV4Theme(options);
};
