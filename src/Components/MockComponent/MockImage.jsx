import { Box, Container, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import React from "react";
import Image from "../../Assets/mockinterview.svg";
const Theme=responsiveFontSizes(createTheme());
const MockImage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box width={'96%'} marginX='auto' borderRadius={'10%'}>
      <Container maxWidth='lg'>
    <Box
    borderRadius={'2%'}
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundPosition:'center center',
        backgroundRepeat:'no-repeat',
        // mx: "auto",
        margin: 'auto',
        backgroundAttachment: "cover",
        backgroundSize: "100% 100%",
      }}
      height="40vh"
    />
      </Container>
      </Box>
    </ThemeProvider>
  
  );
};

export default MockImage;
