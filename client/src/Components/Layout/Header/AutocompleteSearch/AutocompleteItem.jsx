import React from 'react';
import { Link } from 'react-router-dom';
import ProductViewe from '../../ProductViewe/ProductViewe';
import SpriteIcons from '../../SpriteIcons/SpriteIcons';

export default function AutocompleteItem({ modalActive, setModalActive, product, setToLocal }) {
	const { name, gallery, _id, price, rating } = product;
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

	const closeAndSetToLocal = () => {
		setToLocal(name);
		setTimeout(() => {
			setModalActive(!modalActive)
		}, 100);
	}

	return (
		// <div className='autocomplete-heder-list-block'>

		<ProductViewe product={product} closeAndSetToLocal={closeAndSetToLocal} />
		// </div>
	)

}
