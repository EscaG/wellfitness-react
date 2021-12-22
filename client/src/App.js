import "./resetstyle.scss";
import "./bootstrap.scss"
import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./Layout/Footer/Footer";
import { Header } from "./Layout/Header/Header";
import { PageHome } from './Pages/Home/PageHome';
import PageAbout from './Pages/About/PageAbout';
import PageBrands from "./Pages/Brands/PageBrands";
import PageService from "./Pages/Service/PageService";
import PageUslugi from "./Pages/Uslugi/PageUslugi";
import PageSupport from "./Pages/Support/PageSupport";
import PageBlog from "./Pages/Blog/PageBlog";
import PageShowroom from "./Pages/Showroom/PageShowroom";
import PageContacts from "./Pages/Contacts/PageContacts";
import CatalogForHome from "./Pages/CatalogForHome/CatalogForHome";
import CatalogForClub from "./Pages/CatalogForClub/CatalogForClub";

function App() {
	return (

		<BrowserRouter>
			<Header />

			<main className="page">
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/brands" element={<PageBrands />} />
					<Route path="/service" element={<PageService />} />
					<Route path="/services" element={<PageUslugi />} />
					<Route path="/support" element={<PageSupport />} />
					<Route path="/about" element={<PageAbout />} />
					<Route path="/blog" element={<PageBlog />} />
					<Route path="/showroom" element={<PageShowroom />} />
					<Route path="/contacts" element={<PageContacts />} />
					<Route path="/forhome" element={<CatalogForHome />} />
					<Route path="/forclub" element={<CatalogForClub />} />
				</Routes>
			</main>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
