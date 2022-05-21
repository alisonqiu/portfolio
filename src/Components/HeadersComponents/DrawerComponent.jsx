import React from "react";
import { styled } from '@mui/material/styles';
import { Box, Drawer, ListItem, ListItemText, List } from "@mui/material";
import { Theme } from "../Theme";

const PREFIX = 'DrawerComponent';

const classes = {
  HeardeWraper: `${PREFIX}-HeardeWraper`,
  Headercontaier: `${PREFIX}-Headercontaier`,
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

const StyledDrawer = styled(Drawer)((
  {
    theme
  }
) => ({
  [`& .${classes.HeardeWraper}`]: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  [`& .${classes.Headercontaier}`]: {
    width: "85%",
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
    fontSize: "3rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },

  [`& .${classes.headerDesc}`]: {
    fontSize: "2rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
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
  [`&.${classes.drawer}`]: {
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

export default function DrawerComponent({
  initialState,
  navlinks,
  handleDrawerToogler,
}) {

  return (
    <StyledDrawer
      anchor='right'
      open={initialState}
      onClose={handleDrawerToogler}
      className={classes.drawer}>
      <Box className={classes.drawerContainer}>
        <List style={{ paddingTop: "30px" }}>
          {navlinks.map((item, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
}
