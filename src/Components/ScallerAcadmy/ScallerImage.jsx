import React from "react";
import Image3 from "../../Assets/Amazon.png";
import Image4 from "../../Assets/673484.png";
import Image5 from "../../Assets/walmart.png";
import Image6 from "../../Assets/MindTickle.png";
import Image7 from "../../Assets/Google.png";
import Image8 from "../../Assets/paypal.png";
import { Box, Container, Grid } from "@mui/material";
const Data = [
  {
    Name: Image5,
  },
  {
    Name: Image7,
  },
  {
    Name: Image4,
  },
  {
    Name: Image8,
  },
  {
    Name: Image6,
  },
  {
    Name: Image4,
  },
];
const ScallerImage = () => {
  return (
    <>
      <Cards Data={Data}></Cards>
    </>
  );
};

export default ScallerImage;
const Cards = (props) => {
  const listItems = props.Data.map((card) => (
    <Grid item lg={2} md={4} xs={4} sm={4}>
      <Box
        sx={{
          backgroundImage: `url(${card.Name})`,
          backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          margin: "auto",
        }}
        display="flex"
        flexDirection={"flex-start"}
        height="10vh"
      ></Box>
    </Grid>
  ));
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0.5}
          alignItems="center"
          alignContent={"center"}
        >
          {listItems}
        </Grid>
      </Container>
    </>
  );
};
