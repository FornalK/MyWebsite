import { Box } from '@mui/material';
import { Container } from '@mui/material';
import avatar1 from '../assets/av-home-neutral.png'
import avatar12 from '../assets/av-home-mouthopen.png'
import avatar13 from '../assets/av-home-lefteye.png'
import avatar14 from '../assets/av-home-blinking.png'
import avatar2 from '../assets/av-contact-neutral.png'
import avatar22 from '../assets/av-contact-mouthopen.png'
import avatar23 from '../assets/av-contact-blinking.png'
import avatar24 from '../assets/av-contact-smiling.png'
import styles from './Avatar.module.css'
import Slide from '@mui/material/Slide';
import { useState, useEffect } from "react";

const start = true;

function Avatar({avaNum, avaSize, avaBottom, avaRight}) {
    const [ava, setAva] = useState(avaNum == 0 ? avatar1 : avatar2);
    const [playAnimation, setPlayAnimation] = useState(false);

    let ava_style = null;
    let slide_direction = null;
    let ava_variant = true;
    
    if (avaNum == 0) {
        ava_style = styles.avatar1
        slide_direction = 'left'
    } else {
        ava_style = styles.avatar2
        slide_direction = 'up'
    }

    function animateMouth(img1, img2) {
        if (ava_variant) {
            setAva(img1);
        } else {
            setAva(img2);
        }
        ava_variant = !ava_variant
    }

    function animateBlinking(img1, img2) {
        setAva(img2);
        setTimeout(() => {
            setAva(img1);
        }, 150);
        setTimeout(() => {
            animateBlinking(img1, img2);
        }, (Math.floor(Math.random() * 8) + 2) * 1000);
    }

    function animateSmiling(img1, img2) {
        setAva(img2);
        setTimeout(() => {
            setAva(img1);
        }, 2000);
        setTimeout(() => {
            animateSmiling(img1, img2);
        }, (Math.floor(Math.random() * 30) + 10) * 1000);
    }

    function delayedClearInterval(interval_id, delay) {
        setTimeout(() => { clearInterval(interval_id) }, delay);
    }

    function playAnimationAv1() {
        setAva(avatar13);
        const interval = setInterval(() => {animateMouth(avatar12, avatar1)}, 150);
        delayedClearInterval(interval, 1900);
        setTimeout(() => {
            const interval = setInterval(() => {animateMouth(avatar12, avatar1)}, 150);
            delayedClearInterval(interval, 1400);      
        }, 2100)
        setTimeout(() => {
            const interval = setInterval(() => {animateMouth(avatar12, avatar1)}, 150);
            delayedClearInterval(interval, 4150);      
        }, 3850)
        setTimeout(() => {animateBlinking(avatar1, avatar14)}, 10000);
    }

    function playAnimationAv2() {
        setAva(avatar23);
        const interval = setInterval(() => {animateMouth(avatar22, avatar2)}, 150);
        delayedClearInterval(interval, 800);
        setTimeout(() => {
            const interval = setInterval(() => {animateMouth(avatar22, avatar2)}, 150);
            delayedClearInterval(interval, 1500);      
        }, 1000)
        setTimeout(() => {
            const interval = setInterval(() => {animateMouth(avatar22, avatar2)}, 150);
            delayedClearInterval(interval, 1100);      
        }, 2800)
        setTimeout(() => {
            const interval = setInterval(() => {animateMouth(avatar22, avatar2)}, 150);
            delayedClearInterval(interval, 2100);      
        }, 4100)
        setTimeout(() => {animateBlinking(avatar2, avatar23)}, 9000);
        setTimeout(() => {animateSmiling(avatar2, avatar24)}, 12000);

    }

    if (playAnimation == false) {
        setPlayAnimation(true);
        const timeout = setTimeout(() => {
            if (avaNum == 0) playAnimationAv1();
            else playAnimationAv2();
        }, 550)
        
        return () => clearTimeout(timeout)
    }
    
    return(
        <Container>
            <Slide direction={slide_direction} in={start} timeout={500} mountOnEnter unmountOnExit>
                <img className={ava_style} style={{width: avaSize, bottom: avaBottom, right: avaRight}} src={ava} alt="Avatar"></img>
            </Slide>
        </Container>  
    );
}

export default Avatar;