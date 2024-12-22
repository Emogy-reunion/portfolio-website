import React from 'react';
import './Homesample.module.css';

const HomeSample = () => {
	return (
		<section id='container'>

			<div className='sample-container'>
				<div className='samples'>
					<img src='/images/sample1.jpeg' alt='graphic design' />
				</div>

				<div className='samples'>
                                        <img src='/images/sample2.jpeg' alt='graphic design' />
                                </div>

				<div className='samples'>
                                        <img src='/images/sample3.jpeg' alt='graphic design' />
                                </div>

				<div className='samples'>
                                        <img src='/images/sample4.jpeg' alt='graphic design' />
                                </div>
			</div>

			<div className='sample-container'>
				<div className='web'>
					<img src='/images/em.png' alt='web development' />
				</div>

				<div className='web'>
					<img src='/images/web.jpeg' alt="web maintenance" />

				</div>

				<div className='samples hide-sample'>
                                        <img src='/images/sample7.jpeg' alt='graphic design' />

                                </div>
			</div>
		</section>
	);
};

export default HomeSample;
