import React from 'react';

import { skillsFrontEnd, skillsBackEnd } from '../content/skills';

import SkillRow from '../components/SkillRow';

export default function Skills() {
	return (
		<div className='page-container'>
			<section className='skills-page'>
				<h2>Skills & Tech Stack</h2>
				<div className='skills-content'>
					<div className='skills-block'>
						<h3>Front-End</h3>
						<div className='skills-categories'>
							{skillsFrontEnd.map((row, index) => (
								<SkillRow key={index} row={row} />
							))}
						</div>
					</div>
					<div className='skills-block'>
						<h3>Back-End</h3>
						<div className='skills-categories'>
							{skillsBackEnd.map((row, index) => (
								<SkillRow key={index} row={row} />
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
