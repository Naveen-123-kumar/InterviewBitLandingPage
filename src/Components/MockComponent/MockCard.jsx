import { Grid, Typography, Paper, Box } from "@mui/material";
import React from "react";
const Data=[
  {
    Name: "Anonymous Mock Interviews",
    Description: "a",
  },
  {
    Name: "Personalized Peer Matching",
    Description: "b",
  },
  {
    Name: "Complete Interview Questions",
    Description: "c",
  },
  {
    Name: "Interactive 1-to-1 Session",
    Description: "d",
  },
];
const MockCard = () => {
  return (
    <Box>
      <Cards Data={Data}></Cards>
    </Box>
  );
};
const Cards = (props) => {
  const listItems = props.Data.map((card) => (
    <Grid item lg={2.75} md={12} xs={12} sm={12}>
      <Box bgcolor={"#ffecee"}>
        <Grid container padding="25px" mx="auto" marginTop={'20px'}>
          <Grid
            item
            lg={12}
            xs={4}
            display="flex"
            justifyContent={"center"}
            mx="auto"
            px="auto"
          >
            <Box
              bgcolor={"#80deea"}
              height={"40px"}
              width={"60px"}
              pt="20px"
              marginY={"24px"}
              borderRadius={"50%"}
              sx={{
                cursor: "pointer",
                ":hover": {
                  bgcolor: "#64ffda",
                },
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Grid item lg={12} xs={8}>
        <Typography
          variant="subtitle1"
          fontSize={"20px"}
          letterSpacing="0.1px"
          fontWeight={700}
          lineHeight="28px"
          color="rgb(26, 61, 60)"
          textAlign={"center"}
          paddingX="30px"
          marginY={'20px'}
          sx={{
            cursor: "pointer",
            ":hover": {
              color: "#64ffda",
            },
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          {card.Name}
        </Typography>
        <Typography
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            cursor: "pointer",
          }}
        >
          {card.Description}
        </Typography>
      </Grid>
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        spacing={1.5}
        justifyContent="center"
        textAlign={"center"}
      >
        {listItems}
      </Grid>
    </>
  );
};
export default MockCard;
