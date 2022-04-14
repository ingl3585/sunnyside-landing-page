import React from 'react';
import {
	Egg,
	Cup,
	GDMobile,
	GDDesktop,
	PhotographyMobile,
	PhotographyDesktop,
	Emily,
	Thomas,
	Jennie,
	Milk,
	Orange,
	Cone,
	Sugar,
} from './index';
import './main.css';

const Main = () => {
	return (
		<main>
			<section className='section-one'>
				<div className='column-one'>
					<img className='egg-img' src={Egg} alt='egg' />
					<div className='column-one-text'>
						<h2>Transform your brand</h2>
						<p>
							We are a full-service creative agency specializing in helping
							brands grow fast. Engage your clients through compelling visuals
							that do most of the marketing for you.
						</p>
						<a className='underline-yellow' href='#/'>
							Learn More
						</a>
					</div>
				</div>
				<div className='column-two'>
					<img className='cup-img' src={Cup} alt='cup' />
					<div className='column-two-text'>
						<h2>Stand out to the right audience</h2>
						<p>
							Using a collaborative formula of designers, researchers,
							photographers, videographers, and copywriters, we'll build and
							extend your brand in digital places.
						</p>
						<a className='underline-pink' href='#/'>
							Learn More
						</a>
					</div>
				</div>
			</section>
			<section className='section-two'>
				<div className='column-three'>
					<img className='gd-mobile' src={GDMobile} alt='' />
					<img className='gd-desktop' src={GDDesktop} alt='' />
					<div className='column-three-text'>
						<h2 className='graphic-design-title'>Graphic Design</h2>
						<p>
							Great design makes you memorable. We deliver artwork that
							underscores your brand message and captures potential clients'
							attention.
						</p>
					</div>
				</div>
				<div className='column-four'>
					<img className='photography-mobile' src={PhotographyMobile} alt='' />
					<img
						className='photography-desktop'
						src={PhotographyDesktop}
						alt=''
					/>
					<div className='column-four-text'>
						<h2 className='photography-title'>Photography</h2>
						<p>
							Increase your credibility by getting the most stunning,
							high-quality photos that improve your business image.
						</p>
					</div>
				</div>
			</section>
			<section className='section-three'>
				<h2 className='testimonials-title'>Client Testimonials</h2>
				<div className='card-section'>
					<div className='single-testimonial-card'>
						<img src={Emily} alt='client-pic' />
						<div className='card-text'>
							<p className='quote-text'>
								We put our trust in Sunnyside and they delivered, making sure
								our needs were met and deadlines were always hit.
							</p>
							<div className='author-section'>
								<h3 className='author'>Emily R.</h3>
								<p className='author-designation'>Marketing Director</p>
							</div>
						</div>
					</div>
					<div className='single-testimonial-card'>
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
					<div className='single-testimonial-card'>
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
