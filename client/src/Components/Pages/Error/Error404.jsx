import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './error404.scss';

export default function Error404() {
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from?.pathname || '/';
	return (
		<section className='error-page'>
			<div className='error-page__container'>

				<h1>Изивините, но мы не нашли эту страницу</h1>
				<Link to='/'>Вернуться на главную</Link>
			</div>
			{/* {fromPage} */}
		</section>
	);
}
