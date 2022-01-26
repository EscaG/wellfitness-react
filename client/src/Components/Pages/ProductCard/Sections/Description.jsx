/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as LinkScroll } from 'react-scroll';
import './description.scss';

export default function Description({ product }) {
	const { presentation, slider } = product;

	useEffect(() => {

	}, [product]);

	const settings = {
		className: "description-clider",
		dots: true,
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
		<section className='page-productcard__description description-productcard' id='description-productcard'>

			<div className='description-productcard__description-block descript-productcard' >
				{presentation && presentation.map((item, index) => (
					<div key={item.id} className={'descript-productcard__item descript-productcard__item' + index}>
						<div className='descript-productcard__text'>
							{item.name && <h4 className='descript-productcard__title'>{item.name}</h4>}

							<div className='descript-productcard__value' dangerouslySetInnerHTML={{ __html: item.value }}></div>

						</div>
						<div id={'runs' + index}><img src={item.image} alt="product" /></div>

					</div>

				))}
			</div>
			<div className='description-productcard__slider'>
				<Slider {...settings}>
					{slider && slider.map((slide, index) =>
						<div key={slide.id}>
							<img src={slide.image} alt="product" />
						</div>
					)}
				</Slider>
			</div>
		</section >
	);
}
