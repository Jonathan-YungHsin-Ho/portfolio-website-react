import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../documents/resume.pdf';

export default function Footer() {
	return (
		<div className='footer'>
			<a href={Resume} target='_blank' rel='noopener noreferrer'>
				<FontAwesomeIcon icon={['fas', 'file']} className='icon' size='lg' />
			</a>
			<a
				href='https://www.linkedin.com/in/jonathan-y-ho/'
				target='_blank'
				rel='noopener noreferrer'>
				<FontAwesomeIcon
					icon={['fab', 'linkedin-in']}
					className='icon'
					size='lg'
				/>
			</a>
			<a
				href='https://github.com/Jonathan-YungHsin-Ho'
				target='_blank'
				rel='noopener noreferrer'>
				<FontAwesomeIcon icon={['fab', 'github']} className='icon' size='lg' />
			</a>
			<a
				href='https://twitter.com/JonathanHoDev'
				target='_blank'
				rel='noopener noreferrer'>
				<FontAwesomeIcon icon={['fab', 'twitter']} className='icon' size='lg' />
			</a>
			<a href='mailto:jonathan.yunghsin.ho@gmail.com'>
				<FontAwesomeIcon
					icon={['fas', 'envelope']}
					className='icon'
					size='lg'
				/>
			</a>
		</div>
	);
}
