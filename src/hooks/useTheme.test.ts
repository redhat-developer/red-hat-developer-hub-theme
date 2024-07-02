import { renderHook } from "@testing-library/react-hooks";
import { useTheme } from "./useTheme";

describe("useTheme", () => {
  it("returns rhdh theming options for an empty theme config", () => {
    const { result } = renderHook(() => useTheme({}));
    const unifiedTheme = result.current;
    const v5Theme = unifiedTheme.getTheme("v5")!;
    expect(v5Theme).toEqual({
      applyStyles: expect.any(Function),
      breakpoints: expect.any(Object),
      components: expect.any(Object),
      direction: "ltr",
      getPageTheme: expect.any(Function),
      mixins: expect.any(Object),
      page: expect.any(Object),
      palette: expect.any(Object),
      shadows: expect.any(Object),
      shape: expect.any(Object),
      spacing: expect.any(Function),
      transitions: expect.any(Object),
      typography: expect.any(Object),
      unstable_sx: expect.any(Function),
      unstable_sxConfig: expect.any(Object),
      zIndex: expect.any(Object),
    });
  });

  it("returns rhdh theming options for variant rhdh", () => {
    const { result } = renderHook(() =>
      useTheme({
        mode: "dark",
        variant: "rhdh",
      }),
    );
    const unifiedTheme = result.current;
    const v5Theme = unifiedTheme.getTheme("v5");
    expect(v5Theme).toEqual({
      applyStyles: expect.any(Function),
      breakpoints: expect.any(Object),
      components: expect.any(Object),
      direction: "ltr",
      getPageTheme: expect.any(Function),
      mixins: expect.any(Object),
      page: expect.any(Object),
      palette: expect.any(Object),
      shadows: expect.any(Object),
      shape: expect.any(Object),
      spacing: expect.any(Function),
      transitions: expect.any(Object),
      typography: expect.any(Object),
      unstable_sx: expect.any(Function),
      unstable_sxConfig: expect.any(Object),
      zIndex: expect.any(Object),
    });
  });

  it("returns backstage theming options for backstage variant", () => {
    const { result } = renderHook(() =>
      useTheme({
        mode: "dark",
        variant: "backstage",
      }),
    );
    const unifiedTheme = result.current;
    const v5Theme = unifiedTheme.getTheme("v5");
    expect(v5Theme).toEqual({
      applyStyles: expect.any(Function),
      breakpoints: expect.any(Object),
      components: expect.any(Object),
      direction: "ltr",
      getPageTheme: expect.any(Function),
      mixins: expect.any(Object),
      page: expect.any(Object),
      palette: expect.any(Object),
      shadows: expect.any(Object),
      shape: expect.any(Object),
      spacing: expect.any(Function),
      transitions: expect.any(Object),
      typography: expect.any(Object),
      unstable_sx: expect.any(Function),
      unstable_sxConfig: expect.any(Object),
      zIndex: expect.any(Object),
    });
  });
});
