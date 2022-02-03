import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import comparison from "../img/comparison.svg";
import favorites from "../img/favorites.svg";
import cart from "../img/cart.svg";
import Modal from '../../ModalWindow/Modal';
import AutocompleteHeader from '../AutocompleteSearch/AutocompleteHeader';
import { useDispatch, useSelector } from 'react-redux';
import { editFavorites } from '../../../../http/actions/user';
import { setFavoritesToRedux } from '../../../../http/reducers/favoritesReducer';
export default function MiddleHeader() {
	const user = useSelector(state => state.user.currentUser);
	const isAuth = useSelector(state => state.user.isAuth);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	// console.log(favoritesFromRedux);
	const [modalActive, setModalActive] = useState(false);
	const [favoritesList, setFavoritesList] = useState([]);
	const dispatch = useDispatch();
	const [goUpdateFavorites, setGoUpdateFavorites] = useState(false);
	// console.log(favoritesList);
	// console.log(favoritesFromRedux);

	useEffect(() => {
		if (localStorage.getItem('favorites')) {
			setFavoritesList(JSON.parse(localStorage.getItem('favorites')))
			dispatch(setFavoritesToRedux(JSON.parse(localStorage.getItem('favorites'))))
			// setFavoritesList(favoritesFromRedux)
			console.log('LOCAL', JSON.parse(localStorage.getItem('favorites')))
		}
	}, [])

	useEffect(() => {
		if (isAuth || user.favorites) {
			// console.log(Array.from(new Set([...user.favorites, ...favoritesList])));
			if (localStorage.getItem('favorites')) {
				setFavoritesList(Array.from(new Set([...user.favorites, ...favoritesList])))
				localStorage.removeItem('favorites')
			} else {
				setFavoritesList(user.favorites)
				localStorage.removeItem('favorites')
			}
		} else if (!favoritesFromRedux.length) {
			setFavoritesList([])
		}
		if (!isAuth && !localStorage.getItem('favorites')) {
			dispatch(setFavoritesToRedux([]))
		}
	}, [user])

	useEffect(() => {
		console.log("favoritesFromRedux", favoritesFromRedux);
		if (favoritesFromRedux.length >= 0) {
			localStorage.setItem('favorites', JSON.stringify(favoritesFromRedux))
			setFavoritesList(favoritesFromRedux)
		}
	}, [favoritesFromRedux]);


	useEffect(() => {
		if (goUpdateFavorites && isAuth) {
			dispatch(editFavorites(user.email, favoritesList));
			console.log("remove");
			localStorage.removeItem('favorites')
		}
	}, [goUpdateFavorites]);


	useEffect(() => {
		console.log(favoritesList);
		if (isAuth) {
			console.log(favoritesList);
			setGoUpdateFavorites(true)
		}
	}, [favoritesList])


	return (
		<div className="header__middle middle-header">
			<div className="middle-header__content _container">

				<div className="middle-header__subdirectory">

					<div className="middle-header__column">
						<div className="middle-header__catalog catalog-header">
							<Link to='/' data-da=".adaptive-menu__main-menu, 1330, 0"
								className="catalog-header__item_catalog catalog-header__item"><span>Каталог</span></Link>
							{/* //todo  кнопка поиска с модальным окном, который переезжать в адаптивное меню */}
							<div style={{ display: "inline-block" }} data-da=".top-header__contacts, 1331, 0">
								<button
									onClick={() => setModalActive(!modalActive)}
									className="catalog-header__item_search catalog-header__item"
								>

								</button>
								{modalActive ?
									<Modal
										modalActive={modalActive}
										setModalActive={setModalActive}
									>
										<AutocompleteHeader
											modalActive={modalActive}
											setModalActive={setModalActive}
										/>
									</Modal>
									: null}
							</div>
							{/*//?  конец блока с кнопкой поиска  */}

						</div>
					</div>
					<div className="middle-header__column">
						<div data-da=".adaptive-menu__main-menu, 1330, 4" className="middle-header__menu menu">


							<nav className="menu__body">
								<ul className="menu__list">
									<li><Link to="/brands" className="menu__link">Бренды</Link></li>
									<li><Link to="/service" className="menu__link">Сервис</Link></li>
									<li><Link to="/services" className="menu__link">Услуги</Link></li>
									<li><Link to="/support" className="menu__link">Поддержка</Link></li>
									<li><Link to="/about" className="menu__link">О компании</Link></li>
									<li><Link to="/blog" className="menu__link">Блог</Link></li>
									<li><Link to="/showroom" className="menu__link">Где купить</Link></li>
									<li><Link to="/contacts" className="menu__link">Контакты</Link></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="middle-header__column">
					<ul data-da=".top-header__contacts , 1330 , 1" className="middle-header__actions actions-header">
						{/* <!-- Добавил доп div в каждую ссылку для центровки цифры --> */}
						<li><button className="actions-header__item comparison">
							<div><span>15</span></div>
							<svg width="17" height="18">
								<title>comparison</title>
								<use xlinkHref={comparison + "#comparison"}></use>
							</svg>
						</button></li>
						<li><button className="actions-header__item favorites ">
							<svg width="24" height="21">
								<title>favorites</title>
								<use xlinkHref={favorites + "#favorites"}></use>
							</svg>

							{isAuth ? <div><span>{favoritesList.length && favoritesList.length}</span></div>
								:
								// favoritesFromRedux.length > 0 && <div><span>{favoritesFromRedux.length}</span></div>
								favoritesList.length && <div><span>{favoritesList.length}</span></div>
							}
						</button></li>
						<li><button className="actions-header__item cart">
							<svg width="21" height="26">
								<title>cart</title>
								<use xlinkHref={cart + "#cart"}></use>
							</svg>
							<div><span>1</span></div>
						</button></li>
					</ul>
				</div>
			</div>
		</div>
	)
}
