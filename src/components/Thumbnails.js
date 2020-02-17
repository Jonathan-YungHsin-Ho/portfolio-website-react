import React from 'react';

export default function Thumbnails({ projects, handleSelect }) {
	return (
		<div className='thumbnails-wrapper'>
			{projects.map(project => (
				<div
					className='thumbnail'
					style={{ backgroundColor: project.thumbnail }}
					key={project.fields['Project']}
					onClick={() => handleSelect(project.fields['Project'])}></div>
			))}
		</div>
	);
}
