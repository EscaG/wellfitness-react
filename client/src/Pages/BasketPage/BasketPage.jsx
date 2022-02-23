import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCardBasket from '../../Components/Layout/ProductCardBasket/ProductCardBasket';
// import ProductCardItem from '../../Components/Layout/ProductCardItem/ProductCardItem';
import { clearBasket } from '../../http/reducers/basket-reducer';
import './basket.scss';

export default function BasketPage() {
	const [productsBasket, setProductsBasket] = useState([]);
	const [allAmount, setAllAmount] = useState(0);
	const { currentUser, isAuth, isLoading } = useSelector(state => state.user);
	const { totalPrice, totalCount, items } = useSelector(state => state.basket);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	const dispatch = useDispatch();
	const API_URL = process.env.REACT_APP_BASE_URL;
	console.log(totalCount, totalPrice, items);

	const inBasket = Object.keys(items).map(key =>
		items[key]
	)
	console.log(inBasket);
	useEffect(() => {
		document.body.scrollIntoView();
	}, []);
	// console.log(allAmount);

	useEffect(() => {
		if (isAuth) {
			promAll(currentUser.basket)
		}
	}, [isAuth])

	useEffect(() => {
		if (isAuth) {
			// setProductsBasket(def(productsBasket, currentUser.basket))
		}
	}, [currentUser]);

	function def(a, b) {
		let arr = [];
		for (let i = 0; i < a.length; i++) {
			for (let j = 0; j < b.length; j++) {
				if ((a[i]._id) === (b[j]._id)) {
					arr.push(a[i])
				}
			}
		}
		console.log(arr);

		return arr;
	}


	function promAll(basket) {
		if (basket.length) {
			Promise.all(
				basket.map(item => fetch(API_URL + '/product/byid/' + item.id)
					.then(val => val.json())
					.then(product => {
						if (!productsBasket.map(v => v.product._id).includes(product._id)) {
							setProductsBasket(productsBasket => [...productsBasket, { product, amount: item.amount }])
						}
					}
					))
			);
		}
	}

	const handleClear = () => {
		dispatch(clearBasket())
	}

	return (
		<article className='basket-page'>
			{/* <div className='basket-page__grid'>

				{productsBasket ? productsBasket.map((product, index) =>
					<ProductCardItem key={product.product._id} product={product.product} />
				)
					:
					null
				}
			</div> */}
			{/* {productsBasket ? productsBasket.map((product, index) =>
				<ProductCardBasket
					key={product.product._id}
					allAmount={allAmount}
					setAllAmount={setAllAmount}
					product={product.product}
					amountP={product.amount}
				/>
			)
				:
				null} */}
			<button onClick={handleClear}>Clear</button>
			{inBasket.length

				? inBasket.map((product, index) =>
					<ProductCardBasket
						key={product.product._id}
						product={product.product}
						amountP={product.amount}
						user={currentUser}
						isAuth={isAuth}
						isLoading={isLoading}
						favoritesFromRedux={favoritesFromRedux}
					/>
				)
				: null}

			<h4>Общая сумма {totalPrice}
				{/* {String(allAmount).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}  */}
				&#8372;</h4>
			<h4>Всего в корзине: {totalCount}</h4>

		</article>
	)
}
