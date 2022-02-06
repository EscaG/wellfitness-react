import React, { useEffect, useLayoutEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainImage from '../../../Layout/SpriteIcons/MainImage';
import SpriteIcons from '../../../Layout/SpriteIcons/SpriteIcons';
import './presentation.scss';
import { Link as LinkScroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, editFavorites } from '../../../../http/actions/user';
import { setFavoritesToRedux } from '../../../../http/reducers/favoritesReducer';

export default function Presentation({ product }) {
	const user = useSelector(state => state.user.currentUser);
	const isAuth = useSelector(state => state.user.isAuth);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	const { _id, name, gallery, price, characteristics, brand, availability, configuration
	} = product;
	const [previewImage, setPreviewImage] = useState('');
	const [entity, setEntity] = useState(1);
	const [radioWeight, setRadioWeight] = useState(null);
	const [radioSize, setRadioSize] = useState(null);
	const [radioColor, setRadioColor] = useState(null);
	const [radioColorFrame, setRadioColorFrame] = useState(null);
	const [radioColorUpholstery, setRadioColorUpholstery] = useState(null);
	const [isFavorite, setIsFavorite] = useState(false);
	const [imageId, setImageId] = useState("");
	const dispatch = useDispatch();

	// const [favoritesList, setFavoritesList] = useState([]);
	// const [favoritesListFromLocal, setFavoritesListFromLocal] = useState([]);
	// const [goUpdateFavorites, setGoUpdateFavorites] = useState(false);


	useEffect(() => {
		if (isAuth) {
			if (user.favorites.includes(_id)) {
				setIsFavorite(true);
			}
		}
	}, [user]);

	useEffect(() => {
		setIsFavorite(false);
		if (isAuth) {
			// console.log("обновился продукт");
			if (user.favorites.includes(_id)) {
				// console.log("favorite true");
				setIsFavorite(true);
			} else {
				setIsFavorite(false);
			}
		}

	}, [product]);


	useEffect(() => {
		if (favoritesFromRedux.length) {
			if (favoritesFromRedux.includes(_id)) {
				setIsFavorite(true);
			}
		}
	}, [_id, favoritesFromRedux]);




	const handleToFavorite = (id) => {
		if (user.favorites) {
			if (!user.favorites.includes(id)) {
				// console.log("new favorite to user");
				dispatch(editFavorites(user.email, [...user.favorites, id]));
			} else {
				dispatch(editFavorites(user.email, user.favorites.filter(i => i !== id)));
				setIsFavorite(false)
			}
		} else {
			if (!favoritesFromRedux.includes(id)) {
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


	useLayoutEffect(() => {
		setRadioSize(configuration && configuration.size);
		setRadioWeight(configuration && configuration.weight);
		setRadioColor(configuration && configuration.color);
		setRadioColorFrame(configuration && configuration.frameColor);
		setRadioColorUpholstery(configuration && configuration.upholsteryColor);
		setImageId(gallery && gallery[0].id)
	}, [product]);



	const showPreview = (id, imgSrc) => {
		setPreviewImage(imgSrc)
		setImageId(id);
	}

	const onChangeEntity = (e) => {
		let myNumber = Number(e.target.value);
		if (e.target.value <= 99) {
			setEntity(myNumber)
		} else if (myNumber > 99) {
			setEntity(99)
		} else if (myNumber === 0) {
			setEntity(1)
		}
	}

	const incrementEntity = () => {
		if (entity < 99) {
			setEntity(entity => entity + 1)
		}
	}

	const decrementEntity = () => {
		if (entity > 1) {
			setEntity(entity => entity - 1)
		}
	}
	const changeRadioSize = (e) => {
		setRadioSize(e.target.value)

	}
	const changeRadioWeight = (e) => {
		setRadioWeight(e.target.value)
	}

	const changeRadioColor = (e) => {
		setRadioColor(e.target.value)
	}
	const changeRadioColorFrame = (e) => {
		setRadioColorFrame(e.target.value);
	}
	const changeRadioColorUpholstery = (e) => {
		setRadioColorUpholstery(e.target.value);
	}

	const settingsSlider = {
		className: "presentation-slider",
		arrows: true,
		centerMode: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		waitForAnimate: false,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 2000,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 5,
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 5,
				}
			}
		]
	}

	return (
		<section className='page-productcard__presentation presentation-product'>
			<div style={{ backgroundColor: "#fff" }}>



				<h1 className='presentation-product__header'>{name}</h1>
				{/* //! флекс, разделяющий картинки от описания */}
				<div className="presentation-product__wrapper wrapper-showroom">
					{/* //! блок с картинками*/}
					<div className="wrapper-showroom__gallery gallery-view">
						<div className='gallery-view__allgallery'>

							<div className="gallery-view__main-img">
								<MainImage image={previewImage ? previewImage : gallery && gallery[0].image} />
							</div>
							<div className="gallery-view__preview">
								<Slider {...settingsSlider}>
									{gallery && gallery.map((imgSrc, index) =>
										<div onClick={() => showPreview(imgSrc.id, imgSrc.image)} id={imgSrc.id} className={imageId === imgSrc.id ? 'preview-product active' : 'preview-product'} key={Date.now() + index}>
											<MainImage image={imgSrc.image} />
										</div>
									)}
								</Slider>
							</div>
						</div>

					</div>
					{/* //! блок с первыми характеристиками*/}
					<div className="wrapper-showroom__all-configaration configaration-all">
						{/* //todo бренд */}
						<div className='configaration-all__brand'>
							<div>
								<img src={brand} alt="brand" />
							</div>
							<div>
								<SpriteIcons icon={"profitable"} />
								<SpriteIcons icon={"recommend"} />
								<SpriteIcons icon={"new"} />
							</div>
						</div>
						{/* //todo список главных характеристик*/}
						<div className='configaration-all__characteristics-price price-characteristics'>
							{/* //todo в избранное */}
							<div>
								<div className='price-characteristics__favorites-icons'>
									<div onClick={() => handleToFavorite(_id)} className='price-characteristics__favorites-icons-hover'>
										<svg className={isFavorite ? "presentation-icon-favorite active" : "presentation-icon-favorite"} height="24px" width="24px" >
											<SpriteIcons icon={"favorite"} />
										</svg>
										<span >&nbsp;&nbsp; В избранное</span>
									</div>
									<div className='price-characteristics__favorites-icons-hover'>
										<svg className="presentation-icon" height="21px" width="24px" >
											<SpriteIcons icon={"comparison"} />
										</svg>
										<span>&nbsp;&nbsp; В сравнение	</span>
									</div>
								</div>

								<ul className='price-characteristics__list-characteristics'>
									{characteristics?.main?.list.length > 0 && characteristics.main.list.map(item =>
										<li key={item.id} >
											<span className='price-characteristics__name-characteristics'>{item.name}</span>
											<span> {item.value}</span>
										</li>
									)}
								</ul>

								<LinkScroll
									to='characteristic-productcard' smooth={true} spy={true} duration={500} offset={-30} activeClass={"active"}
									className='price-characteristics__btn-all'>Все характеристики</LinkScroll>
							</div>

							{/* //todo  будет цена и кнопка купить */}
							<div className='price-characteristics__price-block block-price-presentation'>
								<div className='block-price-presentation__availability-block'>
									{availability && <span className='block-price-presentation__availability'>
										В наличии &nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-showroom'>&nbsp; Есть в шоу-руме</span>
									</span>}
									{!availability && <span className='block-price-presentation__not-availability'>
										Нет в наличии &nbsp;
										<span className='block-price-presentation__not-availability-dots'></span>&nbsp;
										<span className='block-price-presentation__not-availability-dots'></span>&nbsp;
										<span className='block-price-presentation__not-availability-dots'></span>&nbsp;
									</span>}
								</div>
								<div className='block-price-presentation__price-block'>
									{price?.sharePrice ?
										<>
											<h3 className='block-price-presentation__shareprice'>{price?.sharePrice && price.sharePrice} &#8372;</h3>
											<h3 className='block-price-presentation__fullprice'>{price?.fullPrice && price.fullPrice + String.fromCharCode(parseInt('0x20B4', 16))}</h3>
										</>
										:
										<h3 className='block-price-presentation__fullprice stock'>{price?.fullPrice && price.fullPrice + String.fromCharCode(parseInt('0x20B4', 16))}</h3>
									}
								</div>
								<div className="block-price-presentation__cart-block cart-presentation">
									<div className='cart-presentation__wrapper'>
										<button className='cart-presentation__symbol' onClick={() => decrementEntity()}>-</button>
										<input type="number" id='pieces-presentation' value={entity} onChange={(e) => onChangeEntity(e)} min="1" max="99" />
										<button className='cart-presentation__symbol' onClick={() => incrementEntity()}>+</button>
									</div>
									<div>
										<button className="price-button__button cart-presentation__btn">В корзину</button>
									</div>
								</div>
							</div>
						</div>
						{/* //todo  будет цена и кнопка купить */}
						<div className='presentation-product__configuration'>
							<h3 className='presentation-product__title'>Конфигурация</h3>
							<div className="presentation-product__items items-configuration">
								{/* //todo Размер */}
								<div className="presentation-product__size items-configuration__item">
									<div className='items-configuration__parameter-name'>Размер, см</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												checked={radioSize === "1500x2000" ? true : false}
												onChange={(e) => changeRadioSize(e)}
												value="1500x2000"
												className='items-configuration__checkbox' type="radio" name="size-radio" id="size-first" />
											<label className='items-configuration__label' htmlFor="size-first">1500 &times; 2000</label>
										</div>
										<div>
											<input
												checked={radioSize === "1700x2000" ? true : false}
												onChange={(e) => changeRadioSize(e)}
												value="1700x2000"
												className='items-configuration__checkbox' type="radio" name="size-radio" id="size-second" />
											<label className='items-configuration__label' htmlFor="size-second">1700 &times; 2000</label>
										</div>
										<div>
											<input
												checked={radioSize === "1900x2000" ? true : false}
												onChange={(e) => changeRadioSize(e)}
												value="1900x2000"
												className='items-configuration__checkbox' type="radio" name="size-radio" id="size-third" />
											<label className='items-configuration__label' htmlFor="size-third">1900 &times; 2000</label>
										</div>
									</div>
								</div>
								{/* //todo Вес */}
								<div className="presentation-product__weight items-configuration__item">
									<div className='items-configuration__parameter-name'>Вес стека, г</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												onChange={(e) => changeRadioWeight(e)}
												checked={radioWeight === "150" ? true : false}
												value="150"
												className='items-configuration__checkbox' type="radio" name="weight-radio" id="weight-first" />
											<label className='items-configuration__label' htmlFor="weight-first">150</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioWeight(e)}
												checked={radioWeight === "500" ? true : false}
												value="500"
												className='items-configuration__checkbox' type="radio" name="weight-radio" id="weight-second" />
											<label className='items-configuration__label' htmlFor="weight-second">500</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioWeight(e)}
												checked={radioWeight === "800" ? true : false}
												value="800"
												className='items-configuration__checkbox' type="radio" name="weight-radio" id="weight-third" />
											<label className='items-configuration__label' htmlFor="weight-third">800</label>
										</div>
									</div>
								</div>
								{/* //todo Основной  цвет */}
								<div className="presentation-product__color items-configuration__item">
									<div className='items-configuration__parameter-name'>Цвет</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "Черный" ? true : false}
												value="Черный"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-first" />
											<label className='items-configuration__label color' htmlFor="color-first">
												<span style={{ backgroundColor: "black" }}></span>
												Черный</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "Графит" ? true : false}
												value="Графит"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-second" />
											<label className='items-configuration__label color' htmlFor="color-second">
												<span style={{ backgroundColor: "#505050" }}></span>
												Графит</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "Белый" ? true : false}
												value="Белый"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-third" />
											<label className='items-configuration__label color' htmlFor="color-third">
												<span style={{ backgroundColor: "white" }}></span>
												Белый</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "Красный" ? true : false}
												value="Красный"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-fourth" />
											<label className='items-configuration__label color' htmlFor="color-fourth">
												<span style={{ backgroundColor: "red" }}></span>
												Красный</label>
										</div>
									</div>
								</div>
								{/* //todo Цвет рамы */}
								<div className="presentation-product__framecolor items-configuration__item">
									<div className='items-configuration__parameter-name'>Цвет рамы</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "Черный" ? true : false}
												value="Черный"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-first" />
											<label className='items-configuration__label color' htmlFor="framecolor-first">
												<span style={{ backgroundColor: "black" }}></span>
												Черный</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "Графит" ? true : false}
												value="Графит"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-second" />
											<label className='items-configuration__label color' htmlFor="framecolor-second">
												<span style={{ backgroundColor: "#505050" }}></span>
												Графит</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "Белый" ? true : false}
												value="Белый"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-third" />
											<label className='items-configuration__label color' htmlFor="framecolor-third">
												<span style={{ backgroundColor: "white" }}></span>
												Белый</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "Красный" ? true : false}
												value="Красный"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-fourth" />
											<label className='items-configuration__label color' htmlFor="framecolor-fourth">
												<span style={{ backgroundColor: "red" }}></span>
												Красный</label>
										</div>
									</div>
								</div>
								{/* //todo Цвет обивки */}
								<div className="presentation-product__upholsterycolor items-configuration__item">
									<div className='items-configuration__parameter-name'>Цвет обивки</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "Черный" ? true : false}
												value="Черный"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-first" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-first">
												<span style={{ backgroundColor: "black" }}></span>
												Черный</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "Графит" ? true : false}
												value="Графит"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-second" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-second">
												<span style={{ backgroundColor: "#505050" }}></span>
												Графит</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "Белый" ? true : false}
												value="Белый"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-third" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-third">
												<span style={{ backgroundColor: "white" }}></span>
												Белый</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "Красный" ? true : false}
												value="Красный"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-fourth" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-fourth">
												<span style={{ backgroundColor: "red" }}></span>
												Красный</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
}

