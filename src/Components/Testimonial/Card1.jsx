import React from 'react'
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Grid,
  } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Profile from './Profile';

const Card1 = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item lg={0.5} ></Grid>
      <Grid item lg={11} xs={12}>
        <Card sx={{ maxWidth: '100%', minHeight: 300 }} elevation={2}>
            <Box display='flex' alignItems={'flex-start'} pt='30px'>
            <CardMedia>  
            <Profile/>
          </CardMedia>
          <CardHeader title='Naveen'
          subheader='CampK12'/>
            </Box> 
            <Box minWidth='100%' minHeight={'6vh'} paddingLeft='15px' pt='10px'>
            <FontAwesomeIcon icon={faQuoteLeft} size="3x" pull="left" color="#f48fb1"/>
            </Box>

          <CardContent>

            <Box textAlign={'left'} alignContent='justify'>

            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum dolor eligendi, voluptas voluptate autem molestiae quisquam modi nobis inventore eius vitae dignissimos impedit tempora id in nulla repudiandae quae.
            </Typography>
            </Box>
          </CardContent>
        </Card>   
      </Grid>
      <Grid item lg={0.5}></Grid>
    </Grid>
    
  </>
  )
}

export default Card1