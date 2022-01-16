import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../../../http/actions/user';

export default function RegistrationCard({ setRegistrationBtn }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const { errorMessage, isAuth } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const goProfile = () => navigate('/');
	dispatch(registration(email, password, surname, name));



	const registrationFun = () => {
		dispatch(registration(email, password, surname, name));
	}

	return (
		<div id='loginform'>
			{/* <div className="login-form__close" onClick={() => closeModal()}>					</div> */}
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
				onClick={() => setRegistrationBtn(false)}>У меня есть аккаунт</button>
			{isAuth && goProfile()}
		</div>
	)
}
