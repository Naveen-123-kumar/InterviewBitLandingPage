import {
  Box,
  Container,
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
  Typography,
  Grid,
  makeStyles,
} from "@mui/material";
import React, { useState } from "react";
import Image from "../../Assets/code-editor.png";
const Theme = responsiveFontSizes(createTheme());
const HoverComponent = () => {
  const [display, setDisplay] = useState('notdisplayed');
  const showButton = (e) => {
    e.preventDefault();
    setDisplay('displayed');
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };
  return (
    <ThemeProvider theme={Theme}>
      <Grid Container>
        <Grid lg={12} xs={12}>
          <Box
            sx={{
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundAttachment: "center",
              backgroundSize: "100% ",
              margin: '0px',
              padding:'0px'
            }}
            height="100vh"
          >
            <Box
              height="100vh"
              sx={{
                cursor: "pointer",
                ":hover": {
                  bgcolor: "white",
                  opacity: ".5",
                },
              }}
              textAlign="center"
              justifyContent={"center"}
              alignItems="center"
              my={"auto"}
              py="auto"
            >
              <Box 
                onMouseEnter={(e) => showButton(e)}
                onMouseLeave={(e) => hideButton(e)}
              >
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
};

export default HoverComponent;
