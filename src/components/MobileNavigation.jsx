import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RoofingIcon from '@mui/icons-material/Roofing';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FaceIcon from '@mui/icons-material/Face';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LangContext from '../LocaleContext';
import { useContext } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';

const actions = [
    { icon: <RoofingIcon />, name: 'Home2', link: '/' },
    { icon: <ContactPageIcon />, name: 'Contact', link: '/contact' },
    { icon: <FaceIcon />, name: 'About', link: '/about' },
    { icon: <LanguageIcon />, name: 'Change2' }
  ];
  

export default function MobileNavigation({code}) {
  const [value, setValue] = React.useState(code);
  const { t } = useTranslation();
  const { locale } = useContext(LangContext);
  const navigate = useNavigate();
  const [language, setLanguage] = useState(localStorage.getItem("lang"));

  const location = useLocation();

  function changeLanguage(val) {
    setValue(val);
    if (language === 'en') {
      setLanguage('pl')
      i18n.changeLanguage('pl')
      localStorage.setItem("lang", "pl");
    } else {
      setLanguage('en')
      i18n.changeLanguage('en')
      localStorage.setItem("lang", "en");
    }
    if (location.pathname == '/' || location.pathname == '/contact') window.location.reload(false);
  }

  function route(path) {
    navigate(path)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label={t(actions[0].name)} icon={actions[0].icon} onClick={() => route(actions[0].link)} />
        <BottomNavigationAction label={t(actions[1].name)} icon={actions[1].icon} onClick={() => route(actions[1].link)} />
        <BottomNavigationAction label={t(actions[2].name)} icon={actions[2].icon} onClick={() => route(actions[2].link)} />
        <BottomNavigationAction label={t(actions[3].name)} icon={actions[3].icon} onClick={() => changeLanguage(value)}/>
      </BottomNavigation>
    </Box>
  );
}