import React from "react";
import { AppBar, Container, Typography, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarButton from "../Components/NavbarButton";
import NavbarLogo from "../Components/NavbarLogo";
import NavbarMenu from "../Components/NavbarMenu";
import NavbarSearch from "../Components/NavbarSearch";

const page = [
  "Scaler",
  "Practice",
  "Resources",
  "Contests",
  "Online IDE",
  "Mock Interview",
  <NavbarButton />,
];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            minHeight="60px"
            color="#1a3d3c"
            color="rgb(26, 61, 60)"
            background-color="#ffffff"
            background-color="rgb(255, 255, 255)"
            fontSize={"16px"}
            lineHeight="22.4px"
            fontWeight={"400"}
            alignItems={"center"}
          >
            <NavbarLogo />

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <NavbarMenu />
            </Box>
            <NavbarSearch />
          </Box>
          <NavbarButton />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {page.map((page) =>(
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <NavbarButton />
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
