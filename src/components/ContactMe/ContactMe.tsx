import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';

import './ContactMe.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants';
import Section from '../Section/Section';

interface FeedbackMessageState {
  name: {
    value: string;
    error: boolean;
  };
  email: {
    value: string;
    error: boolean;
  };
  message: {
    value: string;
    error: boolean;
  };
}

type FeedbackMessageStatus = 'success' | 'failure';

const inputInitialState: FeedbackMessageState = {
  name: {
    value: '',
    error: false
  },
  email: {
    value: '',
    error: false
  },
  message: {
    value: '',
    error: false
  }
}

const ContactMe: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [feedbackMessageState, setFeedbackMessageState] = useState<{message: string, status: FeedbackMessageStatus}>({
    message: '',
    status: 'success'
  })
  const [inputState, setInputState] = useState(inputInitialState)
  const [isAbleToSendMail, setIsAbleToSendMail] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setIsAbleToSendMail(
      inputState.name.value !== '' && inputState.email.value !== '' && inputState.message.value !== ''
    )
  }, [inputState])

  const resetFields = () => {
    setInputState(inputInitialState)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputState(prev => ({
      ...prev,
      [e.target.name]: {
        value: e.target.value,
        error: false
      }
    }))
  }

  const highlightInputError = (inputName: keyof FeedbackMessageState) => {
    setInputState(prev => ({
      ...prev,
      [inputName]: {
        ...prev[inputName],
        error: true
      }
    }))
  }

  const fieldsVerified = (): boolean => {
    let verified = true

    if (inputState.name.value === '') {
      highlightInputError('name')
      verified = false
    }

    if (inputState.email.value === '') {
      highlightInputError('email')
      verified = false
    }

    if (inputState.message.value === '') {
      highlightInputError('message')
      verified = false
    }

    return verified
  }

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFeedbackMessageState(prev => ({
      ...prev,
      message: ''
    }))

    if (fieldsVerified()) {
      setIsProcessing(true)
      try {
        const res = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_PORTFOLIO_TEMPLATE_ID,
          formRef?.current as HTMLFormElement,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        console.log(res)
        setFeedbackMessageState({
          message: 'Your email has been sent',
          status: 'success'
        })
      } catch (error) {
        console.log(error)
        setFeedbackMessageState({
          message: 'An error has occurred: ' + error,
          status: 'failure'
        });
      } finally {
        resetFields();
        setIsProcessing(false);
      }
    }
  }

  return (
    <Section
      header="Contact Me"
      sectionClassName="contact-me-container"
      sectionId="contact"
    >
      <div className='contact-me-title'>
        <div data-aos="fade-left" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='contact-me-content-line-1'>Interested in hiring me?</div>
        <div data-aos="fade-right" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='contact-me-content-line-2'>Call me on <a href='tel:0545805203' className='contact-me-phone-number'>054-5805203</a> or send me a message!</div>
      </div>
      <form data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} ref={formRef} className='contact-form'>
        <input value={inputState.name.value} onChange={onInputChange} className='contact-name-input contact-input' type='text' name='name' placeholder='Enter your name' />
        <input value={inputState.email.value} onChange={onInputChange} className='contact-email-input contact-input' type='email' name='email' placeholder='Enter your email' />
        <textarea value={inputState.message.value} onChange={onInputChange} className='contact-content-input contact-input' name='message' placeholder='Enter your message' rows={7} />

        <div className="contact-lower-frame">
          <div className="contact-feedback-message" style={{ color: feedbackMessageState.status === 'success' ? 'green' : 'red' }}>{feedbackMessageState.message}</div>
          <button className='contact-send-button button' disabled={!isAbleToSendMail} onClick={handleSubmit}>
            {!isProcessing ? 'Send' : <div className='loader'></div>}
          </button>
        </div>
      </form>
    </Section>
  )
}

export default ContactMe;