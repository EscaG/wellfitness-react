import React from 'react';
import './style-forclub.scss';
import IdeasSection from '../../Components/Layout/IdeasSection/IdeasSection';
import PromotionItem from '../../Components/Layout/PromotionItem/PromotionItem';
import Watched from '../../Components/Layout/Watched/Watched';

import forhome1 from './img/forhome1.jpg';
import forhome2 from './img/forhome2.jpg';
import forhome3 from './img/forhome3.jpg';
import forhome4 from './img/forhome4.jpg';
import forhome5 from './img/forhome5.jpg';
import forhome6 from './img/forhome6.jpg';
import forhome7 from './img/forhome7.jpg';
import forhome8 from './img/forhome8.jpg';
import { Link } from 'react-router-dom';

export default function CatalogForClub() {
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
			]
		},
		{
			image: forhome2,
			title: "Силовые тренажеры",
			items: [
				{
					name: "Грузоблочные",
					pices: "57"
				},
				{
					name: "Нагружаемые дисками ",
					pices: "57"
				},
				{
					name: "Мультистанции ",
					pices: "57"
				},
				{
					name: "Рамы и комплексы",
					pices: "23"
				},
				{
					name: "Скамьи, стойки",
					pices: "12"
				},
			]
		},
		{
			image: forhome3,
			title: "Функциональный тренинг ",
			items: [
				{
					name: "Комплексы для ФТ",
					pices: "53"
				},
				{
					name: "Горнолыжные тренажеры",
					pices: "27"
				},
				{
					name: "Slide&FIT",
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
			title: "Аэробика",
			items: [
				{
					name: "Аэробика",
					pices: "57"
				},
				{
					name: "Для групповых программ",
					pices: "23"
				},
				{
					name: "Для персонального тренинга",
					pices: "23"
				},
			]
		},
		{
			image: forhome6,
			title: "Wellness, СПА, массаж",
			items: [
				{
					name: "Бесконтактные гидромассажные ванны",
					pices: "10"
				},
				{
					name: "Солярии",
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
			]
		},
		{
			image: forhome7,
			title: "Реабилитация и спортивная медицина",
			items: [
				{
					name: "Диагностические комплексы",
					pices: "57"
				},
				{
					name: "Реабилитационные тренажеры",
					pices: "23"
				},
				{
					name: "Фитнес тестирование",
					pices: "12"
				},
			]
		},
		{
			image: forhome8,
			title: "Оборудование для бассейнов",
			items: [
				{
					name: "Тренажеры для бассейнов",
					pices: "57"
				},
			]
		},

	]


	return (
		<article className='article-catalogclub catalogforclub-catalog'>
			<section className='catalogforhome-catalog__section'>
				<h3 className='article__caption'>Для фитнес клубов</h3>
				<div className='catalogforhome-catalog__grid'>

					{catalogList.map((item, index) =>
						<div className='catalog__card' key={index}>

							<Link className='catalog__item-image'
								to={"/categories/forclub/" + encodeURI(item.title)}
							>
								<img className='catalog__image' src={item.image} alt="training" />
							</Link>

							<div className="catalog__price">
								<Link className='catalog__title'
									to={"/categories/forclub/" + encodeURI(item.title)}
								>{item.title}</Link>
								<div className='catalog__list-forhome list-forhome'>
									{item.items.map((piece, index) =>
										<Link key={item.title + index++} to={"/categories/forclub/" + encodeURI(piece.name)} className='list-forhome__item'>
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
