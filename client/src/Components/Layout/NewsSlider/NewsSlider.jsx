import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './newsslider.scss';

import newsHome1 from './img/news-home1.jpg';
import newsHome2 from './img/news-home2.jpg';
import newsHome3 from './img/news-home3.jpg';
import newsHome4 from './img/news-home4.jpg';
import { Link } from 'react-router-dom';


const settings = {
	className: "center promotion-slider",
	arrows: true,
	centerMode: true,
	infinite: true,
	centerPadding: "100px",
	slidesToShow: 4,
	slidesToScroll: 1,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 2000,
	initialSlide: 1,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				centerPadding: "70px",
				slidesToShow: 2,
				initialSlide: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerPadding: "0px",
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				centerPadding: "0px",
				slidesToShow: 1,
			}
		}
	]
}
export default function NewsSlider() {
	const newsHome = [
		{
			imgSrc: newsHome1,
			title: "В продажу поступили тренажеры Nautilus",
			description: "Представляем тренажеры Nautilus 626 серии.",
			date: "2021.07.18",
		},
		{
			imgSrc: newsHome2,
			title: "В продажу поступили тренажеры Nautilus",
			description: "Представляем тренажеры Nautilus 626 серии.",
			date: "2021.07.18",
		},
		{
			imgSrc: newsHome3,
			title: "В продажу поступили тренажеры Nautilus",
			description: "Представляем тренажеры Nautilus 626 серии.",
			date: "2021.07.18",
		},
		{
			imgSrc: newsHome4,
			title: "В продажу поступили тренажеры Nautilus",
			description: "Представляем тренажеры Nautilus 626 серии.",
			date: "2021.07.18",
		},
		{
			imgSrc: newsHome1,
			title: "В продажу поступили тренажеры Nautilus",
			description: "Представляем тренажеры Nautilus 626 серии.",
			date: "2021.07.18",
		},
		{
			imgSrc: newsHome2,
			title: "В продажу поступили тренажеры Nautilus",
			description: "Представляем тренажеры Nautilus 626 серии.",
			date: "2021.07.18",
		},
	]


	return (
		<section className="section-news__home-page news">
			<div className='news__title'>
				<h3 className='article__caption news__caption'>Новости</h3>
				<Link className='news__blog' to="/">Блог</Link>
			</div>
			<div className="news__slider">
				<Slider {...settings}>
					{newsHome.map((item, index) =>
						<div className='news__card ' key={index++}>
							<div className='news__item-image'>
								<img className='news__image' src={item.imgSrc} alt="news" />
							</div>
							<div>
								<h4 className='news__title-card'>{item.title}</h4>
								<p className='news__description'>{item.description}</p>
								<span className='news__date'>{item.date}</span>
							</div>
						</div>
					)}
				</Slider>
			</div>
			<Link className='article__link' to='/'>Все новости</Link>
		</section >
	)
}
