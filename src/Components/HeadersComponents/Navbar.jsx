import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from "react-scroll";
import { Theme } from "../Theme";

const PREFIX = 'Navbar';

const classes = {
  section: `${PREFIX}-section`,
  sectionDark: `${PREFIX}-sectionDark`,
  navbar: `${PREFIX}-navbar`,
  ToolBar: `${PREFIX}-ToolBar`,
  navlinks: `${PREFIX}-navlinks`
};

const StyledAppBar = styled(AppBar)((
  {
    theme
  }
) => ({
  [`&.${classes.navbar}`]: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },

  [`& .${classes.ToolBar}`]: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },

  [`& .${classes.navlinks}`]: {
    color: Theme.colors.base2,
  }
}));

export default function Navbar({ navlinks, handleDrawerToogler }) {


  return (
    <StyledAppBar position='fixed' className={classes.navbar}>
       <Toolbar
        className={classes.ToolBar}
        style={{ backgroundColor: Theme.colors.base1 }}>
        <Typography variant='h5' component='h6' sx={{ color: Theme.colors.primary1 }}>
        {"Alison Qiu"}
        </Typography>
        <Box component={Hidden} smDown>
          <Box>
            {navlinks.map((item, i) => (
              <Button
              key={i}
              className={classes.navlinks}
                color='inherit'
                >
                <Link 
                to={`${item.Id}`}
                activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                {item.label}
                </Link>
              </Button>
            ))}
          </Box>
        </Box>

 
        <Box component={Hidden} smUp>
          <IconButton color='inherit' onClick={handleDrawerToogler}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
       </Toolbar>
    </StyledAppBar>
  );
}
