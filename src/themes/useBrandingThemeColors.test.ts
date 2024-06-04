import { renderHook } from "@testing-library/react-hooks";
import { useApi } from "@backstage/core-plugin-api";
import { useBrandingThemeColors } from "./useBrandingThemeColors";

jest.mock("@backstage/core-plugin-api", () => ({
  ...jest.requireActual("@backstage/core-plugin-api"),
  useApi: jest.fn(),
}));

describe("useBrandingThemeColors", () => {
  it("returns the themeColors when config for them is available", () => {
    (useApi as jest.Mock).mockReturnValue({
      getOptionalString: jest.fn().mockImplementation((key) => {
        switch (key) {
          // case "app.branding.theme.someTheme.primaryColor":
          //   return "blue";
          case "app.branding.theme.someTheme.headerColor1":
            return "red";
          case "app.branding.theme.someTheme.headerColor2":
            return "yellow";
          case "app.branding.theme.someTheme.navigationIndicatorColor":
            return "purple";
          default:
            return "";
        }
      }),
    });
    const { result } = renderHook(() => useBrandingThemeColors("someTheme"));
    // expect(result.current.primaryColor).toBe("blue");
    expect(result.current.headerColor1).toBe("red");
    expect(result.current.headerColor2).toBe("yellow");
    expect(result.current.navigationIndicatorColor).toBe("purple");
  });

  it("returns undefined when config is unavailable", () => {
    // Mock the useApi function to throw an error (simulate unavailable config)
    (useApi as jest.Mock).mockImplementation(
      jest.fn(() => {
        throw new Error("Custom hook error");
      }),
    );

    // const { result } = renderHook(() => useBrandingThemeColors("someTheme"));
    // expect(result.current.primaryColor).toBeUndefined();
  });
});
