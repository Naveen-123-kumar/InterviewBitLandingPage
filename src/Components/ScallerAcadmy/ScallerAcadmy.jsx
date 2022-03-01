import { Box, Divider, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import Image from "../../Assets/SAT-2.svg";
import Image2 from "../../Assets/scaler-academy.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Theme from "../../Theme";

import { ThemeProvider } from "@mui/material";
import ScallerImage from "./ScallerImage";
const ScallerAcadmy = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          width={"100%"}
          mx="auto"
          paddingY={"80px"}
          // bgcolor="#f5f5f5"
        >
          <Grid item letterSpacing={0.5} />
          <Grid
            item
            lg={6}
            xs={12}
            textAlign="left"
            // padding={"20px"}
          >
            <Typography
              variant="h4"
              lineHeight={"42px"}
              color="rgb(26, 61, 60)"
              padding="0px 0px 10px"
            >
              Unsure Where To Start DSA Prep?
            </Typography>
            <Divider />
            <Typography
              variant="h3"
              lineHeight={"42px"}
              color="rgb(26, 61, 60)"
              padding="0px 0px 15px"
            >
              Or Getting Rejected At Tech Interviews?
            </Typography>
            <Typography
              variant="h4"
              lineHeight={"42px"}
              color="rgb(80, 107, 106)"
              padding="0px 0px 10px"
            >
              Take Our
            </Typography>

            <Typography
              variant="body2"
              lineHeight={"63px"}
              color="rgb(0, 138, 255)"
              padding="0px 0px 20px"
            >
              Free Mock Coding Interview
            </Typography>

            <Typography
              variant="h4"
              lineHeight={"42px"}
              color="rgb(80, 107, 106)"
              padding="0px 0px 10px"
              marginBottom={"20px"}
            >
              For Software Engineers
            </Typography>
            <Typography
              display="inline"
              lineHeight="22.4px"
              variant="body1"
              color="rgb(255, 255, 255)"
              bgcolor={"rgb(226, 16, 50)"}
              margin="15px 0px 0px"
              padding="10px 20px"
              borderRadius={"10px"}
            >
              Take Test Now! <ArrowForwardIcon margin="10px" fontSize="small" />
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              lg={4.5}
              flexDirection="row-reverse"
              // sx={{
              //   display: { xs: "none", sm: "none", lg: "block", md: "block" },
              // }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${Image2})`,
                  backgroundAttachment: "relative",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "center",
                  backgroundposition: "right",
                }}
                height="10vh"
                marginLeft={"380px"}
              ></Box>
              <Box
                sx={{
                  backgroundImage: `url(${Image})`,
                  backgroundAttachment: "relative",
                  backgroundSize: "cover",
                  backgroundposition: "relative",
                }}
                height="50vh"
              />
            </Grid>
          </Hidden>
          <Grid item letterSpacing={1} />
          <Grid item lg={10.5} xs={12} paddingTop="30px">
            <Typography
              fontSize={"20px"}
              fontWeight="400"
              letterSpacing={"0.1px"}
              color="#1a3d3c"
              paddingTop="30px"
            >
              Our Learners work at
            </Typography>
          </Grid>
        
          <ScallerImage />
          <Grid item lg={4}>
            <Box></Box>
          </Grid>
          <Grid item lg={8} xs={12} textAlign="left">
            <Typography
              fontSize={"32px"}
              color="#1a3d3c"
              padding="10px 10px 5px"
              fontWidth="400"
            >
              What makes <b>InterviewBit No. 1</b>
            </Typography>
            <Typography
              fontSize={"24px"}
              color="#1a3d3c"
              padding="0px 10px 10px"
              fontWidth="400"
            >
              Resource for tech interview preparation
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default ScallerAcadmy;
