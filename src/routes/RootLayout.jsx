import { createTheme, ThemeProvider } from '@mui/material/styles';
import NaviagtionButton from "../components/NavigationButton";
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Loading from '../components/Loading';
import LangContext from '../LocaleContext';
import { useState } from 'react'; 
import i18n from '../i18n';
import { useMediaQuery } from "react-responsive";
import MobileNavigation from "../components/MobileNavigation";
import { useLocation } from 'react-router-dom';

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
    const isNotMobile = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [locale, setLocale] = useState(i18n.language);
    const location = useLocation();
    if (localStorage.getItem("lang") == 'pl') {
      i18n.changeLanguage('pl');
    } else {
      i18n.changeLanguage('en');
    }

    function pagecode() {
      if (location.pathname == '/') return 0;
      else if (location.pathname == '/contact') return 1;
      else if (location.pathname == '/about') return 2;
    }

    return (
        <ThemeProvider theme={theme}>
          <LangContext.Provider value={{locale, setLocale}}> 
            <Suspense fallback={<Loading />}>
              {isNotMobile && <NaviagtionButton />}
              {isMobile && <MobileNavigation code={pagecode} />}
              <Outlet />
            </Suspense>
          </LangContext.Provider>
        </ThemeProvider>
    );
}

export default RootLayout;