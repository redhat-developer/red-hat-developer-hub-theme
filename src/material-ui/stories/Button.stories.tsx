import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v4/Button",
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
  render: (args) => {
    const variants = ["text", "contained", "outlined"] as const;
    const colors = ["default", "inherit", "primary", "secondary"] as const;

    return (
      <Grid container spacing={2}>
        {colors.map((color) => (
          <Grid key={color} container item>
            {variants.map((variant) => (
              <Grid key={variant} item>
                <Button {...args} variant={variant} color={color}>
                  {variant}
                </Button>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    )
  },
};

export const TextButtons: StoryObj = {
  render: (args) => (
    <Grid spacing={2} direction="row">
      <Button {...args}>Primary</Button>
      <Button disabled {...args}>
        Disabled
      </Button>
      <Button href="#text-buttons" {...args}>
        Link
      </Button>
    </Grid>
  ),
};

export const Sizes: StoryObj = {
  render: (args) => (
    <Box>
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
    <Grid direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} {...args}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} {...args}>
        Send
      </Button>
    </Grid>
  ),
};
