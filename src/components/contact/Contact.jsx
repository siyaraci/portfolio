import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BiPhoneCall} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ujowpei', 'template_jpsstt6', form.current, 'PQ288XvgJSDQnvZJt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
          <h5>Get in touch</h5>
          <h2>CONTACT ME</h2>

      <div className='container contact_container'>

        <div className='contact_options'>
          <article className='contact_option'>
          <AiOutlineMail/>
          <h3>Email</h3>
          <h4>ciaraasicaig@gmail.com</h4>
          <a href='mailto:ciarasicaig@gmail.com'>Send a message</a>
          </article>

          <article className='contact_option'>
          <RiMessengerLine/>
            <h3>Messenger</h3>
            <h4>ciaraasicaig@gmail.com</h4>
          <a href='https://m.me/ciara.caig.3'>Send a message</a>
           
          </article>

          <article className='contact_option'>
            <BiPhoneCall/>
            <h3>Mobile Number</h3>
            <h4>09663863177</h4>   
          </article>
        </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact