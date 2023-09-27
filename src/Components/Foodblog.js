import { Box, Grid, Pagination } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import ClearAllIcon from "@mui/icons-material/ClearAll";

export default class Foodblog extends React.Component {
  constructor() {
    super();
    this.state = {
      foodItems: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },

        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e3NTUl0ICCV25CYgQu-XclpNZCcdXyuHOw&usqp=CAU",
          pname: "BURGERS",
          details:
            "CHOICE OF SAUCE: HONEY CHIPOTLE BBQ, HOT BUFFALO, MILD BUFFALO, GARLIC PARMESAN OR PLAIN",
          price: "100",
        },
      ],
    };
  }

  render() {
    return (
      <Grid>
        <Box>
          <Box>
            <Grid container>
              <Grid item xs={4}>
                <ClearAllIcon />
              </Grid>
              <Grid item xs={4}>
                {" "}
                My Food
              </Grid>
              <Grid item xs={4}>
                {" "}
                Mail
              </Grid>
            </Grid>
          </Box>
          <Stack
            style={{ margin: 100 }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            {this.state.foodItems.map(({ image, pname, price, details }) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {pname}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    price:{price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
        <Stack spacing={2} style={{ marginLeft: 500, marginRight: 500 }}>
          <Pagination count={10} shape="rounded" />
        </Stack>
        <Box sx={{ marginTop: 20 }}>
          <h3>About Me ,The Food Man</h3>
          <Card
            sx={{ minWidth: 945, maxHeight: 800 }}
            style={{ marginLeft: 200, marginRight: 200 }}
          >
            <CardMedia
              sx={{ height: 640 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtnQIcpW3cMnNIuWSaYhqhtGkxfLFL8_aug&usqp=CAU"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Practising spot the difference challenges on a regular basis
                helps in improving concentration and observation skills.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Practising spot the difference challenges on a regular basis
                helps in improving concentration and observation skills.{" "}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Grid container sx={{border:`1px solid gray`}}>
            <Grid item xs={4}>
              <h4>Footer</h4>
              <p>
                {" "}
                Components may have multiple widths defined, causing the layout
                to change at the defined breakpoint. Width values given to
                larger breakpoints override those given to smaller breakpoints.
              </p>
              <p> Grid with multiple breakpoints</p>
            </Grid>

            <Grid item xs={4}>
              <div>
                <h4> BLOG POSTS</h4>
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    gap: 60,
                  }}
                >
                  <div
                    style={{
                      display: `flex`,
                      flexDirection: `row`,
                      gap: 20,
                      flexWrap: `wrap`,
                    }}
                  >
                    <Card sx={{ maxWidth: 100 }}>
                      <CardMedia
                        sx={{ height: 100, width: 100 }}
                        image="https://img.jagranjosh.com/images/2023/September/2092023/Spot%203%20differences%20between%20chef%20pictures.jpg"
                        title="green iguana"
                      />
                    </Card>
                    <Grid item>
                      <p>qwwerrt</p>
                      <p>qwertghbvv</p>
                    </Grid>
                  </div>
                  <div
                    style={{
                      display: `flex`,
                      flexDirection: `row`,
                      gap: 20,
                      flexWrap: `wrap`,
                    }}
                  >
                    <Card sx={{ maxWidth: 100 }}>
                      <CardMedia
                        sx={{ height: 100, width: 100 }}
                        image="https://img.jagranjosh.com/images/2023/September/2092023/Spot%203%20differences%20between%20chef%20pictures.jpg"
                        title="green iguana"
                      />
                    </Card>
                    <div>
                      <p>qwwerrt</p>
                      <p>qwertghbvv</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <h4>POPULAR TAGS</h4>
              Components may have multiple widths defined, causing the layout to
              change at the defined breakpoint. Width values given to larger
              breakpoints override those given to smaller breakpoints.
            </Grid>
          </Grid>
        </Box>
      </Grid>
    );
  }
}
