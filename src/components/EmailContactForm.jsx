import { useEffect, useState, useRef } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser';
import Slide from '@mui/material/Slide';
import { useTranslation } from 'react-i18next'
import styles from './EmailContactForm.module.css'


const EmailContactForm = ({delay, formWidth}) => {
 const { t } = useTranslation();
 const form = useRef();
 const [showForm, setShowForm] = useState(false);
 useEffect(() => {
    const timeout = setTimeout(() => {
        setShowForm(true)
    }, delay)

    return () => clearTimeout(timeout)
 }, [showForm]);

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_kes5atc', 'template_drsysnd', form.current, 'wIctgtdmXsSNq-MlL')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
 };

 

 return (
    <Container>
        <Slide direction='up' in={showForm} mountOnEnter unmountOnExit>
            <form ref={form} onSubmit={sendEmail}>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: formWidth,
                        margin: 'auto',
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    >
                        <TextField
                            type="email"
                            name="email"
                            label={t('formLabel1')}
                            color="primary"
                            focused 
                            />
                        <TextField 
                            type="text" 
                            name="subject"
                            label={t('formLabel2')}
                            color="primary"
                            focused  />
                        <TextField 
                            type="text" 
                            name="message"
                            label={t('formLabel3')}

                            color="primary"
                            multiline
                            rows={5}
                            focused  />
                        <Button type="submit" variant="contained" endIcon={<SendIcon />}
                        sx={{
                            width: '200px', 
                            margin: 'auto'
                        }}>
                            <span className={styles.font_style}>{t('formSubmit')}</span>
                        </Button>
                    </Box>
            </form>
        </Slide>
   </Container>
 );
};

export default EmailContactForm;