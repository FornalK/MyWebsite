import { createTheme, ThemeProvider } from '@mui/material/styles';
import NaviagtionButton from "./components/NavigationButton";
import AnimatedText from './components/AnimatedText';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb303'
    },
    secondary: {
      main: '#b8d7e0',
    },
  },
});

const texts = [
  "Hi! Your Web Designer here. Welcome to my website.",
  "Lorem Ipsum bla bla bla here we go again"
]

function App() {
  return (
  <>
    <ThemeProvider theme={theme}>
      <NaviagtionButton />
      <AnimatedText text={texts[0]} delay={500} styleNumber={0} />
      <AnimatedText text={texts[1]} delay={2700} styleNumber={1} />
    </ThemeProvider>
  </>
  );
}

export default App
