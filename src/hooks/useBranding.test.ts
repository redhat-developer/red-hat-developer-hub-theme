import { renderHook } from "@testing-library/react-hooks";
import { useApi } from "@backstage/core-plugin-api";
import { MockConfigApi } from "@backstage/test-utils";
import { JsonObject } from "@backstage/types";
import { Config } from "../types";
import { useBranding } from "./useBranding";

jest.mock("@backstage/core-plugin-api", () => ({
  ...jest.requireActual("@backstage/core-plugin-api"),
  useApi: jest.fn(),
}));

const mockAppConfig = (appConfig: Config) => {
  (useApi as jest.Mock).mockReturnValue(
    new MockConfigApi(appConfig as unknown as JsonObject),
  );
};

describe("useBranding", () => {
  it("returns undefined if the config contains no branding", () => {
    mockAppConfig({
      app: {},
    });
    const { result } = renderHook(() => useBranding());
    expect(result.current).toBeUndefined();
  });

  it("returns the branding without theme", () => {
    mockAppConfig({
      app: {
        branding: {},
      },
    });
    const { result } = renderHook(() => useBranding());
    expect(result.current).toEqual({});
  });

  it("returns the branding with theme", () => {
    mockAppConfig({
      app: {
        branding: {
          theme: {
            emptyTheme: {},
            anotherTheme: {
              palette: {
                divider: "red",
              },
            },
          },
        },
      },
    });
    const { result } = renderHook(() => useBranding());
    expect(result.current).toEqual({
      theme: {
        emptyTheme: {},
        anotherTheme: {
          palette: {
            divider: "red",
          },
        },
      },
    });
  });
});
