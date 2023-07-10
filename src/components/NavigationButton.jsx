import SpeedDial from '@mui/material/SpeedDial';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RoofingIcon from '@mui/icons-material/Roofing';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FaceIcon from '@mui/icons-material/Face';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <RoofingIcon />, name: 'Home', link: '/' },
  { icon: <ContactPageIcon />, name: 'Contact', link: '/contact' },
  { icon: <FaceIcon />, name: 'About', link: '/about' },
];

let languageAction = {icon: <LanguageIcon />, name: 'Change to Polish'}

export default function NaviagtionButton() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en')  

  function changeLanguage(event) {
    if (language === 'en') {
      languageAction.name = 'Change to English'
      setLanguage('pl')
    } else {
      languageAction.name = 'Change to Polish'
      setLanguage('en')
    }
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
            tooltipTitle={action.name}
            onClick={() => route(action.link)}
          />
        ))}
        <SpeedDialAction
            key={languageAction.name}
            icon={languageAction.icon}
            tooltipTitle={languageAction.name}
            onClick={changeLanguage}
        />
      </SpeedDial>
  );
}