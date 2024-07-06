import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jq8c41m', 'template_mgejvl4', form.current, {
            publicKey: 'Jas5-UEuxiAMIhHwz',
          })
          .then(
            () => {
              alert('Message Sent')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <div id='Container'>
        <form ref={form} onSubmit={sendEmail}>
        <h2>Contact me</h2>
        <input type="text" placeholder="Your Name"  required name="user_name" />
        <input type="email" placeholder="Email" required name="user_email" />
        <textarea placeholder="Message" required name="message" />
        <input className="btn" type="submit" value="Send" />
        </form>
        </div>
    )
}



export default Contact