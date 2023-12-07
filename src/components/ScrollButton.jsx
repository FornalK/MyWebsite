import SpeedDial from '@mui/material/SpeedDial';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styles from './ScrollButton.module.css'

function ScrollButton({direction}) {
    function scroll(event) {
        if (direction == "up") {
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        }

        if (direction == "down") {
            window.scrollTo({
            top: 10000,
            behavior: 'smooth'
            });
        }
    }

    let btnStyle = null;
    let btnIcon = null;

    if (direction == "up") {
        btnStyle = styles.scrollUpButton
        btnIcon = false
    }

    if (direction == "down") {
        btnStyle = styles.scrollDownButton
        btnIcon = true
    }

    return (
        <SpeedDial className={btnStyle}
            ariaLabel="Scroll"
            icon={btnIcon ? <KeyboardArrowDownIcon fontSize='medium'/> : <KeyboardArrowUpIcon fontSize='medium'/>}
            onClick={scroll}></SpeedDial>
    );
}

export default ScrollButton;