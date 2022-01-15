import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { login, registration, checkAuth } from '../../../http/actions/user';
import { logout } from '../../../http/reducers/userReducer';
import Modal from "../../Layout/ModalWindow/Modal";
import './style-loginform.scss';

export function LoginForm({ modalClass }) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const [registrationBtn, setRegistrationBtn] = useState(false);
	const isAuth = useSelector(state => state.user.isAuth);
	const user = useSelector(state => state.user.currentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const goProfile = () => navigate('/profile/main');


	const closeModal = () => {
		if (document.querySelector(".modal")) {
			document.querySelector(".modal").classList.remove('active')
		}
	}

	const loginFun = () => {
		dispatch(login(email, password));
		goProfile();
	}
	const registrationFun = () => {
		dispatch(registration(email, password, surname, name));
		if (isAuth) closeModal()
	}


	return (

		<section className={modalClass ? 'login-form ' + modalClass : 'login-form'}>
			{!registrationBtn ?
				<div id='registrationform'>
					{/* <div className="login-form__close" onClick={() => closeModal()}>					</div> */}
					{/* <button style={{ padding: "10px" }} onClick={() => dispatch(logout())}>Выйти</button> */}
					<h2 className='article__caption'>Вход в личный кабинет</h2>
					<input
						onChange={e => setEmail(e.target.value)}
						value={email}
						type="email" placeholder="Ваша почта"
						name="email"
						required />
					<input
						onChange={e => setPassword(e.target.value)}
						value={password}
						type="password" placeholder="Пароль"
						name="password"
						required />
					<Link to='/' className='login-form__forgot'>Забыли пароль?</Link>
					<br />
					<button className='login-form__login' onClick={() => loginFun()}>Войти</button>
					<br />
					<button type='button' className='login-form__registration' onClick={() => setRegistrationBtn(!registrationBtn)}>Зарегистрироваться</button>
					{/* <button style={{ padding: "10px" }} onClick={() => dispatch(checkAuth())}>Refresh token</button> */}
				</div>
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


