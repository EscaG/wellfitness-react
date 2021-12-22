import React from 'react';
import IdeasSection from '../../Layout/IdeasSection/IdeasSection';
import PromotionItem from '../../Layout/PromotionItem/PromotionItem';
import './style-forhome.scss';

import armchair from './img/armchair.png';
import eleptic from './img/eleptic.png';
import fitness from './img/fitness.png';
import power from './img/power.png';
import rowing from './img/rowing.png';
import ski from './img/ski.png';
import tables from './img/tables.png';
import trampoline from './img/trampoline.png';
import { Link } from 'react-router-dom';
// import treadmill from './img/treadmill.png';
// import velo from './img/velo.png';

export default function CatalogForHome() {
	const catalogList = [
		{
			image: armchair,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},
		{
			image: eleptic,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},
		{
			image: fitness,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},
		{
			image: power,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},
		{
			image: rowing,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},
		{
			image: ski,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},
		{
			image: tables,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},
		{
			image: trampoline,
			title: "",
			items: [
				{
					name: "",
					pices: ""
				},
			]
		},

	]
	return (
		<article className='article-catalogforhome catalogforhome-catalog'>
			<section className='catalogforhome-catalog__section'>
				<div className='catalogforhome-catalog__grid'>

					{catalogList.map((item, index) =>
						<div className='catalog__card' key={index}>
							<div className='catalog__item-image'>
								<img className='catalog__image' src={item.image} alt="training" />
							</div>
						</div>

					)}

				</div>
			</section>
			<IdeasSection />
			<PromotionItem />
		</article>
	)
}
