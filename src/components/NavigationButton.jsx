import SpeedDial from '@mui/material/SpeedDial';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedDialAction from '@mui/material/SpeedDialAction';
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
  { icon: <RoofingIcon />, name: 'Home', link: '/' },
  { icon: <ContactPageIcon />, name: 'Contact', link: '/contact' },
  { icon: <FaceIcon />, name: 'About', link: '/about' },
];

let languageAction = {icon: <LanguageIcon />, name: 'Change'}

export default function NaviagtionButton() {
  const { t } = useTranslation();
  const { locale } = useContext(LangContext);
  const navigate = useNavigate();
  const [language, setLanguage] = useState(localStorage.getItem("lang"));

  const location = useLocation();

  function changeLanguage(event) {
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
      <SpeedDial
        ariaLabel="Navigation"
        sx={{ position: 'fixed', top: '4%', left: '2%' }}
        icon={<MenuIcon />}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={t(action.name)}
            onClick={() => route(action.link)}
          />
        ))}
        <SpeedDialAction
            key={languageAction.name}
            icon={languageAction.icon}
            tooltipTitle={t(languageAction.name)}
            onClick={changeLanguage}
        />
      </SpeedDial>
  );
}