import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./style-autocompleteheader.scss";
import clearText from "../img/close.svg";
import AutocompleteItem from './AutocompleteItem';
import { useDispatch } from 'react-redux';
import { setConditionAutocomplite } from '../../../../http/reducers/modalReducerAutocomplite';
export default function AutocompleteHeader() {

	const [searchProduct, setSearchProduct] = useState("");
	const [products, setProducts] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		if (document.getElementById("search-autocomplete")) {
			document.getElementById("search-autocomplete").focus();
		}
	}, []);


	const changeHandler = useCallback(async (e) => {
		setSearchProduct(e.target.value);
		searchUsers(e.target.value);
	}, []);

	const searchUsers = useDebounce(async (value) => {
		await fetch("http://localhost:5000/api/products/autocomplete?searchProduct=" + value)
			.then(res => {
				return res.json()
			})
			.then(res => {
				console.log(res)
				setProducts(res)
			})
			.catch(err =>
				console.log(err))
	}, 500);

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

	const clearAutocomplete = () => {
		// document.getElementById("search-autocomplete").value = "";
		dispatch(setConditionAutocomplite(false))
	}

	return (
		<div className='autocomplete-header__main'>
			<div className="autocomplete-header__block">
				<div className='autocomplete-header__search-container search-container'>
					<div className='search-container__onbtn'>
						<button onClick={() => clearAutocomplete()}><img src={clearText} alt="clear" /></button>
					</div>
					<input onChange={changeHandler} id='search-autocomplete' type="text" placeholder='Поиск' />
				</div>
				<ul>
					{products.map(product =>
						// <div key={product._id}>{product.name}</div>
						<AutocompleteItem key={product._id} product={product} />
					)}
					<li></li>
				</ul>
			</div>
		</div>
	);
}
