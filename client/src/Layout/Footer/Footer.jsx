/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style-footer.scss';
import DynamicAdapt from '../dynamicAdapt_dev';
import logo from "../logo.svg";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import youtube from "./img/youtube.svg";
import mastercard from "./img/mastercard.svg";
import paypal from "./img/paypal.svg";
import visa from "./img/visa.svg";
import planet from "./img/planet.svg";

export const Footer = () => {

	useEffect(() => {
		// Открываю и закрываю меню
		new DynamicAdapt("max").init();
	}, [])


	return (
		<footer className="footer">
			{/* // ! Верхняя половина футера */}
			<div className="footer__top top-footer container">
				{/* // todo Верхний футер разделен на меню и контакты */}
				<div className="top-footer__content _container row">
					{/* // ? контент разделен на (8+1) и 3 колонок */}
					{/* //* 8 колонок */}
					<div className="top-footer__column col-md-9 col-lg-8">
						<div className="top-footer__menu menu-bottom row">
							<div className="menu-bottom__column col-6 col-xs-6 col-sm-3 col-md-3 col-lg-3">
								<Link to="/" className="nav-footer__link">Каталог</Link>
								<ul className="nav-footer__list nav-footer">
									<li className="nav-footer__item"><Link to="/" >Для дома</Link></li>
									<li className="nav-footer__item"><Link to="/" >Для фитнес клубов</Link></li>
									<li className="nav-footer__item"><Link to="/" >Акции</Link></li>
									<li className="nav-footer__item"><Link to="/" >Идеи и подборки</Link></li>
									<li className="nav-footer__item"><Link to="/" >Новинки</Link></li>
									<li className="nav-footer__item"><Link to="/brands"  >Наши бренды</Link></li>
								</ul>
							</div>
							<div className="menu-bottom__column col-6 col-xs-6 col-sm-3 col-md-3 col-lg-3">
								<Link to="/support" className="nav-footer__link">Поддержка</Link>
								<ul className="nav-footer__list nav-footer">
									<li className="nav-footer__item"><Link to="/" >Доставка и оплата</Link></li>
									<li className="nav-footer__item"><Link to="/" >Условия возврата</Link></li>
									<li className="nav-footer__item"><Link to="/" >Сервисная заявка</Link></li>
									<li className="nav-footer__item"><Link to="/" >Обслуживание фитнес клубов</Link></li>
									<li className="nav-footer__item"><Link to="/" >FAQ</Link></li>
									<li className="nav-footer__item"><Link to="/" >Инструкции</Link></li>
									<li className="nav-footer__item"><Link to="/" >Гарантия</Link></li>
								</ul>
							</div>
							<div className="menu-bottom__column col-6 col-xs-6 col-sm-3 col-md-3 col-lg-3">
								<Link to="/services" className="nav-footer__link">Услуги</Link>
								<ul className="nav-footer__list nav-footer">
									<li className="nav-footer__item"><Link to="/" >3D проект</Link></li>
									<li className="nav-footer__item"><Link to="/" >Консалтинг</Link></li>
									<li className="nav-footer__item"><Link to="/" >Бизнес планирование</Link></li>
									<li className="nav-footer__item"><Link to="/" >Лизинг</Link></li>
									<li className="nav-footer__item"><Link to="/" >Trade-IN</Link></li>
									<li className="nav-footer__item"><Link to="/" >Врассрочну</Link></li>
								</ul>
							</div>
							<div className="menu-bottom__column col-6 col-xs-6 col-sm-3 col-md-3 col-lg-3">
								<Link to="/about" className="nav-footer__link">О компании</Link>
								<ul className="nav-footer__list nav-footer">
									<li className="nav-footer__item"><Link to="/" >О нас</Link></li>
									<li className="nav-footer__item"><Link to="/" >Наша миссия</Link></li>
									<li className="nav-footer__item"><Link to="/" >Наша команда</Link></li>
									<li className="nav-footer__item"><Link to="/" >Наши проекты</Link></li>
									<li className="nav-footer__item"><Link to="/" >Новости</Link></li>
									<li className="nav-footer__item"><Link to="/" >Блог</Link></li>
									<li className="nav-footer__item"><Link to="/" >Где купить</Link></li>
									<li className="nav-footer__item"><Link to="/" >Контакты</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="top-footer__column d-xs-none d-lg-block col-lg-1">						</div>

					{/* //* 3 колонки */}
					<div className="top-footer__column col-md-3 col-lg-3">
						<div className="top-footer__contacts contacts-footer row">
							<div className="contacts-footer__column subscribe col-xs-6 col-sm-3 col-md-12 col-lg-12">
								<div>
									<ul>
										<li><a href="#" className='contacts-footer__subscribe'>Подписаться на расылку</a></li>
										<li><a href="#" className='contacts-footer__offerta'>Политика конфиденциальности</a></li>
										<li><a href="#" className='contacts-footer__offerta'>Публичная офферта</a></li>
									</ul>

								</div>
							</div>
							<div className="contacts-footer__column contact col-xs-6 col-sm-3 col-md-12 col-lg-12">
								<ul className='contacts__list'>
									<li>
										<a href="tel:88001234567" className='contacts__link'>+38(044)123-45-67</a>
										<span className='contacts__descript'>для киева</span>
									</li>
									<li>
										<a href="tel:88001234567" className='contacts__link'>8(800)123-22-33</a>
										<span className='contacts__descript'>для Украины</span>
									</li>
									<li><a href="#" className='contacts__call'>Заказать звонок</a></li>
								</ul>
							</div>
							<div className="contacts-footer__column email col-xs-6 col-sm-3 col-md-12 col-lg-12">
								<ul>
									<li ><p>wellfitness@wellfit.ru</p></li>
									<li><a href="mailto:wellfitness@wellfit.ru">Написать</a></li>
								</ul>


							</div>
						</div>
					</div>

				</div>
			</div>

			{/* // !  Нижняя половина футера */}
			<div className="footer__bottom bottom-footer ">
				<div className="bottom-footer__content _container ">
					{/* //? Контент разделен на 4 ровные колонки */}
					{/* <div className="bottom-footer__column bottom-footer__column_logo col-xs-4 col-sm-4 col-md-3 col-lg-3"> */}
					<div className="bottom-footer__column bottom-footer__column_logo ">
						<img className='bottom-footer__logo' src={logo} alt="logo" />
						<div className='bottom-footer__rights'>© WellFitness. 2007 Все права защищены</div>
					</div>
					{/* <div className="bottom-footer__column col-xs-4 col-sm-4 col-md-3 col-lg-3"> */}
					<div className="bottom-footer__column social-column">
						<ul className="bottom-footer__list list">
							<li className='list__item_social social'><a href="">
								<svg className='bottom-footer__column_icons' width="24" height="24" >
									<title>instagram</title>
									<use xlinkHref={instagram + "#instagram"}></use>
								</svg>
							</a></li>
							<li className='list__item_social social'><a href="">
								<svg className='bottom-footer__column_icons' width="24" height="24" >
									<title>facebook</title>
									<use xlinkHref={facebook + "#facebook"}></use>
								</svg>
							</a></li>
							<li className='list__item_social social'><a href="">
								<svg className='bottom-footer__column_icons' width="24" height="24" >
									<title>youtube</title>
									<use xlinkHref={youtube + "#youtube"}></use>
								</svg>
							</a></li>
						</ul>
					</div>

					<div data-da=".top-footer__contacts, 991, 2" className="bottom-footer__column partner-diller__block col-xs-6 col-sm-3 col-md-3 col-lg-3">
						{/* <div data-da=".top-footer__contacts, 991, 2" className="bottom-footer__column "> */}
						<div className='bottom-footer__partner-diller  partner-diller'>
							<a href="#" className="partner-diller__partner">Become a Partner</a>
							<a href="#" className="partner-diller__diller">Для диллеров</a>
						</div>
					</div>
					{/* <div className="bottom-footer__column col-xs-4 col-sm-4 col-md-3 col-lg-3"> */}
					<div className="bottom-footer__column payment-column">
						<ul className="bottom-footer__list list">
							<li className='list__item_payment payment'><a href="#">
								<svg className='bottom-footer__column_icons' width="40" height="40" >
									<title>visa</title>
									<use xlinkHref={visa + "#visa"}></use>
								</svg>
							</a></li>
							<li className='list__item_payment payment'><a href="#">
								<svg className='bottom-footer__column_icons' width="40" height="40" >
									<title>mastercard</title>
									<use xlinkHref={mastercard + "#mastercard"}></use>
								</svg>
							</a></li>
							<li className='list__item_payment payment'><a href="#">
								<svg className='bottom-footer__column_icons' width="30" height="32" >
									<title>planet</title>
									<use xlinkHref={planet + "#planet"}></use>
								</svg>
							</a></li>
							<li className='list__item_payment payment'><a href="#">
								<svg className='bottom-footer__column_icons' width="55" height="20" >
									<title>paypal</title>
									<use xlinkHref={paypal + "#paypal"}></use>
								</svg>
							</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer >
	)
}
