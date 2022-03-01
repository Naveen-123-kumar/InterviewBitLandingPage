import {
  Container,
  Typography,
  Modal,
  Box,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import DataGridPage from "../Pages/DataGridPage";
const Theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "rgb(26, 61, 60)",
      },
      secondary: {
        main: "rgb(26, 61, 60)",
      },
      warning: {
        main: "#0f87ff",
      },
    },
    typography: {
      fontFamily:
        'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
      h1: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "52px",
        fontWeight: 700,
        letterSpacing: ".1px",
        display: "inline-flex",
        bgcolor:"rgb(193, 245, 246)",
        fontStyle: "normal",
        textAlign: "center",
        mx: "auto",
      },
      h2: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        padding: "10px 10px 5px",

        textAlign: "center",
      },
      h3: {
        fontFamily:
          'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "20px",
        fontWeight: 600,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        textAlign: "center",
        padding: "14px 28px",
        margin: "30px 30px 90px",
        display: "inline-flex",
      },
    },
  })
);
const DreamJob = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Container maxWidth="xl">
          <Box
            bgcolor="rgba(0, 0, 0, 0)"
            minHeight="auto"
            fontFamily={
              'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto'
            }
            textAlign="center"
            mt="50px"
          >
            <Typography variant="h2" color="secondary" lineHeight={"44.8px"}>
              Start preparing for
            </Typography>
            <Typography
              variant="h1"
              color="primary"
              lineHeight={"72.8px"}
            >
              Your Dream Job
            </Typography>
            <Box>
              <Typography
                variant="h3"
                bgcolor={"rgb(0, 224, 227)"}
                color={"rgb(255, 255, 255)"}
                lineHeight={"28px"}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "#64ffda",
                  },
                  boxShadow: 3,
                }}
                onClick={handleClick}
              >
                Get Started for free
              </Typography>
            </Box>
          </Box>
          <Modal open={open} onClose={handleClose}>
            <Box
              bgcolor={"white"}
              sx={{
                minHeight: "400px",
                width: "70%",
                mx: "auto",
                mt: "80px",
              }}
            >
              <DataGridPage />
            </Box>
          </Modal>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default DreamJob;
