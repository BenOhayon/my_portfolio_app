import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './ContactMe.scss'

export default function ContactMe() {

  const [isProcessing, setIsProcessing] = useState(false)

  const formRef = useRef()
  const nameRef = useRef()
  const subjectRef = useRef()
  const messageRef = useRef()
  const feedbackMessageRef = useRef()

  function resetFields() {
    nameRef.current.value = ''
    subjectRef.current.value = ''
    messageRef.current.value = ''
  }

  function onInputChange(e) {
    e.target.classList.remove('input-error')
  }

  function isVerified(name, message) {
    let verified = true;

    if (name.current.value.length === 0) {
      name.current.classList.add('input-error')
      verified = false
    }

    if (message.current.value.length === 0) {
      message.current.classList.add('input-error')
      verified = false
    }

    return verified
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(import.meta.env);

    if (isVerified(nameRef, messageRef)) {
      setIsProcessing(true)
      // send an email
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_PORTFOLIO_TEMPLATE_ID, 
        formRef.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(res => {
        console.log(res)
        feedbackMessageRef.current.classList.add('success')
        feedbackMessageRef.current.innerText = 'Your email has been sent'
        resetFields()
        setIsProcessing(false)
      })
      .catch(err => {
        console.log(err)
        feedbackMessageRef.current.classList.add('fail')
        feedbackMessageRef.current.innerText = 'An error occurred'
        resetFields()
        setIsProcessing(false)
      })
    }
  }

  return (
    <section id='contact' className='contact-me-container'>
      <h2 className='contact-me-title header'>Contact</h2>
      <h2 className='contact-me-title'>Interested in working with me? <br /> Let's have a talk!</h2>
      <form ref={formRef} className='contact-form' onSubmit={handleSubmit}>
        <input ref={nameRef} onChange={onInputChange} className='contact-name-input contact-input' type='text' name='name' placeholder='Enter your name' />
        <input ref={subjectRef} onChange={onInputChange} className='contact-subject-input contact-input' type='text' name='subject' placeholder='Enter subject (optional)' />
        <textarea ref={messageRef} onChange={onInputChange} className='contact-content-input contact-input' name='message' placeholder='Enter your message' rows={7} />

        <div className="contact-lower-frame">
          <div ref={feedbackMessageRef} className="contact-feedback-message"></div>
          <button className='contact-send-button button'>
            {!isProcessing ? 'Send' : <div className='loader'></div>}
          </button>
        </div>
      </form>
    </section>
  )
}
