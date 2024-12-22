import React from 'react';
import './Header.module.css'

const Header = () => {
	return (
		<header className='logo-header'>
			<div className='logo'>
				<img
					src="/images/bytevision.png"
					alt="bytevision logo"
				/>
			</div>
		</header>
	);
};

export default Header;
