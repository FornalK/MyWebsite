import { useMediaQuery } from "react-responsive";
import { Fragment } from 'react'
import EmailContactForm from "../components/EmailContactForm";
import Container from '@mui/material/Container';
import AnimatedText from '../components/AnimatedText';
import styles from './ContactPage.module.css';
import { useTranslation } from 'react-i18next'

const texts = [
    "email: kacper_fornalczyk@wp.pl",
    "tel: +48 693514281",
]

function ContactPage() {

    const { t } = useTranslation();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
    const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    let content = (
        <Fragment>
            <Container className={styles.info}>
                <div className="texts">
                    <AnimatedText text={t('contact1')} delay={200} styleNumber={1} speed={40} size={42}/>
                    <AnimatedText text={texts[0]} delay={800} styleNumber={0} speed={40} size={26}/>
                    <AnimatedText text={texts[1]} delay={1500} styleNumber={0} speed={40} size={26}/>
                    <AnimatedText text={t('contact2')} delay={2100} styleNumber={1} speed={40} size={42}/>
                </div>
            </Container>
            <EmailContactForm delay={6500}/>
        </Fragment>
    );
    
    return (
        <div style={{color: "#000000", marginTop: 200}}>
            {content}
            {isBigScreen && <h1 style={{color: '#ff0000'}}>Contact Me 1</h1>}
            {isLaptopL && <h1 style={{color: '#00ff00'}}>Contact Me 2</h1>}
            {isLaptop && <h1 style={{color: '#0000ff'}}>Contact Me 3</h1>}
            {isMobile && <h1 style={{color: '#000000'}}>Contact Me 4</h1>}
        </div>
    );
}

export default ContactPage;