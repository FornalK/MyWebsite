import { useMediaQuery } from "react-responsive";
import styles from './AboutPage.module.css';
import { Fragment } from 'react'

let profil = 'I am a freshly graduated engineer with a degree in computer science. I am constantly trying to deepen my \
    knowledge and improve my qualifications. During my studies I was involved in scientific research using \
    eyetracking. I am working hard to develop myself, which in 2021 resulted in the first place in the ZFSNT NOT \
    RRZ competition in Szczecin under the title "Distinguished Young Technician / Engineer" in the "scientific \
    activity" category. I was also a participant in the project entitled "School of Eagles", which gives opportunities \
    for an individual path of education based on the tutoring method for the best students of my university. In the \
    last year of my studies, I was awarded a scholarship of the Minister of Education and Science for significant \
    achievements'

let prof_skills = (
    <Fragment>
        <div style={{lineHeight: 1.1}}>
            <h2>Professional skills</h2>
            <h3>Programming languages:</h3>
            <ul>
                <li>Python (PCAP Certification)</li>
                <li>C/C++</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Java</li>
                <li>SQL</li>
            </ul>

            <h4>HTML/CSS</h4>
            <h4>Knowledge of the Linux system</h4>
            <h4>Git, Gerrit, Repo, Jira</h4>
            <h4>Familiarity with the Android Framework</h4>
            <h3>Web Frameworks:</h3>
            <ul>
                <li>React.js</li>
                <li>Vue.js</li>
            </ul>
        </div>
    </Fragment>
);

function AboutPage() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
    const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    
    return (
        <div className={styles.common}>
            {isBigScreen && <div className={styles.bigScreen}>
                <h2>A little bit about me</h2>
                {profil}

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