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
    const isBigScreenShort = useMediaQuery({ query: '(min-width: 1440px) and (max-height: 780px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
    const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isShort = useMediaQuery({ query: '(max-height: 820px)' });

    let black_texts_size = 42;
    let orange_texts_size = 26;
    let texts_box_height = 267;
    let texts_box_width = '60%';
    let form_width = '35%';
    let ava_size = 500;
    let ava_bottom = '0%';
    let ava_right = "12%";
    let margin_top = '8%';
    
    if (isBigScreenShort) {
        black_texts_size = 28;
        orange_texts_size = 18;
        texts_box_height = 182;
        form_width = '35%';
        ava_size = 380;
        margin_top = '6%';
        texts_box_width = '45%';
    } else if (isLaptopL) {
        black_texts_size = 40;
        orange_texts_size = 24;
        ava_size = 380;
        margin_top = '12%';
    } else if (isLaptop) {
        black_texts_size = 28;
        orange_texts_size = 18;
        texts_box_height = 182;
        form_width = '45%';
        ava_size = 300;
        margin_top = '16%';
        ava_right = '6%';
    } else if (isMobile) {
        black_texts_size = 17;
        orange_texts_size = 13;
        texts_box_height = 120;
        texts_box_width = '80%';
        form_width = '70%';
        ava_size = 240;
        margin_top = '12%';
        ava_bottom = '56px';
        ava_right = '6%';
    }

    if (isShort && !isMobile) {
        margin_top = '6%'
    }

    if (isShort && isMobile) {
        ava_right = '-12%';
    }

    let content = (
        <Fragment>
            <Container className={styles.info}>
                <Zoom in={start} style={{ transitionDelay: start ? '300ms' : '0ms' }}>
                    <div className={styles.texts} style={{minHeight: texts_box_height, width: texts_box_width}}>
                        <AnimatedText text={t('contact1')} delay={400} styleNumber={1} speed={40} size={black_texts_size}/>
                        <AnimatedText text={texts[0]} delay={900} styleNumber={0} speed={40} size={orange_texts_size}/>
                        <AnimatedText text={texts[1]} delay={1800} styleNumber={0} speed={40} size={orange_texts_size}/>
                        <AnimatedText text={t('contact2')} delay={2400} styleNumber={1} speed={40} size={black_texts_size}/>
                    </div>
                </Zoom>
            </Container>
            <EmailContactForm delay={6800} formWidth={form_width}/>
        </Fragment>
    );
    
    return (
        <div className={styles.bg}>
            <div style={{color: "#000000", marginTop: margin_top}}>
                {content}
                <Avatar avaNum={1} avaSize={ava_size} avaBottom={ava_bottom} avaRight={ava_right}/>
            </div>
        </div>
    );
}

export default ContactPage;