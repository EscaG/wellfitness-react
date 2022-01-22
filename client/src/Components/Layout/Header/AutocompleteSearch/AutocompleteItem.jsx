import React from 'react';
import { Link } from 'react-router-dom';

export default function AutocompleteItem(props) {

	let slug;
	if (props.item.slug !== undefined && props.item.slug !== null)
		slug = props.item.slug;
	else {
		slug = encodeURI(props.item.name + "_" + props.item.vendor);
	}

	// Построенная ссылка
	let url = "/product/" + slug + "/" + props.item._id;

	return (
		<li>
			<Link to={url}>{props.item.name}</Link>
		</li>
	)

}
