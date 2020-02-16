import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill({ skill }) {
	return (
		<div>
			{skill.icon && (
				<FontAwesomeIcon
					icon={['fab', skill.icon]}
					size='lg'
					className='tech-icon'
				/>
			)}
			<span>{skill.skill}</span>
		</div>
	);
}
