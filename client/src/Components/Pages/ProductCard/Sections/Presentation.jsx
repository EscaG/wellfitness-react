import React from 'react';

export default function Presentation({ product }) {
	const { name } = product;
	return (
		<section className='page-productcard__presentation presentation-product'>
			<h1 className='presentation-product__header'>{name}</h1>
			<div className="presentation-product__wrapper wrapper-showroom">
				<div className="wrapper-showroom__gallery">
					<div className='wrapper-showroom__test'></div>

				</div>
				<div className="wrapper-showroom__configaration">

				</div>
			</div>
		</section>
	);
}
