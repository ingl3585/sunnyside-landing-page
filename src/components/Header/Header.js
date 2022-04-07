import React, { useState } from 'react';
import './header.css';
import Logo from '../../images/logo.svg';

const Header = () => {
	const [activeMenu, setActiveMenu] = useState('false');
	const [activeNav, setActiveNav] = useState('false');
	const [activeMenuBg, setActiveMenuBg] = useState('false');
	const onClickMenu = () => {
		setActiveMenu(!activeMenu);
		setActiveNav(!activeNav);
		setActiveMenuBg(!activeMenuBg);
	};
	return (
		<header>
			<nav>
				<img src={Logo} alt='sunny-side' />
				<div className='menu-bar'>
					<div
						className={`menu ${activeMenu ? 'change' : ''}`}
						onClick={onClickMenu}>
						<div className='menu-bar-1 bar'></div>
						<div className='menu-bar-2 bar'></div>
						<div className='menu-bar-3 bar'></div>
					</div>
					<ul className={`nav-list ${activeNav ? 'change' : ''}`}>
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
				</div>
				<div className={activeMenuBg ? 'change-bg' : 'menu-bg'}></div>
			</nav>
			<section>
				<h1>We are creatives</h1>
			</section>
		</header>
	);
};

export default Header;
