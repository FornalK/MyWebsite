import { createTheme, ThemeProvider } from '@mui/material/styles';
import NaviagtionButton from "../components/NavigationButton";
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Loading from '../components/Loading';
import LangContext from '../LocaleContext';
import { useState } from 'react'; 
import i18n from '../i18n';

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
    const [locale, setLocale] = useState(i18n.language)
    if (localStorage.getItem("lang") == 'pl') {
      i18n.changeLanguage('pl');
    } else {
      i18n.changeLanguage('en');
    }

    return (
        <ThemeProvider theme={theme}>
          <LangContext.Provider value={{locale, setLocale}}> 
            <Suspense fallback={<Loading />}>
              <NaviagtionButton />
              <Outlet />
            </Suspense>
          </LangContext.Provider>
        </ThemeProvider>
    );
}

export default RootLayout;