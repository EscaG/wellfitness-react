import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style-pageHome.scss';
import firstSlide from './img/slider/first-slide.png';
import secondSlide from './img/slider/second-slide.png';
import thirdSlide from './img/slider/third-slide.png';
import fourthSlide from './img/slider/fourth-slide.png';

import armchair from './img/home/armchair.png';
import eleptic from './img/home/eleptic.png';
import fitness from './img/home/fitness.png';
import power from './img/home/power.png';
import rowing from './img/home/rowing.png';
import ski from './img/home/ski.png';
import tables from './img/home/tables.png';
import trampoline from './img/home/trampoline.png';
import treadmill from './img/home/treadmill.png';
import velo from './img/home/velo.png';

import block from './img/club/block.png';
import cardio from './img/club/cardio.png';
import free from './img/club/free.png';
import functional from './img/club/functional.png';
import gantel from './img/club/gantel.png';
import medicine from './img/club/medicine.png';
import massage from './img/club/massage.png';






export const PageHome = () => {
	const [slides, setSlides] = useState([firstSlide, secondSlide, thirdSlide, fourthSlide]);
	const [homeImages, setHomeImages] =
		useState([{
			imgSrc: treadmill,
			name: "Беговые дорожки"
		},
		{
			imgSrc: eleptic,
			name: "Эллиптические тренажеры"
		},
		{
			imgSrc: velo,
			name: "Велотренажеры"
		},
		{
			imgSrc: ski,
			name: "Горнолыжные тренажеры"
		},
		{
			imgSrc: power,
			name: "Силовые тренажеры"
		},
		{
			imgSrc: rowing,
			name: "Гребные тренажеры"
		},
		{
			imgSrc: trampoline,
			name: "Батуты"
		},
		{
			imgSrc: tables,
			name: "Игровые столы"
		},
		{
			imgSrc: armchair,
			name: "Массажные кресла"
		},
		{
			imgSrc: fitness,
			name: "Фитнес аксессуары"
		}]);
	const [clubImages, setClubImages] =
		useState([{
			imgSrc: cardio,
			name: "Профессиональные кардиотренажеры"
		},
		{
			imgSrc: block,
			name: "Грузоблочные тренажеры"
		},
		{
			imgSrc: free,
			name: "Тренажеры на свободных весах"
		},
		{
			imgSrc: functional,
			name: "Функциональный тренинг"
		},
		{
			imgSrc: massage,
			name: "Wellness, СПА, Массаж"
		},
		{
			imgSrc: medicine,
			name: "Спортивная медицина и реабилитация"
		},
		{
			imgSrc: gantel,
			name: "Свободные веса"
		}]);
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		waitForAnimate: false,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true
	};
	return (
		<div className='page-home'>
			{/* // ! Секция со слайдером */}
			<section className='slider-section'>
				<Slider {...settings}>
					{slides.map((src, index) =>
						<div key={index++} style={{ "maxWidth": "calc(100% - 40px)" }}>
							<img style={{ "width": "100%" }} src={src} alt="slide" />
						</div>
					)}
				</Slider>
				<div style={{ "height": "30px" }}></div>
			</section>
			{/* // ! Главное содержимое странички */}
			<article className='article__homePage'>
				{/* //todo каталог для дома */}
				<div className='article-home home'>
					<h3 className='article__caption'>Тренажеры для дома</h3>
					<div className='grid__home setting-home'>

						{homeImages.map((img, index) =>
							// <div className={"home__grid-item_i" + index + " home__grid-item"} key={index++} >
							<Link
								className={"grid__item_i" + index + " grid__item"}
								key={index++}
								to="/">
								<h3 className={"grid__item_header" + index + " grid__item_header"}>{img.name}</h3>
								<img className={"grid__item_image_m" + index + " grid__item_image"} src={img.imgSrc} alt="home training" />
							</Link>
							//{/* </div> */ }
						)}

					</div>
					<Link to="/" className='article__link' href="#">Все категории</Link>
				</div>
				{/* //todo каталог для клуба */}
				<div className='article-club club'>
					<h3 className='article__caption'>Для фитнес клубов</h3>
					<div className='grid__club seetting-club'>
						{clubImages.map((img, index) =>
							// <div className={"grid__item_i" + index + " grid__item"} key={index++} >
							<Link
								className={"grid__item_i" + index + " grid__item grid__item_club" + index}
								key={index++}
								to="/">
								<h3 className={"grid__item_header" + index + " grid__item_header grid__item_header_club" + index}>{img.name}</h3>
								<img className={"grid__item_image_m" + index + " grid__item_image grid__item_image_club" + index} src={img.imgSrc} alt="home training" />
							</Link>
							//{/* </div> */ }
						)}
					</div>
					<Link to="/" className='article__link' href="#">Все категории</Link>
				</div>
			</article>
		</div>
	)

}
