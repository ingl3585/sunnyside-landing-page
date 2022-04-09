import React from 'react';
import Logo from '../../images/logo-footer.svg';
import Facebook from '../../images/icon-facebook.svg';
import Instagram from '../../images/icon-instagram.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<img className='footer-logo' src={Logo} alt='footer-logo' />
			<ul className='footer-links'>
				<li>
					<a href='#/'>About</a>
				</li>
				<li>
					<a href='#/'>Services</a>
				</li>
				<li>
					<a href='#/'>Projects</a>
				</li>
			</ul>
			<ul className='social-links'>
				<li>
					<img src={Facebook} alt='social' />
				</li>
				<li>
					<img src={Instagram} alt='social' />
				</li>
				<li>
					<img src={Twitter} alt='social' />
				</li>
				<li>
					<img src={Pinterest} alt='social' />
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
