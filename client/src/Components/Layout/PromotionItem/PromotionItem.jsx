import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css';
import './style-promotionsection.scss';

import iconPercent from './img/icons/percent.png';
import iconLike from './img/icons/like.png';
import iconNew from './img/icons/new.png';

import heart from './img/icons/heart.svg';
import comparison from './img/icons/comparison.svg';

import { useSelector } from 'react-redux';

export default function PromotionItem() {
	// const [isLoaded, setIsLoaded] = useState(false);
	// const [error, setError] = useState("");

	const products = useSelector(state => state.product.currentProduct);

	const settingsPromotion = {
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
	return (
		<div className="article-promotion promotion" >
			<div className='promotion__header'>
				<h3 className="article__caption promotion__header_flex">Акция</h3>
				<Link className='promotion__header_link' to="/" >Новинки</Link>
				<Link className='promotion__header_link' to="/" >Мы рекомендуем</Link>
			</div>
			<div className='promotion__slider'>


				<Slider  {...settingsPromotion}>
					{products.map((item, index) =>
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
											<use xlinkHref={comparison + "#comparison"}></use>
										</svg>
									</Link>
									<Link className='icons-slider__item icons-slider__item_svg' to="/">
										<svg className='bottom-footer__column_icons' width="21" height="17" >
											<title>heart</title>
											<use xlinkHref={heart + "#heart"}></use>
										</svg>
									</Link>
								</div>

							</div>

							<div className="item-slider__image">
								{/* {item.gallery.map(imgSrc => */}

								<img key={"1231165654"} style={{ "width": "100%" }} src={item.gallery[0].image} alt="slide" />
								{/* )} */}
							</div>
							<div className="item-slider__description description-item">
								<div className="description-item__availability">

									{item.availability && <span className='description-item__dots_green'>
										В наличии
										<span className='description-item__dots_green_1'></span>
										<span className='description-item__dots_green_2'></span>
										<span className='description-item__dots_green_3'></span>
										<span className='description-item__showRoom'>&nbsp; Есть в шоу-руме</span>
									</span>}

									{!item.availability && <span className='description-item__dots_red'>
										Нет в наличии
										<span className='description-item__dots_red_1'></span>
										<span className='description-item__dots_red_2'></span>
										<span className='description-item__dots_red_3'></span>
									</span>}

									{/* {item.availability === "Осталось мало" && <span className='description-item__dots_orange'>
										{item.availability}
										<span className='description-item__dots_orange_1'></span>
										<span className='description-item__dots_orange_2'></span>
										<span className='description-item__dots_orange_3'></span>
									</span>} */}

									{/* {item.availability === "Скоро ожидается" && <span className='description-item__wait'>{item.availability}</span>}

									{item.availability !== "Скоро ожидается" &&
										<span className='description-item__showRoom'>Есть в шоу-руме</span>} */}

								</div>
								<Link to="/" className="description-item__name">{item.name}</Link>
								<div className="description-item__rating">Рейтинг {item.rating}</div>
								<div className="desription-item__price-button price-button">
									{item.price.sharePrice ?
										<div className="price-button__price">
											<div className='price-button__shareprice'>{item.price.sharePrice}  &#8372;</div>
											<div className='price-button__fullprice'>{item.price.fullPrice} &#8372;</div>
										</div>
										:
										<div className="price-button__price">
											<div className='price-button__fullprice'>{item.price.fullPrice} &#8372;</div>
										</div>
									}
									<div >
										<button className="price-button__button">Купить</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</Slider>
			</div>
			<Link to="/" className='article__link' href="#">Все товары по акции</Link>
		</div>
	)
}








// const [promotionSlides, setPromotionSlides] = useState([
// 	{
// 		imgSrc: promFirst,
// 		availability: "В наличии",
// 		description: "Велотренажер CardioPower S35",
// 		rating: "5",
// 		price: {
// 			fullPrice: "1 134 999 ",
// 			sharePrice: "999 999 "
// 		}
// 	},
// 	{
// 		imgSrc: promSecond,
// 		availability: "В наличии",
// 		description: "Велотренажер CardioPower T20 Plus",
// 		rating: "5",
// 		price: {
// 			fullPrice: "1 254 999 ",
// 			sharePrice: "1 099 999 "
// 		}
// 	},
// 	{
// 		imgSrc: promThird,
// 		availability: "Нет в наличии",
// 		description: "Беговая дорожка CardioPower T30 Plus",
// 		rating: "4",
// 		price: {
// 			fullPrice: "1 199 999 ",
// 			sharePrice: null
// 		}
// 	},
// 	{
// 		imgSrc: promFourth,
// 		availability: "Осталось мало",
// 		description: "Беговая дорожка CardioPower S10",
// 		rating: "5",
// 		price: {
// 			fullPrice: "1 010 999 ",
// 			sharePrice: "849 999 "
// 		}
// 	},
// 	{
// 		imgSrc: promFourth,
// 		availability: "Скоро ожидается",
// 		description: "Беговая дорожка CardioPower S01",
// 		rating: "0",
// 		price: {
// 			fullPrice: "1 134 999 ",
// 			sharePrice: null
// 		}
// 	},
// 	{
// 		imgSrc: promFourth,
// 		availability: "В наличии",
// 		description: "Беговая дорожка CardioPower S35",
// 		rating: "5",
// 		price: {
// 			fullPrice: "1 134 999 ",
// 			sharePrice: "999 999 "
// 		}
// 	},
// ]);
