import React from 'react';
import './buttonbasket.scss';

export default function ButtonBasket({ isBasket, handleToBasket, _id }) {

	return (
		<div>
			{!isBasket ?

				<button
					onClick={() => handleToBasket(_id)} //! в корзину
					className="price-button__button cart-presentation__btn">
					В корзину
				</button>
				:
				<button
					onClick={() => handleToBasket(_id)} //! в корзину
					className="active price-button__button cart-presentation__btn"
				// to={'/basket'}
				>Оформить
				</button>
			}
		</div>
	)
}
