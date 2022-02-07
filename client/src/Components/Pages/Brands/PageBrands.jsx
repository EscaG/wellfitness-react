import React from 'react';
import './brands.scss';

import brand1 from './brands/brand1.png';
import brand2 from './brands/brand2.png';
import brand3 from './brands/brand3.png';
import brand4 from './brands/brand4.png';
import brand5 from './brands/brand5.png';
import brand6 from './brands/brand6.png';
import brand7 from './brands/brand7.png';
import brand8 from './brands/brand8.png';
import brand9 from './brands/brand9.png';
import brand10 from './brands/brand10.png';
import brand11 from './brands/brand11.png';
import brand12 from './brands/brand12.png';
import brand13 from './brands/brand13.png';
import brand14 from './brands/brand14.png';
import brand15 from './brands/brand15.png';
import brand16 from './brands/brand16.png';
import brand17 from './brands/brand17.png';
import brand18 from './brands/brand18.png';
import brand19 from './brands/brand19.png';
import brand20 from './brands/brand20.png';
import brand21 from './brands/brand21.png';
import brand22 from './brands/brand22.png';
import brand23 from './brands/brand23.png';



export default function PageBrands() {

	const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11,
		brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20, brand21, brand22, brand23];

	return (
		<section className='brands-page'>

			<h1 className='brands-page__title'>Бренды</h1>
			<div className="brands-page-wrapper ">
				{brands.map(item =>
					<div key={item}>
						<img className='brands-page-wrapper__image'
							src={item} alt="brand" />
					</div>
				)}
			</div>
		</section>
	)

}
