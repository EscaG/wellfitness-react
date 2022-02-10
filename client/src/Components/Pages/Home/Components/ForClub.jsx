import React from 'react';
import { Link } from 'react-router-dom';

export default function ForClub({ img, index }) {
	return (
		<Link
			className={"grid__item_i" + index + " grid__item grid__item_club" + index}
			key={index++}
			to={"/categories/forclub/" + encodeURI(img.name)}
		>
			<h3 className={"grid__item_header" + index + " grid__item_header grid__item_header_club" + index}>{img.name}</h3>
			<img className={"grid__item_image_m" + index + " grid__item_image grid__item_image_club" + index} src={img.imgSrc} alt="home training" />
		</Link>

	);
}
