import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Categories() {
	let { from, to } = useParams();

	useEffect(() => {
		fetch("/api/products/category?category=" + to)
			.then(res => {
				return res.json()
			})
			.then(res => {
				console.log(res)
				// setProducts(res)
			})
			.catch(err =>
				console.log(err))
	}, [to]);

	return (
		<article>
			{from}{to}
		</article>
	);
}
