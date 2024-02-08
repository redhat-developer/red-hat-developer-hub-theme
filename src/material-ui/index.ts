import type { ThemeOptions } from "@material-ui/core/styles";
import brown from '@material-ui/core/colors/brown';

export const createThemeOptions = (): ThemeOptions => {
  return {
    palette: {
      primary: brown,
    },
  };
};
