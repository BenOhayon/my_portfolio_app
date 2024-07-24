import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './ContactMe.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants';

const FEEDBACK_MESSAGE_STATUS = {
	SUCCESS: 'SUCCESS',
	FAILURE: 'FAILURE'
}

export default function ContactMe() {

	const [isProcessing, setIsProcessing] = useState(false)
	const [feedbackMessageState, setFeedbackMessageState] = useState({
		message: '',
		status: ''
	})

	const formRef = useRef()
	const nameRef = useRef()
	const subjectRef = useRef()
	const messageRef = useRef()

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
		setFeedbackMessageState(prev => ({
			...prev,
			message: ''
		}))

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
					setFeedbackMessageState({
						message: 'Your email has been sent',
						status: FEEDBACK_MESSAGE_STATUS.SUCCESS
					})
					resetFields()
					setIsProcessing(false)
				})
				.catch(err => {
					console.log(err)
					setFeedbackMessageState({
						message: 'An error occurred',
						status: FEEDBACK_MESSAGE_STATUS.FAILURE
					})
					resetFields()
					setIsProcessing(false)
				})
		}
	}

	return (
		<section id='contact' className='contact-me-container'>
			<div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='contact-me-header header'>Contact</div>
			<div className='contact-me-title'>
				<div data-aos="fade-left" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='contact-me-content-line-1'>Interested in hiring me?</div>
				<div data-aos="fade-right" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='contact-me-content-line-2'>Call me on <a href='tel:0545805203' className='contact-me-phone-number'>054-5805203</a> or send me a message!</div>
			</div>
			<div data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} ref={formRef} className='contact-form'>
				<input ref={nameRef} onChange={onInputChange} className='contact-name-input contact-input' type='text' name='name' placeholder='Enter your name' />
				<input ref={subjectRef} onChange={onInputChange} className='contact-subject-input contact-input' type='email' name='email' placeholder='Enter your email' />
				<textarea ref={messageRef} onChange={onInputChange} className='contact-content-input contact-input' name='message' placeholder='Enter your message' rows={7} />

				<div className="contact-lower-frame">
					<div className="contact-feedback-message" style={{ color: feedbackMessageState.status === FEEDBACK_MESSAGE_STATUS.SUCCESS ? 'green' : 'red' }}>{feedbackMessageState.message}</div>
					<button className='contact-send-button button' onClick={handleSubmit}>
						{!isProcessing ? 'Send' : <div className='loader'></div>}
					</button>
				</div>
			</div>
		</section>
	)
}
