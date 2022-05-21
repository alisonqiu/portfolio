import { Avatar, Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Theme } from "../Theme";
import { Decorator, Divider } from "./commonComponent";

const PREFIX = 'Decorator';

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

const BodyStyles = styled(Grid)((
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


export default function RenderSectionHeading ({
  smallText,
  heading,
  description,
  alignCenter,
})  {
  return (
      // can't wrap <BodyStyles> around bc it's not a function
      //need to inline style
      <BodyStyles>
    <Box className={classes.sectionHeadingCont}>
    {/* {Decorator({
        label: smallText,
        withIcon: false,
        styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
      })} */}
      <Decorator
      label={smallText}
      withIcon = {false}
      styles =  {alignCenter ? { width: "100px", margin: "10px auto" } : {}}
      />
      <Typography
        variant='h4'
        align={alignCenter ? "center" : "left"}
        className={classes.sectionHeading}>
        {heading}
      </Typography>
      {/* {Divider({
        style: alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" },
      })} */}
      <Divider 
      styles = {alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" }}
      />
      <Typography
        variant='body1'
        component='h6'
        align={alignCenter ? "center" : "left"}
        className={classes.sectionDesc}>
        {description}
      </Typography>
    </Box>
    </BodyStyles>


  )
};

