import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NaviagtionButton from "./components/NavigationButton";
import AnimatedText from './components/AnimatedText';
import ScrollButton from './components/ScrollButton';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb303'
    },
    secondary: {
      main: '#b8d7e0',
    },
    black: {
      main: '#000000'
    }
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "FF0000",
          margin: 20
          
        }
      }
    }
  }
});

const texts = [
  "Hi! Your Web Designer here. Welcome to my website.",
  "If you want to see my works and projects, please click the button below"
]

function App() {
  return (
  <>
    <ThemeProvider theme={theme}>
      <NaviagtionButton />
      <ScrollButton direction="down"/>
      <ScrollButton direction="up"/>
      <div id="top-of-page" style={{height: 920}}>
        <div style={{paddingTop: 10}}>
          <AnimatedText text={texts[0]} delay={500} styleNumber={0} />
          <AnimatedText text={texts[1]} delay={2700} styleNumber={1} />
        </div>
      </div>
      <div id="bottom-of-page" style={{height: 920, marginTop: 20}}></div>
    </ThemeProvider>
  </>
  );
}

export default App
