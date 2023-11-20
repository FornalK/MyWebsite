import { useEffect, useState, useRef } from "react";
import styles from './AnimatedText.module.css'

function AnimatedText({text, delay, styleNumber, speed, size}) {
    const divRef = useRef(null);
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowText(true)
            typeWriter();
        }, delay)
        
        return () => clearTimeout(timeout)
    }, [showText]);

    let i = 0;
    let style = null;

    function typeWriter() {
        if (i < text.length) {
            divRef.current.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    if (!showText) return null // don't render anything until the specified time has passed
    
    // Select a text style
    style = (styleNumber == 0) ? styles.welcome : styles.info 
    if (styleNumber == 2) style = styles.welcomeFirst

    return (<div ref={divRef} className={style} style={{fontSize: size}} ></div>);
}

export default AnimatedText;