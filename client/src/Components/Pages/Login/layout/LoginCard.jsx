import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../../http/actions/user';

export default function LoginCard({ setRegistrationBtn }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { errorMessage, isAuth } = useSelector(state => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const goProfile = () => navigate('/profile/main');


	const loginFunc = (email, password) => {
		dispatch(login(email, password));
		// if (isAuth) {
		// 	goProfile()
		// }
	}

	return (
		<div id='registrationform'>
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
			<button className='login-form__login' onClick={() => loginFunc(email, password)}>Войти</button>
			{errorMessage ? <div > {errorMessage}</div> : ""}
			{isAuth && goProfile()}
			<br />
			<button type='button' className='login-form__registration' onClick={() => setRegistrationBtn(true)}>Зарегистрироваться</button>
		</div>
	)
}
