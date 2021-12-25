import React from 'react';
import IdeasSection from '../../Layout/IdeasSection/IdeasSection';
import PromotionItem from '../../Layout/PromotionItem/PromotionItem';
import './style-forhome.scss';

import forhome1 from './img/forhome1.jpg';
import forhome2 from './img/forhome2.jpg';
import forhome3 from './img/forhome3.jpg';
import forhome4 from './img/forhome4.jpg';
import forhome5 from './img/forhome5.jpg';
import forhome6 from './img/forhome6.jpg';
import forhome7 from './img/forhome7.jpg';
import forhome8 from './img/forhome8.jpg';
import { Link } from 'react-router-dom';
import Watched from '../../Layout/Watched/Watched';


export default function CatalogForHome() {
	const catalogList = [
		{
			image: forhome1,
			title: "Кардиотренажеры",
			items: [
				{
					name: "Беговые дорожки",
					pices: "57"
				},
				{
					name: "Эллиптические тренажеры",
					pices: "23"
				},
				{
					name: "Велотренажеры",
					pices: "12"
				},
				{
					name: "Cтепперы",
					pices: "10"
				},
				{
					name: "Гребные тренажеры",
					pices: "15"
				},
				{
					name: "Сайклинг",
					pices: "20"
				},
				{
					name: "Горнолыжные тренажеры",
					pices: "18"
				},
			]
		},
		{
			image: forhome2,
			title: "Силовые тренажеры   ",
			items: [
				{
					name: "Мультистанции ",
					pices: "57"
				},
				{
					name: "Рамы и комплексы",
					pices: "23"
				},
				{
					name: "Скамьи",
					pices: "12"
				},
			]
		},
		{
			image: forhome3,
			title: "Уличные виды спорта",
			items: [
				{
					name: "Батуты ",
					pices: "53"
				},
				{
					name: "Баскетбол",
					pices: "27"
				},
				{
					name: "Футбол",
					pices: "17"
				},
			]
		},
		{
			image: forhome4,
			title: "Свободные веса",
			items: [
				{
					name: "Гантели и гантельные ряды",
					pices: "57"
				},
				{
					name: "Гири",
					pices: "23"
				},
				{
					name: "Диски и грифы",
					pices: "12"
				},
				{
					name: "Стойки и хранение",
					pices: "10"
				},
			]
		},
		{
			image: forhome5,
			title: "Игровые столы",
			items: [
				{
					name: "Аэрохоккей",
					pices: "57"
				},
				{
					name: "Настольный футбол",
					pices: "23"
				},
			]
		},
		{
			image: forhome6,
			title: "Массажное оборудование",
			items: [
				{
					name: "Массажные кресла ",
					pices: "57"
				},
				{
					name: "Массажеры",
					pices: "23"
				},
				{
					name: "Массажные столы",
					pices: "12"
				},
				{
					name: "Бесконтактные гидромассажные ванны",
					pices: "10"
				},
			]
		},
		{
			image: forhome7,
			title: "Фитнес аксессуары",
			items: [
				{
					name: "Йога и пилатес",
					pices: "57"
				},
				{
					name: "Фитнес аксессуары",
					pices: "23"
				},
				{
					name: "Эспандеры",
					pices: "12"
				},
				{
					name: "Массажные аксессуары",
					pices: "10"
				},
				{
					name: "Тяги и рукоятки",
					pices: "15"
				},
			]
		},
		{
			image: forhome8,
			title: "Функциональный тренинг",
			items: [
				{
					name: "Функциональные петли Variosling",
					pices: "57"
				},
				{
					name: "Тренировочный комплекс HyGear",
					pices: "23"
				},
			]
		},

	]
	return (
		<article className='article-catalogforhome catalogforhome-catalog'>
			<section className='catalogforhome-catalog__section'>
				<h3 className='article__caption'>Тренажеры для дома</h3>
				<div className='catalogforhome-catalog__grid'>

					{catalogList.map((item, index) =>
						<div className='catalog__card' key={index}>

							<div className='catalog__item-image'>
								<img className='catalog__image' src={item.image} alt="training" />
							</div>

							<div className="catalog__price">
								<Link className='catalog__title' to='/'>{item.title}</Link>
								<div className='catalog__list-forhome list-forhome'>
									{item.items.map((piece, index) =>
										<Link key={item.title + index++} to="/" className='list-forhome__item'>
											<span>{piece.name}</span>
											<span className='list-forhome__amount'>{piece.pices}</span>
										</Link>
									)}
								</div>
							</div>

						</div>

					)}

				</div>
			</section>
			<IdeasSection />
			<PromotionItem />
			<Watched />
		</article>
	)
}
