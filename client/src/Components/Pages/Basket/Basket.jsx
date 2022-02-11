import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCardItem from '../../Layout/ProductCardItem/ProductCardItem';
import './basket.scss';

export default function Basket() {
	const [productsBasket, setProductsBasket] = useState([])
	const { currentUser, isAuth, isLoading } = useSelector(state => state.user);
	const API_URL = process.env.REACT_APP_BASE_URL;

	useEffect(() => {
		document.body.scrollIntoView();
	}, []);


	useEffect(() => {
		if (isAuth) {
			promAll(currentUser.basket)
		}
	}, [isAuth])



	function promAll(basket) {
		if (basket.length) {
			Promise.all(
				basket.map(item => fetch(API_URL + '/product/byid/' + item.id)
					.then(val => val.json())
					.then(val => {
						console.log('val', val);
						if (!productsBasket.some(i => i.id === val._id)) {
							setProductsBasket(productsBasket => [...productsBasket, val])
							console.log("+");
						}
						// if (!productsFavorites.map(v => v._id).includes(val._id)) {
						// 	setProductsFavorites(productsFavorites => [...productsFavorites, val])
						// }
					}
					))
			);
		}
	}



	return (
		<article className='basket-page'>
			<div className='basket-page__grid'>

				{productsBasket ? productsBasket.map((product, index) =>
					<ProductCardItem key={product._id} product={product} />
				)
					:
					null
				}
			</div>
		</article>
	)
}
