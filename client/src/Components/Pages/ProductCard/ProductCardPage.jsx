import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PromotionItem from '../../Layout/PromotionItem/PromotionItem';
import Characteristics from './Sections/Characteristics';
import Description from './Sections/Description';
import FeedBack from './Sections/FeedBack';
import MenuList from './Sections/MenuList';
import Presentation from './Sections/Presentation';
import './style-productcard.scss';


export default function ProductCardPage() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	let params = useParams();


	useEffect(() => {
		async function getProduct(id) {
			setIsLoading(false)
			await fetch("/api/product/byid/" + id)
				.then(res => {
					return res.json();
				})
				.then(res => {
					if (res) { setProduct(res) }
					document.body.scrollIntoView();
					setIsLoading(true)
				})
				.catch(err =>
					console.log(err))
		};
		getProduct(params.id)

	}, [params.id]);



	return (
		<article className='page-productcard'>
			{!isLoading ?
				<div className='loader-block'>

					<div className="loader"></div>
				</div>
				:
				<>
					<Presentation product={product} />
					<MenuList />
					<Description product={product} />
					<Characteristics product={product} />
					<FeedBack />
					<PromotionItem />
				</>
			}
		</article>
	);
}
