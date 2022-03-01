import React,{useState} from 'react'
import {Typography, Box } from "@mui/material";
const NavbarButton = () => {
  const [page, setPage] = useState(1);
  const nextPage=()=>{
    // setPage(page+1);
    alert('Hey, you just clicked me');
    console.log(setPage);
};
  return (
    <>
    
    <Box>
            <Typography
              padding="14px 28px"
              bgcolor={"rgb(0, 224, 227)"}
              color="rgb(255, 255, 255)"
              borderRadius="10px"
              fontSize="14px"
              lineHeight={"19.6px"}
              fontWeight="600"
              fontFamily={
                "Lato, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI"
              }
              
              sx={{cursor:"pointer",
              ':hover': {
                bgcolor: '#64ffda',
                color: 'white',
              },
               display: { xs: "none", md: "flex" } }}
               onClick={nextPage}
            >
              Sign in
            </Typography>
          </Box>
    </>
  )
}

export default NavbarButton