import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './presentation.scss';
import MainImage from '../../../Components/Layout/SpriteIcons/MainImage';
import SpriteIcons from '../../../Components/Layout/SpriteIcons/SpriteIcons';
import { Link as LinkScroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { editBasket } from '../../../http/actions/user';
// import { setFavoritesToRedux } from '../../../http/reducers/favoritesReducer';
import { Link } from 'react-router-dom';
import QuantityCounter from '../../../Components/shared/QuantityCounter/QuantityCounter';
import { addProductToBasket, addToBasketRedux } from '../../../http/reducers/basket-reducer';
import ButtonFavorites from '../../../Components/shared/ButtonFavorites/ButtonFavorites';
import ButtonBasket from '../../../Components/shared/ButtonBasket/ButtonBasket';

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

const Presentation = memo(({ product }) => {

	const user = useSelector(state => state.user.currentUser);
	const { isAuth, isLoading } = useSelector(state => state.user);
	const favoritesFromRedux = useSelector(state => state.favorites.currentFavorites);
	const { _id, name, gallery, price, characteristics, brand, availability, configuration
	} = product;

	const [previewImage, setPreviewImage] = useState('');
	const [amount, setAmount] = useState(1);
	const [radioWeight, setRadioWeight] = useState(null);
	const [radioSize, setRadioSize] = useState(null);
	const [radioColor, setRadioColor] = useState(null);
	const [radioColorFrame, setRadioColorFrame] = useState(null);
	const [radioColorUpholstery, setRadioColorUpholstery] = useState(null);
	// const [isFavorite, setIsFavorite] = useState(false);
	const [imageId, setImageId] = useState("");
	const dispatch = useDispatch();




	// const handleToBasket = (id) => {
	// 	if (user.basket) {
	// 		if (user.basket.length > 0) {
	// 			if (!user.basket.some(i => i.id === id)) {
	// 				console.log("?????????????? ?? ??????????????", id);
	// 				dispatch(editBasket(user.email, [...user.basket, { amount: amount, id }]))
	// 				setIsBasket(true)
	// 			} else {
	// 				console.log('???????????? ???? ??????????????', id);
	// 				dispatch(editBasket(user.email, user.basket.filter(i => i.id !== id)))
	// 				setIsBasket(false)
	// 			}
	// 		} else {
	// 			dispatch(editBasket(user.email, [...user.basket, { amount: amount, id }]))
	// 		}

	// 	} else {
	// 		dispatch(addToBasketRedux({ product, amount }))
	// 	}
	// }



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


	return (
		<section className='page-productcard__presentation presentation-product'>
			<div style={{ backgroundColor: "#fff" }}>



				<h1 className='presentation-product__header'>{name}</h1>
				{/* //! ??????????, ?????????????????????? ???????????????? ???? ???????????????? */}
				<div className="presentation-product__wrapper wrapper-showroom">
					{/* //! ???????? ?? ????????????????????*/}
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
					{/* //! ???????? ?? ?????????????? ????????????????????????????????*/}
					<div className="wrapper-showroom__all-configaration configaration-all">
						{/* //todo ?????????? */}
						<div className='configaration-all__brand'>
							<div>
								<img src={brand && brand.image} alt="brand" />
							</div>
							<div>
								<SpriteIcons icon={"profitable"} />
								<SpriteIcons icon={"recommend"} />
								<SpriteIcons icon={"new"} />
							</div>
						</div>
						{/* //todo ???????????? ?????????????? ??????????????????????????*/}
						<div className='configaration-all__characteristics-price price-characteristics'>
							{/* //todo ?? ?????????????????? */}
							<div>
								<div className='price-characteristics__favorites-icons'>
									{/* //! toggle ?????????????????? */}
									<div className='price-characteristics__favorites-icons-hover'>
										<ButtonFavorites
											id={_id}
											user={user}
											isAuth={isAuth}
											isLoading={isLoading}
											favoritesFromRedux={favoritesFromRedux}
										>
											<span >&nbsp;&nbsp; ?? ??????????????????</span>
										</ButtonFavorites>
									</div>

									<div className='price-characteristics__favorites-icons-hover'>
										<svg className="presentation-icon" height="21px" width="24px" >
											<SpriteIcons icon={"comparison"} />
										</svg>
										<span>&nbsp;&nbsp; ?? ??????????????????	</span>
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
									className='price-characteristics__btn-all'>?????? ????????????????????????????</LinkScroll>
							</div>

							{/* //todo  ?????????? ???????? ?? ???????????? ???????????? */}
							<div className='price-characteristics__price-block block-price-presentation'>
								<div className='block-price-presentation__availability-block'>
									{availability && <span className='block-price-presentation__availability'>
										?? ?????????????? &nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-dots'></span>&nbsp;
										<span className='block-price-presentation__availability-showroom'>&nbsp; ???????? ?? ??????-????????</span>
									</span>}
									{!availability && <span className='block-price-presentation__not-availability'>
										?????? ?? ?????????????? &nbsp;
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
									<QuantityCounter
										product={product}
										amount={amount}
										setAmount={setAmount}
									/>
									{/* <div>
										{!isBasket ?
											<button
												onClick={() => handleToBasket(_id)} //! ?? ??????????????
												className="price-button__button cart-presentation__btn">
												?? ??????????????
											</button>
											:
											<button
												onClick={() => handleToBasket(_id)} //! ?? ??????????????
												className="active price-button__button cart-presentation__btn"
											// to={'/basket'}
											>????????????????
											</button>
										}
									</div> */}
									<ButtonBasket
										_id={_id}
										user={user}
										isAuth={isAuth}
										isLoading={isLoading}
										amount={amount}
										setAmount={setAmount}
										product={product}
									/>
								</div>
							</div>
						</div>
						{/* //todo  ?????????? ???????? ?? ???????????? ???????????? */}
						<div className='presentation-product__configuration'>
							<h3 className='presentation-product__title'>????????????????????????</h3>
							<div className="presentation-product__items items-configuration">
								{/* //todo ???????????? */}
								<div className="presentation-product__size items-configuration__item">
									<div className='items-configuration__parameter-name'>????????????, ????</div>
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
								{/* //todo ?????? */}
								<div className="presentation-product__weight items-configuration__item">
									<div className='items-configuration__parameter-name'>?????? ??????????, ??</div>
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
								{/* //todo ????????????????  ???????? */}
								<div className="presentation-product__color items-configuration__item">
									<div className='items-configuration__parameter-name'>????????</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "????????????" ? true : false}
												value="????????????"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-first" />
											<label className='items-configuration__label color' htmlFor="color-first">
												<span style={{ backgroundColor: "black" }}></span>
												????????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "????????????" ? true : false}
												value="????????????"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-second" />
											<label className='items-configuration__label color' htmlFor="color-second">
												<span style={{ backgroundColor: "#505050" }}></span>
												????????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "??????????" ? true : false}
												value="??????????"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-third" />
											<label className='items-configuration__label color' htmlFor="color-third">
												<span style={{ backgroundColor: "white" }}></span>
												??????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColor(e)}
												checked={radioColor === "??????????????" ? true : false}
												value="??????????????"
												className='items-configuration__checkbox' type="radio" name="color-radio" id="color-fourth" />
											<label className='items-configuration__label color' htmlFor="color-fourth">
												<span style={{ backgroundColor: "red" }}></span>
												??????????????</label>
										</div>
									</div>
								</div>
								{/* //todo ???????? ???????? */}
								<div className="presentation-product__framecolor items-configuration__item">
									<div className='items-configuration__parameter-name'>???????? ????????</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "????????????" ? true : false}
												value="????????????"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-first" />
											<label className='items-configuration__label color' htmlFor="framecolor-first">
												<span style={{ backgroundColor: "black" }}></span>
												????????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "????????????" ? true : false}
												value="????????????"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-second" />
											<label className='items-configuration__label color' htmlFor="framecolor-second">
												<span style={{ backgroundColor: "#505050" }}></span>
												????????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "??????????" ? true : false}
												value="??????????"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-third" />
											<label className='items-configuration__label color' htmlFor="framecolor-third">
												<span style={{ backgroundColor: "white" }}></span>
												??????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorFrame(e)}
												checked={radioColorFrame === "??????????????" ? true : false}
												value="??????????????"
												className='items-configuration__checkbox' type="radio" name="framecolor-radio" id="framecolor-fourth" />
											<label className='items-configuration__label color' htmlFor="framecolor-fourth">
												<span style={{ backgroundColor: "red" }}></span>
												??????????????</label>
										</div>
									</div>
								</div>
								{/* //todo ???????? ???????????? */}
								<div className="presentation-product__upholsterycolor items-configuration__item">
									<div className='items-configuration__parameter-name'>???????? ????????????</div>
									<div className='items-configuration__parameter-option'>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "????????????" ? true : false}
												value="????????????"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-first" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-first">
												<span style={{ backgroundColor: "black" }}></span>
												????????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "????????????" ? true : false}
												value="????????????"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-second" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-second">
												<span style={{ backgroundColor: "#505050" }}></span>
												????????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "??????????" ? true : false}
												value="??????????"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-third" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-third">
												<span style={{ backgroundColor: "white" }}></span>
												??????????</label>
										</div>
										<div>
											<input
												onChange={(e) => changeRadioColorUpholstery(e)}
												checked={radioColorUpholstery === "??????????????" ? true : false}
												value="??????????????"
												className='items-configuration__checkbox' type="radio" name="upholsterycolor-radio" id="upholsterycolor-fourth" />
											<label className='items-configuration__label color' htmlFor="upholsterycolor-fourth">
												<span style={{ backgroundColor: "red" }}></span>
												??????????????</label>
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
)
export default Presentation;



// const handleToFavorite = (id) => {
// 	if (user.favorites) {
// 		if (!user.favorites.includes(id)) {
// 			// console.log("new favorite to user");
// 			dispatch(editFavorites(user.email, [...user.favorites, id]));
// 		} else {
// 			dispatch(editFavorites(user.email, user.favorites.filter(i => i !== id)));
// 			setIsFavorite(false)
// 		}
// 	} else {
// 		if (!favoritesFromRedux.includes(id)) {
// 			dispatch(setFavoritesToRedux([...favoritesFromRedux, id]))
// 			localStorage.setItem('favorites', JSON.stringify([...favoritesFromRedux, id]))
// 			setIsFavorite(true)
// 		} else {
// 			dispatch(setFavoritesToRedux(favoritesFromRedux.filter(i => i !== id)))
// 			localStorage.setItem('favorites', JSON.stringify(favoritesFromRedux.filter(i => i !== id)))
// 			setIsFavorite(false)
// 		}
// 	}
// }
