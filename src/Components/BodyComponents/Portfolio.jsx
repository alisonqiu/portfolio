import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { RenderSectionHeadingBlack } from "../common/commonComponent";

import { Theme } from "../Theme";

import wordle from "../../images/wordle.jpg";
import blog from "../../images/blog.jpg";
import meme from "../../images/meme.jpg";
import portfolio from "../../images/portfolio.gif";
import orcahome from "../../images/orcahome.jpg";
import Knobull from "../../images/knobull.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import OpenInBrowserOutlinedIcon from '@mui/icons-material/OpenInBrowserOutlined';

const PREFIX = 'Portfolio';

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

  [`&.${classes.sectionDark}`]: {
    backgroundColor: Theme.colors.primary1,
    padding: theme.spacing(8, 0, 8, 0),
  },

  //common
  [`& .${classes.divider}`]: {
    width: "64px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
  },

  [`& .${classes.responsiveImg}`]: {
    width: "100%",
    height: "300px",
    borderRadius : "5px",
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
    borderRadius : "5px",
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },

  [`& .${classes.imageOverlay}`]: {
    position: "relative",
    borderRadius : "5px",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "#F15C89",
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    transition: "0.7s",
    padding: "5px 0 10px 0"
  },

  [`& .${classes.overlayTitle}`]: {
    fontSize: "2rem",
    marginBottom: "16px",
    color: Theme.colors.base1,
    opacity: 1,
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
  [`& .${classes.footerContainer}`]: {
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    padding: theme.spacing(2),
    position: "relative",
  },

  [`& .${classes.iconButton}`]: {
    position: "absolute",
    right: 5,
    top: -25,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  }
}));

export default function Portfolio() {


  const portfolioData = [
    { url: wordle, title: "Wordle Clone", link: "https://github.com/alisonqiu/wordle" },
    { url: blog, title: "Serverless blog", link: "https://github.com/alisonqiu/blog-full-stack" },
    { url: meme, title: "Meme Generator", link: "https://github.com/alisonqiu/Meme-generator" },
    { url: portfolio, title: "My Portfolio ", link: "" },
    { url: orcahome, title: "OrcaHome (Opensource)", link: "https://github.com/alisonqiu/orcahome" },
    { url: Knobull, title: "Knobull", link: "https://github.com/alisonqiu/knobull" },
  ];

  return (
    <StyledBox className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
      <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
        <Grid item xs={12} sm={8}>
            {RenderSectionHeadingBlack({
              smallText: "My Portfolio",
              heading: "Sample Projects on Github",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        <Container maxWidth='xl'>
        <Grid container spacing={2}>
               {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

                    <Button variant='contained' href={item.link}><OpenInBrowserOutlinedIcon/>Repository</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
        </Container>

    </ScrollAnimation>
    </StyledBox>
  );
}
