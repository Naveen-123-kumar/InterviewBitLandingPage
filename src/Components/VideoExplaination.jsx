import React from "react";
import { Box, Grid, Typography,Container, responsiveFontSizes,createTheme, ThemeProvider } from "@mui/material";
import Image from '../Assets/video-explanation-large.svg'
const Theme=responsiveFontSizes(createTheme(
));
const VideoExplaination = () => {
  return (
    <ThemeProvider theme={Theme}>
     <Box>
      <Grid container>
        <Grid item lg={1} />
        <Grid item lg={10} xs={12}>
          <Box
            mt="110px"
            height='auto'
            font-family='Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto'
          >
            <Typography
              textAlign={"center"}
              fontSize="32px"
              color={"rgb(0, 119, 121)"}
              letterSpacing="0.1px"
              lineHeight={"44.8px"}
              margin="10px 15px"
              padding="10px"

              fontWeight={700}
            >
              Video explainations
            </Typography>
            <Typography
              textAlign={"center"}
              fontSize="16px"
              color={"rgb(80, 107, 106)"}
              letterSpacing="0.1px"
              lineHeight={"22.4px"}
              paddingX='20px'
              marginX='auto'
              mb={'30px'}
              fontWeight={400}
            >
              Understand the solutions and concepts much faster with video
              explanations.Created by our experts working at your dream
              companies these videos will make you more structured and confident
              with your reasoning
            </Typography>
          </Box>
        </Grid> 
        <Container maxWidth='lg'>

        <Box
            borderRadius={'10px'}
            bgcolor="#e0f7fa"
  
           
            sx={{
              backgroundImage: `url(${Image})`,
              paddingTop:'40px',              
              backgroundSize: "center",
              backgroundRepeat: "no-repeat",
              backgroundPosition: 'center',
              margin: "auto",
            }}
            height= "45vh"
          />
           <Typography
        variant="subtitle1"
        fontSize={"20px"}
        letterSpacing="0.1px"
        fontWeight={600}
        lineHeight="28px"
        color="#3d5afe"
        textAlign={"center"}
        margin="50px 0px 50px"
        sx={{
          cursor: "pointer",
          ":hover": {
            color: "#29b6f6",
          },
        }}
      >
        Get Started Now!
      </Typography>
        </Container> 
         {/* <Grid container>
        <Grid item lg={1} />

        <Grid item lg={10} xs={12} mx='auto'>
          <Box
            bgcolor="#e0f7fa"
            border={1}
            borderColor="#ffab40"
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${Image})`,
              paddingTop:'40px',
              // poition: "center",
              // width: "84%",
              // mx: "auto",
              //   backgroundSize:'100% 100%',
              // backgroundAttachment: "fixed",
              backgroundSize: "center",
              backgroundRepeat: "no-repeat",

              backgroundPosition: 'center'
              // margin: "auto",
            }}
            height= "40vh"

          />
          <Typography
        variant="subtitle1"
        fontSize={"20px"}
        letterSpacing="0.1px"
        fontWeight={600}
        lineHeight="28px"
        color="#3d5afe"
        textAlign={"center"}
        margin="50px 0px 50px"
        sx={{
          cursor: "pointer",
          ":hover": {
            color: "#29b6f6",
          },
        }}
      >
        Get Started Now!
      </Typography>
          
        </Grid>
        <Grid item lg={1} />
        </Grid>  */}
      </Grid>
    </Box>
    </ThemeProvider>
  );
};

export default VideoExplaination;
