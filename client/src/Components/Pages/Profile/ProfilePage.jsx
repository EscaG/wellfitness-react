import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';
import './style-profilepage.scss';
import { useDispatch } from "react-redux";
import { logout } from '../../../http/reducers/userReducer';
import { useSelector } from "react-redux";
export default function ProfilePage() {
	const setActiveLink = ({ isActive }) => isActive ? "active-link" : '';
	const { currentUser, isLoading, isAuth } = useSelector(state => state.user);
	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const goLogin = () => navigate('/login');
	// console.log(currentUser, isLoading);

	useEffect(() => {
		if (!isAuth) {
			setTimeout(() => {

				goLogin()
			}, 200)
		}
	}, []);

	const handleLogOut = () => {
		dispatch(logout());
		goLogin();
		localStorage.removeItem('favorites')
	}

	return (
		<>
			{!isLoading ?
				<div className='loader-block'>
					<div className="loader"></div>
				</div>
				:
				<div className='page-profile profile'>
					<h1 className='profile__title'>Личный кабинет</h1>
					<div className='profile__wrapper'>
						<section className='profile__center main-profile'>
							<ul className='main-profile__menu menu-profile'>
								<li className='menu-profile__item'>
									<NavLink className={'menu-profile__link ' + setActiveLink} to='main'>Главная</NavLink>
								</li>
								<li className='menu-profile__item'>
									<NavLink className={'menu-profile__link ' + setActiveLink} to='delivery'>Доставка</NavLink>
								</li>
								<li className='menu-profile__item'>
									<NavLink className={'menu-profile__link ' + setActiveLink} to='orders'>Заказы</NavLink>
								</li>
								<li className='menu-profile__item'>
									<NavLink className={'menu-profile__link ' + setActiveLink} to='discount'>Скидка</NavLink>
								</li>
								<li className='menu-profile__item'>
									<NavLink className={'menu-profile__link ' + setActiveLink} to='bonuses'>Бонусы</NavLink>
								</li>
								<li className='menu-profile__item'>
									<NavLink className={'menu-profile__link ' + setActiveLink} to='instructions'>Инструкции</NavLink>
								</li>
								<li className='menu-profile__item'>
									<NavLink className={'menu-profile__link ' + setActiveLink} to='appeals'>Ваши обращения</NavLink>
								</li>
							</ul>
							<Outlet />
						</section>

						<section className='profile__mycontact mycontact-profile'>
							{!currentUser.isActivated &&
								<div className='tooltip'>
									<h3>Активируйте аккаунт</h3>
									<span className='tooltip__quest'>?</span>
									<span className='tooltip__answer'>На вашу электронную почту выслано письмо для активации.</span>
								</div>
							}
							<div className='mycontact-profile__name'>{currentUser.surname} {currentUser.name}</div>
							<div className='mycontact-profile__email'>{currentUser.email}</div>
							<div className="mycontact-profile__phone">+7 (900) 000-00-00</div>
							<NavLink className={'mycontact-profile__settings ' + setActiveLink} to='editprofile'>Редактировать профиль</NavLink>
							<button className='mycontact-profile__logout' onClick={() => handleLogOut()}>Выйти</button>
						</section>
					</div>
				</div>
			}
		</>

	)
}
