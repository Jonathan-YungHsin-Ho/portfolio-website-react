import React from 'react';
import SkillCategory from '../components/SkillCategory';
import { skillsFrontEnd, skillsBackEnd } from '../content/skills';

export default function Skills() {
	return (
		<div className='page-container'>
			<div className='panel-centered'>
				<section className='skills-page'>
					<h2>Skills & Tech Stack</h2>
					<div className='skills-content'>
						<div className='skills-block'>
							<h3>Front-End</h3>
							<div className='skills-categories'>
								{skillsFrontEnd.map((category, index) => (
									<SkillCategory key={index} category={category} />
								))}
							</div>
						</div>
						<div className='skills-block'>
							<h3>Back-End</h3>
							<div className='skills-categories'>
								{skillsBackEnd.map((category, index) => (
									<SkillCategory key={index} category={category} />
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
