import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../backstage/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
