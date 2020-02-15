import React from 'react';

export default function Contact() {
	return (
		<div className='page-container'>
			<section className='contact-page'>
				<h2>Get In Touch</h2>
				<p>
					Feel free to reach out if you'd like to discuss collaboration or other
					opportunities. I'm currently available for hire.
				</p>
				<form>
					<input type='text' name='name' placeholder='Name' />
					<input type='text' name='email' placeholder='Email' />
					<input type='text' name='message' placeholder='Message' />
					<button>Send Message</button>
				</form>
			</section>
		</div>
	);
}
