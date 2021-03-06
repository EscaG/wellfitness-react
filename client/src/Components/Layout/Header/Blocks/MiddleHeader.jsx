import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import comparison from "../img/comparison.svg";
import favorites from "../img/favorites.svg";
import cart from "../img/cart.svg";
import Modal from '../../ModalWindow/Modal';
import AutocompleteHeader from '../AutocompleteSearch/AutocompleteHeader';
import { useDispatch, useSelector } from 'react-redux';
import { editFavorites } from '../../../../http/actions/user';
import { setFavoritesToRedux } from '../../../../http/reducers/favoritesReducer';

export default function MiddleHeader({ isActiveMenu, setIsActiveMenu, closeMenu }) {

	const user = useSelector(state => state.user.currentUser);
	const isAuth = useSelector(state => state.user.isAuth);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	const { totalCount } = useSelector(({ basket }) => basket);
	console.log(totalCount);
	// console.log(favoritesFromRedux);
	const [modalActive, setModalActive] = useState(false);
	const [favoritesList, setFavoritesList] = useState([]);
	const dispatch = useDispatch();
	const [goUpdateFavorites, setGoUpdateFavorites] = useState(false);


	const setActiveLinkFavorites = ({ isActive }) => (isActive ? "active-link " : '') + 'actions-header__item favorites';
	const setActiveLinkBasket = ({ isActive }) => (isActive ? "active-link " : '') + 'actions-header__item cart';



	useEffect(() => {
		if (localStorage.getItem('favorites').length && !isAuth) {
			setFavoritesList(JSON.parse(localStorage.getItem('favorites')))
			dispatch(setFavoritesToRedux(JSON.parse(localStorage.getItem('favorites'))))
			// setFavoritesList(favoritesFromRedux)
			console.log('LOCAL', JSON.parse(localStorage.getItem('favorites')))
		}
	}, [])



	useEffect(() => {
		if (isAuth) {
			if (localStorage.getItem('favorites').length) {
				setFavoritesList(Array.from(new Set([...user.favorites, ...favoritesList])));
				dispatch(editFavorites(user.email, Array.from(new Set([...user.favorites, ...favoritesList]))));
				localStorage.setItem('favorites', []);
				// console.log("sdfgsd");
				dispatch(setFavoritesToRedux([]));
			} else {
				setFavoritesList(user.favorites);
				localStorage.setItem('favorites', []);
				dispatch(setFavoritesToRedux([]));
				// setGoUpdateFavorites(false)
			}
		} else if (favoritesFromRedux.length) {
			setFavoritesList([])
		}
		if (isAuth && localStorage.getItem('favorites')) {
			dispatch(setFavoritesToRedux([]))
		}
	}, [isAuth, user])

	useEffect(() => {
		if (!isAuth) {
			console.log("USE favoritesFromRedux", favoritesFromRedux);
			// localStorage.setItem('favorites', JSON.stringify(favoritesFromRedux))
			setFavoritesList(favoritesFromRedux)
		}
	}, [favoritesFromRedux]);


	// useEffect(() => {
	// 	if (goUpdateFavorites && isAuth) {
	// 		dispatch(editFavorites(user.email, favoritesList));
	// 		console.log("remove");
	// 		localStorage.removeItem('favorites')
	// 	}
	// }, [goUpdateFavorites]);



	useEffect(() => {
		// console.log(favoritesList);
		if (isAuth && !localStorage.getItem('favorites')) {
			// console.log(favoritesList);
			setGoUpdateFavorites(true)
		}
	}, [favoritesList, isAuth])


	return (
		<div className="header__middle middle-header">
			<div className="middle-header__content _container">

				<div className="middle-header__subdirectory">

					<div className="middle-header__column">
						<div className="middle-header__catalog catalog-header">
							<Link to='/' data-da=".adaptive-menu__main-menu, 1330, 0"
								className="catalog-header__item_catalog catalog-header__item"><span>??????????????</span></Link>
							{/* //todo  ???????????? ???????????? ?? ?????????????????? ??????????, ?????????????? ???????????????????? ?? ???????????????????? ???????? */}
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
							{/*//?  ?????????? ?????????? ?? ?????????????? ????????????  */}

						</div>
					</div>
					<div className="middle-header__column">
						<div data-da=".adaptive-menu__main-menu, 1330, 4" className="middle-header__menu menu">


							<nav className="menu__body">
								<ul className="menu__list">
									<li><Link onClick={closeMenu} to="/brands" className="menu__link">????????????</Link></li>
									<li><Link onClick={closeMenu} to="/service" className="menu__link">????????????</Link></li>
									<li><Link onClick={closeMenu} to="/services" className="menu__link">????????????</Link></li>
									<li><Link onClick={closeMenu} to="/support" className="menu__link">??????????????????</Link></li>
									<li><Link onClick={closeMenu} to="/about" className="menu__link">?? ????????????????</Link></li>
									<li><Link onClick={closeMenu} to="/blog" className="menu__link">????????</Link></li>
									<li><Link onClick={closeMenu} to="/showroom" className="menu__link">?????? ????????????</Link></li>
									<li><Link onClick={closeMenu} to="/contacts" className="menu__link">????????????????</Link></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="middle-header__column">
					<ul data-da=".top-header__contacts , 1330 , 1" className="middle-header__actions actions-header">
						{/* <!-- ?????????????? ?????? div ?? ???????????? ???????????? ?????? ?????????????????? ?????????? --> */}
						<li><button className="actions-header__item comparison">
							<div><span>15</span></div>
							<svg width="17" height="18">
								<title>comparison</title>
								<use xlinkHref={comparison + "#comparison"}></use>
							</svg>
						</button></li>
						<li><NavLink to='/favorites' className={setActiveLinkFavorites}>
							<svg width="24" height="21" >
								<title>favorites</title>
								<use xlinkHref={favorites + "#favorites"}></use>
							</svg>
							{isAuth ?
								favoritesList && favoritesList.length ? <div><span>{favoritesList.length}</span></div> : null
								:
								favoritesList && favoritesList.length ? <div><span>{favoritesList.length}</span></div> : null
							}
						</NavLink></li>
						<li><NavLink to='/basket' className={setActiveLinkBasket}>
							<svg width="21" height="26">
								<title>cart</title>
								<use xlinkHref={cart + "#cart"}></use>
							</svg>
							{isAuth ?
								user?.basket && user?.basket?.length
									? <div><span>{user.basket.length}</span></div> : null
								: totalCount ? <div><span>{totalCount}</span></div> : null
							}
						</NavLink></li>
					</ul>
				</div>
			</div>
		</div>
	)
}
