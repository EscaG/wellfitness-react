import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setConditionAutocomplite } from '../../../http/reducers/modalReducerAutocomplite';
import Presentation from './Sections/Presentation';
import './style-productcard.scss';


export default function ProductCardPage() {
	const [product, setProduct] = useState({});
	// const isModal = useSelector(state => state.modalAutocomplete.currentCondition);
	const dispatch = useDispatch();
	let params = useParams();

	console.log(product);

	useEffect(() => {
		dispatch(setConditionAutocomplite(false));

		fetch("http://localhost:5000/api/product/byid/" + params.id)
			.then(res => {
				// console.log(res);
				return res.json();
			})
			.then(res => {
				setProduct(res);
				// setIsLoad(true);
				console.log(res);
			})
			.catch(err =>
				console.log(err))

	}, [params.id]);


	// useEffect(() => {
	// },
	// [params.id]);



	return (
		<article className='page-productcard'>
			<Presentation product={product} />
		</article>
	);
}
