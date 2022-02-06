import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style-watched.scss';

import watchedFirst from './img/first.png';
import watchedSecond from './img/second.png';
import watchedThird from './img/third.png';
import watchedFourth from './img/fourth.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Watched() {
	const products = useSelector(state => state.product.currentProduct);
	const watchedItems = [
		{
			image: watchedFirst,
			title: "Беговая дорожка CardioPower S35",
			rating: "5",
			price: "34 900"
		},
		{
			image: watchedSecond,
			title: "Беговая дорожка CardioPower T20 Plus",
			rating: "5",
			price: "33 700"
		},
		{
			image: watchedThird,
			title: "Беговая дорожка CardioPower T20 Plus",
			rating: "5",
			price: "49 999"
		},
		{
			image: watchedFourth,
			title: "Беговая дорожка CardioPower S35",
			rating: "5",
			price: "44599"
		},
		{
			image: watchedFirst,
			title: "Беговая дорожка CardioPower S35",
			rating: "5",
			price: "34 900"
		},
		{
			image: watchedSecond,
			title: "Беговая дорожка CardioPower T20 Plus",
			rating: "5",
			price: "33 700"
		},
		{
			image: watchedThird,
			title: "Беговая дорожка CardioPower T20 Plus",
			rating: "5",
			price: "49 999"
		}

	]
	const settingsPromotion = {
		className: "center promotion-slider",
		arrows: false,
		centerMode: true,
		infinite: true,
		centerPadding: "0px",
		lazyLoad: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 5,
				}
			},

			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	}


	return (
		<section className='watched'>
			<Slider {...settingsPromotion}>
				{products && products.map((item, index) =>
					<Link key={index++} to={"/product/" + encodeURI(item.name) + "/" + item._id} className='watched__card'>
						<div className='watched__item-image'>

							<img className='watched__image' src={item.gallery && item.gallery[0].image} alt="watched" />
						</div>

						<div className='watched__description'>
							<div className="watched__title">{item.name}</div>
							<div className="watched__rating">Рейтинг {item.rating}</div>
							<div className="watched__price">{item.price.fullPrice}</div>
						</div>

					</Link>
				)}
			</Slider>
		</section>
	)
}
