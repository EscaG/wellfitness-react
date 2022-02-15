import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../http/actions/user';
import './style-loginform.scss';

export function LoginForm() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { errorMessage, isAuth } = useSelector(state => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginFunc = () => dispatch(login(email, password));
	const goProfile = () => navigate('/profile/main');
	const goRegistration = () => navigate('/registration');
	const emailRef = useRef(null);

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		if (isAuth) { goProfile() }
	}, [isAuth]);

	const handlerOnLogin = (e) => {
		if (e.keyCode === 13) {
			loginFunc();
		}
	}

	return (
		<section className='login-form'>
			<form onSubmit={e => e.preventDefault()} id='registrationform'>
				<h2 className='article__caption'>Вход в личный кабинет</h2>
				<input
					ref={emailRef}
					tabIndex="1"
					onChange={e => setEmail(e.target.value)}
					value={email}
					type="email" placeholder="Ваша почта"
					name="email"
					required />
				<input
					tabIndex="2"
					onChange={e => setPassword(e.target.value)}
					onKeyDown={e => handlerOnLogin(e)}
					value={password}
					type="password" placeholder="Пароль"
					name="password"
					required />
				<Link to='/' className='login-form__forgot'>Забыли пароль?</Link>
				<br />
				<button tabIndex="3" className='login-form__login' onClick={() => loginFunc()}>Войти</button>
				<br />
				{errorMessage && <div > {errorMessage}</div>}
				{/* {isAuth && goProfile()} */}
				<button tabIndex="4" type='button' className='login-form__registration' onClick={() => goRegistration()}>Зарегистрироваться</button>
			</form>

		</section>

	);
};


