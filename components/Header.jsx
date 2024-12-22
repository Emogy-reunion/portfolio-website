import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles['logo-header']}>
			<div className={styles.logo}>
				<img
					src="/images/bytevision.png"
					alt="bytevision logo"
				/>
			</div>
		</header>
	);
};

export default Header;
