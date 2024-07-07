import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'



function Contact(){
    return(
       <div id="contact">
          <div className="container">
          <h2>Contact Me</h2>
          <div className="inner-container">
          <Left></Left>
            <Right></Right>
          </div>
          </div>
       </div>
    )
}


function Left(){
  return(
    <div className="left">
        <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> sugampudasain3@gmail.com</p>
        <a href="CV.pdf" download className='btn'>Download CV</a>
    </div>
  )
}


function Right(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jq8c41m', 'template_mgejvl4', form.current, {
        publicKey: 'Jas5-UEuxiAMIhHwz',
      })
      .then(
        () => {
          alert('message send')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return(
    <div className="right">
      <form ref={form} onSubmit={sendEmail}>
      <input placeholder='Your name' required type="text" name="user_name" />
      <input placeholder="Email" type="email" required name="user_email" />
      <textarea placeholder='message' required name="message" />
      <input className="formbtn" type="submit" value="Send" />
    </form>
    </div>
  )
}



export default Contact