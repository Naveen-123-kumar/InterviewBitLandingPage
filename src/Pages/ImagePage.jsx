import {
  Box,
  Container,
  createTheme,
  Grid,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import Image from "../Assets/code-editor.png";
import Image2 from "../Assets/Amazon.png";
import Image3 from "../Assets/673484.png";
import Image4 from "../Assets/Google.png";
import Image5 from '../Assets/walmart.png';
import Image6 from '../Assets/MindTickle.png';
import Image7 from '../Assets/paypal.png';

const Data=[
  {
    Name: Image5,
  },
  {
    Name: Image3,
  },
  {
    Name: Image4,
  },
  {
    Name: Image2,
  },
  {
    Name: Image6,
  },
  {
    Name: Image7,
  },
]
const ImagePage = () => {
  return (
    <>
    <Cards Data={Data}></Cards>
    </>
      // <Grid container>
      //   <Grid item lg={12} xs={12}>
      //     <Box
      //       borderRadius={"10px"}
      //       bgcolor="#e0f7fa"
      //       sx={{
      //         backgroundImage: `url(${Image2})`,
      //         paddingTop: "40px",
      //         // backgroundSize: "30%",
      //         backgroundRepeat: "no-repeat",
      //         backgroundPosition: "center center",
      //         margin: "auto",
      //       }}
      //       height="15vh"
      //     />
      //     <Box
      //       borderRadius={"10px"}
      //       bgcolor="#e0f7fa"
      //       sx={{
      //         backgroundImage: `url(${Image3})`,
      //         paddingTop: "40px",
      //         // backgroundSize: "30%",
      //         backgroundRepeat: "no-repeat",
      //         backgroundPosition: "center center",
      //         margin: "auto",
      //       }}
      //       height="30vh"
      //     />
      //      <Box
      //       borderRadius={"10px"}
      //       bgcolor="#e0f7fa"
      //       sx={{
      //         backgroundImage: `url(${Image4})`,
      //         paddingTop: "20px",
      //         backgroundSize: "30%",
      //         backgroundRepeat: "no-repeat",
      //         backgroundPosition: "center center",
      //         margin: "auto",
      //       }}
      //       height="25vh"
      //     />
      //   </Grid>
      // </Grid>
  );
};

export default ImagePage;
const Cards = (props) => {
  const listItems = props.Data.map((card) => (
    <Grid item lg={2} md={4} xs={4} sm={4}>
      <Box
      sx={{
        backgroundImage: `url(${card.Name})`,
        // paddingTop: "2px",
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        margin: "auto",
      }}
      display='flex'
      flexDirection={'flex-start'}
      
      height="10vh"
      >
      </Box>
    </Grid>
  ));
  return (
    <>
    <Container maxWidth='lg'>

      <Grid
        container
        spacing={.5} alignItems='center' alignContent={'center'}
      >
        {listItems}
      </Grid>
    </Container>

    </>
  );
};
