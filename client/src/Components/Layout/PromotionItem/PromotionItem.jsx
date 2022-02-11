import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css';
import './style-promotionsection.scss';

// import iconPercent from './img/icons/percent.png';
// import iconLike from './img/icons/like.png';
// import iconNew from './img/icons/new.png';

// import heart from './img/icons/heart.svg';
// import comparison from './img/icons/comparison.svg';

import { useSelector } from 'react-redux';
import ProductCardItem from '../ProductCardItem/ProductCardItem';

export default function PromotionItem() {
	// const [isLoaded, setIsLoaded] = useState(false);
	// const [error, setError] = useState("");

	const products = useSelector(state => state.product.currentProduct);

	const settingsPromotion = {
		className: "center promotion-slider",
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: "100px",
		infinite: true,
		lazyLoad: true,
		initialSlide: 1,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		waitForAnimate: false,
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
		<div className="article-promotion promotion" id='promotion-layout'>
			<div className='promotion__header'>
				<h3 className="article__caption promotion__header flex">Акция</h3>
				<div>

					<Link className='promotion__header link' to="/" >Новинки</Link>
					<Link className='promotion__header link' to="/" >Мы рекомендуем</Link>
				</div>
			</div>
			<div className='promotion__slider'>


				<Slider  {...settingsPromotion}>
					{products.map((product, index) =>
						<ProductCardItem
							key={product._id}
							product={product}
						/>
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
