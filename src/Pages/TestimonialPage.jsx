import { Grid, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card1 from "../Components/Testimonial/Card1";
import Card2 from "../Components/Testimonial/Card2";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

const TestimonialPage = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <Box
      sx={{
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        pt: "30px",
        height: "auto",
        mx: "auto",
        width: "100%",
        bgcolor: "#fce4ec",
        marginTop:'40px'
      }}
    >
      <Grid container>
        <Grid item lg={1}></Grid>
        <Grid item lg={10} xs={12} sm={12}>
          <Box width="100%" pb="30px" b>
            <Typography
              textAlign={"center"}
              // paddingBottom="20px"
              fontSize="32px"
              color="#1a3d3c"
              fontWidth="400"
              letterSpacing={"0.1px"}
              margin="10px 0px 30px"
              padding="10px"
            >
              Join 1 million+ learners
            </Typography>

            <Carousel breakPoints={breakPoints}>
              <Card1 />
              <Card1 />
              <Card2 />
              <Card1 />
              <Card1 />
              <Card2 />
            </Carousel>
          </Box>
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialPage;
