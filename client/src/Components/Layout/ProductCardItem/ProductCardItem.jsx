import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editBasket, editFavorites } from '../../../http/actions/user';
import { setFavoritesToRedux } from '../../../http/reducers/favoritesReducer';
import SpriteIcons from '../SpriteIcons/SpriteIcons';
import './productCardItem.scss';

export default function ProductCardItem({ product }) {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isBasket, setIsBasket] = useState(false);

	const { _id, name, gallery, availability, rating, price } = product;
	const user = useSelector(state => state.user.currentUser);
	const isAuth = useSelector(state => state.user.isAuth);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	const dispatch = useDispatch();
	// console.log(user);

	useEffect(() => {
		if (isAuth) {
			if (user.favorites.includes(_id)) {
				setIsFavorite(true);
			}
			if (product) {
				haveInBasket(_id)
			}
		}
	}, [user]);

	useEffect(() => {
		if (isAuth) {
			// console.log("обновился продукт");
			if (user.favorites.includes(_id)) {
				// console.log("favorite true");
				setIsFavorite(true);
			} else {
				setIsFavorite(false);
				// console.log("disactive");
			}
		}
	}, [product]);


	useEffect(() => {
		if (favoritesFromRedux.length) {
			if (favoritesFromRedux.includes(_id)) {
				// console.log("active");
				setIsFavorite(true);
				// console.log(favoritesFromRedux);
			}
		}
	}, [favoritesFromRedux]);

	function haveInBasket(id) {
		// console.log('haveInBasket', id);
		if (!user.basket.some(i => i.id === id)) {
			setIsBasket(false)
		} else {
			setIsBasket(true)
		}
	}


	const handleToFavorite = (id) => {
		if (user.favorites) {
			if (!user.favorites.includes(id)) {
				dispatch(editFavorites(user.email, [...user.favorites, id]));
			} else {
				dispatch(editFavorites(user.email, user.favorites.filter(i => i !== id)));
				setIsFavorite(false)
			}
		} else {
			if (!favoritesFromRedux.includes(id)) {
				// console.log("new favorite to user");
				dispatch(setFavoritesToRedux([...favoritesFromRedux, id]))
				localStorage.setItem('favorites', JSON.stringify([...favoritesFromRedux, id]))
				setIsFavorite(true)
			} else {
				dispatch(setFavoritesToRedux(favoritesFromRedux.filter(i => i !== id)))
				localStorage.setItem('favorites', JSON.stringify(favoritesFromRedux.filter(i => i !== id)))
				setIsFavorite(false)
			}
		}
	}

	const handleToBasket = (id) => {
		if (user.basket) {
			if (user.basket.length > 0) {
				if (!user.basket.some(i => i.id === id)) {
					console.log("добавил в корзину", id);
					dispatch(editBasket(user.email, [...user.basket, { amount: 1, id }]))
					setIsBasket(true)
				} else {
					console.log('удалил из корзины', id);
					dispatch(editBasket(user.email, user.basket.filter(i => i.id !== id)))
					setIsBasket(false)
				}
			} else {
				dispatch(editBasket(user.email, [...user.basket, { amount: 1, id }]))
			}

		}
	}

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
					<button className='icons-slider__item link-svg'
					// onClick={() => handleToFavorite(_id)}
					>
						<svg width="17" height="17" className={(isFavorite ? ' ' : '') + 'icons-slider__svg comparison'} >
							<SpriteIcons icon="comparison" />
						</svg>
					</button>
					<button className='icons-slider__item link-svg'
						onClick={() => handleToFavorite(_id)}
					>
						<svg width="21" height="21" className={(isFavorite ? 'active ' : '') + 'icons-slider__svg favorites'} >
							<SpriteIcons icon="favorite" />
						</svg>
					</button >
				</div >

			</div >

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
						{!isBasket ?
							<button
								onClick={() => handleToBasket(_id)}
								className="price-button__button">Купить</button>

							:
							<Link
								className="active price-button__button "
								to={'/basket'}
							>Оформить
							</Link>
						}
					</div>
				</div>
			</div>
		</div >
	);
}
