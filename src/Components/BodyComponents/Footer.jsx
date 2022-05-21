import React from "react";
import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from "@mui/material";

import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import FavoriteIcon from '@mui/icons-material/AddLocationAlt';
import { Link } from "react-scroll";
import { Theme } from "../Theme";


const PREFIX = 'Footer';

const classes = {
  section: `${PREFIX}-section`,
  sectionDark: `${PREFIX}-sectionDark`,
  divider: `${PREFIX}-divider`,
  responsiveImg: `${PREFIX}-responsiveImg`,
  sectionHeadingCont: `${PREFIX}-sectionHeadingCont`,
  sectionHeading: `${PREFIX}-sectionHeading`,
  AvatarCont: `${PREFIX}-AvatarCont`,
  avatar: `${PREFIX}-avatar`,
  MediaText: `${PREFIX}-MediaText`,
  imageContainer: `${PREFIX}-imageContainer`,
  imageOverlay: `${PREFIX}-imageOverlay`,
  overlayTitle: `${PREFIX}-overlayTitle`,
  formContainer: `${PREFIX}-formContainer`,
  submitBtn: `${PREFIX}-submitBtn`,
  footerContainer: `${PREFIX}-footerContainer`,
  iconButton: `${PREFIX}-iconButton`
};

const StyledBox = styled(Box)((
  {
    theme
  }
) => ({
  [`& .${classes.section}`]: {
    backgroundColor: Theme.colors.base1,
    padding: theme.spacing(10, 0, 8, 0),
  },

  [`& .${classes.sectionDark}`]: {
    backgroundColor: Theme.colors.primary1,
    padding: theme.spacing(10, 0, 8, 0),
  },

  //common
  [`& .${classes.divider}`]: {
    width: "64px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
  },

  [`& .${classes.responsiveImg}`]: {
    width: "100%",
    height: "auto",
  },

  [`& .${classes.sectionHeadingCont}`]: {
    padding: theme.spacing(1),
    color: Theme.colors.base2,
  },

  [`& .${classes.sectionHeading}`]: {
    color: Theme.colors.base2,
    margin: theme.spacing(1, 0),
  },

  [`& .${classes.AvatarCont}`]: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  [`& .${classes.avatar}`]: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  },

  [`& .${classes.MediaText}`]: {
    color: Theme.colors.base2,
  },

  // # portfolio section
  [`& .${classes.imageContainer}`]: {
    position: "relative",
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },

  [`& .${classes.imageOverlay}`]: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.7s",
  },

  [`& .${classes.overlayTitle}`]: {
    fontSize: "2rem",
    marginBottom: "16px",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.2rem",
    },
  },

  //form com=ntainer
  [`& .${classes.formContainer}`]: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },

  [`& .${classes.submitBtn}`]: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    "&:hover": {
      backgroundColor: Theme.colors.primary1,
    },
  },

  // footer stylr
  [`&.${classes.footerContainer}`]: {
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    padding: theme.spacing(2),
    position: "relative",
    display:'flex',
    flexDirection: "column",
    alignItems:'center',
  },

  [`& .${classes.iconButton}`]: {
    position: "absolute",
    //right: 20,
    top: -60,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  }
}));


export default function Footer() {

  var date = new Date();
  return (
    <StyledBox className={classes.footerContainer} id='Footer'>
      <Link
      to='Header'
      activeClass='active'
      spy={true}
      smooth={true}
      offset={-70}
      duration={1200}
      component={Link}
      >
      <IconButton
        className={classes.iconButton}
        size="large">
        <ArrowUpwardOutlinedIcon />
      </IconButton>
      </Link>
      <Typography variant='body1' component='h4' align='center' color='inherit'>
        Developed by Alison Qiu using JavaScript, React, GitHub, MUI, EmailJS. All Right Reserved © {date.getFullYear()}
      </Typography>
    </StyledBox>
  );
}
