import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Material/Button",
  argTypes: {
    variant: {
      control: "inline-radio",
      options: [undefined, "text", "contained", "outlined"],
    },
    disabled: { control: "boolean" },
    size: {
      control: "inline-radio",
      options: [undefined, "small", "medium", "large"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta;

export const BasicButtons: StoryObj = {
  render: (args) => (
    <Stack spacing={2} direction="row">
      <Button variant="text" {...args}>
        Text
      </Button>
      <Button variant="contained" {...args}>
        Contained
      </Button>
      <Button variant="outlined" {...args}>
        Outlined
      </Button>
    </Stack>
  ),
};

export const TextButtons: StoryObj = {
  render: (args) => (
    <Stack spacing={2} direction="row">
      <Button {...args}>Primary</Button>
      <Button disabled {...args}>
        Disabled
      </Button>
      <Button href="#text-buttons" {...args}>
        Link
      </Button>
    </Stack>
  ),
};

export const Sizes: StoryObj = {
  render: (args) => (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button size="small" {...args}>
          Small
        </Button>
        <Button size="medium" {...args}>
          Medium
        </Button>
        <Button size="large" {...args}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" {...args}>
          Small
        </Button>
        <Button variant="outlined" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="outlined" size="large" {...args}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" {...args}>
          Small
        </Button>
        <Button variant="contained" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="contained" size="large" {...args}>
          Large
        </Button>
      </div>
    </Box>
  ),
};

export const WithIcons: StoryObj = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} {...args}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} {...args}>
        Send
      </Button>
    </Stack>
  ),
};
