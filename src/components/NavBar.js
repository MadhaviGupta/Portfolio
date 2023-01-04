import React, { useState } from "react";
import {
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./style.css";
export default function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              color: "#cf005a",
              display: { xs: "none", md: "flex" },
              fontFamily: "Hanken Grotesk",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Madhavi Gupta
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Hanken Grotesk",
              fontWeight: 600,
            }}
          >
            <MenuIcon size="large" onClick={handleOpenNavMenu} />
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
                "& .MuiPaper-root": {
                  backgroundColor: `${props.mode === "light" ? "#fff0f0" : "black"}`,
                },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <li>
                  <a
                    href="/"
                    onClick={handleCloseNavMenu}
                    className="listItems"
                  >
                    Home
                  </a>
                </li>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <li>
                  <a
                    onClick={handleCloseNavMenu}
                    href="/about"
                    className="listItems"
                  >
                    About
                  </a>
                </li>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <li>
                  <a
                    onClick={handleCloseNavMenu}
                    href="/projects"
                    className="listItems"
                  >
                    Projects
                  </a>
                </li>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <li>
                  <a
                    onClick={handleCloseNavMenu}
                    href="/contact"
                    className="listItems"
                  >
                    Contact
                  </a>
                </li>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              color: "#cf005a",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Hanken Grotesk",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Madhavi Gupta
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "Hanken Grotesk",
              fontWeight: 600,
            }}
          >
            <ul style={{ listStyle: "none", display: "flex" }}>
              <li>
                <a href="/" onClick={handleCloseNavMenu} className="listItems">
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleCloseNavMenu}
                  href="/about"
                  className="listItems"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleCloseNavMenu}
                  href="/projects"
                  className="listItems"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={handleCloseNavMenu}
                  href="/contact"
                  className="listItems"
                >
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-brightness-high"></i>
          </Box>
          <Box className="modeIcon">
            <Tooltip
              title={`Enable ${props.mode === "light" ? "dark" : "light"} mode`}
            >
              {props.mode === "light" ? (
                <DarkModeIcon onClick={props.handleMode} />
              ) : (
                <LightModeIcon onClick={props.handleMode} />
              )}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </>
  );
}
