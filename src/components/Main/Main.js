import React from 'react';
import Egg from '../../images/mobile/image-transform.jpg';
import Cup from '../../images/mobile/image-stand-out.jpg';
import './main.css';

const Main = () => {
	return (
		<main>
			<section className='first-section'>
				<div className='col-one'>
					<img src={Egg} alt='egg' />
					<div className='col-one-text'>
						<h4>Transform your brand</h4>
						<p>
							We are a full-service creative agency specializing in helping
							brands grow fast. Engage your clients through compelling visuals
							that do most of the marketing for you.
						</p>
						<a href='#'>Learn More</a>
					</div>
				</div>
				<div className='col-two'>
					<img src={Cup} alt='cup' />
					<div className='col-two-text'>
						<h4>Stand out to the right audience</h4>
						<p>
							Using a collaborative formula of designers, researchers,
							photographers, videographers, and copywriters, we’ll build and
							extend your brand in digital places.{' '}
						</p>
						<a href='#'>Learn More</a>
					</div>
				</div>
			</section>
			<section className='section-two'>
				<div className='col-three'>
					<div className='col-three-text'>
						<h4>Graphic Design</h4>
						<p>
							Great design makes you memorable. We deliver artwork that
							underscores your brand message and captures potential
							clients'attention.
						</p>
					</div>
				</div>
				<div className='col-four'>
					<div className='col-four-text'>
						<h4>Photography</h4>
						<p>
							Increase your credibility by getting the most stunning,
							high-quality photos that improve your business image.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Main;
