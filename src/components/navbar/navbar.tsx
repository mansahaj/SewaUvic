import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Button, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/seva_logo-removebg-preview.png"; // Add this import
import { Link } from "react-router-dom"; // Add this import

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Events", link: "/events" },
    { text: "Our Team", link: "/our-team" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#00275D" }}> {/* Change color here */}
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: 'left' , paddingTop: 0.6 }}>
          <img src={logo} alt="Sewa Uvic" style={{ height: 65 }} /> {/* Replace Typography with img */}
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.text} onClick={handleMenuClose} component={Link} to={item.link}>
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 ,color: '#E6B637' }}>
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" sx={{ fontSize: '1rem' }} component={Link} to={item.link}>
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
