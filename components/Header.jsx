import React from 'react';
import Logo from '/images/bytevision.png';
import '/Header.module.css'

const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src={Logo} alt='logo' />
			</div>
		</header>
	);
};

export default Header;
