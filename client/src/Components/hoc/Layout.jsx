import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getProduct } from '../../http/actions/product';
import { checkAuth } from '../../http/actions/user';
import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';

export default function Layout() {
	if (!localStorage.getItem('favorites')) {
		localStorage.setItem('favorites', [])
	}
	// localStorage.clear()
	const dispatch = useDispatch();
	const scrollBtnRef = useRef();
	const rootElement = document.documentElement;


	useEffect(() => {
		console.log("APP")
		dispatch(getProduct());
		if (localStorage.getItem('token')) dispatch(checkAuth());
		document.addEventListener("scroll", handleScroll, { passive: true })
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
		<>
			<Header />
			<main className="page">
				<Outlet />
			</main>
			<button ref={scrollBtnRef} className="scrollToTop" onClick={scrollToTopClick}>

				<svg width="12" height="35" viewBox="0 0 14 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1.5L12 16L1 30.5" stroke="#F53B49" strokeWidth="5" />
				</svg>

			</button>
			<Footer />
		</>
	);
}
