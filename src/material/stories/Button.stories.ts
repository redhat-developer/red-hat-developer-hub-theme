import Button from "@mui/material/Button";
import type { Meta as MetaObj, StoryObj } from "@storybook/react";

type Meta = MetaObj<typeof Button>;
type Story = StoryObj<MetaObj>;

const meta: Meta = {
  title: "MUI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};
