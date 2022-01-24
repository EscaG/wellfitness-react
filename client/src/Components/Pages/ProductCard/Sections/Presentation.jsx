import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainImage from '../../../Layout/SpriteIcons/MainImage';
import SpriteIcons from '../../../Layout/SpriteIcons/SpriteIcons';

export default function Presentation({ product }) {
	const { name, gallery, price, characteristics, brand, availability } = product;
	const [previewImage, setPreviewImage] = useState('');
	const [entity, setEntity] = useState(1);
	console.log(product);

	const showPreview = (imgSrc) => {
		setPreviewImage(imgSrc)
	}

	useEffect(() => {
		if (!availability) {
			// document.getElementById("pieces-presentation").disabled = true;
			// document.querySelector(".block-price-presentation__cart-block").style.display = "none";
		}
	}, []);


	const onChangeEntity = (e) => {
		let myNumber = Number(e.target.value);
		if (e.target.value <= 99) {
			setEntity(myNumber)

		} else if (myNumber > 99) {
			setEntity(99)
		} else if (myNumber === 0) {
			setEntity(1)
		}
	}

	const incrementEntity = () => {
		if (entity < 99) {
			setEntity(entity => entity + 1)
		}
	}

	const decrementEntity = () => {
		if (entity > 1) {
			setEntity(entity => entity - 1)
		}
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
		<article className='page-productcard__presentation presentation-product'>
			<div style={{ backgroundColor: "#fff" }}>



				<h1 className='presentation-product__header'>{name}</h1>
				{/* //! флекс, разделяющий картинки от описания */}
				<div className="presentation-product__wrapper wrapper-showroom">
					{/* //! блок с картинками*/}
					<section className="wrapper-showroom__gallery gallery-view">
						<div className='gallery-view__allgallery'>

							<div className="gallery-view__main-img">
								<MainImage image={previewImage ? previewImage : gallery && gallery[0]} />
							</div>
							<div className="gallery-view__preview">
								<Slider {...settingsPromotion}>
									{gallery && gallery.map((imgSrc, index) =>
										<div onClick={() => showPreview(imgSrc)} className='preview-product' key={Date.now() + index}>
											<MainImage image={imgSrc} />
										</div>
									)}
								</Slider>
							</div>
						</div>

					</section>
					{/* //! блок с первыми характеристиками*/}
					<section className="wrapper-showroom__all-configaration configaration-all">
						{/* //todo бренд */}
						<div className='configaration-all__brand'>
							<div>
								<img src={brand} alt="brand" />
							</div>
							<div>
								<SpriteIcons icon={"profitable"} />
								<SpriteIcons icon={"recommend"} />
								<SpriteIcons icon={"new"} />
							</div>
						</div>
						{/* //todo список главных характеристик*/}
						<div className='configaration-all__characteristics-price price-characteristics'>
							{/* //todo в избранное */}
							<div>
								<div className='price-characteristics__favorites-icons'>
									<div className='price-characteristics__favorites-icons-hover'>
										<svg className="inline-svg-icon" height="21px" width="24px" >
											<SpriteIcons icon={"favorite"} />
										</svg>
										<span >&nbsp;&nbsp; В избранное</span>
									</div>
									<div className='price-characteristics__favorites-icons-hover'>
										<svg className="inline-svg-icon" height="21px" width="24px" >
											<SpriteIcons icon={"comparison"} />
										</svg>
										<span>&nbsp;&nbsp; В сравнение	</span>
									</div>
								</div>

								<ul className='price-characteristics__list-characteristics'>
									{characteristics?.main?.list.length > 0 && characteristics.main.list.map(item =>
										<li key={item.id} >
											<span className='price-characteristics__name-characteristics'>{item.name}</span>
											<span> {item.value}</span>
										</li>
									)}
								</ul>

								<button className='price-characteristics__btn-all'>Все характеристики</button>
							</div>

							{/* //todo  будет цена и кнопка купить */}
							<div className='price-characteristics__price-block block-price-presentation'>
								<div className='block-price-presentation__availability-block'>
									{availability && <span className='block-price-presentation__availability'>
										В наличии &nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-showroom'>&nbsp; Есть в шоу-руме</span>
									</span>}
									{!availability && <span className='block-price-presentation__not-availability'>
										Нет в наличии &nbsp;
										<span className='block-price-presentation__not-availability-dots'></span>&nbsp;
										<span className='block-price-presentation__not-availability-dots'></span>&nbsp;
										<span className='block-price-presentation__not-availability-dots'></span>&nbsp;
									</span>}
								</div>
								<div className='block-price-presentation__price-block'>
									<h3 className='block-price-presentation__fullprice'>{price && price.fullPrice} &#8372;</h3>
									<h3 className='block-price-presentation__shareprice'>{price?.sharePrice && (price.sharePrice + String.fromCharCode(parseInt('0x20B4', 16)))}</h3>
								</div>
								<div className="block-price-presentation__cart-block cart-presentation">
									<div className='cart-presentation__wrapper'>
										<button className='cart-presentation__symbol' onClick={() => decrementEntity()}>-</button>
										<input type="number" id='pieces-presentation' value={entity} onChange={(e) => onChangeEntity(e)} min="1" max="99" />
										<button className='cart-presentation__symbol' onClick={() => incrementEntity()}>+</button>
									</div>
									<div>
										<button className="price-button__button cart-presentation__btn">В корзину</button>
									</div>
								</div>
							</div>

						</div>
					</section>
				</div>
			</div>
		</article >
	);
}
