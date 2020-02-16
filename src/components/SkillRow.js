import React from 'react';

import Skill from './Skill';

export default function SkillRow({ row }) {
	return (
		<div className='skill-category'>
			<h4>{row.category}</h4>
			{row.skills.map((skill, index) => (
				<Skill key={index} skill={skill} />
			))}
		</div>
	);
}
