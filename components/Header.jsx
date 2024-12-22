import React from 'react';
import Image from 'next/image';
import './Header.module.css'

const Header = () => {
	return (
		<header className='logo-header'>
			<div className='logo'>
				<Image
					src="/images/bytevision.png"
					alt="bytevision logo"
					height={530}
					width={150}
					layout='responsive'
				/>
			</div>
		</header>
	);
};

export default Header;
