import React from "react";
import { Grid, Typography } from "@mui/material";
import { Data } from "./InterviewData";
const FooterComponent2 = () => {
  return (
    <>
      <Cards Data={Data}></Cards>
    </>
  );
};
const Cards = (props) => {
  const listItems = props.Data.map((card) => (
    <Grid item lg={4} md={4} xs={6} sm={6}>
      <Typography
        variant="inherit"
        sx={{
          cursor: "pointer",
          ":hover": {
            color: "#64ffda",
          },
        }}
      >
        {card.Name}
      </Typography>
    </Grid>
  ));
  return (
    <>
      <Grid container lineHeight={"40px"}>
        {listItems}
      </Grid>
    </>
  );
};
export default FooterComponent2;
