import SpeedDial from '@mui/material/SpeedDial';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RoofingIcon from '@mui/icons-material/Roofing';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FaceIcon from '@mui/icons-material/Face';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';

const actions = [
  { icon: <RoofingIcon />, name: 'Home' },
  { icon: <ContactPageIcon />, name: 'Contact' },
  { icon: <FaceIcon />, name: 'About' },
];

let languageAction = {icon: <LanguageIcon />, name: 'Change to Polish'}

export default function NaviagtionButton() {
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
  return (
      <SpeedDial
        ariaLabel="Navigation"
        sx={{ position: 'absolute', top: 16, left: 16 }}
        icon={<MenuIcon />}
        
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
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