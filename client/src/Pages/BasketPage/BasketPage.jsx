import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCardBasket from '../../Components/Layout/ProductCardBasket/ProductCardBasket';
import ProductCardItem from '../../Components/Layout/ProductCardItem/ProductCardItem';
import './basket.scss';

export default function BasketPage() {
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
					.then(product => {
						console.log('product', product);
						if (!productsBasket.some(i => i.id === product._id)) {
							setProductsBasket(productsBasket => [...productsBasket, { product, amount: item.amount }])
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
					<ProductCardItem key={product.product._id} product={product.product} />
				)
					:
					null
				}
			</div>
			{productsBasket ? productsBasket.map((product, index) =>

				<ProductCardBasket
					key={product.product._id}
					product={product.product}
					amountP={product.amount}
				/>

			)

				:
				null}
		</article>
	)
}
