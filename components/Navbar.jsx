import React, { useState } from 'react';
import Link from 'next/link'; // No need for <a> tag anymore
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const NavBar = () => {
    const [isHidden, setSidebar] = useState(true);
    const router = useRouter();

    const ShowSidebar = () => {
        setSidebar(false);
    };

    const HideSidebar = () => {
        setSidebar(true);
    };

    // Helper function to determine if the link is active
    const isActive = (path) => {
        return router.pathname === path ? styles['active-link'] : '';
    };

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles['hide-on-mobile']}>
                    <Link href='/' className={`${styles['nav-link']} ${isActive('/')}`}>Home</Link>
                </li>
                <li className={styles['hide-on-mobile']}>
                    <Link href='/about' className={`${styles['nav-link']} ${isActive('/about')}`}>About Us</Link>
                </li>
                <li className={styles['hide-on-mobile']}>
                    <Link href='/services' className={`${styles['nav-link']} ${isActive('/services')}`}>Services</Link>
                </li>
                <li className={styles['hide-on-mobile']}>
                    <Link href='/projects' className={`${styles['nav-link']} ${isActive('/projects')}`}>Projects</Link>
                </li>
                <li className={styles['hide-on-mobile']}>
                    <Link href='/gallery' className={`${styles['nav-link']} ${isActive('/gallery')}`}>Gallery</Link>
                </li>
                <li className={styles["menu-button"]}>
                    <Link href='#' className={styles['nav-link']} onClick={ShowSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </Link>
                </li>
            </ul>



	     <ul className={isHidden ? styles['hide-sidebar'] : styles.sidebar}>
            <li>
                <Link href="#" className="nav-link" onClick={HideSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </Link>
            </li>
            <li>
                <Link href="/" className={`${styles['nav-link']} ${isActive('/')}`}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about" className={`${styles['nav-link']} ${isActive('/about')}`}>
                    About Us
                </Link>
            </li>
            <li>
                <Link href="/services" className={`${styles['nav-link']} ${isActive('/services')}`}>
                    Services
                </Link>
            </li>
            <li>
                <Link href="/projects" className={`${styles['nav-link']} ${isActive('/projects')}`}>
                    Projects
                </Link>
            </li>
            <li>
                <Link href="/gallery" className={`${styles['nav-link']} ${isActive('/gallery')}`}>
                    Gallery
                </Link>
            </li>
        </ul>
        </nav>
    );
};

export default NavBar;
