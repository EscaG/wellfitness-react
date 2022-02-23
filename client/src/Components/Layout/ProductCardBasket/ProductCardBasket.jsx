import React, { useState } from 'react';
import { useEffect } from 'react';
import ButtonFavorites from '../../shared/ButtonFavorites/ButtonFavorites';
import QuantityCounter from '../../shared/QuantityCounter/QuantityCounter';
import './ProductCardBasket.scss';

export default function ProductCardBasket({ product, amountP, user, isAuth, isLoading, favoritesFromRedux }) {
	const { _id, name, gallery, price } = product;

	const [amount, setAmount] = useState(1);

	useEffect(() => {
		setAmount(amountP)
	}, [amountP])





	// console.log(price.sharePrice.replace(/\s/g, ''));

	function summ(price, amount) {
		//? убираем пробелы в строке, умножаем на количество и снова ставим пробелы между каждыми 3 цифрами
		return String(Number(price.replace(/\s/g, '')) * amount).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
	}


	return (
		<div className='basket-item'>
			<div>
				<img src={gallery[0].image} alt={name} />
			</div>
			<div>
				{name}
			</div>

			<QuantityCounter
				product={product}
				amount={amount}
				setAmount={setAmount}
			/>
			<ButtonFavorites
				user={user}
				isAuth={isAuth}
				isLoading={isLoading}
				id={_id}
				favoritesFromRedux={favoritesFromRedux}
			/>
			{price.sharePrice ?
				<div className="price-button__price">
					<div className='price-button__shareprice'>{summ(price.sharePrice, amount)}  &#8372;</div>
					<div className='price-button__fullprice'>{summ(price.fullPrice, amount)} &#8372;</div>
				</div>
				:
				<div className="price-button__price">
					<div className='price-button__fullprice'>{summ(price.fullPrice, amount)} &#8372;</div>
				</div>
			}
		</div>
	)
}
