import { Grid, Typography, Paper, Box, responsiveFontSizes, createTheme, ThemeProvider, } from "@mui/material";
import React from "react";
const Theme=responsiveFontSizes(createTheme(
  {
    typography: {
      fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
      h1: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "18px",
        fontWeight: 400,
        letterSpacing: ".1px",
        fontStyle: "normal",
        textAlign:'center',
        margin: "15px 0px 0px",      },
    }
}
))
const Data = [
  {
    Name: "Programming",
  },
  {
    Name: "Data Science",
  },
  {
    Name: "System Design",
  },
  {
    Name: "Databases",
  },
  {
    Name: "Puzzle",
  },
  {
    Name: "Scripting",
  },
];
const SubjectName = () => {
  return (
    <ThemeProvider theme={Theme}>
    <Box>
      <Cards Data={Data}></Cards>
    </Box>
    </ThemeProvider>

  );
};
const Cards = (props) => {
  const listItems = props.Data.map((card) => (
    <Grid item lg={1.65} md={12} xs={12} sm={12}>
      <Box>
        <Paper
          component={Box}
          width="100%"
          sx={{
            cursor: "pointer",
            ":hover": {
              color: "#64ffda",
            },
          }}
          height="auto"
        >
          <Grid container padding="25px" mx="auto">
            <Grid item lg={12} xs={4} display="flex" justifyContent={"center"} mx='auto' px='auto'>
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

            <Grid item lg={12} xs={8}>
              <Typography
                variant="h1"
                fontSize={"18px"}
                letterSpacing="0.1px"
                fontWeight={400}
                lineHeight="28px"
                color="#1a3d3c"
                textAlign={"center"}
                margin="15px 0px 0px"
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    color: "#64ffda",
                  },
                }}
              >
                {card.Name}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  ));
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        spacing={1.5 }
        justifyContent="center"
        textAlign={"center"}
      >
        {listItems}
      </Grid>
    </ThemeProvider>
  );
};
export default SubjectName;
