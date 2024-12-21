import React from 'react';
import '/Projects.module.css';
import emImage from '/images/em.png';
import soonImage from '/images/soon.jpeg';

const ProjectDetails = () => {

	return (
		<section>
			<h1>Our projects</h1>
			<div className='project-container'>
				<a href='#'>
					<div className='project'>
						<img src={emImage} alt='project' />
					</div>
				</a>

				<a href='#'>
					<div className='project'>
                        		        <img src={soonImage} alt='project' />
                       			</div>   
				</a>

				<a href='#'>
					<div className='project'>
                	                	<img src={soonImage} alt='project' />
                        		</div>
				</a>

				<a href='#'>
					<div className='project'>
                                		<img src={soonImage} alt='project' />
                       			</div>
				</a>
			</div>

		</section>
	);
};

export default ProjectDetails;
