import {
  Container,
  Typography,
  Box,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import HoverComponent from "../Components/CodingEnviroment/HoverComponent";
const Theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#423d69",
      },
      secondary: {
        main: "#506b6a",
      },
    },
    typography: {
      fontFamily:
        'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
      h1: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 700,
        letterSpacing: ".1px",
        fontStyle: "normal",
        textAlign: "center",
      },
      h2: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: ".1px",
        fontStyle: "normal",
        margin: "10px 15px",
        padding: "30px 15px 30px",
        textAlign: "center",
      },
    },
  })
);
const CodingEnviromentPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box bgcolor={"#f8f7fa"} paddingTop="50px" paddingBottom={"40px"}>
        <Container maxWidth="lg" bgcolor="lightgray">
          <Typography variant="h1" color="primary">
            No.1 coding Environment
          </Typography>
          <Typography variant="h2" color="secondary">
            Understand the solutions and concepts much faster with video
            explanations.Created by our experts working at your dream companies,
            these videos will make you more structured and confident with your
            reasoning.
          </Typography>

          <HoverComponent />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CodingEnviromentPage;
