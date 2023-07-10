import { createTheme, ThemeProvider } from '@mui/material/styles';
import NaviagtionButton from "../components/NavigationButton";
import { Outlet } from "react-router-dom";

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

function RootLayout() {
    return (
        <ThemeProvider theme={theme}>
            <NaviagtionButton />
            <Outlet />
        </ThemeProvider>
    );
}

export default RootLayout;