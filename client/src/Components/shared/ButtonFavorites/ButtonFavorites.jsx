import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editFavorites } from '../../../http/actions/user';
import { setFavoritesToRedux } from '../../../http/reducers/favoritesReducer';
import SpriteIcons from '../../Layout/SpriteIcons/SpriteIcons';
import './buttonfavorites.scss';

const ButtonFavorites = memo(({ id, children, user, isAuth, isLoading, favoritesFromRedux }) => {

	const [isFavorite, setIsFavorite] = useState(false);
	// const [isBasket, setIsBasket] = useState(false);

	// const { id, name, gallery, availability, rating, price } = product;
	// const user = useSelector(state => state.user.currentUser);
	// const isAuth = useSelector(state => state.user.isAuth);
	// const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	const dispatch = useDispatch();


	console.log(user, isAuth, isLoading);

	useEffect(() => {
		if (isAuth) {
			if (user.favorites.includes(id)) {
				setIsFavorite(true);
			} else {
				setIsFavorite(false);
			}
		}
	}, [user, id]);

	useEffect(() => {
		if (favoritesFromRedux.length) {
			console.log(favoritesFromRedux.includes(id));
			if (favoritesFromRedux.includes(id)) {
				setIsFavorite(true);
			} else {
				setIsFavorite(false);
			}
		}
	}, [favoritesFromRedux, id]);




	const handleToFavorite = (id) => {
		if (user.favorites) {
			if (!user.favorites.includes(id)) {
				dispatch(editFavorites(user.email, [...user.favorites, id]));
			} else {
				dispatch(editFavorites(user.email, user.favorites.filter(i => i !== id)));
				setIsFavorite(false)
			}
		} else {
			if (!favoritesFromRedux.includes(id)) {
				// console.log("new favorite to user");
				dispatch(setFavoritesToRedux([...favoritesFromRedux, id]))
				localStorage.setItem('favorites', JSON.stringify([...favoritesFromRedux, id]))
				setIsFavorite(true)
			} else {
				dispatch(setFavoritesToRedux(favoritesFromRedux.filter(i => i !== id)))
				localStorage.setItem('favorites', JSON.stringify(favoritesFromRedux.filter(i => i !== id)))
				setIsFavorite(false)
			}
		}
	}

	return (
		<>
			<button className='icons-slider__item link-svg'
				onClick={() => handleToFavorite(id)}
			>
				<svg width="21" height="21" className={(isFavorite ? 'active ' : '') + 'icons-slider__svg favorites'} >
					<SpriteIcons icon="favorite" />
				</svg>
				{children}
			</button >
		</>
	)
})
export default ButtonFavorites;