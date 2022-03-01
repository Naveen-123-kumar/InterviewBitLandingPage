import React from "react";
import { Typography, Stack,Grid,Modal,Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModalComponent from "./ModalComponent";

const pages = [
  "Scaler",
  "Practice",
  "Resources",
  "Contests",
  "Online IDE",
  "Mock Interview",
];
const NavbarMenu = () => {
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
      <Stack
        direction="row"
        spacing={0.1}
        letterSpacing="0.1px"
        justifyContent={"flex-start"}
        paddingLeft="30px"
      >
        {pages.map((pages) => (
          <MenuItem key={pages} onClick={handleCloseUserMenu}>
            <Typography
              textAlign="flex-end"
              fontSize={"14px"}
              fontWeight="400"
              color="rgb(26, 61, 60)"
              textAlign="flex-end"
              fontFamily='Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI"'
              lineHeight={"19.6px"}
              sx={{
                cursor: "pointer",
                ":hover": {
                  color: "#64ffda",
                },
              }}
              onClick={handleClick}
            >
              {pages}
              <KeyboardArrowDownIcon fontSize="12px"></KeyboardArrowDownIcon>
            </Typography>
            <Grid item>
          <Box>
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
              <ModalComponent/>
              </Box>
            </Modal>
          </Box>
        </Grid>
          </MenuItem>
        ))}
      </Stack>
    </>
  );
};

export default NavbarMenu;
