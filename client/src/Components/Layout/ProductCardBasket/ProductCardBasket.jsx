import React, { useState } from 'react';
import { useEffect } from 'react';
import QuantityCounter from '../../shared/QuantityCounter/QuantityCounter';
import './ProductCardBasket.scss';

export default function ProductCardBasket({ product, amountP }) {
	const { name, gallery } = product;

	const [amount, setAmount] = useState(1);

	useEffect(() => {
		setAmount(amountP)
	}, [amountP])

	return (
		<div className='basket-item'>
			<div>
				<img src={gallery[0].image} alt={name} />
			</div>
			<div>
				{name}
			</div>

			<QuantityCounter
				amount={amount}
				setAmount={setAmount}
			/>
		</div>
	)
}
