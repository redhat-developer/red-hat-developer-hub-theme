import { renderHook } from "@testing-library/react-hooks";
import { useThemeOptions } from "./useThemeOptions";

describe("useThemeOptions", () => {
  it("returns rhdh theming options for an empty theme config", () => {
    const { result } = renderHook(() => useThemeOptions({}));
    expect(result.current).toEqual({
      palette: expect.any(Object),
      fontFamily:
        'RedHatText, "Helvetica Neue", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      typography: expect.any(Object),
      defaultPageTheme: "default",
      pageTheme: {
        default: {
          backgroundImage: "none,  linear-gradient(90deg, #ffffff, #ffffff)",
          colors: ["#ffffff"],
          fontColor: "#000000",
          shape: "none",
        },
      },
      components: expect.any(Object),
    });
  });

  it("returns rhdh theming options for variant rhdh", () => {
    const { result } = renderHook(() =>
      useThemeOptions({
        mode: "dark",
        variant: "rhdh",
      }),
    );
    expect(result.current).toEqual({
      palette: expect.any(Object),
      fontFamily:
        'RedHatText, "Helvetica Neue", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      typography: expect.any(Object),
      defaultPageTheme: "default",
      pageTheme: {
        default: {
          backgroundImage: "none,  linear-gradient(90deg, #0f1214, #0f1214)",
          colors: ["#0f1214"],
          fontColor: "#ffffff",
          shape: "none",
        },
      },
      components: expect.any(Object),
    });
  });

  it("returns backstage theming options for backstage variant", () => {
    const { result } = renderHook(() =>
      useThemeOptions({
        mode: "dark",
        variant: "backstage",
      }),
    );
    expect(result.current).toEqual({
      palette: expect.any(Object),
      fontFamily: undefined,
      htmlFontSize: undefined,
      typography: undefined,
      defaultPageTheme: undefined,
      pageTheme: undefined,
    });
  });
});
