import React from "react";
import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CardCourses from "../Components/FastTrackCourses/CardCourses";
const Theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#506b6a",
      },
      secondary: {
        main: "#007779",
      },
      warning: {
        main: "#0f87ff",
      },
    },
    typography: {
      fontFamily:
        'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
      h1: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 800,
        letterSpacing: ".1px",
        fontStyle: "normal",
        textAlign: "center",
        mx: "auto",
      },
      h2: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        textAlign: "center",
      },
      h3: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        textAlign: "center",
        margin: "10px 15px",
        padding: "10px",
      },
      h4: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "24px",
        fontWeight: 600,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        textAlign: "center",
        margin: "20px 0px 50px",
        padding: "0px",
      },
    },
  })
);
const FastCoursesPage = () => {
  return (
    <Box bgcolor={"#fffaf2"}>
      <ThemeProvider theme={Theme}>
        <Box width="86%" mx="auto" paddingTop={'60px'}>
          <Typography variant="h2" color="primary" mb="30px">
            Fast Track Courses
          </Typography>
          <Typography variant="h3" fontWeight={400} color="primary">
            Brush up your skills or learn from scratch. Increase your pace of
            learning & even get certified with our to the point byte size fast
            track courses around 20 most important topics such as data
            structures and algorithms programming dynamic programming etc.
          </Typography>
        </Box>
        <Box padding="10px">
          <CardCourses />
        </Box>
        <Typography
          variant="h4"
          color="#0f87ff"
          lineHeight={"28px"}
          sx={{
            cursor: "pointer",
            ":hover": {
              color: "#64ffda",
            },
          }}
          marginY="60px"
        >
          {" "}
          View All Courses!
        </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default FastCoursesPage;
