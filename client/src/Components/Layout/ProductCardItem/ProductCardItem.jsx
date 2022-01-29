import React from 'react';
import { Link } from 'react-router-dom';
import SpriteIcons from '../SpriteIcons/SpriteIcons';
import './productCardItem.scss';

export default function ProductCardItem({ product }) {
	const { _id, name, gallery, availability, rating, price } = product;


	return (
		<div key={_id} className='promotion__slider-item item-slider'>

			<div className="item-slider__icons icons-slider">
				<div className='icons-slider__list'>
					<Link to="/" className='icons-slider__item translate'>
						<svg width="36" height="36">
							<SpriteIcons icon="profitable" />
						</svg>
					</Link>
					<Link to="/" className='icons-slider__item translate'>
						<svg width="36" height="36">
							<SpriteIcons icon="recommend" />
						</svg>
					</Link>
					<Link to="/" className='icons-slider__item translate'>
						<svg width="36" height="36">
							<SpriteIcons icon="new" />
						</svg>
					</Link>
				</div>

				<div className='icons-slider__list'>
					<Link className='icons-slider__item link-svg' to="/">
						<svg width="17" height="17" className='icons-slider__svg'>
							<SpriteIcons icon="comparison" />
						</svg>
					</Link>
					<Link className='icons-slider__item link-svg' to="/">
						<svg width="21" height="17" className='icons-slider__svg'>
							<SpriteIcons icon="favorite" />
						</svg>
					</Link>
				</div>

			</div>

			<div className="item-slider__image">
				<img key={"1231165654"} style={{ "width": "100%" }} src={gallery[0].image} alt="slide" />
			</div>
			<div className="item-slider__description description-item">
				<div className="description-item__availability">

					{availability && <span className='description-item__dots green'>
						В наличии
						<span className='description-item__dots green__1'></span>
						<span className='description-item__dots green__2'></span>
						<span className='description-item__dots green__3'></span>
						<span className='description-item__showRoom'>&nbsp; Есть в шоу-руме</span>
					</span>}

					{!availability && <span className='description-item__dots red'>
						Нет в наличии
						<span className='description-item__dots red__1'></span>
						<span className='description-item__dots red__2'></span>
						<span className='description-item__dots red__3'></span>
					</span>}

				</div>

				<Link to={"/product/" + encodeURI(name) + "/" + _id} className="description-item__name">{name}</Link>
				<div className="description-item__rating">Рейтинг {rating}</div>
				<div className="desription-item__price-button price-button">
					{price.sharePrice ?
						<div className="price-button__price">
							<div className='price-button__shareprice'>{price.sharePrice}  &#8372;</div>
							<div className='price-button__fullprice'>{price.fullPrice} &#8372;</div>
						</div>
						:
						<div className="price-button__price">
							<div className='price-button__fullprice'>{price.fullPrice} &#8372;</div>
						</div>
					}
					<div >
						<button className="price-button__button">Купить</button>
					</div>
				</div>
			</div>
		</div>
	);
}
