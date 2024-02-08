import type { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,  
      },
    },
  },
};
