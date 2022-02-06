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


// import bannerFirst from './img/banner/banner1.png';
// import bannerSecond from './img/banner/banner2.png';
// import bannerThird from './img/banner/banner3.png';
// import bannerFourth from './img/banner/banner4.png';
// import bannerFifth from './img/banner/banner5.png';

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


export const PageHome = () => {
	// const [modalActive, setModalActive] = useState(false);
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
				<PromotionItem />
			</article>
			{/* //!  ИДЕИ И ПОДБОРКИ */}
			<IdeasSection />

			<div className="section-brands section-brands__cap">
				<h3 className='article__caption '>Популярные бренды</h3>
			</div>
			{/* //!  БРЕНДЫ */}
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
			<div className="section-brands section-brands__hr">
				<Link className='article__link' to="/">Все бренды</Link>
			</div>
			{/* //!  ПОМОЩЬ ПОКУПАТЕЛЮ */}
			<section className='section-help__home-page help-home'>
				{helpHome.map((item, index) =>
					<div className='help-home__card' key={index}>
						<div className='help-home__main main-helphome'>

							<svg className={"main-helphome__" + item.imgId} width={item.width} height={item.height}>
								<title>heart</title>
								<use xlinkHref={item.imgSrc + "#" + item.imgId}></use>
							</svg>
							<h3 className='main-helphome__header'>{item.header}</h3>
							<p className='main-helphome__description'>{item.description}</p>
							<div className='main-helphome__link'>
								<Link to="/">{item.link}</Link>
								<svg className='' width="9" height="11">
									<title>heart</title>
									<use xlinkHref={arrowlink + "#arrow-link"}></use>
								</svg>
							</div>
						</div>
						<div className='help-home__hover'><img src={phone} alt="phone" /></div>
					</div>
				)}
			</section>
			{/* //!  О КОМПАНИИ */}
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
				<div className="about-home__empty"></div>
			</section>
			{/* //!  СТАНЬ НАШИМ ПАРТНЕРОМ */}
			<section className="section-partner__home-page partner-home">
				<div className='partner-home__left'>
					<img className='partner-home__image' src={partner} alt="partner" />
				</div>
				<div className='partner-home__right'>
					<div>Станьте нашим партнером <span className='partner-home__right_red'>и получите возможность</span> представлять нашу продукцию в вашем регионе.</div>
					<Link className='article__link partner-home__link' to='/'>Стать партнером</Link>
				</div>
			</section	>
			{/* //! НОВОСТИ */}

			<NewsSlider />
			{/* <Slider {...settingsPromotion}>
						{newsHome.map((item, index) =>
							<div className='news-home__card ' key={index++}>
								<div className='news-home__item-image'>
									<img className='news-home__image' src={item.imgSrc} alt="news" />
								</div>
								<div>
									<h4 className='news-home__title-card'>{item.title}</h4>
									<p className='news-home__description'>{item.description}</p>
									<span className='news-home__date'>{item.date}</span>
								</div>
							</div>
						)}
					</Slider> */}

		</div >
	)

}
