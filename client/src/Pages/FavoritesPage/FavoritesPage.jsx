// import axios from 'axios';
import React, { useState } from 'react';
import './favoritespage.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import ProductCardItem from '../../Components/Layout/ProductCardItem/ProductCardItem';
import Watched from '../../Components/Layout/Watched/Watched';
import SpinnerLoad from '../../Components/Layout/SpinnerLoad/SpinnerLoad';

export default function FavoritesPage() {
	const [productsFavorites, setProductsFavorites] = useState([]);
	// const [isLoad, setIsLoad] = useState(false);
	// const navigate = useNavigate();
	const { currentUser, isAuth, isLoading } = useSelector(state => state.user);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	const API_URL = process.env.REACT_APP_BASE_URL;
	const [isLoad, setIsLoad] = useState(true)
	// const goError = () => navigate('/404', { replace: true });
	// console.log(currentUser);
	useEffect(() => {
		document.body.scrollIntoView();
	}, []);

	useEffect(() => {
		if (isAuth) {
			promAll(currentUser.favorites)
		}
	}, [isAuth])

	useEffect(() => {
		if (isAuth) {
			// setProductsFavorites(def(productsFavorites, currentUser.favorites))
			setProductsFavorites(productsFavorites =>
				productsFavorites.filter(favorite => currentUser.favorites.some(id => id === favorite._id))
			)
		}
	}, [currentUser]);


	useEffect(() => {
		if (!isAuth) {
			if (productsFavorites.length) {
				setProductsFavorites(def(productsFavorites, favoritesFromRedux))
			} else {
				promAll(favoritesFromRedux)
			}
		}
	}, [favoritesFromRedux])

	function def(a, b) {
		let arr = [];
		for (let i = 0; i < a.length; i++) {
			for (let j = 0; j < b.length; j++) {
				if ((a[i]._id).includes(b[j])) {
					arr.push(a[i])
				}
			}
		}
		return arr;
	}

	console.log(productsFavorites);
	function promAll(favorites) {
		if (favorites.length) {
			setIsLoad(false)
			Promise.all(
				favorites.map(id => fetch(API_URL + '/product/byid/' + id)
					.then(val => val.json())
					.then(val => {
						if (!productsFavorites.map(v => v._id).includes(val._id)) {
							setProductsFavorites(productsFavorites => [...productsFavorites, val])
						}
					}
					))
			);
			setIsLoad(true)
		}
	}

	return (
		<article className='favorites-page'>
			<h1 className='favorites-page__title'>Избранное</h1>
			{isLoad ?

				// <>
				// 	{
				// 		productsFavorites.map((product, index) =>
				// 			<ProductCardItem key={product._id} product={product} />
				// 		)
				// 	}

				// </>
				// : 
				// productsFavorites.length ?
				<div className='favorites-page__grid'>

					<>
						{
							productsFavorites.map((product, index) =>
								<ProductCardItem
									key={product._id}
									product={product}
									user={currentUser}
									isAuth={isAuth}
									isLoading={isLoading}
									favoritesFromRedux={favoritesFromRedux}
								/>
							)
						}

					</>
				</div>
				: <SpinnerLoad />
			}
			<div className='favorites-page__watched'>
				<h2 className='favorites-page__watched-title'>Вы смотрели</h2>
				<Watched />
			</div>
		</article>
	);
}
