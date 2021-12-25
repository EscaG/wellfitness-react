import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login, registration, checkAuth} from '../../../actions/user';
import {logout} from '../../../reducers/userReducer';

export function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const isAuth = useSelector(state => state.user.isAuth);
	const user = useSelector(state => state.user.currentUser);
	const dispatch = useDispatch();
	console.log(user)
	return (
		<div style={{padding: "100px"}}>
			<div>

				{!isAuth ?
					"Авторизируйтесь"
					:
					!user.isActivated ? "Ваш аккаунт не активирован, Вам отправлена ссылка не почту!" :
						"Аккант активирован"
				}
			</div>
			<input
				onChange={e => setEmail(e.target.value)}
				value={email}
				type="email" placeholder="Email"/>

			<input
				onChange={e => setPassword(e.target.value)}
				value={password}
				type="password" placeholder="Password"/>

			<button style={{padding: "10px"}} onClick={() => dispatch(login(email, password))}>Логин</button>
			<button style={{padding: "10px"}} onClick={() => dispatch(registration(email, password))}>регистрация</button>
			<button style={{padding: "10px"}} onClick={() => dispatch(checkAuth())}>Refresh token</button>
			<button style={{padding: "10px"}} onClick={() => dispatch(logout())}>Выйти</button>
		</div>

	);
};


