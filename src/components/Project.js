import React from 'react';

export default function Project({ project }) {
	const imageStyle = {
		backgroundImage: `url(/images/${project.image})`,
		cursor: project && 'pointer',
		overflowX: !project && 'hidden',
		boxShadow: !project && 'none',
	};

	return (
		<div className='project-summary'>
			<a href={project.site} target='_blank' rel='noopener noreferrer'>
				<div className='project-image' style={imageStyle}></div>
			</a>
			<div className='project-text'>
				<div className='project-fields'>
					{project.fields &&
						Object.entries(project.fields).map(([key, value]) => (
							<div className='project-field' key={key}>
								<h3 style={{ flexShrink: '0' }}>{key}:</h3>
								<p>{value}</p>
							</div>
						))}
				</div>
				<div className='project-links'></div>
			</div>
		</div>
	);
}
