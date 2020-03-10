import React from 'react';
import { useHistory } from 'react-router-dom';
import About from '../components/About';

export default function Landing() {
	const history = useHistory();

	return (
		<div className='page-container'>
			<div className='landing-wrapper'>
				<section className='landing-page'>
					<div className='landing-image'></div>
					<div className='landing-text'>
						<h2>Hello, I'm Jonathan.</h2>
						<p>
							Full-stack web developer focused on emerging technologies and ed
							tech.
						</p>
						<p>
							12+ years experience in public, alternative, and democratic
							education.
						</p>
						<p>
							Lifelong learner with the skills needed to succeed in diverse team
							environments.
						</p>
					</div>
				</section>
				<button
					onClick={() => history.push('/projects')}
					className='landing-button'>
					Click here to view recent projects
				</button>
				<About />
			</div>
		</div>
	);
}
