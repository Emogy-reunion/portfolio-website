import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.module.css';


const NavBar = () => {

        const [isHidden, setSidebar] = useState(true);

        const ShowSidebar = () => {
                setSidebar(false);
        };

        const HideSidebar = () => {
                setSidebar(true);
        }


        return (
                <nav className='navbar'>
                        <ul>
                                <li className='hide-on-mobile'><NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Home</NavLink></li>
                                <li className='hide-on-mobile'><NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>About Us</NavLink></li>
                                <li className='hide-on-mobile'><NavLink to='/services' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Services</NavLink></li>
                                <li className='hide-on-mobile'><NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Projects</NavLink></li>
                                <li className='hide-on-mobile'><NavLink to='/gallery' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Gallery</NavLink></li>
                                <li className="menu-button"><NavLink to="#" className='nav-link' onClick={ShowSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></NavLink></li>
                        </ul>

                        <ul className={ isHidden ? 'hide-sidebar' : 'sidebar'}>
                                <li><NavLink to="#" className='nav-link' onClick={HideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></NavLink></li>
                                <li><NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Home</NavLink></li>
                                <li><NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>About Us</NavLink></li>
                                <li><NavLink to='/services' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Services</NavLink></li>
                                <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Projects</NavLink></li>
                                <li><NavLink to='/gallery' className={({ isActive }) => isActive ? 'nav-link active-link': 'nav-link'}>Gallery</NavLink></li>
                        </ul>
                </nav>
        );
};

export default NavBar;
