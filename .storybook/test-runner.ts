import { TestRunnerConfig } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";

const customSnapshotsDir = `${process.cwd()}/visual-regression-snapshots`;
const customDiffDir = `${process.cwd()}/visual-regression-diffs`;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Theme {
  title: string;
  snapshotSuffix: string;
}

const themes: Theme[] = [
  { title: "Backstage Light", snapshotSuffix: "backstage-light" },
  { title: "Backstage Dark", snapshotSuffix: "backstage-dark" },
  { title: "RHDH Light 1-0", snapshotSuffix: "rhdh-light-1.0" },
  { title: "RHDH Dark 1-0", snapshotSuffix: "rhdh-dark-1.0" },
  { title: "RHDH Light 1-1", snapshotSuffix: "rhdh-light-1.1" },
  { title: "RHDH Dark 1-1", snapshotSuffix: "rhdh-dark-1.1" },
  { title: "RHDH Light latest", snapshotSuffix: "rhdh-light-latest" },
  { title: "RHDH Dark latest", snapshotSuffix: "rhdh-dark-latest" },
];

const skipInstableStories: Record<string, string> = {
  "feedback-emptystate--custom-image": "Animated image",
  "layout-item-cards--default": "Random lipsum text",
  "layout-item-cards--styling": "Random lipsum text",
  "plugins-azure-devops-build-table--default": "Random time",
  "plugins-home-templates--customizable-template": "Random joke",
  "plugins-home-components-welcometitle--default": "Random page title",
  "plugins-home-components-welcometitle--with-language": "Random page title",
};

const waitInMs: Record<string, number> = {
  "data-display-dependencygraph--default": 2000, // Wait for animation
  "data-display-dependencygraph--left-to-right": 2000, // Wait for animation
  "data-display-dependencygraph--right-to-left": 2000, // Wait for animation
  "data-display-dependencygraph--with-labels": 2000, // Wait for animation
  "data-display-dependencygraph--custom-labels": 2000, // Wait for animation
  "data-display-dependencygraph--zoom-disabled": 2000, // Wait for animation
  "data-display-dependencygraph--zoom-enable-on-click": 2000, // Wait for animation
  "plugins-azure-devops-build-table--default": 61000, // Wait one minute so that the newest build shows 1 minute ago and the layout is more stable.
  "plugins-home-components-stackoverflow": 2000, // External data?
};

const failureThreshold: Record<string, number> = {
  "plugins-examples--plugin-with-table": 100, // Unknown reason
  "plugins-home-components-headerworldclock--default": 4000, // Shows local time on the world clock
  "plugins-home-components-headerworldclock--twenty-four-hour-clocks": 4000, // Shows local time on the world clock
  "plugins-home-components-visitedbytype--recently-default": 92, // Shows local tiem
  "plugins-home-components-visitedbytype--recently-few-items": 92, // Shows local tiem
  "plugins-home-components-visitedbytype--recently-more-items": 92, // Shows local tiem
};

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    if (skipInstableStories[context.id]) {
      return;
    }
    // Annoying but necessary to wait for the page to be fully loaded
    await sleep(waitInMs[context.id] ?? 1000);

    for (const theme of themes) {
      await page.evaluate(`window.changeTheme('${theme.title}'); null;`);
      await sleep(100);

      // Alternative: Make a screenshot of just the rendered component with page.locator('#storybook-root').screenshot()
      // I don't picked this up for now to see the 'theme context' on the screenshot...
      const image = await page.screenshot({
        animations: "disabled",
      });
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir,
        customSnapshotIdentifier: `${context.id.replace("--", "/")}-${theme.snapshotSuffix}`,
        customDiffDir,
        customDiffConfig: {
          threshold: 0.1,
        },
        failureThreshold: failureThreshold[context.id] ?? 0,
      });
    }
  },
};

export default config;
