import React from 'react';
import { Link } from 'react-router-dom';

export default function OurPartner({ partner }) {
	return (
		<section className="section-partner__home-page partner-home">
			<div className='partner-home__left'>
				<img className='partner-home__image' src={partner} alt="partner" />
			</div>
			<div className='partner-home__right'>
				<div>Станьте нашим партнером <span className='partner-home__right_red'>и получите возможность</span> представлять нашу продукцию в вашем регионе.</div>
				<Link className='article__link partner-home__link' to='/'>Стать партнером</Link>
			</div>
		</section	>
	);
}
