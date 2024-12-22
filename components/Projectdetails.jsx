import React from 'react';
import styles from './Projects.module.css';

const ProjectDetails = () => {

	return (
		<section className={styles['project-section']}>
			<h1>Our projects</h1>
			<div className={styles['project-container']}>
				<a href='#'>
					<div className={styles.project}>
						<img src='/images/em.png' alt='website development' />
					</div>
				</a>

				<a href='#'>
					<div className={styles.project}>
                        		        <img src='/images/soon.jpeg' alt='coming soon' />
                       			</div>   
				</a>

				<a href='#'>
					<div className={styles.project}>
                	                	<img src='/images/soon.jpeg' alt='coming soon' />
                        		</div>
				</a>

				<a href='#'>
					<div className={styles.project}>
                                		<img src='/images/soon.jpeg' alt='coming soon' />
                       			</div>
				</a>
			</div>

		</section>
	);
};

export default ProjectDetails;
