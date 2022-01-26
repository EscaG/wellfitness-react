import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setConditionAutocomplite } from '../../../http/reducers/modalReducerAutocomplite';
import Characteristics from './Sections/Characteristics';
import Description from './Sections/Description';
import MenuList from './Sections/MenuList';
import Presentation from './Sections/Presentation';
import './style-productcard.scss';


export default function ProductCardPage() {
	const [product, setProduct] = useState({});
	const dispatch = useDispatch();
	let params = useParams();

	console.log(product);

	useEffect(() => {
		dispatch(setConditionAutocomplite(false));
		async function getProduct(id) {

			await fetch("/api/product/byid/" + id)
				.then(res => {
					// console.log(res);
					return res.json();
				})
				.then(res => {
					if (res) {

						setProduct(res);
					}
					// setIsLoad(true);
					console.log(res);
				})
				.catch(err =>
					console.log(err))
		};
		getProduct(params.id)

	}, [params.id]);



	return (
		<article className='page-productcard'>
			{product &&
				<>
					<Presentation product={product} />
					<div id='scrollable-content '>

						<MenuList />
						<Description product={product} />
						<Characteristics product={product} />
					</div>
				</>
			}
		</article>
	);
}
