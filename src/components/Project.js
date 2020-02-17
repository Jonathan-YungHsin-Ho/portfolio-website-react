import React from 'react';

export default function Project({ project }) {
	const imageStyle = {
		width: '30rem',
		height: '20rem',
		marginRight: '2rem',
		backgroundImage: `url(/images/${project.image})`,
		backgroundSize: 'cover',
		borderRadius: '0.3rem',
		cursor: project && 'pointer',
	};

	return (
		<div className='project-summary'>
			<a href={project.site} target='_blank' rel='noopener noreferrer'>
				<div style={imageStyle}></div>
			</a>
			<div>
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
