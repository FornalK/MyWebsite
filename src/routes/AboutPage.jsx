import { useMediaQuery } from "react-responsive";
import styles from './AboutPage.module.css';
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

function AboutPage() {
    const { t } = useTranslation();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
    const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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
        <div className={styles.common}>
            {isBigScreen && <div className={styles.bigScreen}>
                <h2>{t('aboutH1')}</h2>
                {t('aboutC1')}

                {prof_skills}
 
            </div>}

            {isLaptopL && <div className={styles.laptopL}>
                {texts[0]}
            </div>}

            {isLaptop && <div className={styles.laptop}>
                {texts[0]}
            </div>}

            {isMobile && <div className={styles.mobile}>
                {texts[0]}
            </div>}
        </div>
        
        
    );
}

export default AboutPage;