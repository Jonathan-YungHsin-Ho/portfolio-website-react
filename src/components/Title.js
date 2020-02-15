import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Title() {
	const history = useHistory();

	return (
		<div className='title' onClick={() => history.push('/')}>
			<h1>
				Jonathan Yung-Hsin Ho{' '}
				<span className='font-weight-normal'>Full-Stack Web Developer</span>
			</h1>
		</div>
	);
}
