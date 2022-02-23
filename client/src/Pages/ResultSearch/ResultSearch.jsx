import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import IdeasSection from '../../Components/Layout/IdeasSection/IdeasSection';
import NewsSlider from '../../Components/Layout/NewsSlider/NewsSlider';
import ProductCardItem from '../../Components/Layout/ProductCardItem/ProductCardItem';
import SpriteIcons from '../../Components/Layout/SpriteIcons/SpriteIcons';
import './resultsearch.scss';

export default function ResultSearch() {
	const [products, setProducts] = useState(null);
	const { currentUser, isAuth, isLoading } = useSelector(state => state.user);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	let params = useParams();

	useEffect(() => {
		fetch("/api/products/autocomplete?searchProduct=" + params.search)
			.then(res => {
				return res.json()
			})
			.then(res => {
				console.log(res)
				setProducts(res)
			})
			.catch(err =>
				console.log(err))
	}, [params])


	return (
		<section className='page-result-search'>
			<div className='page-result-search__container'>

				<h2>Результаты поиска</h2>
				<div className='page-result-search__wrapper'>
					{products && products.map((item, index) =>
						<ProductCardItem
							key={item._id}
							product={item}
							user={currentUser}
							isAuth={isAuth}
							isLoading={isLoading}
							favoritesFromRedux={favoritesFromRedux}
						/>
					)}
				</div>
			</div>
			<IdeasSection />
			<NewsSlider />
		</section>
	);
}



