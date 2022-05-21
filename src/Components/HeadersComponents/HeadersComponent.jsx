import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";
import { Theme } from "../Theme";
import { Link } from "react-scroll";
//drawer
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Resume from "../resume/resume"
import Icons from './icons';


const PREFIX = 'HeadersComponent';

const classes = {
  HeaderWrapper: `${PREFIX}-HeaderWrapper`,
  HeaderContainer: `${PREFIX}-HeaderContainer`,
  headerTitle: `${PREFIX}-headerTitle`,
  headerDesc: `${PREFIX}-headerDesc`,
  navbar: `${PREFIX}-navbar`,
  ToolBar: `${PREFIX}-ToolBar`,
  navlinks: `${PREFIX}-navlinks`,
  decorator: `${PREFIX}-decorator`,
  decoratorText: `${PREFIX}-decoratorText`,
  arrow: `${PREFIX}-arrow`,
  drawer: `${PREFIX}-drawer`,
  drawerContainer: `${PREFIX}-drawerContainer`,
  listItem: `${PREFIX}-listItem`
};

const StyledBox = styled(Box)((
  {
    theme
  }
) => ({
  [`&.${classes.HeaderWrapper}`]: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
  },

  [`& .${classes.HeaderContainer}`]: {
    width: "100%",
     minHeight: "90vh",
     height: "auto",
    padding: "20px",
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily: "roboto",
  },

  [`& .${classes.headerTitle}`]: {
    fontSize: "6vw",
    margin: theme.spacing(1, 0),
  },

  [`& .${classes.headerDesc}`]: {
    fontSize: "2.5vw",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2, 0),
    },
  },

  [`& .${classes.navbar}`]: {
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
  },

  //decorator.
  [`& .${classes.decorator}`]: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    "&:before": {
      width: "40px",
      height: "40px",
      backgroundColor: Theme.colors.primary,
      content: '""',
      borderRadius: "50%",
    },
  },

  [`& .${classes.decoratorText}`]: {
    lineHeight: "40px",
    position: " absolute",
    left: "20px",
  },

  [`& .${classes.arrow}`]: {
    lineHeight: " 50px",
    position: " absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },

  //drewer style
  [`& .${classes.drawer}`]: {
    width: "250px",
    height: "100vh",
  },

  [`& .${classes.drawerContainer}`]: {
    width: "250px",
    height: "100vh",
    backgroundColor: Theme.colors.primary1,
  },

  [`& .${classes.listItem}`]: {
    color: Theme.colors.base2,
  }
}));

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const ResumeBox = styled(Box)(({ theme }) => ({
  backgroundColor:"Theme.colors.primary"
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function HeadersComponent() {


  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Contact", Id: "Contact" },
  ];

  
  return (
    <StyledBox className={classes.HeaderWrapper} id="Header">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
      initialState={initialState}
      navlinks={navlinks}
      handleDrawerToogler={handleDrawerToogler}
    /> 

      <Box className={classes.HeaderContainer}>
         <Typography variant='h3' component='h4' className={classes.headerTitle}>
        I'm a <span style={{ paddingRight: "5px" }}></span>
        <Typed
          strings={[" Software Engineer,", " ML Researcher,", " CS Student,"]}
          typeSpeed={30}
          backSpeed={50}
          loop
        />
      </Typography>
      <Typography variant='h3' component='h4' className={classes.headerDesc}>
        and I'd love to show you my skills and projects!
        <br />
        
      </Typography>

      <Button
      variant = "contained"
      size = "large"
      margin = "10px"
      endIcon = {<ArrowCircleDownOutlinedIcon/>}
      fontWeight = "700"
      sx={{background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}
                >
                <Link 
                to={`About`}
                activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  
                >
                Learn More about me!
                </Link>
              </Button>
       <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <br/>
      <Button variant="outlined" size="small" onClick={toggleDrawer(true)}>Or click to see my resume</Button>
      
      {/* pull up my resume */}
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <ResumeBox
          sx={{
            position: 'absolute',
            top: -56,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'invisible',
            right: 0,
            left: 0,
            backgroundColor : Theme.colors.base2,
            opacity:0.7,
            display:"flex",
            flexDirection:"column",
            alignItems: "center",

          }}
        >
          <Puller sx={{
            backgroundColor:"Theme.colors.base2"
          }}/>
          <Typography variant="h3" sx={{ p: 2,color:"#B61794" ,fontSize:"24px",backgroundColor:"Theme.colors.primary",display:"flex", alignItems:"center"}}>Resume</Typography>
        </ResumeBox>
        <StyledBox
          sx={{
            px: 5,
            pt: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Resume/>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
    <Icons/>
      </Box>
    </StyledBox>

  );
}
