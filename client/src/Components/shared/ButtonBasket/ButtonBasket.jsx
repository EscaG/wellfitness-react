import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editBasket } from '../../../http/actions/user';
import { addToBasketRedux } from '../../../http/reducers/basket-reducer';
import './buttonbasket.scss';

export default function ButtonBasket({ _id, user, isAuth, isLoading, amount, setAmount, product }) {
	const [isBasket, setIsBasket] = useState(false);
	const dispatch = useDispatch();
	const { totalPrice, totalCount, items } = useSelector(state => state.basket);
	const arrayProductsInBasket = Object.keys(items).map(key =>
		items[key]
	)

	useEffect(() => {
		if (arrayProductsInBasket.length) {
			setIsBasket(arrayProductsInBasket.some(({ product }) => product._id === _id))
		}
	}, [items])

	useEffect(() => {
		if (isAuth) {
			basketAmount(user.basket)
		}
	}, [product, user]);


	function basketAmount(basket) {
		for (let i = 0; i < basket.length; i++) {
			if (basket[i].id === _id) {
				setAmount(basket[i].amount);
				setIsBasket(true);
				return;
			}
		}
	}


	const handleToBasket = (id) => {
		if (user.basket) {
			if (user.basket.length > 0) {
				if (!user.basket.some(i => i.id === id)) {
					console.log("добавил в корзину", id);
					dispatch(editBasket(user.email, [...user.basket, { amount: amount, id }]))
					setIsBasket(true)
				} else {
					console.log('удалил из корзины', id);
					dispatch(editBasket(user.email, user.basket.filter(i => i.id !== id)))
					setIsBasket(false)
				}
			} else {
				dispatch(editBasket(user.email, [...user.basket, { amount: amount, id }]))
			}

		} else {
			dispatch(addToBasketRedux({ product, amount }))
		}
	}


	return (
		<div>
			{!isBasket ?

				<button
					onClick={() => handleToBasket(_id)} //! в корзину
					className="price-button__button cart-presentation__btn">
					В корзину
				</button>
				:
				<Link
					to='/basket'
					onClick={() => handleToBasket(_id)} //! в корзину
					className="active price-button__button cart-presentation__btn"
				// to={'/basket'}
				>Оформить
				</Link>
			}
		</div>
	)
}
