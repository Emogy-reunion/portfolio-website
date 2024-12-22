import React from 'react';
import styles from './Gallery.module.css';

const GalleryDetails = () => {

	return (
		<section className={styles['gallery-section']}>
			<h1>Our work</h1>
			<div className={styles['gallery-container']}>
				<div className={styles.work}>
					<img src='/images/ui2.jpg' alt='ui/ux design' />
				</div>

				<div className={styles.work}>
                                        <img src='/images/sample7.jpeg' alt='graphic design' />
                                </div>


				<div className={styles.work}>
                                        <img src='/images/branding1.jpeg' alt='branding' />
                                </div>


				<div className={styles.work}>
                                        <img src='/images/sample4.jpeg' alt='graphic design' />
                                </div>
			</div>

			<div className={styles['gallery-container']}>
				<div className={styles['gallery-image']}>
                                        <img src='/images/em.png' alt='web development' />
                                </div>

                                <div className={styles['gallery-image']}>
                                        <img src='/images/web.jpeg' alt='web maintenance' />
                                </div>


                                <div className={`${styles.work} ${styles['hide-work']}`}>
                                        <img src='/images/branding2.jpeg' alt='branding' />
                                </div>
			</div>
		</section>
	);
};

export default GalleryDetails;
