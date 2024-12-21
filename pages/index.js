import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import HomeText from '../components/Hometext';
import HomeSample from '../components/Homesample';
import CallAction from '../components/Cta';

const Home = () => {
	return (
		<>
			<Header />
			<NavBar />
			<HomeText />
			<HomeSample />
			<CallAction />
		</>
	);
};

export default Home;
