import React from 'react';
import styles from './Homesample.module.css';

const HomeSample = () => {
	return (
		<section id={styles.container}>

			<div className={styles['sample-container']}>
				<div className={styles['samples']}>
					<img src='/images/sample1.jpeg' alt='graphic design' />
				</div>

				<div className={styles['samples']}>
                                        <img src='/images/sample2.jpeg' alt='graphic design' />
                                </div>

				<div className={styles['samples']}>
                                        <img src='/images/sample3.jpeg' alt='graphic design' />
                                </div>

				<div className={styles['samples']}>
                                        <img src='/images/sample4.jpeg' alt='graphic design' />
                                </div>
			</div>

			<div className={styles['sample-container']}>
				<div className={styles.web}>
					<img src='/images/em.png' alt='web development' />
				</div>

				<div className={styles.web}>
					<img src='/images/web.jpeg' alt="web maintenance" />

				</div>

				<div className={`${styles.samples} ${styles['hide-sample']}`}>
                                        <img src='/images/sample7.jpeg' alt='graphic design' />

                                </div>
			</div>
		</section>
	);
};

export default HomeSample;
