import React from 'react';
import './About/.module.css';
import aboutImage from '/images/about.jpeg';

const AboutDetails = () => {
	return (
		<section>
			<h1>What we are all about</h1>
			<div className='about-image'>
				<img src={aboutImage} alt='tech' />
			</div>

			<div className='about-text'>
				<p> Welcome to ByteVision, where we specialize in creating exceptional UI/UX designs, as well as developing both static and dynamic websites tailored to your needs.</p>
				<p>Our comprehensive services also include web maintenance, graphic design, and branding to ensure your digital presence is both stunning and effective. </p>
				<p>Let us help you elevate your brand with our innovative and dedicated approach to web solutions.</p>
			</div>
		</section>
	);
};

export default AboutDetails;
