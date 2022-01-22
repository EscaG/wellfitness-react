import React, { useState } from 'react'
import { Link } from "react-router-dom";
import comparison from "../img/comparison.svg";
import favorites from "../img/favorites.svg";
import cart from "../img/cart.svg";
import Modal from '../../ModalWindow/Modal';
import AutocompleteHeader from '../AutocompleteSearch/AutocompleteHeader';

export default function MiddleHeader() {

	const [modalActive, setModalActive] = useState(false);


	return (
		<div className="header__middle middle-header">
			<div className="middle-header__content _container">

				<div className="middle-header__subdirectory">

					<div className="middle-header__column">
						<div className="middle-header__catalog catalog-header">
							<Link to='/' data-da=".adaptive-menu__main-menu, 1330, 0"
								className="catalog-header__item_catalog catalog-header__item"><span>Каталог</span></Link>

							<button
								onClick={() => setModalActive(true)}
								data-da=".top-header__contacts, 1331, 0"
								className="catalog-header__item_search catalog-header__item"
							>

							</button>
							{modalActive ?
								<Modal active={modalActive} setActive={setModalActive}>
									<AutocompleteHeader />
								</Modal>
								: null
							}

						</div>
					</div>
					<div className="middle-header__column">
						<div data-da=".adaptive-menu__main-menu, 1330, 4" className="middle-header__menu menu">


							<nav className="menu__body">
								<ul className="menu__list">
									<li><Link to="/brands" className="menu__link">Бренды</Link></li>
									<li><Link to="/service" className="menu__link">Сервис</Link></li>
									<li><Link to="/services" className="menu__link">Услуги</Link></li>
									<li><Link to="/support" className="menu__link">Поддержка</Link></li>
									<li><Link to="/about" className="menu__link">О компании</Link></li>
									<li><Link to="/blog" className="menu__link">Блог</Link></li>
									<li><Link to="/showroom" className="menu__link">Где купить</Link></li>
									<li><Link to="/contacts" className="menu__link">Контакты</Link></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="middle-header__column">
					<ul data-da=".top-header__contacts , 1330 , 1" className="middle-header__actions actions-header">
						{/* <!-- Добавил доп div в каждую ссылку для центровки цифры --> */}
						<li><a href="" className="actions-header__item_comparison actions-header__item">
							<div><span>15</span></div>
							<svg width="17" height="18">
								<title>comparison</title>
								<use xlinkHref={comparison + "#comparison"}></use>
							</svg>
						</a></li>
						<li><a href="" className="actions-header__item_favorites actions-header__item">
							<svg width="24" height="21">
								<title>favorites</title>
								<use xlinkHref={favorites + "#favorites"}></use>
							</svg>

							<div><span>1</span></div>
						</a></li>
						<li><a href="" className="actions-header__item_cart actions-header__item">
							<svg width="21" height="26">
								<title>cart</title>
								<use xlinkHref={cart + "#cart"}></use>
							</svg>
							<div><span>1</span></div>
						</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}
