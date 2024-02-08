import React from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Material/Checkbox",
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta;

export const WithLabels: StoryObj = {
  render: (args) => (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" {...args} />
      <FormControlLabel required control={<Checkbox />} label="Required" {...args} />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" {...args} />
    </FormGroup>
  ),
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
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup {...args}>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
              }
              label="Gilad Gray"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={handleChange} name="jason" />
              }
              label="Jason Killian"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
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
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup {...args}>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
              }
              label="Gilad Gray"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={handleChange} name="jason" />
              }
              label="Jason Killian"
              {...args}
            />
            <FormControlLabel
              control={
                <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
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
