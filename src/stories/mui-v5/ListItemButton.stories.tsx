import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v5/ListItemButton",
} satisfies Meta;

export const ButtonGroup: StoryObj = {
  render: () => (
    <ListItem>
      <ListItemButton>Button 1</ListItemButton>
      <ListItemButton>Button 2</ListItemButton>
      <ListItemButton>Button 3</ListItemButton>
    </ListItem>
  ),
};
