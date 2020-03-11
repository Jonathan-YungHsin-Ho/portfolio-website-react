import React, { useState } from 'react';
import Project from '../components/Project';
import Thumbnails from '../components/Thumbnails';
import { projects } from '../content/projects';

export default function Projects() {
	const [project, setProject] = useState(
		projects.find(project => project.number === 1),
	);

	const handleSelect = num =>
		setProject(projects.filter(proj => proj.number === num)[0]);

	const handlePrev = () =>
		setProject(
			projects.filter(
				proj => proj.number === (project.number === 1 ? 8 : project.number - 1),
			)[0],
		);

	const handleNext = () =>
		setProject(
			projects.filter(
				proj => proj.number === (project.number === 8 ? 1 : project.number + 1),
			)[0],
		);

	return (
		<div className='page-container'>
			<div className='panel-centered'>
				<section className='projects-page'>
					{/* <h2>Projects</h2> */}
					<Project project={project} />
					<Thumbnails
						projects={projects}
						handleSelect={handleSelect}
						handlePrev={handlePrev}
						handleNext={handleNext}
						num={project.number}
					/>
				</section>
			</div>
		</div>
	);
}
