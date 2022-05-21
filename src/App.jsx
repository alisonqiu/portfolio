import React from 'react';
import './App.css';
import HeadersComponent from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponents/AboutMe";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Resume from "./Components/resume/resume"
import { Section } from './Components/HeadersComponents/GlobalComponents';
import BgAnimation from "./Components/HeadersComponents/BackgroundAnimation"
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ffffff",
        darker: "#053e85",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Section grid>

        <HeadersComponent />
        <BgAnimation />

      </Section>
       
       {/*<HeadersComponent />
       <Resume/>*/}
       <AboutUs />
       <Portfolio />
      <Contact />
      <Footer />
    </ThemeProvider>

  );
}

export default App;
