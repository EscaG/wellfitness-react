import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./style-autocompleteheader.scss";
import close from "../img/close.svg";
import AutocompleteItem from './AutocompleteItem';
import SpriteIcons from '../../SpriteIcons/SpriteIcons';
import { useNavigate } from 'react-router-dom';


export default function AutocompleteHeader({ modalActive, setModalActive }) {

	const [searchProduct, setSearchProduct] = useState("");
	const [products, setProducts] = useState([]);
	const [arraySearch, setArraySearched] = useState([]);
	const searchRef = useRef(null);
	const navigate = useNavigate();
	const goProductCard = () => navigate('search/' + searchProduct);



	useEffect(() => {
		searchRef.current.focus();
		if (localStorage.getItem('arraySearch')) {
			setArraySearched(JSON.parse(localStorage.getItem('arraySearch')))
		}
		return (() => setArraySearched([]))
	}, []);

	useEffect(() => {
		if (arraySearch.length) {
			localStorage.setItem('arraySearch', JSON.stringify(arraySearch))
		}
	}, [arraySearch]);

	const setToLocal = (string) => {
		if (!arraySearch.includes(string) && string) {
			setArraySearched(arraySearch => [...arraySearch, string])
		}
	}



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
		setModalActive(!modalActive)
	}

	const handlerSearch = (e) => {
		if (e.keyCode === 13 && e.target.value.length >= 3) {
			closeModalAutocomplete();
			goProductCard()
		}
	}

	const handleAllSearch = () => {
		if (searchProduct) {

			closeModalAutocomplete();
			goProductCard()
		}

	}


	return (
		<div className='autocomplete-header__main'>
			<div className="autocomplete-header__block">
				<div className='autocomplete-header__search-container search-container'>
					<input
						value={searchProduct}
						ref={searchRef} onChange={changeHandler} onKeyDown={e => handlerSearch(e)}
						id='search-autocomplete' type="text" placeholder='Поиск' />
					<div className='search-container__onsearch'>
						<button onClick={handleAllSearch}>
							<svg height="20px" width="20px"><SpriteIcons icon="search" /></svg>
						</button>
					</div>
					<div className='search-container__onclose'>
						<button onClick={() => closeModalAutocomplete()}><img src={close} alt="clear" /></button>
					</div>
				</div>
				{
					products.length ?
						<div className='autocomplete-header__entity-container'>
							<span>  Найдено товаров {products.length}</span>
							<button>Для дома</button>
							<button>Для фитнес клубов</button>
						</div>
						:
						<>
							{arraySearch.length ?
								<div>
									<h5>Раннее вы искали:</h5>
									{arraySearch && [...arraySearch].reverse().map((str, index) =>
										<div key={index} className='autocomplete-header__old-search'>
											{index <= 3 ?
												<div
													onClick={() => { setSearchProduct(str); searchProducts(str) }}>{str}</div>
												: null
											}
										</div>
									)}
								</div>
								:
								<div className='goToSearch'>Начните поиск</div>
							}
						</>
				}
				<ul className='autocomplete-heder-list'>
					{products.map((product, index) =>
						<li key={product._id}>
							<AutocompleteItem
								key={product._id}
								product={product}
								setToLocal={setToLocal}
								modalActive={modalActive}
								setModalActive={setModalActive}
							/>
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
