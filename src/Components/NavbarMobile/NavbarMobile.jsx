import * as React from "react";
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
import logo from "../../assets/logo.png";
import LoginContext from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";


const pages = ["HOME", "ESPANSIONI", "LORE", "GIOCO"];
const settings = ["IL MIO PROFILO", "ESCI"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logout } = React.useContext(LoginContext);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
    position="static" 
    sx={{
        backgroundImage: "url(/assets/background.png)",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

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
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
              >
                <Typography textAlign="center">HOME</Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/expansions");
                }}
              >
                <Typography textAlign="center">ESPANSIONI</Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/lore");
                }}
              >
                <Typography textAlign="center">LORE</Typography>
              </MenuItem>
              
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              justifyContent:"center",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="navbarResponsive"
              src={logo}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={"assets/Avatar/" + user.img} name={user.username} size="60" round={true} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
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
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("/profile");
                  }}
                >
                  <Typography textAlign="center">IL MIO PROFILO</Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    logout();
                  }}
                >
                  <Typography textAlign="center">ESCI</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <div
              className="navbar-item"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <button
                type="button"
                style={{
                  width: "100%",
                  backgroundColor: "#41a4d3",
                  borderRadius: "6px",
                  paddingLeft: "3px",
                  paddingRight: "3px",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
                onClick={() => navigate("/login")}
              >
                Accedi
              </button>

              <button
                type="button"
                style={{
                  width: "100%",
                  backgroundColor: "#d840d3",
                  borderRadius: "6px",
                  paddingLeft: "3px",
                  paddingRight: "3px",
                  fontSize: "15px",
                  marginBottom: "10px",
                }}
                onClick={() => navigate("/register")}
              >
                Registrati
              </button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
