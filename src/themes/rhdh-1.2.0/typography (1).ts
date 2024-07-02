import { BackstageTypography } from "@backstage/theme";

export const fonts = {
  text: [
    "RedHatText",
    '"Helvetica Neue"',
    "-apple-system",
    '"Segoe UI"',
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ].join(", "),
  heading: [
    "RedHatDisplay",
    '"Helvetica Neue"',
    "-apple-system",
    '"Segoe UI"',
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ].join(", "),
  monospace: [
    "RedHatMono",
    '"Liberation Mono"',
    "consolas",
    '"SFMono-Regular"',
    "menlo",
    "monaco",
    '"Courier New"',
    "monospace",
  ].join(", "),
};

// Font sized based on https://www.patternfly.org/design-foundations/typography
export const typography: BackstageTypography = {
  htmlFontSize: 16,
  fontFamily: fonts.text,
  h1: {
    fontFamily: fonts.heading,
    fontSize: 36,
    fontWeight: 400,
    marginBottom: 10,
  },
  h2: {
    fontFamily: fonts.heading,
    fontSize: 28,
    fontWeight: 400,
    marginBottom: 8,
  },
  h3: {
    fontFamily: fonts.heading,
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 6,
  },
  h4: {
    fontFamily: fonts.heading,
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 6,
  },
  h5: {
    fontFamily: fonts.heading,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 4,
  },
  h6: {
    fontFamily: fonts.heading,
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 2,
  },
};
