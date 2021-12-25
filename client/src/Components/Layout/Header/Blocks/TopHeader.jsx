import React, {useState} from 'react'
import {Link} from "react-router-dom";
import logo from "../../logo.svg";
import AdaptiveMenu from "../AdaptiveMenu/AdaptiveMenu";
import {useSelector} from "react-redux";
import Modal from "../../ModalWindow/Modal";
import {LoginForm} from "../../../Pages/Login/LoginForm";

export default function TopHeader() {
	const isAuth = useSelector(state => state.user.isAuth);
	const [activeModal, setActiveModal] = useState(false);


	return (
		<div className="header__top top-header">
			<Modal active={activeModal} setActive={setActiveModal}>
				<LoginForm/>
			</Modal>
			<div className="top-header__content _container">
				{/* <!-- левый блок с логотипом --> */}
				<div className="top-header__column top-header__column_logo">
					<Link to="/" className="top-header__logo"><img src={logo} alt="logo"/></Link>
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
					{/* <-- Адаптивное меню --> */}
						<AdaptiveMenu></AdaptiveMenu>


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

						{!isAuth ?
							<div className="contacts-header__column">
								{/*<Link to={'login'} data-da=" .adaptive-menu__login , 1330, 1" href=""*/}
								{/*			className="contacts-header__login"><span>Войти</span>*/}
								{/*</Link>*/}
								<button  data-da=" .adaptive-menu__login , 1330, 1"
												 onClick={()=>setActiveModal(!activeModal)}
											className="contacts-header__login"><span>Войти</span>
								</button>
							</div>
							:
							<div className="contacts-header__column">
								<Link to={'/login'} data-da=" .adaptive-menu__login , 1330, 1" href=""
											className="contacts-header__persona"><span>Александр</span>
								</Link>
							</div>
						}

					</div>

				</div>

			</div>
		</div>
	)
}
