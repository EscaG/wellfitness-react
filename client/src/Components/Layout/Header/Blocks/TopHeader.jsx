import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { useSelector } from "react-redux";
import Modal from "../../ModalWindow/Modal";
import { LoginForm } from "../../../../Pages/Login/LoginForm";
import Burger from '../../BurgerMenu/Burger';
import ContentBurgerMenu from '../../BurgerMenu/ContentBurgerMenu';

import userGuest from '../img/user_guest.svg';

export default function TopHeader({ isActiveMenu, setIsActiveMenu, closeMenu }) {


	const isAuth = useSelector(state => state.user.isAuth);
	const user = useSelector(state => state.user.currentUser);
	console.log("состояние логина = ", isAuth);
	// console.log(user);
	// const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [activeModal, setActiveModal] = useState(false);
	const [isModal, setIsModal] = useState(false);
	// const [isMenuOpen, setIsMenuOpen] = useState(false);

	const contactsHeaderBorder = useRef()

	// const closeMenu = () => {
	// 	setIsActiveMenu(false)
	// }

	return (
		<div className="header__top top-header">
			{isModal &&
				<Modal active={activeModal} setActive={setActiveModal} setDisplay={setIsModal} >
					<LoginForm modalClass={"modallogin"} />
				</Modal>
			}
			<div className="top-header__content _container">
				{/* //todo левый блок с логотипом  */}
				<div className="top-header__column top-header__column_logo">
					<Link to="/" className="top-header__logo"><img src={logo} alt="logo" /></Link>
					<select data-da=" .adaptive-menu__login , 1329, 0" name="" id="" className="top-header__city">
						<option value="">Николаев</option>
						<option value="">Киев</option>
						<option value="">Одесса</option>
						<option value="">Харьков</option>
						<option value="">Львов</option>
					</select>
				</div>
				{/* // todo правый блок с контактами  */}
				<div className="top-header__column">
					{/* //! Адаптивное меню */}
					<Burger
						isActiveMenu={isActiveMenu}
						setIsActiveMenu={setIsActiveMenu}
					/>
					<ContentBurgerMenu
						// isMenuOpen={isMenuOpen}
						// setIsMenuOpen={setIsMenuOpen}
						border={contactsHeaderBorder}
						isActiveMenu={isActiveMenu}
						setIsActiveMenu={setIsActiveMenu}
					/>


					<div className="top-header__contacts contacts-header">

						<div data-da=".adaptive-menu__contacts, 1330, 1" className="contacts-header__column">
							<Link to='/' className="contacts-header__diller">Для диллеров</Link>
							<Link to='/' className="contacts-header__partner">Become a Partner</Link>
						</div>
						<div className="contacts-header__column">
							<div ref={contactsHeaderBorder} data-da=".adaptive-menu__contacts, 1329, 0" className="contacts-header__border">
								<a href="tel:88001234567" className="contacts-header__phone">+38 (0512) 000-000</a>
								<select name="" id="" className="contacts-header__city">
									<option value="">Киев</option>
									<option value="">Ник</option>
									<option value="">Одс</option>
								</select>
								<Link to='/' className="contacts-header__link"><span>Заказать звонок</span></Link>
							</div>
						</div>

						<div className="contacts-header__column">
							{!isAuth ?
								<Link to='/login'
									onClick={closeMenu}
									data-da=" .adaptive-menu__login , 1330, 1"
									className="contacts-header__login"><span>Войти</span>
								</Link>
								:
								<Link to='/profile/main'
									onClick={closeMenu}
									data-da=" .adaptive-menu__login , 1330, 1"
									className="contacts-header__persona">
									<span className='contacts-header__persona flex'>
										<span>{user.name}</span>
										<img src={user.avatar ? user.avatar : userGuest} alt={user.name} />
									</span>
								</Link>
							}
						</div>

					</div>

				</div>
			</div>
		</div >
	)
}
