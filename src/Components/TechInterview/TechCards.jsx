import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Image2 from "../../Assets/practice-icon.svg";
import Image1 from "../../Assets/interview-prep.svg";
import { faQuoteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Theme from "../../Theme";
const TechCards = () => {
  return (
    <Box height="70%">
      <ThemeProvider theme={Theme}>
        <Grid
          container
          bgcolor="white"
          borderRadius={"1%"}
          justifyContent="center"
          textAlign={"center"}
          mx="auto"
          height="35vh"
          lg={10.9}
          spacing={1}
        >
          <Grid
            item
            lg={3.5}
            xs={11}
            height="auto"
            py="5px"
            borderRadius={"10px"}
          >
            <Grid
              container
              sx={{
                cursor: "pointer",
                ":hover": {
                  bgcolor: "#928cbe",
                },
              }}
              bgcolor={"#7986cb"}
              height="100%"
              borderRadius={"5px"}
              py="auto"
              marginY={"auto"}
            >
              <Grid
                item
                height="55%"
                lg={8}
                xs={3}
                mx="auto"
                my="20px"
                py={"15px"}
                sx={{
                  backgroundImage: `url(${Image2})`,
                  backgroundAttachment: "relative",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundposition: "center",
                }}
              ></Grid>
              <Grid
                item
                lg={12}
                xs={6}
                bgcolor="#3f51b5"
                alignItems={"center"}
                paddingY="auto"
                alignContent="center"
                justifyContent={"center"}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "#928cbe",
                  },
                }}
              >
                <Typography
                  variant="inherit"
                  bgcolor={"#5b5490"}
                  color="#ffffff"
                  lineHeight={"28px"}
                  padding="12px 15px"
                  textAlign="center"
                >
                  Practice Problem
            <FontAwesomeIcon icon={faArrowRight} size="x" pull="right" border/>

                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={3.5}
            xs={11}
            height="auto"
            py="5px"
            borderRadius={"10px"}
          >
            <Grid
              container
              sx={{
                cursor: "pointer",
                ":hover": {
                  bgcolor: "#ffe082",
                },
              }}
              bgcolor={"#ffb74d"}
              height="100%"
              borderRadius={"5px"}
              py="auto"
              marginY={"auto"}
            >
              <Grid
                item
                height="53%"
                lg={8}
                xs={3}
                mx="auto"
                my="20px"
                py={"20px"}
                sx={{
                  backgroundImage: `url(${Image2})`,
                  backgroundAttachment: "relative",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundposition: "center",
                }}
              ></Grid>
              <Grid
                item
                lg={12}
                xs={6}
                bgcolor="#3f51b5"
                alignItems={"center"}
                paddingY="auto"
                alignContent="center"
                justifyContent={"center"}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "#ffe082",
                  },
                }}
              >
                <Typography
                  variant="inherit"
                  bgcolor={"#d97500"}
                  color="#ffffff"
                  lineHeight={"28px"}
                  padding="12px 15px"
                  textAlign="center"
                >
                  Fast Track Courses
            <FontAwesomeIcon icon={faArrowRight} size="x" pull="right" border/>

                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={3.5}
            xs={11}
            height="auto"
            py="5px"
            borderRadius={"10px"}
          >
            <Grid
              container
              sx={{
                cursor: "pointer",
                ":hover": {
                  bgcolor: "#00c3ad",
                },
              }}
              bgcolor={"#007c6e"}
              height="100%"
              borderRadius={"5px"}
              py="auto"
              marginY={"auto"}
            >
              <Grid
                item
                height="53%"
                lg={8}
                xs={3}
                mx="auto"
                my="20px"
                py={"20px"}
                sx={{
                  backgroundImage: `url(${Image1})`,
                  backgroundAttachment: "relative",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundposition: "center",
                }}
              ></Grid>
              <Grid
                item
                lg={12}
                xs={6}
                bgcolor="#007c6e"
                alignItems={"center"}
                paddingY="auto"
                alignContent="center"
                justifyContent={"center"}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "#00c3ad",
                  },
                }}
              >
                <Typography
                  variant="inherit"
                  bgcolor={"#007c6e"}
                  color="#ffffff"
                  lineHeight={"28px"}
                  padding="12px 15px"
                  textAlign="center"
                >
                  Interview Prep
            <FontAwesomeIcon icon={faArrowRight} size="x" pull="right" border/>

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default TechCards;
