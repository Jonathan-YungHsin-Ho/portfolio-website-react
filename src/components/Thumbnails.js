import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModeContext } from '../contexts/ModeContext';

export default function Thumbnails({
	projects,
	handleSelect,
	handlePrev,
	handleNext,
	num,
}) {
	const {
		mode: { darkMode },
	} = useModeContext();

	return (
		<div className='thumbnails-wrapper'>
			<FontAwesomeIcon
				icon={['fas', 'caret-left']}
				size='lg'
				color={darkMode ? 'rgba(255, 255, 255, 0.87)' : '#121212'}
				style={{ cursor: 'pointer' }}
				onClick={handlePrev}
			/>
			{projects.map(project => (
				<div
					className='thumbnail'
					style={{
						backgroundColor: project.thumbnail,
						border:
							project.number === num &&
							(darkMode
								? '2px solid rgba(255, 255, 255, 0.87)'
								: '2px solid #121212'),
						// project['thumbnail-border'] &&
						// `2px solid ${project['thumbnail-border']}`,
					}}
					key={project.number}
					// onClick={() => handleSelect(project.fields['Project'])}></div>
					onClick={() => handleSelect(project.number)}></div>
			))}
			<FontAwesomeIcon
				icon={['fas', 'caret-right']}
				size='lg'
				color={darkMode ? 'white' : '#121212'}
				style={{ cursor: 'pointer' }}
				onClick={handleNext}
			/>
		</div>
	);
}
