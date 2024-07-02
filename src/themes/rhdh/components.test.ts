import { ThemeConfig } from "../../types";
import { components, Components } from "./components";

interface TestCase {
  name: string;
  config: ThemeConfig;
  expected: Components;
}

const testCases: TestCase[] = [
  {
    name: "No options defined",
    config: {},
    expected: expect.objectContaining({
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: expect.any(Object),
      },
    }),
  },
  {
    name: "No option parameters are defined",
    config: {
      options: {},
    },
    expected: expect.objectContaining({
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: expect.any(Object),
      },
    }),
  },
  {
    name: "Reenable ripple effect when rippleEffect=on",
    config: {
      options: {
        rippleEffect: "on",
      },
    },
    expected: expect.objectContaining({
      MuiButton: {
        defaultProps: {
          disableRipple: false,
        },
        styleOverrides: expect.any(Object),
      },
    }),
  },
  {
    name: "No components returned for components=backstage",
    config: {
      options: {
        components: "backstage",
      },
    },
    expected: {},
  },
];

describe("components", () => {
  testCases.forEach((testCase) => {
    it(testCase.name, () => {
      const actual = components(testCase.config);
      expect(actual).toEqual(testCase.expected);
    });
  });
});
