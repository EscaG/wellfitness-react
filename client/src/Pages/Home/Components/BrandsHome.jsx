import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandsHome({ brands }) {
	return (
		<section className="section-brands__home-page section-brands">
			<ul className="section-brands__list">
				<li className="section-brands__item">
					<Link to="/">Беговые дорожки</Link>
				</li>
				<li className="section-brands__item">
					<Link to="/">Эллиптические тренажеры</Link>
				</li>
				<li className="section-brands__item">
					<Link to="/">Велотренажеры</Link>
				</li>
				<li className="section-brands__item">
					<Link to="/">Силовые тренажеры</Link>
				</li>
				<li className="section-brands__item">
					<Link to="/">Батуты</Link>
				</li>
				<li className="section-brands__item">
					<Link to="/">Игровые столы</Link>
				</li>
			</ul>
			<div className="section-brands__brands-list-home brands-list-home">
				{brands.map(item =>
					<div key={item} className="brands-list-home__item">
						<img className='brands-list-home__image' src={item} alt="" />
					</div>
				)}
			</div>
		</section>
	);
}
