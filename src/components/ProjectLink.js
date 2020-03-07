import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectLink({ link }) {
	return (
		<div className='project-link'>
			<a href={link.url} target='_blank' rel='noopener noreferrer'>
				<FontAwesomeIcon icon={link.icon} className='icon' size='lg' />{' '}
			</a>
			{link.text}
		</div>
	);
}
