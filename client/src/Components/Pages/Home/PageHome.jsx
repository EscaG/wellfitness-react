import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style-pageHome.scss';
import './slick.css';
import PromotionItem from '../../Layout/PromotionItem/PromotionItem';
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

import brand1 from './img/brands/brand1.png';
import brand2 from './img/brands/brand2.png';
import brand3 from './img/brands/brand3.png';
import brand4 from './img/brands/brand4.png';
import brand5 from './img/brands/brand5.png';
import brand6 from './img/brands/brand6.png';
import brand7 from './img/brands/brand7.png';
import brand8 from './img/brands/brand8.png';
import brand9 from './img/brands/brand9.png';
import brand10 from './img/brands/brand10.png';
import brand11 from './img/brands/brand11.png';
import brand12 from './img/brands/brand12.png';
import brand13 from './img/brands/brand13.png';
import brand14 from './img/brands/brand14.png';
import brand15 from './img/brands/brand15.png';

import helpCall from './img/icons/help-call.svg';
import helpHand from './img/icons/help-hand.svg';
import helpHelp from './img/icons/help-help.svg';
import helpSport from './img/icons/help-sport.svg';
import phone from './img/icons/phone.png';

import arrowlink from './img/icons/arrow-link.svg';

import partner from './img/partner.png';

import IdeasSection from '../../Layout/IdeasSection/IdeasSection';
import NewsSlider from '../../Layout/NewsSlider/NewsSlider';
import ForHome from './Components/ForHome';
import ForClub from './Components/ForClub';
import BrandsHome from './Components/BrandsHome';
import HelpClient from './Components/HelpClient';
import AboutHome from './Components/AboutHome';
import OurPartner from './Components/OurPartner';

export const PageHome = () => {

	const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15];
	const slides = [firstSlide, secondSlide, thirdSlide, fourthSlide];

	const helpHome = [{
		imgSrc: helpCall,
		width: "59",
		height: "59",
		imgId: "help-call",
		header: "Помощь покупателю",
		description: "Узнайте как приобрести товар, способы доставки и оплаты, а также условия гарантии.",
		link: "Подробнее"
	},
	{
		imgSrc: helpHand,
		width: "60",
		height: "60",
		imgId: "help-hand",
		header: "Заявка на сервис",
		description: "Оставьте заявку на проведение гарантийного и постгарантийного ремонта.",
		link: "Оставить заявку"
	},
	{
		imgSrc: helpHelp,
		width: "59",
		height: "59",
		imgId: "help-help",
		header: "Личный кабинет партнера B2B",
		description: "Личный кабинет дилера с доступом к информационным материалам.",
		link: "Стать партнером"
	},
	{
		imgSrc: helpSport,
		width: "64",
		height: "55",
		imgId: "help-sport",
		header: "Выставочный зал",
		description: "Оставьте заявку на посещение шоу-рума в Москве.",
		link: "Записаться"
	}]
	const homeImages = [{
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
	}];
	const clubImages = [{
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
	}];

	const settings = {
		dots: false,
		arrows: false,
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
				{/* <div style={{ "height": "30px" }}></div> */}
			</section>
			{/* // ! Главное содержимое странички */}
			<article className='article__homePage'>
				{/* //todo каталог для дома */}
				<div className='article-home home'>
					<h3 className='article__caption'>Тренажеры для дома</h3>
					<div className='grid__home setting-home'>
						{homeImages.map((img, index) =>
							<ForHome
								key={index}
								img={img}
								index={index}
							/>
						)}
					</div>
					<Link to="/" className='article__link' href="#">Все категории</Link>
				</div>
				{/* //todo каталог для клуба */}
				<div className='article-club club'>
					<h3 className='article__caption'>Для фитнес клубов</h3>
					<div className='grid__club seetting-club'>
						{clubImages.map((img, index) =>
							<ForClub
								key={index}
								img={img}
								index={index}
							/>
						)}
					</div>
					<Link to="/" className='article__link' href="#">Все категории</Link>
				</div>
				{/* //todo Акционный слайдер */}
				<PromotionItem />
			</article>
			{/* //!  ИДЕИ И ПОДБОРКИ */}
			<IdeasSection />
			<div className="section-brands section-brands__cap">
				<h3 className='article__caption '>Популярные бренды</h3>
			</div>
			{/* //!  БРЕНДЫ */}
			<BrandsHome
				brands={brands}
			/>
			<div className="section-brands section-brands__hr">
				<Link className='article__link' to="/brands">Все бренды</Link>
			</div>
			{/* //!  ПОМОЩЬ ПОКУПАТЕЛЮ */}
			<HelpClient
				helpHome={helpHome}
				arrowlink={arrowlink}
				phone={phone}
			/>
			{/* //!  О КОМПАНИИ */}
			<AboutHome />
			{/* //!  СТАНЬ НАШИМ ПАРТНЕРОМ */}
			<OurPartner
				partner={partner}
			/>
			{/* //! НОВОСТИ */}
			<NewsSlider />


		</div >
	)

}
