import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Link from "@mui/material/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image2 from "../../Assets/banner.svg";
import TechCards from "./TechCards";
import TechImage from "./TechImage";

const Theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily:
        'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
      h1: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "45px",
        fontWeight: 700,
        letterSpacing: ".1px",
        fontStyle: "normal",
      },

      h2: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "30px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        // padding: "10px 10px 5px",
        textAlign: "center",
        flexWrap: "nowrap",
      },
      h3: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        padding: "14px 28px",
        margin: "30px 30px 90px",
        fontSize: "20px",
        borderRadius: "10px",
        letterSpacing: "0.1px",
        fontStyle: "normal",
        boxShadow: 3,
      },
      h4: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        // margin: "10px 0px 30px",
        // display:'inline-flex',
        padding: "10px",
        textAlign: "center",
        color: "rgb(26, 61, 60)",
      },
    },
  })
);
const TechInterview = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        paddingTop={"80px"}
        width="100%"
        textAlign="center"
        bgcolor="#e7f3ff"
      >
        <Typography
          variant="h2"
          lineHeight="44.8px"
          sx={{ color: "rgb(26, 61, 60)" }}
        >
          Everything you need to crack your
        </Typography>
        <Typography
          variant="h1"
          display="inline-flex"
          bgcolor="white"
          color="#1a3d3c"
        >
          Next Tech Interview
        </Typography>
        <Box bgcolor="#e7f3ff">
          <Typography
            variant="h3"
            display={"inline-flex"}
            sx={{
              cursor: "pointer",
              ":hover": {
                bgcolor: "#64ffda",
              },
            }}
            bgcolor="#00e0e3"
            color="#ffffff"
            lineHeight="28px"
            // onClick={handleClick}
            href="https://www.interviewbit.com/"
          >
            <Link href="https://www.interviewbit.com/" target={"_blank"}>
              Get Started for free
            </Link>

            <FontAwesomeIcon icon={faArrowRight} size="x" pull="right" border />
          </Typography>
        </Box>
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundImage: `url(${Image2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundposition: "center",
              bgcolor: "#e7f3ff",
            }}
            bgcolor="#e7f3ff"
            height="42vh"
          />
        </Container>
        <TechCards />
      </Box>
      <Box textAlign="center" marginTop={"70px"}>
        <Typography variant="h4">
          Our Users Have <b>Cracked interview at</b>
        </Typography>
      </Box>
      <TechImage />
    </ThemeProvider>
  );
};

export default TechInterview;
