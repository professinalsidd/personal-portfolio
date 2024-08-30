import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CustomSize } from "../../themes";

const pages = [
  { name: "Home", id: "home" },
  { name: "About", id: "about-section" },
  { name: "Education", id: "education-section" },
  { name: "Experience", id: "experience-section" },
  { name: "Certificates", id: "certificates-section" },
  { name: "Skills", id: "skills-section" },
  { name: "Projects", id: "projects-section" },
  { name: "Resume", id: "resume-section" },
  { name: "Contact", id: "contact-section" },
];

function NavBarComp() {
  const { isMobile, isTablet } = CustomSize();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#000" }}>
      <Toolbar disableGutters>
        {isMobile ? null : isTablet ? null : (
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            m={2}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#home"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.2rem",
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              SIDDHARTH JAIN
            </Typography>
          </Box>
        )}

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
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                component="a"
                href={`#${page.id}`}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#home"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".01rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          SIDDHARTH JAIN
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              href={`#${page.id}`}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontSize: 12 }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarComp;
