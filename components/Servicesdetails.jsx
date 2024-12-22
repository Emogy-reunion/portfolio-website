iimport React from "react";
import "./Services.module.css";
import branding1Image from '/images/branding1.jpeg';
import branding2Image from '/images/branding2.jpeg';
import branding3Image from '/images/branding3.jpeg';

const ServiceDetails = () => {
	return (
		<section className='services-section'>
			<h1>Here's what we do</h1>

			<div className='services-container'>
				<h2>Web development</h2>
				<p>Crafting responsive and robust websites that deliver seamless user experiences across all devices.</p>
				<div className='services'>

					<div>
						<img src='/images/em.png' alt='website development' />
					</div>

					<div>
                                        	<img src='/images/dev.jpeg' alt='website development' />
                                	</div>

					<div className='hide-service'>
                                        	<img src='/images/dev2.jpeg' alt='website development' />
                                	</div>

				</div>
			</div>

			<div className='container'>
				<h2>UI/UX design</h2>
				<p>Designing intuitive and engaging interfaces that enhance user satisfaction and interaction.</p>
				<div className='services'>

					<div className='hide-service'>
						<img src='/images/ui1.jpg' alt='ui/ux design' />
					</div>

					<div>
                                        	<img src='/images/ui2.jpg' alt='ui/ux design' />
                                	</div>

					<div>
                                        	<img src='/images/ui3.jpg' alt='ui/ux design' />
                                	</div>

				</div>
			</div>

			<div className='container'>
				<h2>Web maintenance</h2>
				<p>Ensuring your website remains updated, secure, and performing at its best.</p>
				<div className='services'>

					<div>
						<img src='/images/maintain1.jpeg' alt='website maintenance' />
					</div>

					<div className='hide-service'>
                                        	<img src='/images/tech.jpeg' alt='website maintenance' />
                                	</div>

					<div>
                                        	<img src='/images/maintain2.jpeg' alt='website maintenance' />
                                	</div>
				</div>
			</div>

			<div className='container'>
                                <h2>Graphic design</h2>
                                <p>Creating visually compelling designs that effectively communicate your brand's message.</p>
                                <div className='services'>

                                        <div>
                                                <img src='/images/sample1.jpeg' alt='graphic design' />
                                        </div>

                                        <div className='hide-service'>
                                                <img src='/images/sample3.jpeg' alt='graphic design' />
                                        </div>

                                        <div>
                                                <img src='/images/sample4.jpeg' alt='graphic design' />
                                        </div>
                                </div>
                        </div>


			<div className='container'>
                                <h2>Branding</h2>
                                <p>Elevating your brand with custom designs for polo shirts, mugs, bottles, t-shirts, and more.</p>
                                <div className='services'>

                                        <div>
                                                <img src='/images/branding1.jpeg' alt='branding' />
                                        </div>

                                        <div>
                                                <img src='/images/branding2.jpeg' alt='branding' />
                                        </div>

                                        <div className='hide-service'>
                                                <img src='/images/branding3.jpeg' alt='branding' />
                                        </div>
                                </div>
                        </div>

		</section>
	);
};

export default ServiceDetails;
