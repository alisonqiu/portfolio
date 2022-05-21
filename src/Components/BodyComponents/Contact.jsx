import { Box, Button, Container, Grid, Hidden } from "@mui/material";
import { styled } from '@mui/material/styles';
import React, { useState,useRef } from "react";

import image from "../../images/contact.jpg";
import { RenderSectionHeading } from "../common/commonComponent";
import { RenderInputText } from "../common/FormComponent";
import ScrollAnimation from "react-animate-on-scroll";
import { Theme } from "../Theme";
import emailjs from '@emailjs/browser';


const PREFIX = 'Contact';

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
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.primary,
    "&:hover": {
      backgroundColor: Theme.colors.primary,
      color: Theme.colors.primary1,
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


export default function Contact() {

  const form = useRef();

  const [state, setState] = useState({
    data: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
  });
  const handleOnChange = ({ target }) => {
    const { data, errors } = state;

    //setting errors
    target.value.length <= 3
      ? (errors[target.name] = `${target.name} at least have 3 letters`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ,", state.data);
    //api call 
    emailjs.sendForm('service_0wf4jaj', 'template_xwxxtdp', state.data, 'uyGJ39ZdsIkllH8-H')
      .then((result) => {
          console.log("error submitting",result.text);
      }, (error) => {
          console.log("error submitting",error.text);
      });

    e.target.reset()
  };

  return (
    <StyledBox className={classes.section} id='Contact'>
      <ScrollAnimation animateIn='fadeIn'>
      <Container maxWidth='xl'> 
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
                smallText: " Contact Me",
                heading: "Send me an email",
                description:
                  "if you have any questions, suggestions, offers, or ideas for my future projects.",
              })}
              <br />
              <form ref={form} onSubmit={handleSubmit}>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  alignItems='center'>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "name",
                      name: "name",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "email",
                      name: "email",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "message",
                      name: "message",
                      state: state,
                      onChange: handleOnChange,
                      multiline: true,
                      rows: 5,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                    <Button
                      variant='outlined'
                      type='submit'
                      fullWidth={true}
                      className={classes.submitBtn}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
        </Grid>    
      </Container>
      </ScrollAnimation>
    </StyledBox> 
  );
}
