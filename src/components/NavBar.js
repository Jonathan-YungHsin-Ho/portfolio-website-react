import React from 'react';
import { NavLink } from 'react-router-dom';

import Title from './Title';

export default function NavBar() {
	return (
		<div className='nav-bar'>
			<Title />
			<div className='nav-bar-links'>
				{/* <NavLink to='/about' activeClassName='active'>
					About Me
				</NavLink> */}
				<NavLink to='/projects' activeClassName='active'>
					Projects
				</NavLink>
				<NavLink to='/skills' activeClassName='active'>
					Skills
				</NavLink>
				<NavLink to='/contact' activeClassName='active'>
					Contact
				</NavLink>
			</div>
		</div>
	);
}
