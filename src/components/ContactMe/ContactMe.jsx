import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './ContactMe.scss'

export default function ContactMe() {

  const formRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(import.meta.env);

    // send an email
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_PORTFOLIO_TEMPLATE_ID, 
      formRef.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className='contact-me-container'>
      <h2 className='contact-me-title'>Interested in hiring me? <br/> Please send me an email and we can have a phone call in no time!</h2>
      <form ref={formRef} className='contact-form' onSubmit={handleSubmit}>
        <input className='contact-name-input contact-input' type='text' name='name' placeholder='Full Name' />
        <input className='contact-subject-input contact-input' type='text' name='subject' placeholder='Subject' />
        <textarea className='contact-content-input contact-input' name='message' placeholder='Your Message' rows={15} />

        <button className='contact-send-button'>Send</button>
      </form>
    </div>
  )
}
