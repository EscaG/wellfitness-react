/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style-header.scss";
import logo from "../logo.svg";
import comparison from "./img/comparison.svg";
import cart from "./img/cart.svg";
import favorites from "./img/favorites.svg";
import DynamicAdapt from '../dynamicAdapt_dev';
import { openMenu, adaptiveMenuCatalogHome, adaptiveMenuCatalogClub, adaptiveMenuCatalogBack } from "./js/burger";


export const Header = () => {

	useEffect(() => {
		// Открываю и закрываю меню
		openMenu();
		new DynamicAdapt("max").init();
	}, [])



	return (
		< header className="header">
			{/* <!-- Верхняя часть - логотип + инфо --> */}
			<div className="header__top top-header">
				<div className="top-header__content _container">
					{/* <!-- левый блок с логотипом --> */}
					<div className="top-header__column top-header__column_logo">
						<Link to="/" className="top-header__logo"><img src={logo} alt="" /></Link>
						<select data-da=" .adaptive-menu__login , 1329, 0" name="" id="" className="top-header__city">
							<option value="">Николаев</option>
							<option value="">Киев</option>
							<option value="">Одесса</option>
							<option value="">Харьков</option>
							<option value="">Львов</option>
						</select>
					</div>
					{/* <!-- правый блок с контактами --> */}
					<div className="top-header__column">
						{/* <!-- начало адаптивного меню --> */}
						<div className="top-header__menu adaptive-menu">
							<div className="adaptive-menu__icon-menu menu-icon">
								<span></span>
								<span></span>
								<span></span>

							</div>
							{/* <!-- Весь контент меню --> */}
							<div className="adaptive-menu__content">
								{/* <!-- Блок для логина --> */}
								<div className="adaptive-menu__login"> </div>
								<div className="adaptive-menu__main-menu">
									<button
										onClick={adaptiveMenuCatalogHome}
										className="adaptive-menu__main-menu_home" type="button">
										Для дома
									</button>
									<button
										onClick={adaptiveMenuCatalogClub}
										className="adaptive-menu__main-menu_club" type="button">
										Для фитнес клубов
									</button>
								</div>
								{/* <!-- Начало блока для подкаталога --> */}
								<div className="subdirectory__container sub_home">
									<button
										onClick={adaptiveMenuCatalogBack}
										type="button">Назад</button>
									<h3>Для Дома</h3>
									<ul className="subdirectory__list list-home">
										<li><a href="" className="subdirectory__link"><span>Беговые дорожки</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Эллиптические тренажеры</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Велотренажеры</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Горнолыжные тренажеры</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Силовые тренажеры</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Гребные тренажеры</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Батуты</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Игровые столы</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Массажные кресла</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Фитнес аксессуары</span></a></li>
									</ul>
								</div>
								<div className="subdirectory__container sub_club">
									<button
										onClick={adaptiveMenuCatalogBack}
										type="button">Назад</button>
									<h3>Для фитнес клубов</h3>
									<ul className="subdirectory__list list_club" >
										<li><a href="" className="subdirectory__link"><span>Кардиотренажеры</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Силовые тренажеры</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Функциональный тренинг</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Свободные веса</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Аэробика</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Wellness, СПА, массаж</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Реабилитация и спортивная медицина</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Оборудование для бассейна</span></a></li>
										<li><a href="" className="subdirectory__link"><span>Средства гигиены</span></a></li>
									</ul>
								</div>
								{/* <!-- Конец блока для подкаталога --> */}
								{/* <!-- Блок для всех контактов --> */}
								<div className="adaptive-menu__contacts"></div>
							</div>
						</div>
						{/* <!-- Конец адаптивного меню --> */}
						<div className="top-header__contacts contacts-header">
							<div data-da=".adaptive-menu__contacts, 1330, 1" className="contacts-header__column">
								<a href="#" className="contacts-header__diller">Для диллеров</a>
								<a href="#" className="contacts-header__partner">Become a Partner</a>
							</div>
							<div className="contacts-header__column">
								<div data-da=".adaptive-menu__contacts, 1329, 0" className="contacts-header__border">
									<a href="tel:88001234567" className="contacts-header__phone">+38 (0512) 000-000</a>
									<select name="" id="" className="contacts-header__city">
										<option value="">Киев</option>
										<option value="">Ник</option>
										<option value="">Одс</option>
									</select>
									<a href="#" className="contacts-header__link"><span>Заказать звонок</span></a>
								</div>
							</div>
							<div className="contacts-header__column">
								<a data-da=" .adaptive-menu__login , 1330, 1" href="" className="contacts-header__login"><span>Войти</span></a>
							</div>
						</div>
					</div>

				</div>
			</div>


			<div className="header__middle middle-header">
				<div className="middle-header__content _container">

					<div className="middle-header__subdirectory">

						<div className="middle-header__column">
							<div className="middle-header__catalog catalog-header">
								<a data-da=".adaptive-menu__main-menu, 1330, 0" href=""
									className="catalog-header__item_catalog catalog-header__item"><span>Каталог</span></a>
								<a data-da=".top-header__contacts, 1331, 0" href=""
									className="catalog-header__item_search catalog-header__item"></a>
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
								<svg width="17" height="18" >
									<title>comparison</title>
									<use xlinkHref={comparison + "#comparison"}></use>
								</svg>
							</a> </li>
							<li><a href="" className="actions-header__item_favorites actions-header__item">
								<svg width="24" height="21" >
									<title>favorites</title>
									<use xlinkHref={favorites + "#favorites"}></use>
								</svg>

								<div><span>1</span></div>
							</a></li>
							<li><a href="" className="actions-header__item_cart actions-header__item">
								<svg width="21" height="26" >
									<title>cart</title>
									<use xlinkHref={cart + "#cart"}></use>
								</svg>
								<div><span>1</span></div>
							</a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- Нижняя часть для подкаталога--> */}
			<div className="header__bottom bottom-header">
				<div className="bottom-header__content _container">
					<div className="bottom-header__column">
						<div className="bottom-header__categories categories-select">
							<select name="" className="categories-select__item_home categories-select__item" id="">
								<option value="">Для дома</option>
								{/* <!-- 	<option value="">Беговые дорожки</option>
						<option value="">Эллиптические тренажеры</option>
						<option value="">Велотренажеры</option>
						<option value="">Горнолыжные тренажеры</option>
						<option value="">Силовые тренажеры</option>
						<option value="">Гребные тренажеры</option>
						<option value="">Батуты</option>
						<option value="">Игровые столы</option>
						<option value="">Массажные кресла</option>
						<option value="">Фитнес аксессуары</option> --> */}
							</select>
							<span></span>
							<select name="" className="categories-select__item_club categories-select__item" id="">
								<option value="">Для фитнес клуба</option>
								{/* <!-- <option value="">Кардиотренажеры</option>
						<option value="">Силовые тренажеры</option>
						<option value="">Функциональный тренинг</option>
						<option value="">Свободные веса</option>
						<option value="">Аэробика</option>
						<option value="">Wellness, СПА, массаж</option>
						<option value="">Реабилитация и спортивная медицина</option>
						<option value="">Оборудование для бассейна</option>
						<option value="">Средства гигиены</option> --> */}
							</select>
						</div>
					</div>
				</div>
			</div>




			{/* <Link to="/" > Main</Link >
				<Link to="/about" >О компании</Link> */}
		</header >
	)
}
