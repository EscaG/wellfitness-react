import React, { useState, useCallback, useRef, useEffect } from 'react';
import { TestNoProps } from './TestNoProps';
import { TestProps } from './TestProps';
import { TestPropsCount } from './TestPropsCount';

export const PageHome = () => {
	const [value, setValue] = useState("");
	const [users, setUsers] = useState("");
	const [count, setCount] = useState(0);
	const [list, setList] = useState([1, 2, 3]);

	// Методы которые используются для тайминга автокомплита
	function useDebounce(callback, delay) {
		const timer = useRef(null);
		const debounceCallback = useCallback((...args) => {
			if (timer.current) {
				clearTimeout(timer.current)
			}
			timer.current = setTimeout(() => {
				callback(...args)
			}, delay);
		}, [callback, delay])
		return debounceCallback;
	}

	const searchUsers = useDebounce(async (value) => {
		await setUsers(value);
		// fetch("http://jsonplaceholder.typicode.com/users")
		// 	.then(response => {
		// 		console.log(response);
		// 		return response.json()
		// 	})
		// 	.then(res => setUsers(res))
		// 	.catch(e => {
		// 		console.log(e);
		// 	})

		// console.log(value);
	}, 500);

	useEffect(() => {
		console.log(users);
	}, [users])

	// console.log(value);


	const changeHandler = useCallback(async (e) => {
		setValue(e.target.value);
		searchUsers(e.target.value);
	}, [])


	// Метод для счетчика
	const increment = () => {
		setCount(count + 1);
	}
	const incrementToProps = useCallback(() => setCount(prev => prev + 1), []);


	console.log("Родительский компонент");

	return (
		<div className="">
			<p>таймаут автокомплита</p>
			<input type="text" placeholder='Поиск' onChange={changeHandler} />
			{/* Избегаем перерисовки дочернего компонента на момент изменения стейта в родительком  */}
			<h1>{count}</h1>
			<button onClick={increment}>INCREMENt</button>
			<TestNoProps />
			{/* Избегаем перерисовки дочернего компонента, если дочерний компонент принимает объект/массив 
			для рендера в тот момент когда меняется состояние в родительском компоненте 
			- этот объект обязательно длолжен храниться в стейте    */}
			<TestProps list={list} />
			{/* Избегаем перерисовки дочернего компонента при использовании метода
			 передаваемого из родительского компонента */}
			<TestPropsCount increment={incrementToProps} />
		</div>
	)

}
