import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
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
				<div className='nav-bar'>
					<div
						className={`menu ${activeNav ? 'change' : ''}`}
						onClick={onClickMenu}>
						<div className='menu-bar-1 bar'></div>
						<div className='menu-bar-2 bar'></div>
						<div className='menu-bar-3 bar'></div>
					</div>
					<ul className={`nav-links ${activeNavLinks ? 'change' : ''}`}>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
						<li>
							<a className='contact-btn' href='#'>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className={activeNavBg ? 'change-bg' : 'menu-bg'}></div>
			</nav>
			<section className='header-main'>
				<h1 className='header-headline'>We are creatives</h1>
				<img src={Arrow} alt='down-arrow' />
			</section>
		</header>
	);
};

export default Header;
