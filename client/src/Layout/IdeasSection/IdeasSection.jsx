import React from 'react';
import { Link } from 'react-router-dom';
import './style-ideassection.scss';

import bannerFirst from './img/banner1.png';
import bannerSecond from './img/banner2.png';
import bannerThird from './img/banner3.png';
import bannerFourth from './img/banner4.png';
import bannerFifth from './img/banner5.png';

export default function IdeasSection() {
	return (
		<section className="section-ideas__home-page section-ideas">
			<div className="section-ideas__block">
				<h3 className='article__caption section-ideas__caption'>Идеи и подборки</h3>
				<div className="section-ideas__banner banner-home">
					<div className="banner-home__first">
						<Link to="/"><img src={bannerThird} alt="banner" /></Link>
					</div>
					<div className="banner-home__first-big">
						<Link to="/"><img src={bannerFirst} alt="banner" /></Link>
					</div>
					<div className="banner-home__second">
						<Link to="/"><img src={bannerFourth} alt="banner" /></Link>
					</div>
					<div className="banner-home__second-big">
						<Link to="/"><img src={bannerSecond} alt="banner" /></Link>
					</div>
					<div className="banner-home__third">
						<Link to="/"><img src={bannerThird} alt="banner" /></Link>
					</div>
					<div className="banner-home__third-big">
						<Link to="/"><img src={bannerFifth} alt="banner" /></Link>
					</div>
				</div>
				<Link className='article__link section-ideas__link' to="/">Полная подборка</Link>
			</div>
		</section>
	)
}
