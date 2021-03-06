import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
	return (
		<div className="sticky-top">
			<nav className="navbar navbar-dark " style={{ backgroundColor: '#10696f' }}>
				<span className="navbar-brand h1 ml-5" style={{ float: 'left' }}>
					<i className="fas fa-music ml-5" /> LyricsFinder{' '}
				</span>
				<button className="btn btn-warning mr-3">
					<i className="fas fa-chevron-right" /> <Link to="/AboutUs">About Us</Link>
				</button>
			</nav>
		</div>
	);
}

export default Navbar;
