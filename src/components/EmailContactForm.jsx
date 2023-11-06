import { useEffect, useState, useRef } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser';
import Slide from '@mui/material/Slide';



const EmailContactForm = ({delay}) => {
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
                        width: '400px',
                        margin: 'auto',
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    >
                        <TextField
                            type="email"
                            name="email"
                            label="Your email"
                            color="primary"
                            focused 
                            />
                        <TextField 
                            type="text" 
                            name="subject"
                            label="Subject"
                            color="primary"
                            focused  />
                        <TextField 
                            type="text" 
                            name="message"
                            label="Message"

                            color="primary"
                            multiline
                            rows={5}
                            focused  />
                        <Button type="submit" variant="contained" endIcon={<SendIcon />}
                        sx={{
                            width: '200px', 
                            margin: 'auto'
                        }}>
                            Send
                        </Button>
                    </Box>
            </form>
        </Slide>
   </Container>
 );
};

export default EmailContactForm;