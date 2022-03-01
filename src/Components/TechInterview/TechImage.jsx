import React from "react";
import Image3 from "../../Assets/AmazonB.png";
import Image5 from "../../Assets/walmartB.png";
import Image6 from "../../Assets/MindTickle.png";
import Image7 from "../../Assets/GoogleB.png";
import Image8 from "../../Assets/medianetB.png";
import { Box, Container, Grid } from "@mui/material";
const Data = [
  {
    Name: Image5,
  },
  {
    Name: Image3,
  },
  {
    Name: Image7,
  },
  {
    Name: Image8,
  },
  {
    Name: Image6,
  },
  {
    Name: Image7,
  },
];
const TechImage = () => {
  return (
    <>
      <Cards Data={Data}></Cards>
    </>
  );
};

export default TechImage;
const Cards = (props) => {
  const listItems = props.Data.map((card) => (
    <Grid item lg={2} md={4} xs={4} sm={4}>
      <Box
        sx={{
          backgroundImage: `url(${card.Name})`,
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          margin: "auto",
        }}
        display="flex"
        flexDirection={"flex-start"}
        height="12vh"
      ></Box>
    </Grid>
  ));
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center" alignContent={"center"}>
          {listItems}
        </Grid>
      </Container>
    </>
  );
};
