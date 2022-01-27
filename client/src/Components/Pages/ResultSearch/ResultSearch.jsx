import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SpriteIcons from '../../Layout/SpriteIcons/SpriteIcons';
import './resultsearch.scss';

export default function ResultSearch() {
	const [products, setProducts] = useState(null);
	let params = useParams();

	useEffect(() => {
		fetch("/api/products/autocomplete?searchProduct=" + params.search)
			.then(res => {
				return res.json()
			})
			.then(res => {
				console.log(res)
				setProducts(res)
			})
			.catch(err =>
				console.log(err))
	}, [])


	return (
		<section className='page-result-search'>
			<h2>Результаты поиска</h2>
			<div className='page-result-search__wrapper'>

				{products.map((item, index) =>
					<div key={index++} className='promotion__slider-item item-slider'>

						<div className="item-slider__icons icons-slider">
							<div className='icons-slider__list'>
								<Link to="/" className='icons-slider__item translate'>
									{/* <img src={iconPercent} alt="credit" /> */}
									<SpriteIcons icon={"profitable"} />
								</Link>
								<Link to="/" className='icons-slider__item translate'>
									{/* <img src={iconLike} alt="like" /> */}
									<SpriteIcons icon={"recommend"} />
								</Link>
								<Link to="/" className='icons-slider__item translate'>
									{/* <img src={iconNew} alt="new" /> */}
									<SpriteIcons icon={"new"} />
								</Link>
							</div>

							<div className='icons-slider__list'>
								<Link className='icons-slider__item icons-slider__item_svg' to="/">
									<svg className='bottom-footer__column_icons' width="17" height="17" >
										<SpriteIcons icon="comparison" />
										{/* <title>comparisons</title>
										<use xlinkHref={comparison + "#comparison"}></use> */}
									</svg>
								</Link>
								<Link className='icons-slider__item icons-slider__item_svg' to="/">
									<svg className='bottom-footer__column_icons' width="21" height="17" >
										<SpriteIcons icon="favorite" />
										{/* <title>heart</title>
										<use xlinkHref={heart + "#heart"}></use> */}
									</svg>
								</Link>
							</div>

						</div>

						<div className="item-slider__image">
							{/* {item.gallery.map(imgSrc => */}

							<img key={"1231165654"} style={{ "width": "100%" }} src={item.gallery[0].image} alt="slide" />
							{/* )} */}
						</div>
						<div className="item-slider__description description-item">
							<div className="description-item__availability">

								{item.availability && <span className='description-item__dots_green'>
									В наличии
									<span className='description-item__dots_green_1'></span>
									<span className='description-item__dots_green_2'></span>
									<span className='description-item__dots_green_3'></span>
									<span className='description-item__showRoom'>&nbsp; Есть в шоу-руме</span>
								</span>}

								{!item.availability && <span className='description-item__dots_red'>
									Нет в наличии
									<span className='description-item__dots_red_1'></span>
									<span className='description-item__dots_red_2'></span>
									<span className='description-item__dots_red_3'></span>
								</span>}

								{/* {item.availability === "Осталось мало" && <span className='description-item__dots_orange'>
											{item.availability}
											<span className='description-item__dots_orange_1'></span>
											<span className='description-item__dots_orange_2'></span>
											<span className='description-item__dots_orange_3'></span>
										</span>} */}

								{/* {item.availability === "Скоро ожидается" && <span className='description-item__wait'>{item.availability}</span>}
	
										{item.availability !== "Скоро ожидается" &&
											<span className='description-item__showRoom'>Есть в шоу-руме</span>} */}

							</div>
							<Link to="/" className="description-item__name">{item.name}</Link>
							<div className="description-item__rating">Рейтинг {item.rating}</div>
							<div className="desription-item__price-button price-button">
								{item.price.sharePrice ?
									<div className="price-button__price">
										<div className='price-button__shareprice'>{item.price.sharePrice}  &#8372;</div>
										<div className='price-button__fullprice'>{item.price.fullPrice} &#8372;</div>
									</div>
									:
									<div className="price-button__price">
										<div className='price-button__fullprice'>{item.price.fullPrice} &#8372;</div>
									</div>
								}
								<div >
									<button className="price-button__button">Купить</button>
								</div>
							</div>
						</div>
					</div>
				)}

			</div>
		</section>
	);
}


	// const [searchParams, setSearchParams] = useSearchParams();
	// const dispatch = useDispatch();
	// const myQuery = searchParams.get('search') || '';
	// const isSearch = useSelector(state => state.search.currentSearch);

	// useEffect(() => {
	// 	dispatch(setConditionAutocomplite(false));
	// 	console.log(localStorage.getItem('search'));
	// 	if (isSearch) {
	// 		localStorage.setItem('search', isSearch);
	// 		setSearchParams({ search: isSearch })
	// 	} else if (localStorage.getItem('search')) {
	// 		setSearchParams({ search: localStorage.getItem('search') })
	// 	}
	// 	// return (localStorage.removeItem('search'));
	// }, [])

	// useEffect(() => {
	// 	dispatch(setConditionAutocomplite(false));
	// 	if (isSearch) {
	// 		localStorage.setItem('search', isSearch);
	// 		setSearchParams({ search: isSearch })
	// 	} else if (localStorage.getItem('search')) {
	// 		setSearchParams({ search: localStorage.getItem('search') })
	// 	}
	// }, [isSearch]);
