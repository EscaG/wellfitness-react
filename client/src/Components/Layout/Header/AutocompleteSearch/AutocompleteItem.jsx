import React from 'react';
import { Link } from 'react-router-dom';

export default function AutocompleteItem({ product }) {
	const { name, _id } = product;
	// console.log(name, _id);

	// let slug;
	// if (props.item.slug !== undefined && props.item.slug !== null)
	// 	slug = props.item.slug;
	// else {
	// 	slug = encodeURI(props.item.name + "_" + props.item.vendor);
	// }

	// // Построенная ссылка
	// let url = "/product/" + slug + "/" + props.item._id;
	let url = '/product/' + encodeURI(name) + "/" + _id;

	return (
		<li>
			<Link to={url}>{name}</Link>
		</li>
	)

}
