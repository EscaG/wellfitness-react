import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { login, registration, checkAuth } from '../../../http/actions/user';
import { logout } from '../../../http/reducers/userReducer';
import Modal from "../../Layout/ModalWindow/Modal";
import LoginCard from './layout/LoginCard';
import './style-loginform.scss';

export function LoginForm({ modalClass }) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");

	const [registrationBtn, setRegistrationBtn] = useState(false);
	const isAuth = useSelector(state => state.user.isAuth);
	const user = useSelector(state => state.user.currentUser);
	const { errorMessage } = useSelector(state => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const goProfile = () => navigate('/profile/main');

	const closeModal = () => {
		if (document.querySelector(".modal")) {
			document.querySelector(".modal").classList.remove('active')
		}
	}


	const registrationFun = () => {
		dispatch(registration(email, password, surname, name));
		if (isAuth) closeModal()
	}


	return (

		<section className={modalClass ? 'login-form ' + modalClass : 'login-form'}>
			{/* <div>
				<button className='login-form__login' onClick={() => loginFun("escagt82@gmail.com", "1111")}>Войти</button>
				<button className='mycontact-profile__logout' onClick={() => { dispatch(logout()) }}>Выйти</button>
				{isAuth ?
					<h1>Login true</h1>
					:
					<h1>Login false</h1>
				}
			</div> */}
			{!registrationBtn ?
				// <div id='registrationform'>
				// 	<h2 className='article__caption'>Вход в личный кабинет</h2>
				// 	<input
				// 		onChange={e => setEmail(e.target.value)}
				// 		value={email}
				// 		type="email" placeholder="Ваша почта"
				// 		name="email"
				// 		required />
				// 	<input
				// 		onChange={e => setPassword(e.target.value)}
				// 		value={password}
				// 		type="password" placeholder="Пароль"
				// 		name="password"
				// 		required />
				// 	<Link to='/' className='login-form__forgot'>Забыли пароль?</Link>
				// 	<br />
				// 	<button className='login-form__login' onClick={() => loginFun()}>Войти</button>
				// 	<br />
				// 	<button type='button' className='login-form__registration' onClick={() => setRegistrationBtn(!registrationBtn)}>Зарегистрироваться</button>
				// </div>
				<LoginCard
					// loginFun={loginFun}
					setRegistrationBtn={setRegistrationBtn}
				/>
				:
				<div id='loginform'>
					<div className="login-form__close" onClick={() => closeModal()}>					</div>
					<h2 className='article__caption'>Регистрация</h2>
					<input
						onChange={e => setEmail(e.target.value)}
						value={email}
						name='email'
						type="email" placeholder="Ваша почта"
						required />
					<input
						onChange={e => setPassword(e.target.value)}
						value={password}
						name='password'
						type="password" placeholder="Пароль"
						required />
					<input
						onChange={e => setSurname(e.target.value)}
						value={surname}
						name='surname'
						type="text" placeholder="Фамилия"
						required />
					<input
						onChange={e => setName(e.target.value)}
						value={name}
						name='name'
						type="text" placeholder="Имя"
						required />
					<button className='login-form__login' onClick={() => registrationFun()}>Регистрация</button>
					<br />
					<button type='button' className='login-form__registration'
						onClick={() => setRegistrationBtn(!registrationBtn)}>У меня есть аккаунт</button>
				</div>

			}
		</section>

	);
};


