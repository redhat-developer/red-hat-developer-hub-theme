import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v5/ToggleButton",
} satisfies Meta;

export const ButtonGroup: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState("value1");
    return (
      <ToggleButtonGroup
        exclusive
        value={value}
        onChange={(_event, newValue) => setValue(newValue)}
      >
        <ToggleButton value="value1">Button 1</ToggleButton>
        <ToggleButton value="value2">Button 2</ToggleButton>
        <ToggleButton value="value3">Button 3</ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
