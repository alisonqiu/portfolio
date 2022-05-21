import { Avatar, Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Theme } from "../Theme";

const PREFIX = 'Decorator';

const classes = {
  section: `${PREFIX}-section`,
  sectionDark: `${PREFIX}-sectionDark`,
  divider: `${PREFIX}-divider`,
  responsiveImg: `${PREFIX}-responsiveImg`,
  sectionHeadingCont: `${PREFIX}-sectionHeadingCont`,
  sectionHeading: `${PREFIX}-sectionHeading`,
  sectionHeadingContBlack: `${PREFIX}-sectionHeadingContBlack`,
  sectionHeadingBlack: `${PREFIX}-sectionHeadingBlack`,
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
    color: Theme.colors.primary1,
    margin: theme.spacing(1, 0),
  },

  [`& .${classes.sectionHeadingContBlack}`]: {
    padding: theme.spacing(1),
    color: Theme.colors.base1,
  },

  [`& .${classes.sectionHeadingBlack}`]: {
    color: Theme.colors.base1,
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
    color: Theme.colors.primary1,
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


export const Decorator = ({ label, withIcon, Icon, styles }) => {

  
  return (
    <BodyStyles>
    <Box className={classes.decorator} style={styles}>
      <Typography component='span' className={classes.decoratorText}>
        {label}
      </Typography>
      {withIcon ? (
        <Typography component='span' className={classes.arrow}>
          {Icon}
        </Typography>
      ) : null}
    </Box>
    </BodyStyles>
  );
};

export const Divider = ({ style }) => {
  
  return 
  (<BodyStyles  style={style}>
    <div className={classes.divider} style={style}></div>
  </BodyStyles>)
};

export const RenderSectionHeading = ({
  smallText,
  heading,
  description,
  alignCenter,
}) => {
  return (
      <BodyStyles>
    <Box className={classes.sectionHeadingCont}>
    {Decorator({
        label: smallText,
        withIcon: false,
        styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
      })}
      <Typography
        variant='h4'
        align={alignCenter ? "center" : "left"}
        className={classes.sectionHeading}>
        {heading}
      </Typography>
      {Divider({
        style: alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" },
      })}
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

export const RenderSectionHeadingBlack = ({
  smallText,
  heading,
  description,
  alignCenter,
}) => {
  return (
      // can't wrap <BodyStyles> around bc it's not a function
      //need to inline style
      <BodyStyles>
    <Box className={classes.sectionHeadingContBlack}>
    {Decorator({
        label: smallText,
        withIcon: false,
        styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
      })}
      <Typography
        variant='h4'
        align={alignCenter ? "center" : "left"}
        className={classes.sectionHeadingBlack}>
        {heading}
      </Typography>
      {Divider({
        style: alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" },
      })}
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


export const CardMedia = ({ label, Desc, Icon, key }) => {

  return (
    <BodyStyles container style={{ marginTop: "16px",display:"flex", flexDirection:"column", justifyItems:"center" }}>
    <Grid container sx={{ display:"flex", flexDirection:"row"}}>
      <Grid item xs={3} className={classes.AvatarCont}>
        <Avatar className={classes.avatar}>{Icon}</Avatar>
      </Grid>
      <Grid item xs={9} >
        <Typography variant='h6' component='h6' className={classes.MediaText}>
          {label}
        </Typography>
      </Grid>
    </Grid>
    <Typography variant='body2' component='div' sx={{whiteSpace: 'pre-wrap',display:"flex",justifyContent:"center"}}>{Desc}</Typography>
      

    </BodyStyles>
  );
};
