import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dkyqjvi', 'template_qiwv3bd', form.current, 'geEET_nHlRZaoSUZn')
     
  };
  return (
   <section id='contact'> 
   <h5> Get in Touch </h5>
   <h2> Contact Me</h2>
   
   <div className='container contact_container'>
    <div className='contact_options'>
      <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>cizenmah@gmail.com</h5>
        <a href='mailto:cizenmah@gmail.com'> Send a Message</a>
      </article>
     
       
    
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your Full Name' required />
      <input type='email' name='email' placeholder='Your Email' required/>
      <textarea name='message' rows='7' placeholder='Your Message' required/>
      <button type='submit' className='btn btn-primary'> Send a message</button>
    </form>

   </div>
  </section>
  )
}

export default Contact
