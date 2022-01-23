import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainImage from '../../../Layout/SpriteIcons/MainImage';
import SpriteIcons from '../../../Layout/SpriteIcons/SpriteIcons';

export default function Presentation({ product }) {
	const { name, gallery, characteristics, brand } = product;
	const [previewImage, setPreviewImage] = useState('');

	console.log(product);
	console.log(previewImage);

	const showPreview = (imgSrc) => {
		setPreviewImage(imgSrc)

	}
	const settingsPromotion = {
		// className: "center promotion-slider",
		arrows: true,
		centerMode: false,
		infinite: true,
		slidesToShow: 7,
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
		<section className='page-productcard__presentation presentation-product'>

			<svg className="inline-svg-icon" height="21px" width="24px" >
				<SpriteIcons icon={"favorite"} />
			</svg>
			<svg className="inline-svg-icon" height="21px" width="24px" >
				<SpriteIcons icon={"comparison"} />
			</svg>

			<h1 className='presentation-product__header'>{name}</h1>
			<div className="presentation-product__wrapper wrapper-showroom">
				<div className="wrapper-showroom__gallery gallery-view">
					<div className='gallery-view__allgallery'>

						<div className="gallery-view__main-img">
							{/* <img src={previewImage} alt="product" /> */}
							<MainImage image={previewImage ? previewImage : gallery && gallery[0]} />
						</div>
						<div className="gallery-view__preview">
							<Slider {...settingsPromotion}>
								{/* <img src={gallery && gallery[0]} alt="" /> */}
								{gallery && gallery.map((imgSrc, index) =>
									// <img key={Date.now() + index} src={imgSrc} alt="" />
									<div onClick={() => showPreview(imgSrc)} className='preview-product' key={Date.now() + index}>
										<MainImage image={imgSrc} />
										{/* <img src={imgSrc && imgSrc} alt="product" /> */}

									</div>
								)}
							</Slider>
						</div>
					</div>

				</div>
				<div className="wrapper-showroom__configaration">
					<div>
						{characteristics?.main?.list.length > 0 && characteristics.main.list.map(item =>
							<div key={item.id}>

								{item.name}							{item.value}
							</div>
						)}

						<img src={brand} alt="" />

					</div>
				</div>
			</div>
		</section >
	);
}
