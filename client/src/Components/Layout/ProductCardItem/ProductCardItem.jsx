import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editBasket } from '../../../http/actions/user';
import ButtonBasket from '../../shared/ButtonBasket/ButtonBasket';
// import { basketAdd } from '../../../http/reducers/basket-reducer';
import ButtonFavorites from '../../shared/ButtonFavorites/ButtonFavorites';
import SpriteIcons from '../SpriteIcons/SpriteIcons';
import './productCardItem.scss';

const ProductCardItem = memo(({ product, user, isAuth, isLoading, favoritesFromRedux }) => {
	const [isComparison, setIsComparison] = useState(false);
	const [isBasket, setIsBasket] = useState(false);
	const [amount, setAmount] = useState(1);
	const { _id, name, gallery, availability, rating, price } = product;
	// const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	// const user = useSelector(state => state.user.currentUser);
	// const { isAuth, isLoading } = useSelector(state => state.user);
	const basketRedux = useSelector(state => state.basket.items);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuth) {
			if (product) {
				haveInBasket(_id)
			}
		}
	}, [user]);

	function haveInBasket(id) {
		// console.log('haveInBasket', id);
		if (!user.basket.some(i => i.id === id)) {
			setIsBasket(false)
		} else {
			setIsBasket(true)
		}
	}

	useEffect(() => {
		// console.log(basketRedux);
	}, [basketRedux])


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

		} else {
			// if (!basketRedux.some(product => product?.id === id)) {
			// 	dispatch(basketAdd({ amount: 1, id }))
			// }
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
						<svg width="17" height="17" className={(isComparison ? ' ' : '') + 'icons-slider__svg comparison'} >
							<SpriteIcons icon="comparison" />
						</svg>
					</button>

					<ButtonFavorites
						id={_id}
						user={user}
						isAuth={isAuth}
						isLoading={isLoading}
						favoritesFromRedux={favoritesFromRedux}
					/>
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
						{/* {!isBasket ?
							<button
								onClick={() => handleToBasket(_id)}
								className="price-button__button">Купить</button>

							:
							<Link
								className="active price-button__button "
								to={'/basket'}
							>Оформить
							</Link>
						} */}
						<ButtonBasket
							user={user}
							isAuth={isAuth}
							isLoading={isLoading}
							_id={_id}
							product={product}
							amount={amount}
							setAmount={setAmount}
						/>

					</div>
				</div>
			</div>
		</div >
	);
})
export default ProductCardItem;