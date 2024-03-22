import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v5/Tabs",
  argTypes: {
    textColor: {
      control: "inline-radio",
      options: [undefined, "inherit", "primary", "secondary"],
    },
    indicatorColor: {
      control: "inline-radio",
      options: [undefined, "primary", "secondary"],
    },
    variant: {
      control: "inline-radio",
      options: [undefined, "standard", "scrollable", "fullWidth"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta;

export const HorizontalTabs: StoryObj = {
  render: (args) => {
    const tabs = [
      { label: "Tab 1" },
      { label: "Tab 2" },
      { label: "Tab 3" },
      { label: "Tab 4 (disabled)", disabled: true },
      { label: "Tab 4 (a much much much much much much too long label)" },
    ];
    const [selectedValue, setSelectedValue] = React.useState(0);

    return (
      <Tabs
        value={selectedValue}
        onChange={(_event, value) => setSelectedValue(value)}
        orientation="horizontal"
        {...args}
      >
        {tabs.map((tab) => (
          <Tab key={tab.label} {...tab} />
        ))}
      </Tabs>
    );
  },
};

export const HorizontalesScrollingTabs: StoryObj = {
  render: (args) => {
    const tabs = Array.from({ length: 20 }, (_, i) => ({ label: `Tab ${i}` }));
    const [selectedValue, setSelectedValue] = React.useState(0);

    return (
      <Tabs
        value={selectedValue}
        onChange={(_event, value) => setSelectedValue(value)}
        orientation="horizontal"
        variant="scrollable"
        {...args}
      >
        {tabs.map((tab) => (
          <Tab key={tab.label} {...tab} />
        ))}
      </Tabs>
    );
  },
};

export const VerticalTabs: StoryObj = {
  render: (args) => {
    const tabs = [
      { label: "Tab 1" },
      { label: "Tab 2" },
      { label: "Tab 3" },
      { label: "Tab 4 (disabled)", disabled: true },
    ];
    const [selectedValue, setSelectedValue] = React.useState(0);

    return (
      <Tabs
        value={selectedValue}
        onChange={(_event, value) => setSelectedValue(value)}
        orientation="vertical"
        {...args}
      >
        {tabs.map((tab) => (
          <Tab key={tab.label} {...tab} />
        ))}
      </Tabs>
    );
  },
};
