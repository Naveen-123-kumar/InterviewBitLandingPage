import { Grid, Typography, Paper, Box } from "@mui/material";
import React from "react";
const Data = [
  { Name: "Python" },
  { Name: "Java" },

  { Name: "C++" },

  { Name: "JavaScript" },
  { Name: "C#" },
];
const CardCourses = () => {
  return (
    <Box>
      <Cards Data={Data}></Cards>
    </Box>
  );
};
const Cards = (props) => {
  const listItems = props.Data.map((card) => (
    <Grid item lg={2} md={12} xs={12} sm={12}>
      <Box
        width="100%"
        sx={{
          cursor: "pointer",
          ":hover": {
            // bgcolor: "#64ffda",
            borderColor: "#64ffda",
          },
        }}
        bgcolor="#e0f7fa"
        border={2}
        borderColor="white"
        height="auto"
      >
        {/* <Paper
            component={Box}
            width="100%"
            sx={{
              cursor: "pointer",
              ":hover": {
                color: "#64ffda",
              },
            }}
            height="auto"
          > */}
        <Grid container padding="30px" mx="auto">
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
        {/* </Paper> */}
      </Box>
      <Grid item lg={12} xs={12}>
        <Typography
          variant="subtitle1"
          fontSize={"20px"}
          letterSpacing="0.1px"
          fontWeight={400}
          lineHeight="28px"
          color="black"
          textAlign={"center"}
          margin="15px 0px 0px"
          sx={{
            cursor: "pointer",
            ":hover": {
              color: "#64ffda",
              bgcolor: "#e0f7fa",
            },
          }}
        >
          {card.Name}
        </Typography>
      </Grid>
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        // alignItems="center"
        // alignContent="center"
        flexDirection="row"
        textAlign={"center"}
      >
        {listItems}
      </Grid>
    </>
  );
};
export default CardCourses;
