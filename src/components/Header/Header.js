import React, { useState } from 'react';
import Logo from '../../images/logo-header.svg';
import Arrow from '../../images/icon-arrow-down.svg';
import './header.css';

const Header = () => {
	const [activeNav, setActiveNav] = useState(false);
	const [activeNavLinks, setActiveNavLinks] = useState(false);
	const [activeNavBg, setActiveNavBg] = useState(false);
	const onClickMenu = () => {
		setActiveNav(!activeNav);
		setActiveNavLinks(!activeNavLinks);
		setActiveNavBg(!activeNavBg);
	};
	return (
		<header>
			<nav>
				<img src={Logo} alt='sunny-side-logo' />
				<div className='hamburger-menu'>
					<div
						className={`menu ${activeNav ? 'change' : ''}`}
						onClick={onClickMenu}>
						<div className='menu-bar-1 menu-bars'></div>
						<div className='menu-bar-2 menu-bars'></div>
						<div className='menu-bar-3 menu-bars'></div>
					</div>
					<ul className={`nav-links ${activeNavLinks ? 'change-links' : ''}`}>
						<li>
							<a className='nav-links-item' href='#/'>
								About
							</a>
						</li>
						<li>
							<a className='nav-links-item' href='#/'>
								Services
							</a>
						</li>
						<li>
							<a className='nav-links-item' href='#/'>
								Projects
							</a>
						</li>
						<li>
							<a className='contact-btn' href='#/'>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className={activeNavBg ? 'change-bg' : 'menu-bg'}></div>
			</nav>
			<section className='hero'>
				<h1 className='hero-headline'>We are creatives</h1>
				<img src={Arrow} alt='hero-arrow' />
			</section>
		</header>
	);
};

export default Header;
