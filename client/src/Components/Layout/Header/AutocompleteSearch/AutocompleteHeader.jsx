import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./style-autocompleteheader.scss";
import clearText from "../img/close.svg";
import AutocompleteItem from './AutocompleteItem';
import { useDispatch } from 'react-redux';
import { setConditionAutocomplite } from '../../../../http/reducers/modalReducerAutocomplite';
import SpriteIcons from '../../SpriteIcons/SpriteIcons';
import { useNavigate } from 'react-router-dom';
import { setSearch } from '../../../../http/reducers/searchReducer';


export default function AutocompleteHeader() {

	const [searchProduct, setSearchProduct] = useState("");
	const [products, setProducts] = useState([]);
	const searchRef = useRef(null);
	const navigate = useNavigate();
	const goProductCard = () => navigate('search/' + searchProduct);
	const dispatch = useDispatch();

	useEffect(() => {
		searchRef.current.focus();
	}, []);


	const changeHandler = useCallback(async (e) => {
		setSearchProduct(e.target.value);
		searchProducts(e.target.value);
	}, []);

	const searchProducts = useDebounce(async (value) => {
		if (value.length > 2) {

			await fetch("/api/products/autocomplete?searchProduct=" + value)
				.then(res => {
					return res.json()
				})
				.then(res => {
					console.log(res)
					setProducts(res)
				})
				.catch(err =>
					console.log(err))
		}
	}, 300);

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

	const closeModalAutocomplete = () => {
		dispatch(setConditionAutocomplite(false))
	}
	const handlerSearch = (e) => {
		if (e.keyCode === 13) {
			// dispatch(setSearch(searchProduct));
			closeModalAutocomplete();
			goProductCard()
			// console.log("enter");
		}
	}
	const handleAllSearch = () => {
		closeModalAutocomplete();
		goProductCard()

	}

	return (
		<div className='autocomplete-header__main'>
			<div className="autocomplete-header__block">
				<div className='autocomplete-header__search-container search-container'>
					<input
						ref={searchRef} onChange={changeHandler} onKeyDown={e => handlerSearch(e)}
						id='search-autocomplete' type="text" placeholder='Поиск' />
					<div className='search-container__onsearch'>
						<button>
							<svg height="20px" width="20px"><SpriteIcons icon="search" /></svg>
						</button>
					</div>
					<div className='search-container__onclose'>
						<button onClick={() => closeModalAutocomplete()}><img src={clearText} alt="clear" /></button>
					</div>
				</div>
				{
					products.length > 0 ?
						<div className='autocomplete-header__entity-container'>
							<span>  Найдено {products.length} товара </span>
							<button>Для дома</button>
							<button>Для фитнес клубов</button>
						</div>
						: null
				}
				<ul className='autocomplete-heder-list'>
					{products.map((product, index) =>
						<li key={product._id}>
							<AutocompleteItem key={product._id} product={product} />
						</li>
					)}
				</ul>
				{
					products.length ?
						<button className='article__link autocomplete' onClick={handleAllSearch}>Показать все результаты</button>
						: null
				}
			</div>
		</div>
	);
}
