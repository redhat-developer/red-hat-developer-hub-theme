import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { lightThemeOptions, darkThemeOptions, helloweenThemeOptions } from "../src/material";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        Light: createTheme(lightThemeOptions),
        Dark: createTheme(darkThemeOptions),
        Helloween: createTheme(helloweenThemeOptions),
      },
      defaultTheme: "Light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
