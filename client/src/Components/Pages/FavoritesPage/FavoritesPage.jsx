import axios from 'axios';
import React, { useState } from 'react';
import './favoritespage.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCardItem from '../../Layout/ProductCardItem/ProductCardItem';

export default function FavoritesPage() {
	const [productsFavorites, setProductsFavorites] = useState([]);
	const [isLoad, setIsLoad] = useState(false);
	const navigate = useNavigate();
	const { currentUser, isAuth, isLoading } = useSelector(state => state.user);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	// const goError = () => navigate('/404', { replace: true });
	// console.log(currentUser);

	useEffect(() => {
		if (isAuth) {
			promAll(currentUser.favorites)
		}
	}, [isAuth])

	useEffect(() => {
		if (isAuth) {
			setProductsFavorites(def(productsFavorites, currentUser.favorites))
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


	function promAll(favorites) {
		if (favorites.length) {
			Promise.all(
				favorites.map(id => fetch('/api/product/byid/' + id)
					.then(val => val.json())
					.then(val => {
						if (!productsFavorites.map(v => v._id).includes(val._id)) {
							setProductsFavorites(productsFavorites => [...productsFavorites, val])
						}
					}
					))
			);
		}
	}

	useEffect(() => {
		document.body.scrollIntoView();
	}, []);



	return (
		<article className='favorites-page'>
			<div className='grid-wrapper-favorites'>
				{productsFavorites.map((product, index) =>
					<ProductCardItem key={product._id} product={product} />
				)}
			</div>
		</article>
	);
}
