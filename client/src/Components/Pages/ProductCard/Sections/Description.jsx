/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './description.scss';

export default function Description() {
	const [focusLink, setFocusLink] = useState(null);

	const activeLink = (e) => {
		setFocusLink(e.target.id)
	}
	return (
		<section className='page-productcard__description description-productcard'>
			<ul className='description-productcard__menu-list list-productcard'>
				<li className='list-productcard__item'>
					<a
						onClick={(e) => activeLink(e)}
						href="#" id='description-link-dec'
						className={focusLink === "description-link-dec" ? "list-productcard__link active" : 'list-productcard__link'}>Описание</a>
				</li>
				<li className='list-productcard__item'>
					<a
						onClick={(e) => activeLink(e)}
						href="#" id='description-link-char'
						className={focusLink === "description-link-char" ? "list-productcard__link active" : 'list-productcard__link'}>Характеристики</a>
				</li>
				<li className='list-productcard__item'>
					<a
						onClick={(e) => activeLink(e)}
						href="#" id='description-link-feed'
						className={focusLink === "description-link-feed" ? "list-productcard__link active" : 'list-productcard__link'}>Отзывы</a>
				</li>
				<li className='list-productcard__item'>
					<a
						onClick={(e) => activeLink(e)}
						href="#" id='description-link-del'
						className={focusLink === "description-link-del" ? "list-productcard__link active" : 'list-productcard__link'}>Доставка и оплата</a>
				</li>
				<li className='list-productcard__item'>
					<a
						onClick={(e) => activeLink(e)}
						href="#" id='description-link-cred'
						className={focusLink === "description-link-cred" ? "list-productcard__link active" : 'list-productcard__link'}>Расрочка</a>
				</li>
				<li className='list-productcard__item'>
					<a
						onClick={(e) => activeLink(e)}
						href="#" id='description-link-ser'
						className={focusLink === "description-link-ser" ? "list-productcard__link active" : 'list-productcard__link'}>Услуги</a>
				</li>
				<li className='list-productcard__item'>
					<a
						onClick={(e) => activeLink(e)}
						href="#" id='description-link-buy'
						className={focusLink === "description-link-buy" ? "list-productcard__link active" : 'list-productcard__link'}>Покупают вместе</a>
				</li>
			</ul>
		</section>
	);
}
