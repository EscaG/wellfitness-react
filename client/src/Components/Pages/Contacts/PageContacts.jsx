import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { Map } from '../../Layout/GoogleMaps/Map';
import './contacts.scss';
import { useState } from 'react';
const libraries = ['places'];

export default function PageContacts() {
	const [isBtnNykolaev, setIsBtnNykolaev] = useState(true);
	const [isBtnKiev, setIsBtnKiev] = useState(false);
	const [city, setCity] = useState({ lat: 46.97507581147494, lng: 31.99273449824243 });
	const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	const { isLoaded: isLoadedMap } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: GOOGLE_KEY,
		libraries
	})

	const nykolaev =
	{
		lat: 46.97507581147494,
		lng: 31.99273449824243
	};
	const kiev = {
		lat: 50.45558370296045,
		lng: 30.51640964849236
	};

	// let arr = [{
	// 	lat: 46.968460649408755,
	// 	lng: 31.973085839935543
	// },
	// {
	// 	lat: 46.96814128814943,
	// 	lng: 32.002101538777104
	// },	]


	const handleCity = (e) => {
		if (e.target.id === "contacts-nykolaev") {
			setIsBtnNykolaev(true);
			setIsBtnKiev(false);
			setCity(nykolaev);
		} else if (e.target.id === "contacts-kiev") {
			setIsBtnNykolaev(false);
			setIsBtnKiev(true);
			setCity(kiev);

		}
	}

	return (
		<section className='contacts-page'>
			<h1 className='contacts-page__title'>Контакты</h1>
			<div className='contacts-page__cities'>
				<button
					className={(isBtnNykolaev ? 'active ' : '') + 'article__link'}
					onClick={(e) => { handleCity(e) }}
					id='contacts-nykolaev'
				>Контакты в Николаеве</button>
				<button
					className={(isBtnKiev ? 'active ' : '') + 'article__link'}
					onClick={(e) => { handleCity(e) }}
					id='contacts-kiev'
				>Контакты в Киеве</button>
			</div>
			<div className='contacts-page__shop-contacts contacts-shop'>
				<div>
					<h2 className='contacts-shop__name'>Фирменный магазин <br /> Well Fitness</h2>
					<div className="contacts-shop__address-box box-address">
						<div>
							<div className='box-address__address'>
								Москва, ТРК VEGAS Крокус Сити, <br />
								м. Мякинино, ул. Международная 12,<br />
								66 км МКАД
							</div>
							<a className="box-address__phone" href="tel:88001234567">+8 (800) 677-56-32</a><br />
							<a className="box-address__email" href="mailto:info@wellfitness.ru">wellfitness@wellfit.ru</a><br />
							<button className='box-address__drive'>Как проехать</button><br />
							<button className='article__link box-address__write'>Написать нам</button>
						</div>
						<div className='box-address__work-time'>
							<div className='box-address__work-text'>Режим работы </div>
							<div>10:00 – 21:00</div>
						</div>
					</div>
				</div>
				<div></div>
			</div>
			<div>
				{/* {isLoadedMap
					?
					<Map
						center={city}
					/>
					: <h2>Loading</h2>
				} */}
			</div>

		</section>
	);
}

