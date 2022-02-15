import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCardItem from '../../Components/Layout/ProductCardItem/ProductCardItem';
// import ProductCardSearch from '../../Layout/ProductCardSearch/ProductCardSearch';
import SpinnerLoad from '../../Components/Layout/SpinnerLoad/SpinnerLoad';
import Watched from '../../Components/Layout/Watched/Watched';
import './categories.scss';

export default function Categories() {

	const [products, setProducts] = useState([]);
	const [brands, setBrands] = useState([]);
	const [isLoaded, setIsLoaded] = useState(true);

	let { from, to } = useParams();
	useEffect(() => {
		document.body.scrollIntoView()
	}, []);

	useEffect(() => {
		setIsLoaded(false)
		fetch("/api/products/category?category=" + to)
			.then(res => {
				return res.json()
			})
			.then(res => {
				console.log(res);
				setIsLoaded(true)
				setProducts(res);
				setBrands([...new Set([].concat(...res.map(item => item.brand.name)))])
			})
			.catch(err =>
				console.log(err))

	}, [to]);

	console.log(from, to);
	return (
		<article className='categories-page'>
			{isLoaded ?
				<>

					<nav className='categories-page__nav'>
						<Link
							className='categories-page__back-link'
							to='/'>Главная</Link>
						<span> ⟶ </span>
						<Link
							className='categories-page__back-link'
							to={'/' + from}>{from === 'forhome' ? 'Для дома' : 'Для фитнес клуба'}</Link>
						<span> ⟶ </span>
						<span className='categories-page__destination'>{to}</span>
					</nav>

					<div className='categories-page__brands'>
						<span className='brands-list__name'>Производители </span>
						<ul className='brands-list'>
							{brands ? brands.map((brand, index) =>
								<li className='brands-list__item' key={brand}>
									<button>{brand}</button>
								</li>
							)
								:
								null
							}
						</ul>
					</div>

					<h1 className='categories-page__title'>{to}</h1>
					{products.length === 0 ?
						<h2 className='categories-page__title' style={{ color: 'darkorange', border: 'none' }}>Ожидается поставка товара</h2>
						: null}
					<div className='categories-page__grid'>
						{products ? products.filter(product => product.type === from).map((product, index) =>
							<ProductCardItem
								key={product._id}
								product={product}
							/>)
							:
							null
						}
					</div>
					<Watched />
				</>
				:
				<SpinnerLoad />
			}

		</article>
	);
}
