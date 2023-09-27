import { Box, Grid } from "@mui/material";

import React from "react";
import Slider from "@mui/material/Slider";
export default class Slider1 extends React.Component {
  constructor() {
    super();
    this.state = { height: 100, width: 100, fontSize: 10 };
  }
  changeWidth = (event, newwidth, fontSize) => {
    this.setState({ width: newwidth, fontSize });
  };
  changeHeight = (event, newheight, fontSize) => {
    this.setState({ height: newheight, fontSize });
  };
  render() {
    return (
      <Grid>
        <Box
          sx={{
            border: "1px solid red",
            height: this.state.height,
            width: this.state.width,

            margin: 20,
          }}
        >
          <Grid>
            <p sx={{  fontSize: this.setState.fontSize }}>
              Note that the development build is not optimized. To create a
              production build, use npm run build.{" "}
            </p>
          </Grid>
        </Box>
        <Box sx={{ width: 300, margin: 20 }}>
          <Slider
            size="small"
            min={100}
            max={500}
            defaultValue={300}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={this.changeWidth}
          />
          <Slider
            defaultValue={50}
            min={100}
            max={500}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={this.changeHeight}
          />
        </Box>
      </Grid>
    );
  }
}
