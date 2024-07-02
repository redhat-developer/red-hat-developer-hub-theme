import React from "react";
import { ConfigApi, configApiRef, useApi } from "@backstage/core-plugin-api";
import { Branding } from "../types";

export const useBranding = (): Branding | undefined => {
  let configApi: ConfigApi | undefined = undefined;
  try {
    configApi = useApi(configApiRef);
  } catch (err) {
    // useApi won't be initialized initially in createApp theme provider, and will get updated later
  }
  return React.useMemo(() => {
    const branding = configApi?.getOptional<Branding>("app.branding");
    return branding;
  }, [configApi]);
};
