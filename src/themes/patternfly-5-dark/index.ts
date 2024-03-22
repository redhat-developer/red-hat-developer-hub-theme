import type { ThemeOptions } from "@mui/material/styles";
import { brown } from "@mui/material/colors";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: brown,
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTabs: {
      defaultProps: {
        sx: {
          // borderTop: '1px solid red',
        },
        TabIndicatorProps: {
          style: {
            height: "3px",
            backgroundColor: "red",
          },
        },
      },
      styleOverrides: {
        root: {
          // border: solid var(--pf-v5-c-tabs--before--BorderColor);
          borderBottom: "1px solid #d2d2d2",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          // backgroundColor: 'gray',
          minWidth: "auto",
          padding: "16px 8px",
        },
        // selected: {
        //   backgroundColor: 'lightred',
        // },
        disabled: {
          backgroundColor: "gray",
        },
      },
    },
  },
};
