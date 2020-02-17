import React, { useState } from 'react';

import Project from '../components/Project';
import Thumbnails from '../components/Thumbnails';

import { projects } from '../content/projects';

export default function Projects() {
	const [project, setProject] = useState('');

	const handleSelect = name =>
		setProject(
			projects.filter(project => project.fields['Project'] === name)[0],
		);

	return (
		<div className='page-container'>
			<section className='projects-page'>
				<h2>Projects</h2>
				<Project project={project} />
				<Thumbnails projects={projects} handleSelect={handleSelect} />
			</section>
		</div>
	);
}
