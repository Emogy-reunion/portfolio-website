import React from 'react';
import styles from './Hometext.module.css';

const HomeText = () => {
	return (
		<section className={styles.home}>
			<h1>Byte Home</h1>

			<div className={styles['home-text']}>
				<p>Welcome to ByteVision Innovations, where creativity meets technology. We specialize in web development, web maintenance, graphic design, UI/UX design, and branding</p>
				<p>Our team is dedicated to bringing your vision to life with innovative solutions and stunning designs. </p>
				<p>Explore our services to see how we can help your business thrive in the digital world.</p>
			</div>
		</section>
	);
};


export default HomeText;
