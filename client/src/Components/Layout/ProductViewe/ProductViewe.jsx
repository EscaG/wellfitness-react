import React from 'react';
import { Link } from 'react-router-dom';
import SpriteIcons from '../SpriteIcons/SpriteIcons';
import './prodview.scss';

export default function ProductViewe({ product, closeAndSetToLocal }) {
	const { name, gallery, _id, price, rating } = product || {};
	let url = '/product/' + encodeURI(name) + "/" + _id;


	return (
		<Link to={url} onClick={() => closeAndSetToLocal()} className='autocomplete-heder-list__item'>
			<img src={gallery && gallery[0].image} alt={name} />
			<span to={url} >{name}</span>
			<div className='autocomplete-heder-list__stars'>
				<svg height="12px" width="12px" className='feedback-staricon full'>
					<SpriteIcons icon={"star"} />
				</svg>
				<svg height="12px" width="12px" className='feedback-staricon full'>
					<SpriteIcons icon={"star"} />
				</svg>
				<svg height="12px" width="12px" className='feedback-staricon full'>
					<SpriteIcons icon={"star"} />
				</svg>
				<svg height="12px" width="12px" className='feedback-staricon full'>
					<SpriteIcons icon={"star"} />
				</svg>
				<svg height="12px" width="12px" className='feedback-staricon full'>
					<SpriteIcons icon={"star"} />
				</svg>

			</div>
			<div>
				{price?.sharePrice ?
					<>
						<h3 className='autocomplete-heder-list__shareprice'>{price?.sharePrice && price.sharePrice} &#8372;</h3>
						<h3 className='autocomplete-heder-list__fullprice'>{price?.fullPrice && price.fullPrice + String.fromCharCode(parseInt('0x20B4', 16))}</h3>
					</>
					:
					<h3 className='autocomplete-heder-list__fullprice stock'>{price?.fullPrice && price.fullPrice + String.fromCharCode(parseInt('0x20B4', 16))}</h3>
				}
			</div>
		</Link>
	);
}
