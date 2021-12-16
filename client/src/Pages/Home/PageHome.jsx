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

import promFirst from './img/promotion/first.png';
import promSecond from './img/promotion/second.png';
import promThird from './img/promotion/third.png';
import promFourth from './img/promotion/fourth.png';

import iconPercent from './img/icons/percent.png';
import iconLike from './img/icons/like.png';
import iconNew from './img/icons/new.png';

import svgGroup from './img/icons/iconsSvgGroup.svg';




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
	const [promotionSlides, setPromotionSlides] = useState([
		{
			imgSrc: promFirst,
			availability: "В наличии",
			description: "Велотренажер CardioPower S35",
			rating: "5",
			price: {
				fullPrice: "1 134 999 ",
				sharePrice: "999 999 "
			}
		},
		{
			imgSrc: promSecond,
			availability: "В наличии",
			description: "Велотренажер CardioPower T20 Plus",
			rating: "5",
			price: {
				fullPrice: "1 254 999 ",
				sharePrice: "1 099 999 "
			}
		},
		{
			imgSrc: promThird,
			availability: "Нет в наличии",
			description: "Беговая дорожка CardioPower T30 Plus",
			rating: "4",
			price: {
				fullPrice: "1 199 999 ",
				sharePrice: null
			}
		},
		{
			imgSrc: promFourth,
			availability: "Осталось мало",
			description: "Беговая дорожка CardioPower S10",
			rating: "5",
			price: {
				fullPrice: "1 010 999 ",
				sharePrice: "849 999 "
			}
		},
		{
			imgSrc: promFourth,
			availability: "Скоро ожидается",
			description: "Беговая дорожка CardioPower S01",
			rating: "0",
			price: {
				fullPrice: "1 134 999 ",
				sharePrice: null
			}
		},
		{
			imgSrc: promFourth,
			availability: "В наличии",
			description: "Беговая дорожка CardioPower S35",
			rating: "5",
			price: {
				fullPrice: "1 134 999 ",
				sharePrice: "999 999 "
			}
		},
	]);
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		waitForAnimate: false,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		fade: true
	};
	const settingsPromotion = {
		className: "center promotion-slider",
		centerMode: true,
		infinite: true,
		centerPadding: "100px",
		slidesToShow: 4,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 2000,
		// pauseOnHover: true
	}
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
							<Link
								className={"grid__item_i" + index + " grid__item"}
								key={index++}
								to="/">
								<h3 className={"grid__item_header" + index + " grid__item_header"}>{img.name}</h3>
								<img className={"grid__item_image_m" + index + " grid__item_image"} src={img.imgSrc} alt="home training" />
							</Link>
						)}

					</div>
					<Link to="/" className='article__link' href="#">Все категории</Link>
				</div>
				{/* //todo каталог для клуба */}
				<div className='article-club club'>
					<h3 className='article__caption'>Для фитнес клубов</h3>
					<div className='grid__club seetting-club'>

						{clubImages.map((img, index) =>
							<Link
								className={"grid__item_i" + index + " grid__item grid__item_club" + index}
								key={index++}
								to="/">
								<h3 className={"grid__item_header" + index + " grid__item_header grid__item_header_club" + index}>{img.name}</h3>
								<img className={"grid__item_image_m" + index + " grid__item_image grid__item_image_club" + index} src={img.imgSrc} alt="home training" />
							</Link>
						)}

					</div>
					<Link to="/" className='article__link' href="#">Все категории</Link>
				</div>
				{/* //todo Акционный слайдер */}
				<div className="article-promotion promotion" >
					<div className='promotion__header'>
						<h3 className="article__caption promotion__header_flex">Акция</h3>
						<Link className='promotion__header_link' to="/" >Новинки</Link>
						<Link className='promotion__header_link' to="/" >Мы рекомендуем</Link>
					</div>

					<Slider className='promotion' {...settingsPromotion}>
						{promotionSlides.map((item, index) =>
							<div key={index++} className='promotion__slider-item item-slider'>

								<div className="item-slider__icons icons-slider">
									<div className='icons-slider__list'>
										<Link to="/" className='icons-slider__item translate'><img src={iconPercent} alt="credit" /></Link>
										<Link to="/" className='icons-slider__item translate'><img src={iconLike} alt="like" /></Link>
										<Link to="/" className='icons-slider__item translate'><img src={iconNew} alt="new" /></Link>
									</div>

									<div className='icons-slider__list'>
										<Link className='icons-slider__item icons-slider__item_svg' to="/">
											<svg className='bottom-footer__column_icons' width="17" height="17" >
												<title>comparisons</title>
												<use xlinkHref={svgGroup + "#comparisonHome"}></use>
											</svg>
										</Link>
										<Link className='icons-slider__item icons-slider__item_svg' to="/">
											<svg className='bottom-footer__column_icons' width="21" height="17" >
												<title>heart</title>
												<use xlinkHref={svgGroup + "#heart"}></use>
											</svg>
										</Link>
									</div>

								</div>

								<div className="item-slider__image">
									<img style={{ "width": "100%" }} src={item.imgSrc} alt="slide" />
								</div>
								<div className="item-slider__description description-item">
									<div className="description-item__availability">
										<span className={item.availability !== "Скоро ожидается" ? 'description-item__dots' : ""}>{item.availability}</span>
										{item.availability === "В наличии" && <span>Есть в шоу-руме</span>}
										{item.availability === "Осталось мало" && <span>Есть в шоу-руме</span>}
										<span></span>
									</div>
									<Link to="/" className="description-item__name">{item.description}</Link>
									<div className="description-item_rating">Рейтинг {item.rating}</div>
									<div className="desription-item__price-button price-button">
										{/* <p className="">{item.price.fullPrice}</p> */}
										{item.price.sharePrice ?
											<div className="price-button__price">
												<s>{item.price.sharePrice}  &#8372;</s>
												<p>{item.price.fullPrice} &#8372;</p>
											</div>
											:
											<div className="price-button__price">
												<p>{item.price.fullPrice} &#8372;</p>
											</div>
										}
										<div className="price-button__button">
											<button>Купить</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</Slider>
				</div>
			</article>
		</div>
	)

}
