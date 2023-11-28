import { useMediaQuery } from "react-responsive";
import { Fragment } from 'react'
import EmailContactForm from "../components/EmailContactForm";
import Container from '@mui/material/Container';
import AnimatedText from '../components/AnimatedText';
import styles from './ContactPage.module.css';
import { useTranslation } from 'react-i18next'
import Zoom from '@mui/material/Zoom';
import Avatar from "../components/Avatar";

const texts = [
    "email: kacper_fornalczyk@wp.pl",
    "tel: +48 693514281",
]

const start = true;

function ContactPage() {

    const { t } = useTranslation();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
    const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    let black_texts_size = 42;
    let orange_texts_size = 26;
    let texts_box_size = 267;

    if (isLaptopL) {
        black_texts_size = 40;
        orange_texts_size = 24;
    } else if (isLaptop) {
        black_texts_size = 28;
        orange_texts_size = 18;
        texts_box_size = 182;
    } else if (isMobile) {
        black_texts_size = 17;
        orange_texts_size = 13;
        texts_box_size = 120;
    }

    let content = (
        <Fragment>
            <Container className={styles.info}>
                <Zoom in={start} style={{ transitionDelay: start ? '300ms' : '0ms' }}>
                    <div className={styles.texts} style={{minHeight: texts_box_size}}>
                        <AnimatedText text={t('contact1')} delay={400} styleNumber={1} speed={40} size={black_texts_size}/>
                        <AnimatedText text={texts[0]} delay={900} styleNumber={0} speed={40} size={orange_texts_size}/>
                        <AnimatedText text={texts[1]} delay={1800} styleNumber={0} speed={40} size={orange_texts_size}/>
                        <AnimatedText text={t('contact2')} delay={2400} styleNumber={1} speed={40} size={black_texts_size}/>
                    </div>
                </Zoom>
            </Container>
            <EmailContactForm delay={6800}/>
        </Fragment>
    );
    
    return (
            <div className={styles.bg}>
                {isBigScreen && 
                    <div style={{color: "#000000", marginTop: 135}}>
                        {content}
                        <Avatar ava_num={1} ava_size={250}/>
                    </div>
                }

                {isLaptopL && 
                    <div style={{color: "#000000", marginTop: 135}}>
                        {content}
                        <Avatar ava_num={1} ava_size={200}/>
                    </div>
                }
                    
                {isLaptop && 
                    <div style={{color: "#000000", marginTop: 135}}>
                        {content}
                        <Avatar ava_num={1} ava_size={150}/>
                    </div>
                }

                {isMobile && 
                    <div style={{color: "#000000", marginTop: 135}}>
                        {content}
                        <Avatar ava_num={1} ava_size={100}/>
                    </div>
                }
                
            </div>
    );
}

export default ContactPage;