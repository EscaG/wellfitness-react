import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IdeasSection from '../../Layout/IdeasSection/IdeasSection';
import NewsSlider from '../../Layout/NewsSlider/NewsSlider';
import ProductCardItem from '../../Layout/ProductCardItem/ProductCardItem';
import SpriteIcons from '../../Layout/SpriteIcons/SpriteIcons';
import './resultsearch.scss';

export default function ResultSearch() {
	const [products, setProducts] = useState(null);
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
						/>
					)}
				</div>
			</div>
			<IdeasSection />
			<NewsSlider />
		</section>
	);
}



