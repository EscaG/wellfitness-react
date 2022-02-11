import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./resetstyle.scss";
import "./bootstrap.scss"
import './App.scss';


import { PageHome } from './Components/Pages/Home/PageHome';
import PageAbout from './Components/Pages/About/PageAbout';
import PageService from "./Components/Pages/Service/PageService";
import PageUslugi from "./Components/Pages/Uslugi/PageUslugi";
import PageSupport from "./Components/Pages/Support/PageSupport";
import PageBlog from "./Components/Pages/Blog/PageBlog";
import PageShowroom from "./Components/Pages/Showroom/PageShowroom";
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
import ResultSearch from "./Components/Pages/ResultSearch/ResultSearch";
import ErrorL from "./Components/hoc/ErrorL";
import Layout from './Components/hoc/Layout';
import SpinnerLoad from './Components/Layout/SpinnerLoad/SpinnerLoad';
import Basket from './Components/Pages/Basket/Basket';


const EditProfile = lazy(() => import("./Components/Pages/Profile/Components/EditProfile/EditProfile"));

const PageBrands = lazy(() => import("./Components/Pages/Brands/PageBrands"));
const PageContacts = lazy(() => import("./Components/Pages/Contacts/PageContacts"));
const ProductCardPage = lazy(() => import("./Components/Pages/ProductCard/ProductCardPage"))
const FavoritesPage = lazy(() => import("./Components/Pages/FavoritesPage/FavoritesPage"));
const CatalogForHome = lazy(() => import("./Components/Pages/CatalogForHome/CatalogForHome"));
const CatalogForClub = lazy(() => import("./Components/Pages/CatalogForClub/CatalogForClub"));

const Categories = lazy(() => import('./Components/Pages/Categories/Categories'));
const PrivacyPolicy = lazy(() => import('./Components/Pages/PrivacyPolicy/PrivacyPolicy'));
const Error404 = lazy(() => import("./Components/Pages/Error/Error404"));

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
					<Route path='basket' element={<Basket />} />
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
							<ErrorL >
								<Error404 />
							</ErrorL>
						</React.Suspense>
					} />

				</Route>

			</Routes>
		</BrowserRouter>

	);
}

export default App;
