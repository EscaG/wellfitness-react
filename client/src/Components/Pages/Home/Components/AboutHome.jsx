import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutHome() {
	return (
		<section className="section-about__home-page about-home">
			<div className="about-home__presentation">
				<h4 className='article__caption about-home__title'>О компании</h4>
				<div className='about-home__subtitle'>
					Надежный партнер с 2005 года для сотен компаний от Калининграда до Владивостока.
				</div>

				<div className='about-home__description'>
					<p>
						Оптима Импорт — один из самых крупных импортеров фитнес-оборудования, эксклюзивно представляет на российском рынке ведущих мировых производителей: Sole Fitness, Optima Fitness, Halley, Marcy, SKI Simulator и др.
					</p>
					<br />
					<p>
						Мы предлагаем широкий спектр самой современной и качественной продукции как для домашнего, так и для коммерческого фитнеса.
					</p>
				</div>

				<Link className='article__link about-home__link' to='/'>Подробнее о компании</Link>
			</div>
			<div className="about-home__empty">				</div>
		</section>
	);
}
