import React from 'react';
import { Link } from 'react-router-dom';

export default function ForHome({ img, index }) {
	return (
		<Link
			className={"grid__item_i" + index + " grid__item"}
			key={index++}
			to={"/categories/forhome/" + encodeURI(img.name)}
		>
			<h3 className={"grid__item_header" + index + " grid__item_header"}>{img.name}</h3>
			<img className={"grid__item_image_m" + index + " grid__item_image"} src={img.imgSrc} alt="home training" />
		</Link>
	);
}
