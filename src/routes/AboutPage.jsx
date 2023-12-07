import { useMediaQuery } from "react-responsive";
import styles from './AboutPage.module.css';
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import programming_img from '../assets/programming-languages-1.png'

const start = true;

function AboutPage() {
    const { t } = useTranslation();
    const isBigScreenShort = useMediaQuery({ query: '(min-width: 1440px) and (max-height: 780px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1440px) and (min-height: 781px)' });
    const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    let texts_box_width = "78%"
    let texts_box_margin_top = "6%"
    if (isLaptopL) {
        texts_box_margin_top = "10%"
    } else if (isLaptop) {
        texts_box_width = "84%"
        texts_box_margin_top = "14%"
    } else if (isMobile) {
        texts_box_width = "90%"
        texts_box_margin_top = "6%"
    }

    let prof_skills = (
        <Fragment>
            <div style={{lineHeight: 1.1}}>
                <h2>{t('aboutH2')}</h2>
                <h3>{t('aboutH3')}</h3>
                <ul>
                    <li>Python (PCAP Certification)</li>
                    <li>C/C++</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>SQL</li>
                </ul>
    
                <h4>HTML/CSS</h4>
                <h4>{t('Linux')}</h4>
                <h4>Git, Gerrit, Repo, Jira</h4>
                <h4>{t('Android')}</h4>
                <h3>Web Frameworks:</h3>
                <ul>
                    <li>React.js</li>
                    <li>Vue.js</li>
                </ul>
            </div>
        </Fragment>
    );
    
    return (
        <div className={styles.bg}>
            <Zoom in={start} style={{ transitionDelay: start ? '300ms' : '0ms' }}>
                <div className={styles.texts} style={{width: texts_box_width, marginTop: texts_box_margin_top}}>
                    <Fade in={start} style={{ transitionDelay: start ? '600ms' : '0ms' }}>
                        <div>
                            {isBigScreen && <div className={styles.bigScreen}>
                                <h2>{t('aboutH1')}</h2>
                                {t('aboutC1')}

                                {prof_skills}
                                <img className={styles.programmingImg} src={programming_img} alt="Programming"/>
                            </div>}

                            {isBigScreenShort && <div className={styles.bigScreenShort}>
                                <h2>{t('aboutH1')}</h2>
                                {t('aboutC1')}

                                {prof_skills}
                                <img className={styles.programmingImg} src={programming_img} alt="Programming"/>
                            </div>}

                            {isLaptopL && <div className={styles.laptopL}>
                                <h2>{t('aboutH1')}</h2>
                                    {t('aboutC1')}

                                    {prof_skills}
                            </div>}

                            {isLaptop && <div className={styles.laptop}>
                                <h2>{t('aboutH1')}</h2>
                                    {t('aboutC1')}

                                    {prof_skills}
                            </div>}

                            {isMobile && <div className={styles.mobile}>
                                <h2>{t('aboutH1')}</h2>
                                    {t('aboutC1')}

                                    {prof_skills}
                            </div>}
                        </div>
                    </Fade>
                </div>
            </Zoom>
        </div>
        
        
    );
}

export default AboutPage;