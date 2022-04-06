import React from 'react';
import './header.css';
import Hamburger from '../../images/icon-hamburger.svg';
import Logo from '../../images/logo.svg';

const Header = () => {
	return (
		<header>
			<nav>
				<img src={Logo} alt='sunnyside' />
				<img src={Hamburger} alt='hamburger-nav' />
				<ul className='nav-list'>
					<li className='nav-item'>
						<a href='#'>About</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Services</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Projects</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
			{/* <section>
				<h1>We are creatives</h1>
			</section> */}
		</header>
	);
};

export default Header;
