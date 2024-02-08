import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Material/ButtonGroup",
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta;

export const ButtonVariants: StoryObj = {
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined primary button group" {...args}>
        <Button {...args}>One</Button>
        <Button {...args}>Two</Button>
        <Button {...args}>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="outlined button group" {...args}>
        <Button {...args}>One</Button>
        <Button {...args}>Two</Button>
        <Button {...args}>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group" {...args}>
        <Button {...args}>One</Button>
        <Button {...args}>Two</Button>
        <Button {...args}>Three</Button>
      </ButtonGroup>
    </Box>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        <Button key="one">One</Button>
        <Button key="two">Two</Button>
        <Button key="three">Three</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        <Button key="one">One</Button>
        <Button key="two">Two</Button>
        <Button key="three">Three</Button>
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        <Button key="one">One</Button>
        <Button key="two">Two</Button>
        <Button key="three">Three</Button>
      </ButtonGroup>
    </Box>
  ),
};
