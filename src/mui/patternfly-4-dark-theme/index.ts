import type { ThemeOptions } from "@mui/material/styles";
import { brown } from "@mui/material/colors";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: brown,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,  
      },
    },
  },
};
