import "./resetstyle.scss";
import "./bootstrap.scss"
import './App.scss';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { checkAuth } from './http/actions/user';

import { Footer } from "./Components/Layout/Footer/Footer";
import { Header } from "./Components/Layout/Header/Header";
import { PageHome } from './Components/Pages/Home/PageHome';
import PageAbout from './Components/Pages/About/PageAbout';
// import { PageBrands } from "./Components/Pages/Brands/PageBrands";
import PageService from "./Components/Pages/Service/PageService";
import PageUslugi from "./Components/Pages/Uslugi/PageUslugi";
import PageSupport from "./Components/Pages/Support/PageSupport";
import PageBlog from "./Components/Pages/Blog/PageBlog";
import PageShowroom from "./Components/Pages/Showroom/PageShowroom";
import PageContacts from "./Components/Pages/Contacts/PageContacts";
import CatalogForHome from "./Components/Pages/CatalogForHome/CatalogForHome";
import CatalogForClub from "./Components/Pages/CatalogForClub/CatalogForClub";
import { LoginForm } from "./Components/Pages/Login/LoginForm";
import RegistrationForm from "./Components/Pages/Login/RegistrationForm";
import ProfilePage from "./Components/Pages/Profile/ProfilePage";
import MyProfile from "./Components/Pages/Profile/Components/MyProfile";
import Delivery from "./Components/Pages/Profile/Components/Delivery";
import Orders from "./Components/Pages/Profile/Components/Orders";
import Discount from "./Components/Pages/Profile/Components/Discount";
import Bonuses from "./Components/Pages/Profile/Components/Bonuses";
import Instructions from "./Components/Pages/Profile/Components/Instructions";
import Appeals from "./Components/Pages/Profile/Components/Appeals";
import EditProfile from "./Components/Pages/Profile/Components/EditProfile/EditProfile";
// import ProductCatalog from "./Components/Layout/testproduct/productCatalog";
import ProductHook from "./Components/Layout/testproduct/ProductHook";
import { getProduct } from "./http/actions/product";
import ProductCardPage from "./Components/Pages/ProductCard/ProductCardPage";
import ResultSearch from "./Components/Pages/ResultSearch/ResultSearch";



function App() {
	const dispatch = useDispatch();
	const scrollBtnRef = useRef();
	const rootElement = document.documentElement;

	useEffect(() => {
		console.log("APP")
		dispatch(getProduct());
		if (localStorage.getItem('token')) dispatch(checkAuth());
		document.addEventListener("scroll", handleScroll, { passive: true })
		// console.log("высота браузера ",document.documentElement.clientHeight);
		// console.log("Высота всего документа ",document.documentElement.scrollHeight);
	}, []);

	const handleScroll = () => {
		if (window.pageYOffset > rootElement.clientHeight - 50) {
			scrollBtnRef.current.classList.add("showBtn")
		} else {
			scrollBtnRef.current.classList.remove("showBtn")
		}
	}

	const scrollToTopClick = (e) => {
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}


	return (
		<BrowserRouter>
			<Header />
			<main className="page">
				<Routes>

					<Route path="/" element={<PageHome />} />
					{/* <Route path="brands/*" element={<PageBrands />} /> */}
					{/* <Route path="brands/*" element={<ProductCatalog />} /> */}
					<Route path="brands/*" element={<ProductHook />} />
					<Route path="service" element={<PageService />} />
					<Route path="services" element={<PageUslugi />} />
					<Route path="support" element={<PageSupport />} />
					<Route path="about" element={<PageAbout />} />
					<Route path="blog" element={<PageBlog />} />
					<Route path="showroom" element={<PageShowroom />} />
					<Route path="contacts" element={<PageContacts />} />
					<Route path="forhome" element={<CatalogForHome />} />
					<Route path="forclub" element={<CatalogForClub />} />
					<Route path="product/:slug/:id" element={<ProductCardPage />} />
					<Route path="search/:search" element={<ResultSearch />} />

					<Route path="login" element={<LoginForm />} />
					<Route path="registration" element={<RegistrationForm />} />

					<Route path="profile" element={<ProfilePage />} >
						<Route path="main" element={<MyProfile />} />
						<Route path="delivery" element={<Delivery />} />
						<Route path="orders" element={<Orders />} />
						<Route path="discount" element={<Discount />} />
						<Route path="bonuses" element={<Bonuses />} />
						<Route path="instructions" element={<Instructions />} />
						<Route path="appeals" element={<Appeals />} />
						<Route path="editprofile" element={<EditProfile />} />
					</Route>
				</Routes>
			</main>
			<button ref={scrollBtnRef} className="scrollToTop" onClick={scrollToTopClick}>

				<svg width="16" height="35" viewBox="0 0 14 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1.5L12 16L1 30.5" stroke="#F53B49" strokeWidth="5" />
				</svg>

			</button>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
