import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../../http/actions/user';

export default function RegistrationForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const { errorMessage, isAuth } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const goProfile = () => navigate('/profile/main');
	const goLogin = () => navigate('/login');


	const registrationFunc = () => {
		console.log("состояние регистрации = ", isAuth);
		dispatch(registration(email, password, surname, name));
	}

	return (
		<section className='registration-form '>
			<div id='registrationform'>
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
				<button className='login-form__login' onClick={() => registrationFunc()}>Регистрация</button>
				{errorMessage && <div > {errorMessage}</div>}
				{isAuth && goProfile()}
				<br />
				<button type='button' className='login-form__registration'
					onClick={() => goLogin()}>У меня есть аккаунт</button>
			</div>
		</section>

	)
}
