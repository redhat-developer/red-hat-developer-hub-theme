import { UnifiedThemeOptions } from "@backstage/theme";
import { defaultThemePalette } from "./defaultThemePalette";
import { ThemeColors } from "./types";

export const components = (
  themeColors: ThemeColors,
  mode: string,
): UnifiedThemeOptions["components"] => {
  const themePalette = defaultThemePalette(mode, themeColors);
  return {
    //
    // MUI components
    //

    // MUI base
    MuiTypography: {
      styleOverrides: {
        button: {
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },

    // MUI container
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: themePalette.general.cardBackgroundColor,
          // hide the first child element which is a divider with MuiDivider-root classname in MuiPaper
          '& > hr:first-child[class|="MuiDivider-root"]': {
            height: 0,
          },
        },
        elevation0: {
          '& div[class*="Mui-disabled"]': {
            backgroundColor: "unset",
          },
          '& span[class*="Mui-disabled"]': {
            backgroundColor: "unset",
          },
          '& input[class*="Mui-disabled"]': {
            backgroundColor: "unset",
          },
        },
        elevation1: {
          boxShadow: "none",
          borderRadius: "0",
          outline: `1px solid ${themePalette.general.cardBorderColor}`,
          '& > hr[class|="MuiDivider-root"]': {
            backgroundColor: themePalette.general.cardBorderColor,
          },
        },
        elevation2: {
          backgroundColor: themePalette.general.tableBackgroundColor,
          boxShadow: "none",
          outline: `1px solid ${themePalette.general.cardBorderColor}`,
          padding: "1rem",
        },
      },
    },

    // MUI buttons
    // Don't disableRipple for MuiButtonBase as it will affect all the buttons
    // and we need to ensure that the buttons have a right touch and focus styling.
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          border: "0",
          borderRadius: "3px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            border: "0",
            boxShadow: "none",
          },
          "&:-webkit-any-link:focus-visible": {
            outlineOffset: "0",
          },
        },
        containedPrimary: {
          backgroundColor: themePalette.primary.containedButtonBackground,
          color: themePalette.primary.contrastText,
          "&:hover": {
            backgroundColor: themePalette.primary.dark,
            color: themePalette.primary.contrastText,
          },
          "&:focus-visible": {
            boxShadow: `inset 0 0 0 1px ${themePalette.general.focusVisibleBorder}`,
            outline: `${themePalette.general.focusVisibleBorder} solid 1px`,
            backgroundColor: themePalette.primary.dark,
            color: themePalette.primary.contrastText,
          },
          "&:disabled": {
            color: themePalette.general.disabled,
            backgroundColor: themePalette.general.disabledBackground,
          },
        },
        containedSecondary: {
          backgroundColor: themePalette.secondary.containedButtonBackground,
          color: themePalette.secondary.contrastText,
          "&:hover": {
            backgroundColor: themePalette.secondary.dark,
            color: themePalette.secondary.contrastText,
          },
          "&:focus-visible": {
            boxShadow: `inset 0 0 0 1px ${themePalette.general.focusVisibleBorder}`,
            outline: `${themePalette.general.focusVisibleBorder} solid 1px`,
            backgroundColor: themePalette.secondary.dark,
            color: themePalette.secondary.contrastText,
          },
          "&:disabled": {
            color: themePalette.general.disabled,
            backgroundColor: themePalette.general.disabledBackground,
          },
        },
        outlined: {
          border: "0",
          boxShadow: `inset 0 0 0 1px ${themePalette.primary.main}`,
          "&:hover": {
            border: "0",
            boxShadow: `inset 0 0 0 2px ${themePalette.primary.main}`,
            backgroundColor: "transparent",
          },
          "&:focus-visible": {
            boxShadow: `inset 0 0 0 2px ${themePalette.primary.main}`,
            outline: `${themePalette.general.focusVisibleBorder} solid 1px`,
          },
        },
        outlinedPrimary: {
          color: themePalette.primary.main,
          boxShadow: `inset 0 0 0 1px ${themePalette.primary.main}`,
          border: "0",
          "&:hover": {
            border: "0",
            boxShadow: `inset 0 0 0 2px ${themePalette.primary.main}`,
            backgroundColor: "transparent",
          },
          "&:focus-visible": {
            boxShadow: `inset 0 0 0 2px ${themePalette.primary.main}`,
            outline: `${themePalette.general.focusVisibleBorder} solid 1px`,
          },
        },
        outlinedSecondary: {
          color: themePalette.secondary.main,
          boxShadow: `inset 0 0 0 1px ${themePalette.secondary.main}`,
          border: "0",
          "&:hover": {
            border: "0",
            boxShadow: `inset 0 0 0 2px ${themePalette.secondary.main}`,
            backgroundColor: "transparent",
          },
          "&:focus-visible": {
            boxShadow: `inset 0 0 0 2px ${themePalette.secondary.main}`,
            outline: `${themePalette.general.focusVisibleBorder} solid 1px`,
          },
        },
        text: {
          color: themePalette.primary.main,
          "&:hover": {
            color: themePalette.primary.textHover,
            backgroundColor: "transparent",
          },
          "&:focus-visible": {
            boxShadow: `inset 0 0 0 2px ${themePalette.primary.main}`,
            outline: `${themePalette.general.focusVisibleBorder} solid 1px`,
          },
        },
        textPrimary: {
          color: themePalette.primary.main,
          "&:hover": {
            color: themePalette.primary.textHover,
            backgroundColor: "transparent",
          },
        },
        textSecondary: {
          color: themePalette.secondary.main,
          "&:hover": {
            color: themePalette.secondary.textHover,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:disabled": {
            color: themePalette.general.disabled,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineHover: {
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },

    // MUI input fields
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: themePalette.general.disabled,
            opacity: 1,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:autofill": {
            boxShadow: `0 0 0 100px ${themePalette.general.formControlBackgroundColor} inset`,
            borderRadius: "unset",
          },
        },
      },
    },

    // MUI accordion
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
        rounded: {
          "&:first-child": {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          },
          "&:last-child": {
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
          },
        },
      },
    },

    // MUI cards
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: themePalette.general.cardBackgroundColor,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        content: {
          "& > span > nav span": {
            textTransform: "unset",
            letterSpacing: "normal",
            fountweight: "normal",
          },
        },
        title: {
          fontSize: "1.125rem",
        },
        action: {
          "& > a > span > svg": {
            fontSize: "1.125rem",
          },
          '& > a[class*="MuiIconButton-root"]:hover': {
            color: themePalette.primary.textHover,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          flexGrow: "1",
          backgroundColor: themePalette.general.cardBackgroundColor,
          '& > div > div > h2[class*="MuiTypography-h2-"]': {
            textTransform: "unset",
            color: themePalette.general.cardSubtitleColor,
            opacity: "40%",
          },
          '& > div > div > div[class*="MuiChip-sizeSmall"]': {
            backgroundColor: "transparent",
            borderRadius: "8px",
            outline: `1px solid ${themePalette.general.disabled}`,
          },
          '& > div[class*="Mui-expanded"]': {
            margin: "auto",
          },
          '& > div[class*="MuiAccordion-root"]:before': {
            height: 0,
          },
          // Override the default line-clamp from 10 to 2 for the Software template catalog
          '& > div[class*="MuiGrid-root-"][class*="MuiGrid-container-"][class*="MuiGrid-spacing-xs-2-"] > div[class*="MuiGrid-root-"][class*="MuiGrid-item-"][class*="MuiGrid-grid-xs-12-"] > div[class*="MuiBox-root-"]':
            {
              "-webkit-line-clamp": "2",
            },
        },
      },
    },

    // MUI table
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.general.tableBackgroundColor,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.general.tableBackgroundColor,
          '&:not([class*="MuiTableRow-footer"]):hover': {
            backgroundColor: `${themePalette.general.tableRowHover} !important`,
          },
          '& > th[class*="MuiTableCell-head"]': {
            backgroundColor: themePalette.general.tableBackgroundColor,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textTransform: "none",
          '&[class*="BackstageTableHeader-header"]': {
            borderTop: "unset",
            borderBottom: `1px solid ${themePalette.general.tableBorderColor}`,
          },
        },
        // @ts-expect-error: MUI types are not up to date
        head: {
          textTransform: "unset !important",
          color: `${themePalette.general.tableColumnTitleColor} !important`,
          '& > span[class*="MuiTableSortLabel-active"]': {
            color: `${themePalette.general.tableColumnTitleActiveColor} !important`,
          },
          '& > span > svg[class*="MuiTableSortLabel-icon"]': {
            color: "inherit !important",
          },
        },
        body: {
          color: themePalette.general.tableTitleColor,
          '& > div[class*="MuiChip-sizeSmall"]': {
            margin: "2px",
          },
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          "& > tr > td": {
            borderBottom: "none",
          },
        },
      },
    },

    // MUI toolbar
    MuiToolbar: {
      styleOverrides: {
        regular: {
          '& > div > h2[class*="MuiTypography-h5"]': {
            fontSize: "1.25rem",
            color: themePalette.general.tableTitleColor,
          },
        },
      },
    },

    // MUI dialogs
    MuiDialogContent: {
      styleOverrides: {
        root: {
          "& > div": {
            backgroundColor: themePalette.general.cardBackgroundColor,
          },
        },
      },
    },

    // MUI tabs
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: {
          style: {
            background:
              themeColors.navigationIndicatorColor || themePalette.primary.main,
          },
        },
      },
      styleOverrides: {
        root: {
          boxShadow: `0 -1px ${themePalette.general.tabsBottomBorderColor} inset`,
          padding: "0 1.5rem",
        },
        flexContainerVertical: {
          "& > button:hover": {
            boxShadow: `-3px 0 ${themePalette.general.tabsBottomBorderColor} inset`,
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "initial !important",
          "&.Mui-disabled": {
            backgroundColor: themePalette.general.disabledBackground,
          },
        },
      },
    },

    //
    // Backstage
    //
    BackstageHeaderTabs: {
      styleOverrides: {
        tabsWrapper: {
          paddingLeft: "0",
          backgroundColor: themePalette.general.mainSectionBackgroundColor,
        },
        defaultTab: {
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "500",
          color: themePalette.general.disabled,
          padding: "0.5rem 1rem",
          "&:hover": {
            boxShadow: `0 -3px ${themePalette.general.tabsBottomBorderColor} inset`,
          },
        },
        tabRoot: {
          "&:hover": {
            backgroundColor: "unset",
          },
          "&:not(.Mui-selected):hover": {
            color: themePalette.general.disabled,
          },
        },
      },
    },
    BackstageSidebar: {
      styleOverrides: {
        drawer: {
          backgroundColor: themePalette.general.sideBarBackgroundColor,
        },
      },
    },
    BackstageSidebarItem: {
      styleOverrides: {
        label: {
          '&[class*="MuiTypography-subtitle2"]': {
            fontWeight: "500",
          },
        },
      },
    },
    BackstagePage: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.general.mainSectionBackgroundColor,
        },
      },
    },
    BackstageContent: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.general.mainSectionBackgroundColor,
          "& div:first-child": {
            '& > div[class*="-searchBar"]': {
              backgroundColor: themePalette.general.formControlBackgroundColor,
              border: `1px solid ${themePalette.general.searchBarBorderColor}`,
              boxShadow: "none",
            },
          },
        },
      },
    },
    BackstageContentHeader: {
      styleOverrides: {
        leftItemsBox: {
          '& > h2[class*="BackstageContentHeader-title-"][class*="MuiTypography-h4-"]':
            {
              fontWeight: "bold",
              fontSize: "1.75rem",
            },
        },
      },
    },
    BackstageHeader: {
      styleOverrides: {
        header: {
          color: themePalette.general.headerTextColor,
          backgroundImage: `none, linear-gradient(90deg, ${themeColors.headerColor1}, ${themeColors.headerColor2})`,
          backgroundColor: themePalette.general.headerBackgroundColor,
          boxShadow: "none",
          borderBottom: `1px solid ${themePalette.general.headerBottomBorderColor}`,
        },
        title: {
          color: themePalette.general.cardSubtitleColor,
          fontWeight: "bold",
          '&[class*="MuiTypography-h1-"]': {
            fontWeight: "bold",
            fontSize: "2rem",
          },
        },
        leftItemsBox: {
          color: themePalette.general.headerTextColor,
          "& > nav": {
            color: themePalette.general.headerTextColor,
          },
          "& > p": {
            color: themePalette.general.headerTextColor,
          },
          "& > span": {
            color: themePalette.general.headerTextColor,
          },
        },
        rightItemsBox: {
          color: themePalette.general.headerTextColor,
          "& div": {
            color: themePalette.general.headerTextColor,
          },
          "& p": {
            color: themePalette.general.headerTextColor,
          },
          "& a": {
            color: themePalette.general.headerTextColor,
          },
          "& button": {
            color: themePalette.general.headerTextColor,
          },
        },
      },
    },
    BackstageItemCardHeader: {
      styleOverrides: {
        root: {
          '&[class*="MuiBox-root-"]': {
            color: themePalette.general.headerTextColor,
            backgroundImage: "none",
            // backgroundColor: themePalette.general.headerBackgroundColor,
            borderBottom: `1px solid ${themePalette.general.cardBorderColor}`,
          },
          '& > h3[class*="MuiTypography-subtitle2-"] > div > div:first-child': {
            color: themePalette.general.tableSubtitleColor,
            textTransform: "capitalize",
          },
          '& > h3[class*="MuiTypography-subtitle2-"] > div > div:last-child': {
            color: themePalette.general.cardSubtitleColor,
          },
          '& > h4[class*="MuiTypography-h6-"]': {
            color: themePalette.general.cardSubtitleColor,
          },
        },
      },
    },
    BackstageTableToolbar: {
      styleOverrides: {
        root: {
          "& h2": {
            fontWeight: "bold",
          },
        },
        title: {
          "& > h2": {
            fontWeight: "bold",
          },
        },
      },
    },

    //
    // Others
    //
    CatalogReactUserListPicker: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        title: {
          textTransform: "none",
        },
      },
    },
    PrivateTabIndicator: {
      styleOverrides: {
        root: {
          height: "3px",
        },
        vertical: {
          width: "3px",
        },
      },
    },
  };
};
