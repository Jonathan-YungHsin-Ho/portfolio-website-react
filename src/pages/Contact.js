import React, { useState } from 'react';

export default function Contact() {
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [feedback, setFeedback] = useState('');
	const [error, setError] = useState('');

	const handleChange = e =>
		setMessage({ ...message, [e.target.name]: e.target.value });

	const sendFeedback = (
		templateId,
		fromName,
		fromEmail,
		message,
		toEmail,
		user,
	) => {
		window.emailjs
			.send(
				'gmail',
				templateId,
				{ fromName, fromEmail, message, toEmail },
				user,
			)
			.then(res => {
				// console.log(res);
				setFeedback('Message sent!');
				setMessage({ name: '', email: '', message: '' });
			})
			.catch(err => {
				console.log('Failed to send message. Error: ', err);
				setError('Sorry, message failed to send');
			});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(message);

		sendFeedback(
			process.env.REACT_APP_EMAILJS_TEMPLATEID,
			message.name,
			message.email,
			message.message,
			process.env.REACT_APP_EMAILJS_RECEIVER,
			process.env.REACT_APP_EMAILJS_USERID,
		);
	};

	return (
		<div className='page-container'>
			<section className='contact-page'>
				<h2>Get In Touch</h2>
				<p>
					Feel free to reach out if you'd like to discuss collaboration or other
					opportunities.
				</p>
				<form>
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={message.name}
						onChange={handleChange}
					/>
					<input
						type='text'
						name='email'
						placeholder='Email'
						value={message.email}
						onChange={handleChange}
					/>
					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						value={message.message}
						onChange={handleChange}
					/>
					<div className='contact-button-row'>
						<button onClick={handleSubmit}>Send Message</button>
						<div className='message-feedback'>
							<span style={{ color: 'green' }}>{feedback}</span>
							<span style={{ color: 'red' }}>{error}</span>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
}
