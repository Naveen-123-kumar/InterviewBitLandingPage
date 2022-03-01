import {
  Box,
  MenuItem,
  Select,
  Grid,
  FormControl,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";

const ModalComponent = () => {
  const subjects = ["Maths", "Science", "English", "History"];
  const [inputs, setInputs] = useState({
    primarySubject: " ",
    secondarySubject: " ",
    experience: " ",
  });

  return (
    <Box width={"80%"} mx="auto">
      <Grid container spacing={3}>
        <Grid item lg={12} sm={12} xs={12} md={12}>
          <Box marginY={2}>
            <Typography variant="h6">
              Enter your Educational Experiance
            </Typography>
          </Box>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Primary Subject
            </InputLabel>

            <Select label="primary subject" variant="outlined">
              {subjects.map((subject, id) => {
                return <MenuItem value={id}>{subject}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item lg={12} sm={12} xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel component={Box}>Secondary Subject</InputLabel>
            <Select label="secondary subject" variant="outlined">
              <MenuItem value={1}>Maths</MenuItem>
              <MenuItem value={2}>Science</MenuItem>
              <MenuItem value={3}>Music</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <FormControl fullWidth>
            <InputLabel>Year Of Experiance</InputLabel>
            <Select variant="outlined" label="total years experiance">
              <MenuItem value={1}>Less than One</MenuItem>
              <MenuItem value={2}>More than One</MenuItem>
              <MenuItem value={3}>Less than equal to Three</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Box marginX={"auto"} mt="20px">
          <Grid item lg={12} sm={12} xs={12}>
            <Button color={"secondary"} variant="contained">
              Submit
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default ModalComponent;
