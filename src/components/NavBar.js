import React from 'react';
import { NavLink } from 'react-router-dom';

import Title from './Title';

export default function NavBar() {
	return (
		<div className='nav-bar'>
			<Title />
			<div className='nav-bar-links'>
				<NavLink to='/about'>About Me</NavLink>
				<NavLink to='/skills'>Skills</NavLink>
				<NavLink to='/projects'>Projects</NavLink>
				<NavLink to='/contact'>Contact</NavLink>
			</div>
		</div>
	);
}
