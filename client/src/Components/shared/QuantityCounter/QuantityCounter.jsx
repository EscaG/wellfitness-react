import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../../http/reducers/basket-reducer';
import './quantitycounter.scss';

export default function QuantityCounter({ amount, setAmount, product }) {
	const dispatch = useDispatch();


	const onChangeEntity = (e) => {
		let myNumber = Number(e.target.value);
		if (e.target.value <= 99) {
			setAmount(myNumber)
		} else if (myNumber > 99) {
			setAmount(99)
		} else if (myNumber === 0) {
			setAmount(1)
		}
	}

	const incrementEntity = () => {
		if (amount < 99) {
			setAmount(amount => amount + 1)
			dispatch(addToBasket({ product, amount: amount + 1 }))
		}
	}

	const decrementEntity = () => {
		if (amount > 1) {
			setAmount(amount => amount - 1)
			dispatch(addToBasket({ product, amount: amount - 1 }))
		}
	}


	return (
		<div className='cart-presentation__wrapper'>
			<button className='cart-presentation__symbol' onClick={() => decrementEntity()}>-</button>
			<input type="number" id='pieces-presentation' value={amount} onChange={(e) => onChangeEntity(e)} min="1" max="99" />
			<button className='cart-presentation__symbol' onClick={() => incrementEntity()}>+</button>
		</div>
	)
}
