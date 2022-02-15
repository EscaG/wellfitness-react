import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./resetstyle.scss";
import "./bootstrap.scss"
import './App.scss';


import { PageHome } from './Pages/Home/PageHome';
import PageAbout from './Pages/About/PageAbout';
import PageService from "./Pages/Service/PageService";
import PageUslugi from "./Pages/Uslugi/PageUslugi";
import PageSupport from "./Pages/Support/PageSupport";
import PageBlog from "./Pages/Blog/PageBlog";
import PageShowroom from "./Pages/Showroom/PageShowroom";
import { LoginForm } from "./Pages/Login/LoginForm";
import RegistrationForm from "./Pages/Login/RegistrationForm";
import ProfilePage from "./Pages/Profile/ProfilePage";
import MyProfile from "./Pages/Profile/Components/MyProfile";
import Delivery from "./Pages/Profile/Components/Delivery";
import Orders from "./Pages/Profile/Components/Orders";
import Discount from "./Pages/Profile/Components/Discount";
import Bonuses from "./Pages/Profile/Components/Bonuses";
import Instructions from "./Pages/Profile/Components/Instructions";
import Appeals from "./Pages/Profile/Components/Appeals";
import ResultSearch from "./Pages/ResultSearch/ResultSearch";
import Error from "./Components/hoc/Error";
import Layout from './Components/hoc/Layout';
import SpinnerLoad from './Components/Layout/SpinnerLoad/SpinnerLoad';
import BasketPage from './Pages/BasketPage/BasketPage';


const EditProfile = lazy(() => import("./Pages/Profile/Components/EditProfile/EditProfile"));

const PageBrands = lazy(() => import("./Pages/Brands/PageBrands"));
const PageContacts = lazy(() => import("./Pages/Contacts/PageContacts"));
const ProductCardPage = lazy(() => import("./Pages/ProductCard/ProductCardPage"))
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage/FavoritesPage"));
const CatalogForHome = lazy(() => import("./Pages/CatalogForHome/CatalogForHome"));
const CatalogForClub = lazy(() => import("./Pages/CatalogForClub/CatalogForClub"));

const Categories = lazy(() => import('./Pages/Categories/Categories'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy/PrivacyPolicy'));
const Error404 = lazy(() => import("./Pages/Error404/Error404"));

function App() {

	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<Layout />} >
					<Route index element={<PageHome />} />
					<Route path="service" element={<PageService />} />
					<Route path="services" element={<PageUslugi />} />
					<Route path="support" element={<PageSupport />} />
					<Route path="about" element={<PageAbout />} />
					<Route path="blog" element={<PageBlog />} />
					<Route path="showroom" element={<PageShowroom />} />

					<Route path="brands" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<PageBrands />
						</React.Suspense>
					} />

					<Route path="forhome" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<CatalogForHome />
						</React.Suspense>
					} />
					<Route path="forclub" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<CatalogForClub />
						</React.Suspense>
					} />

					<Route path="contacts" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<PageContacts />
						</React.Suspense>
					} />
					<Route path="favorites" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<FavoritesPage />
						</React.Suspense>
					} />
					<Route path='basket' element={<BasketPage />} />
					<Route path="product/:slug/:id" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<ProductCardPage />
						</React.Suspense>
					} />

					<Route path="categories/:from/:to" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<Categories />
						</React.Suspense>
					} />
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
						<Route path="editprofile" element={
							<React.Suspense fallback={<SpinnerLoad />}>
								<EditProfile />
							</React.Suspense>
						} />
					</Route>

					<Route path='privacy-policy' element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<PrivacyPolicy />
						</React.Suspense>
					} />

					<Route path="404" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<Error404 />
						</React.Suspense>
					} />

					<Route path="*" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<Error >
								<Error404 />
							</Error>
						</React.Suspense>
					} />

				</Route>

			</Routes>
		</BrowserRouter>

	);
}

export default App;
