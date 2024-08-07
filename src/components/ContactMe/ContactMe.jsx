import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';

import './ContactMe.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants';

const FEEDBACK_MESSAGE_STATUS = {
	SUCCESS: 'SUCCESS',
	FAILURE: 'FAILURE'
}

const inputInitialState = {
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

export default function ContactMe() {

	const [isProcessing, setIsProcessing] = useState(false)
	const [feedbackMessageState, setFeedbackMessageState] = useState({
		message: '',
		status: ''
	})
	const [inputState, setInputState] = useState(inputInitialState)
	const [isAbleToSendMail, setIsAbleToSendMail] = useState(false)

	const formRef = useRef()

	useEffect(() => {
		setIsAbleToSendMail(
			inputState.name.value !== '' && inputState.email.value !== '' && inputState.message.value !== ''
		)
	}, [inputState])

	function resetFields() {
		setInputState(inputInitialState)
	}

	function onInputChange(e) {
		setInputState(prev => ({
			...prev,
			[e.target.name]: {
				value: e.target.value,
				error: false
			}
		}))
	}

	function highlightInputError(inputName) {
		setInputState(prev => ({
			...prev,
			[inputName]: {
				...prev[inputName],
				error: true
			}
		}))
	}

	function fieldsVerified() {
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

	function handleSubmit(e) {
		e.preventDefault()
		setFeedbackMessageState(prev => ({
			...prev,
			message: ''
		}))

		if (fieldsVerified()) {
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
						message: 'An error has occurred',
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
			<form data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} ref={formRef} className='contact-form'>
				<input value={inputState.name.value} onChange={onInputChange} className='contact-name-input contact-input' type='text' name='name' placeholder='Enter your name' />
				<input value={inputState.email.value} onChange={onInputChange} className='contact-email-input contact-input' type='email' name='email' placeholder='Enter your email' />
				<textarea value={inputState.message.value} onChange={onInputChange} className='contact-content-input contact-input' name='message' placeholder='Enter your message' rows={7} />

				<div className="contact-lower-frame">
					<div className="contact-feedback-message" style={{ color: feedbackMessageState.status === FEEDBACK_MESSAGE_STATUS.SUCCESS ? 'green' : 'red' }}>{feedbackMessageState.message}</div>
					<button className='contact-send-button button' disabled={!isAbleToSendMail} onClick={handleSubmit}>
						{!isProcessing ? 'Send' : <div className='loader'></div>}
					</button>
				</div>
			</form>
		</section>
	)
}
