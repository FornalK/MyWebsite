import { Box } from '@mui/material';
import { Container } from '@mui/material';
import avatar1 from '../assets/av22.png'
import avatar2 from '../assets/av3.png'
import styles from './Avatar.module.css'
import Slide from '@mui/material/Slide';

const start = true;

function Avatar({avaNum, avaSize, avaPosition}) {
    let ava = null;
    let ava_style = null;
    let slide_direction = null;
    
    if (avaNum == 0) {
        ava = avatar1
        ava_style = styles.avatar1
        slide_direction = 'left'
    } else {
        ava = avatar2
        ava_style = styles.avatar2
        slide_direction = 'up'
    }
    
    
    return(
        <Container>
            <Slide direction={slide_direction} in={start} timeout={500} mountOnEnter unmountOnExit>
                <img className={ava_style} style={{width: avaSize, bottom: avaPosition}} src={ava} alt="Avatar"></img>
            </Slide>
        </Container>  
    );
}

export default Avatar;