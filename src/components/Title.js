import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Title() {
	const history = useHistory();

	return (
		<div className='title' onClick={() => history.push('/')}>
			<h1 className='title-bold'>Jonathan Yung-Hsin Ho</h1>
			<h1 className='title-normal'>Full-Stack Web Developer</h1>
		</div>
	);
}
