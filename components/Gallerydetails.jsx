import React from 'react';
import './Gallery.module.css';
import ui2Image from '/images/ui2.jpg';
import sample7Image from '/images/sample7.jpeg';
import branding1Image from '/images/branding1.jpeg';
import sample4Image from '/images/sample4.jpeg';
import emImage from '/images/em.png';
import webImage from '/images/web.jpeg';
import branding2Image from '/images/branding2.jpeg';

const GalleryDetails = () => {

	return (
		<section>
			<h1>Our work</h1>
			<div className='gallery-container'>
				<div className='work'>
					<img src={ui2Image} alt='projects' />
				</div>

				<div className='work'>
                                        <img src={sample7Image} alt='projects' />
                                </div>


				<div className='work'>
                                        <img src={branding1Image} alt='projects' />
                                </div>


				<div className='work'>
                                        <img src={sample4Image} alt='projects' />
                                </div>
			</div>

			<div className='gallery-container'>
				<div className='gallery-image'>
                                        <img src={emImage} alt='projects' />
                                </div>

                                <div className='gallery-image'>
                                        <img src={webImage} alt='projects' />
                                </div>


                                <div className='work hide-work'>
                                        <img src={branding2Image} alt='projects' />
                                </div>
			</div>
		</section>
	);
};

export default GalleryDetails;
