import React from 'react';
import Egg from '../../images/mobile/image-transform.jpg';
import Cup from '../../images/mobile/image-stand-out.jpg';
import Emily from '../../images/image-emily.jpg';
import Thomas from '../../images/image-thomas.jpg';
import Jennie from '../../images/image-jennie.jpg';
import Milk from '../../images/mobile/image-gallery-milkbottles.jpg';
import Orange from '../../images/mobile/image-gallery-orange.jpg';
import Cone from '../../images/mobile/image-gallery-cone.jpg';
import Sugar from '../../images/mobile/image-gallery-sugar-cubes.jpg';
import './main.css';

const Main = () => {
	return (
		<main>
			<section className='section-one'>
				<div className='col-one'>
					<img src={Egg} alt='egg' />
					<div className='col-one-text'>
						<h2>Transform your brand</h2>
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
						<h2>Stand out to the right audience</h2>
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
						<h2 className='graphic-design-text'>Graphic Design</h2>
						<p>
							Great design makes you memorable. We deliver artwork that
							underscores your brand message and captures potential clients'
							attention.
						</p>
					</div>
				</div>
				<div className='col-four'>
					<div className='col-four-text'>
						<h2 className='photography-text'>Photography</h2>
						<p>
							Increase your credibility by getting the most stunning,
							high-quality photos that improve your business image.
						</p>
					</div>
				</div>
			</section>
			<section className='section-three'>
				<h2 className='testimonials-header'>Client Testimonials</h2>
				<div className='single-test-card'>
					<div>
						<img src={Emily} alt='client-pic' />
					</div>
					<div className='card-text'>
						<p className='quote-text'>
							We put our trust in Sunnyside and they delivered, making sure our
							needs were met and deadlines were always hit.
						</p>
						<div className='author-section'>
							<h3 className='author'>Emily R.</h3>
							<p className='author-designation'>Marketing Director</p>
						</div>
					</div>
				</div>
				<div className='single-test-card'>
					<img src={Thomas} alt='client-pic' />
					<div className='card-text'>
						<p className='quote-text'>
							Sunnyside's enthusiasm coupled with their keen interest in our
							brand's success made it a satisfying and enjoyable experience.
						</p>
						<div className='author-section'>
							<h3 className='author'>Thomas S.</h3>
							<p className='author-designation'>Chief Operating Officer</p>
						</div>
					</div>
				</div>
				<div className='single-test-card'>
					<img src={Jennie} alt='client-pic' />
					<div className='card-text'>
						<p className='quote-text'>
							Incredible end result! Our sales increased over 400% when we
							worked with Sunnyside. Highly recommended!
						</p>
						<div className='author-section'>
							<h3 className='author'>Jennie F.</h3>
							<p className='author-designation'>Business Owner</p>
						</div>
					</div>
				</div>
			</section>
			<section className='section-four'>
				<img src={Milk} alt='milk-bottles' />
				<img src={Orange} alt='gallery-orange' />
				<img src={Cone} alt='gallery-cone' />
				<img src={Sugar} alt='gallery-sugar-cubes' />
			</section>
		</main>
	);
};

export default Main;
