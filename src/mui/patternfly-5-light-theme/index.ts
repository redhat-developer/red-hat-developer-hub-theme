import type { ThemeOptions } from "@mui/material/styles";
import { brown } from "@mui/material/colors";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
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
        TabIndicatorProps: {
          style: {
            height: "3px",
            color: "#151515",
            backgroundColor: "#1fa7f8",
          },
        },
        textColor: "inherit",
      },
      styleOverrides: {
        root: {
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
          minWidth: "auto",
          padding: "16px 8px",
        },
        disabled: {
          backgroundColor: "gray",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "0 -3px #b8bbbe inset",
          },
        },
      },
    },
  },
};
