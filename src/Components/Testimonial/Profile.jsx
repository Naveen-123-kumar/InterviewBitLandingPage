import { Grid, Box, Container, CardMedia } from "@mui/material";
import React from "react";
import Image from "../../Assets/emoji.svg";
const Profile = () => {
  return (
    <Box>
    <Grid container>
      <Grid item component={Box} >
        <Box
          bgcolor={"lightgray"}
          height={"80px"}
          width={"100px"}
          pt="10px"
          borderRadius={"8%"}
          ml={'15px'}
          
        >
          <Container fixed>
            <Box sx={{ pt: "2px" }}>
              <CardMedia component="img" height={"80px"} image={Image} />
            </Box>
          </Container>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Profile