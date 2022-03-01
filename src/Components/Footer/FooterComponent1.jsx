import {
  Box,
  Grid,
  Stack,
  Typography,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import FooterComponent2 from "./FooterComponent2";

const breakPoints = [
  { width: 1, textAlign: "center" },
  { width: 550, textAlign: "center" },
  { width: 768, textAlign: "left" },
  { width: 1200, textAlign: "left" },
];
const Theme=responsiveFontSizes(createTheme());
const FooterComponent1 = () => {
  return (
    <ThemeProvider theme={Theme}>
    <Box
      height="auto"
      bgcolor={"rgb(0, 34, 34)"}
      width="100%"
      disableGutters="true"
    >
      <Grid container maxWidth={"86%"} marginX={"auto"}>
        <Grid item lg={12} xs={12} height="12vh">
          <Typography
            fontSize={"30px"}
            fontFamily='Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto'
            breakPoints={breakPoints}
            pt="20px"
            color="white"
          >
            InteviewBit
          </Typography>
        </Grid>
        <Grid continer></Grid>
        <Grid
          item
          lg={3}
          letterSpacing="0.1px"
          lineHeight={"19.6px"}
          color="#bbc6c5"
          fontFamily='Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto'
        >
          <Grid container lg={12}>
            <Grid item lg={12} xs={12}>
              <Stack spacing={6} direction="row">
                <Stack direction="column" spacing={2}>
                  <Typography variant="inherit">Blog</Typography>
                  <Typography variant="inherit">About Us</Typography>
                  <Typography variant="inherit">Contact Us</Typography>
                  <Typography variant="inherit">Privacy Policy</Typography>
                </Stack>
                <Stack direction="column" spacing={2}>
                  <Typography variant="inherit">Community</Typography>
                  <Typography variant="inherit">FAQ</Typography>
                  <Typography variant="inherit">Terms</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item lg={12} xs={6} lineHeight="40px" marginTop={"20px"}>
              <Typography
                variant="h6"
                color="white"
                fontSize={"16px"}
                letterSpacing={"0.1px"}
              >
                Practice Questions
              </Typography>
              <Typography variant="inherit">Programming</Typography>
              <Typography variant="inherit">Scripting</Typography>
              <Typography variant="inherit">System Design</Typography>
              <Typography variant="inherit">Databases</Typography>
              <Typography variant="inherit">Puzzle</Typography>
            </Grid>
            <Grid item lg={12} xs={6} lineHeight="40px" marginTop={"20px"}>
              <Typography
                variant="h6"
                letterSpacing={"0.1px"}
                color="white"
                fontSize={"16px"}
              >
                Fast Track Courses
              </Typography>
              <Typography variant="inherit">Python</Typography>
              <Typography variant="inherit">Java</Typography>
              <Typography variant="inherit">JavaScript</Typography>
              <Typography variant="inherit">C++</Typography>
              <Typography variant="inherit">C</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={9}
          fontFamily='Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto'
          letterSpacing="0.1px"
          lineHeight={"19.6px"}
          color="#bbc6c5"
        >
          <Grid container >
            <Grid item lg={12}>
              <Typography variant="body1" fontSize={"bold"} color={"white"}>
                Online Interviewbit Compilers
              </Typography>
            </Grid>

            <Grid item lg={4} xs={6} lineHeight="40px" >
              <Typography variant="inherit">Community</Typography>
              <Typography variant="inherit">FAQ</Typography>
              <Typography variant="inherit">Terms</Typography>
            </Grid>
            <Grid item lg={4} xs={6} lineHeight="40px">
              <Typography variant="inherit">Community</Typography>
              <Typography variant="inherit">FAQ</Typography>
              <Typography variant="inherit">Terms</Typography>
            </Grid>
            <Grid item lg={4} lineHeight="40px">
              <Typography variant="inherit">Community</Typography>
              <Typography variant="inherit">FAQ</Typography>
              <Typography variant="inherit">Terms</Typography>
            </Grid>

            <Grid item lg={12} xs={12}>
              <Typography
                variant="body1"
                fontSize={"bold"}
                color={"white"}
                letterSpacing="0.1px"
                lineHeight={"19.6px"}
              >
                Interview Preparation
              </Typography>
            </Grid>
            <Grid item lg={12} xs={12}>
              <FooterComponent2 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>

  );
};

export default FooterComponent1;
