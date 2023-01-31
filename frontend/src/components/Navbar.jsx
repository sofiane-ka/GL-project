import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import data from "../data.json";

const pages = ["Home", "Formations", "Cours", "Contact", "Chat"];
const settings = ["Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  /*const handleChange = (setting) =>{ 
    if(setting==="Logout"){
    let path = ''; 
    navigate(path);
    }
    else{
      let path =  setting; 
    navigate(path);
    }
  }
*/
  const { user, setUser } = useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FCA311",
      }}
    >
      <Container maxWidth="2xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 50,
              fontSize: 50,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginRight: "40px",
            }}
          >
            EDUCOURS
          </Typography>

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
                fontWeight: 20,
                fontSize: 20,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  {page === "Home" && (
                    <Typography textAlign="center">
                      <Link to="/home">{page}</Link>
                    </Typography>
                  )}
                  {page === "Formations" && (
                    <Typography textAlign="center">
                      <Link to="/formations">{page}</Link>
                    </Typography>
                  )}
                  {page === "Cours" && (
                    <Typography textAlign="center">
                      <Link to="/cours">{page}</Link>
                    </Typography>
                  )}
                  {page === "Contact" && (
                    <Typography textAlign="center">
                      <Link to="/contact">{page}</Link>
                    </Typography>
                  )}
                  {page === "Chat" && (
                    <Typography textAlign="center">
                      <Link to="/chat">{page}</Link>
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 50,
                  fontsize: 45,
                  my: 2,
                  color: "#001449",
                  "&:hover": { color: "white" },
                  display: "block",
                }}
              >
                {page === "Home" && <Link to="/home">{page}</Link>}
                {page === "Formations" && <Link to="/formations">{page}</Link>}
                {page === "Cours" && <Link to="/cours">{page}</Link>}
                {page === "Chat" && <Link to="/chat">{page}</Link>}
                {page === "Contact" && <Link to="/contact">{page}</Link>}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              alignItems: "center",
              flexDirection: "row",
              display: { md: "flex" },
            }}
          >
            {user && (
              <Typography sx={{ marginRight: "20px" }}>
                {user.firstName} {user.lastName}
              </Typography>
            )}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user.img ? (
                  <Avatar alt="Remy Sharp" src={user.img} />
                ) : (
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ color: "#D9D9D9", mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  {setting !== "Logout" && (
                    <Link to={`/${setting}`}>{setting}</Link>
                  )}
                  {setting === "Logout" && <Link to="/">{setting}</Link>}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
/*
<Typography textAlign="center">{setting}</Typography>
*/
