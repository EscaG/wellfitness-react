import React from 'react';
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
import ResultSearch from "./Components/Pages/ResultSearch/ResultSearch";
import Error404 from "./Components/Pages/Error/Error404";
import ErrorL from "./Components/hoc/ErrorL";
import PageBrands from "./Components/Pages/Brands/PageBrands";
import Layout from './Components/hoc/Layout';
import SpinnerLoad from './Components/Layout/SpinnerLoad/SpinnerLoad';
import Categories from './Components/Pages/Categories/Categories';


const ProductCardPage = React.lazy(() => import("./Components/Pages/ProductCard/ProductCardPage"))
const FavoritesPage = React.lazy(() => import("./Components/Pages/FavoritesPage/FavoritesPage"));
function App() {

	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<Layout />} >
					<Route index element={<PageHome />} />
					<Route path="brands" element={<PageBrands />} />
					<Route path="service" element={<PageService />} />
					<Route path="services" element={<PageUslugi />} />
					<Route path="support" element={<PageSupport />} />
					<Route path="about" element={<PageAbout />} />
					<Route path="blog" element={<PageBlog />} />
					<Route path="showroom" element={<PageShowroom />} />
					<Route path="forhome" element={<CatalogForHome />} />
					<Route path="forclub" element={<CatalogForClub />} />

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
					<Route path="product/:slug/:id" element={
						<React.Suspense fallback={<SpinnerLoad />}>
							<ProductCardPage />
						</React.Suspense>
					} />

					<Route path="categories/:from/:to" element={<Categories />} />
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

					<Route path="404" element={<Error404 />} />
					<Route path="*" element={<ErrorL >
						<Error404 />
					</ErrorL>} />
				</Route>

			</Routes>
		</BrowserRouter>

	);
}

export default App;
