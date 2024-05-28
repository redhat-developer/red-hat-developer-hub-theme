import React from 'react';

import { AppManager } from '../../backstage/packages/core-app-api/src/app/AppManager';
import { AppOptions, BackstageApp } from '../../backstage/packages/core-app-api/src/app/types.ts';

export * from '../../backstage/packages/core-app-api';

// Override `createSpecializedApp` that is used in `@backstage/test-utils` `createTestAppWrapper`
// to bypass a custom theme provider because the .storybook/preview.tsx already provides one.
export function createSpecializedApp(options: AppOptions): BackstageApp {
  options.themes = [
    {
      id: 'bypass-theme',
      title: 'Bypass Theme',
      variant: 'light',
      Provider: ({ children }) => (
        <>
          {children}
        </>
      ),
    },
  ];
  return new AppManager(options);
}
