import React from "react";
import Paper from "@mui/material/Paper";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v5/Paper",
} satisfies Meta;

export const Papers: StoryObj = {
  render: () => {
    // elevations from 0 to 24
    const elevations = Array.from({ length: 25 }, (_, i) => i);

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {elevations.map((elevation) => (
          <div key={elevation} style={{ margin: "20px" }}>
            <Paper elevation={elevation}>
              <div
                style={{
                  display: "flex",
                  width: "100px",
                  height: "100px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                e={elevation}
              </div>
            </Paper>
          </div>
        ))}
      </div>
    );
  },
};
