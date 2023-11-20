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

    let content = (
        <Fragment>
            <Container className={styles.info}>
                <Zoom in={start} style={{ transitionDelay: start ? '300ms' : '0ms' }}>
                    <div className={styles.texts}>
                        <AnimatedText text={t('contact1')} delay={400} styleNumber={1} speed={40} size={42}/>
                        <AnimatedText text={texts[0]} delay={800} styleNumber={0} speed={40} size={26}/>
                        <AnimatedText text={texts[1]} delay={1700} styleNumber={0} speed={40} size={26}/>
                        <AnimatedText text={t('contact2')} delay={2300} styleNumber={1} speed={40} size={42}/>
                    </div>
                </Zoom>
            </Container>
            <EmailContactForm delay={6700}/>
        </Fragment>
    );
    
    return (
            <div className={styles.bg}>
                <div style={{color: "#000000", marginTop: 135}}>
                    {content}
                    <Avatar ava_num={1}/>
                    {isBigScreen && <h1 style={{color: '#ff0000'}}></h1>}
                    {isLaptopL && <h1 style={{color: '#00ff00'}}></h1>}
                    {isLaptop && <h1 style={{color: '#0000ff'}}></h1>}
                    {isMobile && <h1 style={{color: '#000000'}}></h1>}
                </div>
            </div>
    );
}

export default ContactPage;