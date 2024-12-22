import React from 'react';
import './Gallery.module.css';

const GalleryDetails = () => {

	return (
		<section className='gallery-section'>
			<h1>Our work</h1>
			<div className='gallery-container'>
				<div className='work'>
					<img src='/images/ui2.jpg' alt='ui/ux design' />
				</div>

				<div className='work'>
                                        <img src='/images/sample7.jpeg' alt='graphic design' />
                                </div>


				<div className='work'>
                                        <img src='/images/branding1.jpeg' alt='branding' />
                                </div>


				<div className='work'>
                                        <img src='/images/sample4.jpeg' alt='graphic design' />
                                </div>
			</div>

			<div className='gallery-container'>
				<div className='gallery-image'>
                                        <img src='/images/em.png' alt='web development' />
                                </div>

                                <div className='gallery-image'>
                                        <img src='/images/web.jpeg' alt='web maintenance' />
                                </div>


                                <div className='work hide-work'>
                                        <img src='/images/branding2.jpeg' alt='branding' />
                                </div>
			</div>
		</section>
	);
};

export default GalleryDetails;
