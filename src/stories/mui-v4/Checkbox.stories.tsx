import React from "react";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v4/Checkbox",
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta;

export const WithLabels: StoryObj = {
  render: (args) => {
    const colors = [undefined, "default", "primary", "secondary"] as const;
    return (
      <Grid container spacing={2}>
        {colors.map((color) => (
          <Grid key={color} item>
            <h1>
              Color: {color === undefined ? "undefined" : JSON.stringify(color)}
            </h1>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color={color} defaultChecked />}
                label="Label"
                {...args}
              />
              <FormControlLabel
                control={<Checkbox color={color} />}
                label="Required"
                {...args}
              />
              <FormControlLabel
                disabled
                control={<Checkbox color={color} />}
                label="Disabled"
                {...args}
              />
            </FormGroup>
          </Grid>
        ))}
      </Grid>
    );
  },
};

export const FormGroupExample: StoryObj = {
  render: (args) => {
    const [state, setState] = React.useState({
      gilad: true,
      jason: false,
      antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
      <Box sx={{ display: "flex" }}>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup {...args}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
              {...args}
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        <FormControl
          required
          error={error}
          component="fieldset"
          variant="standard"
        >
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup {...args}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
              {...args}
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </Box>
    );
  },
};
