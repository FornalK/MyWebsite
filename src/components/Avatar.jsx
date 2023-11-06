import { Box } from '@mui/material';
import { Container } from '@mui/material';
import avatar from '../assets/av.png'
import styles from './Avatar.module.css'
import Slide from '@mui/material/Slide';


const start = true;

function Avatar() {
    return(
        <Container>
            <Slide direction='left' in={start} mountOnEnter unmountOnExit>
                <img className={styles.avatar} src={avatar} alt="Avatar"></img>
            </Slide>
        </Container>  
    );
}

export default Avatar;