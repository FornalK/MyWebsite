import { useEffect, useState, useRef, forwardRef } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser';
import Slide from '@mui/material/Slide';
import { useTranslation } from 'react-i18next'
import styles from './EmailContactForm.module.css'
import { useMediaQuery } from "react-responsive";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EmailContactForm = ({delay, formWidth, setter}) => {
 const { t } = useTranslation();
 const form = useRef();
 const [showForm, setShowForm] = useState(false);
 const [focus, setFocus] = useState(0);
 const [email, setEmail] = useState('');
 const [title, setTitle] = useState('');
 const [message, setMessage] = useState('');
 const [open, setOpen] = useState(false);

 const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

 const handleChange = (event, fieldNum) => {
    if (fieldNum === 1) setEmail(event.target.value);
    else if (fieldNum === 2) setTitle(event.target.value);
    else if (fieldNum === 3) setMessage(event.target.value);
 };

 const handleSend = () => {
    setTimeout(() => {
        setOpen(true);
        setEmail('');
        setTitle('');
        setMessage('');
    }, 200)
 };

 const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
};



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

 function changeFocus(num) {
    setFocus(num);
    setter(num);
 }

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
                    {(((focus == 0) || (focus == 1 && isMobile)) || (!isMobile)) && <TextField
                        type="email"
                        name="email"
                        label={t('formLabel1')}
                        color="primary"
                        focused 
                        value={email}
                        onChange={event => handleChange(event, 1)}
                        onFocus={() => changeFocus(1)} 
                        onBlur={() => changeFocus(0)} /> }
                    {(((focus == 0) || (focus == 2 && isMobile)) || (!isMobile)) && <TextField 
                        type="text" 
                        name="subject"
                        label={t('formLabel2')}
                        color="primary"
                        focused
                        value={title}
                        onChange={event => handleChange(event, 2)}
                        onFocus={() => changeFocus(2)}
                        onBlur={() => changeFocus(0)} /> }
                    {(((focus == 0) || (focus == 3 && isMobile)) || (!isMobile)) && <TextField 
                        type="text" 
                        name="message"
                        label={t('formLabel3')}
                        color="primary"
                        multiline
                        rows={5}
                        focused
                        value={message}
                        onChange={event => handleChange(event, 3)}
                        onFocus={() => changeFocus(3)}
                        onBlur={() => changeFocus(0)} /> }
                    {(((focus == 0) || (focus == 0 && isMobile)) || (!isMobile)) && <Button 
                        type="submit" 
                        variant="contained" 
                        endIcon={<SendIcon /> } 
                        onClick={handleSend}
                        sx={{
                            width: '200px', 
                            margin: 'auto'
                        }}>
                            <span className={styles.font_style}>{t('formSubmit')}</span>
                    </Button> }
                </Box>
            </form>
        </Slide>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
            </Alert>
      </Snackbar>
   </Container>
 );
};

export default EmailContactForm;