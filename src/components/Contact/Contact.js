import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {ContactForm} from "./ContactElements.js";

function Contact() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailStatus, setEmailStatus] = useState(false);
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if(name.length===0||email.length===0||message.length===0) {
            setError(true)
        }

        if(name&&email&&message)
        {   
            emailjs.sendForm('service_lqb2a03', 'contact_wmectx2', form.current, 'user_KDiQr4EBdzEDxIJAAN6lS')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent");
                setEmailStatus(!emailStatus);
            }, (error) => {
                console.log(error.text);
                setEmailError(!error)
            });
        }
        
    };

    return (
    <ContactForm>
        { !emailStatus && 
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input onChange={e=>setName(e.target.value)} type="text" name="name" />
            {error&&name.length<=0? <label style={{color: "red"}}>Name cannot be blank</label>:""}
            <label>Email</label>
            <input onChange={e=>setEmail(e.target.value)} type="email" name="email" />
            {error&&email.length<=0? <label style={{color: "red"}}>Email cannot be blank</label>:""}
            <label>Message</label>
            <textarea onChange={e=>setMessage(e.target.value)} name="message" />
            {error&&message.length<=0? <label style={{color: "red"}}>Message cannot be blank</label>:""}
            <input style={{borderRadius: "0"}} type="submit" value="SEND" />
        </form>
        }
        { emailError && 
        <div style={{marginTop: "25px"}}>There was an error sending your message. Please try again later, or contact Samuel directly.</div>
        }
        { emailStatus && 
        <div>Message successfully sent!</div>
        }
    </ContactForm>
    )
    }

export default Contact;
