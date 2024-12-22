import React from 'react';
import '/Projects.module.css';

const ProjectDetails = () => {

	return (
		<section className='project-section'>
			<h1>Our projects</h1>
			<div className='project-container'>
				<a href='#'>
					<div className='project'>
						<img src='/images/em.png' alt='website development' />
					</div>
				</a>

				<a href='#'>
					<div className='project'>
                        		        <img src='/images/soon.jpeg' alt='coming soon' />
                       			</div>   
				</a>

				<a href='#'>
					<div className='project'>
                	                	<img src='/images/soon.jpeg' alt='coming soon' />
                        		</div>
				</a>

				<a href='#'>
					<div className='project'>
                                		<img src='/images/soon.jpeg' alt='coming soon' />
                       			</div>
				</a>
			</div>

		</section>
	);
};

export default ProjectDetails;
