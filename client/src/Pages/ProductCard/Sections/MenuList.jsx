import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import './menulist.scss';

export default function MenuList() {
	return (
		<div className='list-productcard'>

			<ul className='list-productcard__list'>
				<li className='list-productcard__item'>
					<LinkScroll
						to='description-productcard' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
						className="list-productcard__link"
					>Описание</LinkScroll>
				</li>
				<li className='list-productcard__item'>
					<LinkScroll
						to='characteristic-productcard' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
						className="list-productcard__link"
					>Характеристики</LinkScroll>
				</li>
				<li className='list-productcard__item'>
					<LinkScroll
						to='feedback-produc' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
						className="list-productcard__link"
					>Отзывы</LinkScroll>
				</li>
				<li className='list-productcard__item'>
					<LinkScroll
						to='' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
						className="list-productcard__link"
					>Доставка и оплата</LinkScroll>
				</li>
				<li className='list-productcard__item'>
					<LinkScroll
						to='' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
						className="list-productcard__link"
					>Расрочка</LinkScroll>
				</li>
				<li className='list-productcard__item'>
					<LinkScroll
						to='' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
						className="list-productcard__link"
					>Услуги</LinkScroll>
				</li>
				<li className='list-productcard__item'>
					<LinkScroll
						to='promotion-layout' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
						className="list-productcard__link"
					>Покупают вместе</LinkScroll>
				</li>
			</ul>
		</div>
	);
}
