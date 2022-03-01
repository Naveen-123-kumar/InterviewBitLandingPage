import {
  Box,
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Table,
  Typography,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import React from "react";
import MockCard from "../Components/MockComponent/MockCard";
import MockImage from "../Components/MockComponent/MockImage";
const Theme = responsiveFontSizes(createTheme());
const MockInterviewPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <TableContainer component={Paper} maxWidth='md'>
        <Table minWidth="1050px">
          <TableHead>
            <TableRow>

           
            <Container maxWidth="lg">
              <Box textAlign={"center"} letterSpacing=".1px">
                <Typography
                  color="rgb(0, 62, 126)"
                  fontSize={"32px"}
                  fontWidth="700px"
                  paddingTop={"30px"}
                  lineHeight={"44.8px"}
                >
                  Mock Interviews
                </Typography>

                <Typography
                  color="#506b6a"
                  fontSize={"16px"}
                  fontWidth="400px"
                  lineHeight={"22.4px"}
                  margin="10px 15px"
                  padding="10px"
                >
                  Take your interview preparation to the next level with
                  completely free and real-time mock interviews. Expert selected
                  questions as per your unique interview requirements. Take one
                  today or schedule for later!
                </Typography>
                
                <MockImage />
                <MockCard />
              </Box>
              <Box marginTop='20px'>
              <Divider />

                <Typography
                  color="#0f87ff"
                  fontSize={"20px"}
                  fontWidth="600px"
                  margin="40px 0px"
                  lineHeight={"28px"}
                  textAlign="center"
                  sx={{
                    cursor: "pointer",
                    ":hover": {
                      color: "#64ffda",
                      color: "#4fc3f7",
                    },
                  }}
                >
                  Start Now for Free!
                </Typography>
              </Box>
            </Container>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default MockInterviewPage;
