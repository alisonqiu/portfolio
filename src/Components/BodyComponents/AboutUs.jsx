import { Box, Container, Grid, Hidden } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";

import image from "../../images/About.jpg";
import  {RenderSectionHeading,CardMedia}  from "../common/commonComponent";
// import  RenderSectionHeading  from "../common/RenderSectionHeading";
// import CardMedia from "../common/CardMedia"
import AcUnitIcon from '@mui/icons-material/AddLocationAlt';
import PermDeviceInformationIcon from '@mui/icons-material/AddLocationAlt';
import ToysIcon from '@mui/icons-material/AddLocationAlt';
import DashboardIcon from '@mui/icons-material/AddLocationAlt';
import ScrollAnimation from "react-animate-on-scroll";
import { Theme } from "../Theme";

const PREFIX = 'AboutUs';

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
  [`&.${classes.section}`]: {
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

export default function AboutUs() {



  const cardMediaData = [
    {
      title: " Web Development",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <DashboardIcon />,
    },
    {
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <ToysIcon />,
    },
    {
      title: "Mobile Apps",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <AcUnitIcon />,
    },
  ];
  return (
    <StyledBox className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Alison Qiu",
                description:
                  "A self taught developer who loves to codes something that wiil impact majority of the people in good waay !",
              })}
              <br />
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
     </StyledBox> 
  );
}
