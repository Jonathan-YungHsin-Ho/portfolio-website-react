import React from 'react';

export default function About() {
	return (
		<section className='about-page'>
			<h2>About Me</h2>
			<div className='about-content'>
				<div className='landing-image'></div>
				{/* <div className='about-image'></div> */}
				<div className='about-text'>
					<p>
						I'm a full-stack web developer and former classroom educator. I
						joined the field of software development because I enjoy using
						logical reasoning and problem-solving to bring lines of code to
						life.
					</p>
					<br />
					<p>
						I'm a fast learner and doer, adept at building on my prior knowledge
						and finding resources to bridge gaps in my understanding. The
						communication and collaboration skills I've developed over my career
						as an educator and my experience working with diverse groups of
						people are strengths that I bring to all of my pursuits.
					</p>
					<br />
					<p>
						I'm always learning and growing, and I'm excited to apply all that
						I've learned toward finding solutions for real-world problems.
					</p>
					{/* </div>
			<div className='about-text'>
				<h2>Outside of Coding</h2> */}
					<br />
					<p>
						My interests in making things extend past the computer screen; I
						send hand-drawn postcards when I travel, and I make hand-bound
						journals. I'm currently working on a book about my experiences in
						education.
					</p>
				</div>
			</div>
			{/* <div>
				<h2>Uses</h2>
				<p></p>
			</div> */}
		</section>
	);
}
