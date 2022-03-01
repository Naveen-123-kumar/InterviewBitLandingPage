import { Box, Typography } from "@mui/material";
import React from "react";
import SubjectName from "./SubjectName";

const PaperComponent = () => {
  return (
    <Box
      fontFamily='Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto'
      bgcolor="#e3f2fd"
      height="auto"
      // marginY={"60px"}
      paddingY="50px"
    >
      <Typography
        variant="subtitle1"
        fontSize={"32px"}
        letterSpacing="0.1px"
        fontWeight={400}
        lineHeight="44.8px"
        color="#007779"
        textAlign={"center"}
      >
        800+ problems for practice
      </Typography>
      <Box my="40px">
        <SubjectName />
      </Box>
      <Typography
        variant="subtitle1"
        fontSize={"20px"}
        letterSpacing="0.1px"
        fontWeight={600}
        lineHeight="28px"
        color="rgb(15, 135, 255)"
        textAlign={"center"}
        margin="35px 0px 0px"
        sx={{
          cursor: "pointer",
          ":hover": {
            color: "#29b6f6",
          },
        }}
      >
        Start Solving Now!
      </Typography>
    </Box>
  );
};

export default PaperComponent;
