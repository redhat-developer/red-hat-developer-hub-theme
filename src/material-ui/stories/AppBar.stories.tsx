import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v4/AppBar",
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta;

export const ButtonAppBar: StoryObj = {
  render: (args) => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit" {...args}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  ),
};
