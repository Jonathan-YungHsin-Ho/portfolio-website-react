import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../svgIcons';

import { useModeContext } from '../contexts/ModeContext';

export default function Skill({ skill }) {
	const {
		mode: { darkMode },
	} = useModeContext();

	return (
		<div className='skill-row'>
			{skill.icon && (
				<FontAwesomeIcon
					icon={['fab', skill.icon]}
					size='lg'
					className='tech-icon'
				/>
			)}
			{skill.svg && (
				<Icon
					name={skill.svg}
					style={{ marginRight: '0.5rem' }}
					fill={darkMode ? 'whitesmoke' : '#101010'}
				/>
			)}
			<span>{skill.skill}</span>
		</div>
	);
}
