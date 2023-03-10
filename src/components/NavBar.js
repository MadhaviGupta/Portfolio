import React, { useState, useEffect } from "react";
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
  const activePage = document.location.pathname;
  useEffect(() => {
    return () => {
      if (activePage === "/") {
        document.getElementsByClassName("home")[0].style.backgroundColor =
          "rgba(190, 52, 84, 0.1)";
      }
      if (activePage === "/about") {
        document.getElementsByClassName("about")[0].style.backgroundColor =
          "rgba(190, 52, 84, 0.1)";
      }
      if (activePage === "/projects") {
        document.getElementsByClassName("projects")[0].style.backgroundColor =
          "rgba(190, 52, 84, 0.1)";
      }
      if (activePage === "/contact") {
        document.getElementsByClassName("contact")[0].style.backgroundColor =
          "rgba(190, 52, 84, 0.1)";
      }
      console.log(document.getElementsByClassName("home"));
    };
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "Hanken Grotesk",
              fontWeight: "600",
              fontSize: "1.8rem",
            }}
          >
            MADHAVI GUPTA
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
                  backgroundColor: `${
                    props.mode === "light" ? "#fff2f5" : "#0d0103"
                  }`,
                },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <li>
                  <a
                    href="/"
                    onClick={handleCloseNavMenu}
                    className="listItems home"
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
                    className="listItems about"
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
                    className="listItems projects"
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
                    className="listItems contact"
                  >
                    Contact
                  </a>
                </li>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Hanken Grotesk",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            MADHAVI GUPTA
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
                <a href="/" className="listItems home">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="listItems about">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="listItems projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="listItems contact">
                  Contact
                </a>
              </li>
            </ul>
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
