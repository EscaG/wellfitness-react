import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { Map } from '../../Layout/GoogleMaps/Map';
import './contacts.scss';
import { useState } from 'react';


// import cityCener from './location-citycenter.png';
import AddressShop from '../../Layout/AddressShop/AddressShop';
import ContactsOffice from './sections/ContactsOffice';
import ContactsSales from './sections/ContactsSales';
import ContactsAccounting from './sections/ContactsAccounting';
import ContactsService from './sections/ContactsService';
import ContactsOfficeKiev from './sections/ContactsOfficeKiev';
import AddressShopKiev from '../../Layout/AddressShop/AddressShopKiev';
import ContactsWareHous from './sections/ContactsWareHous';
import WriteToUs from './sections/WriteToUs/WriteToUs';
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
	// const [city, setCity] = useState(kiev);

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
		<article className='contacts-page'>
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
			{/* //todoСекция с адресным блоком */}
			{isBtnNykolaev ?
				<AddressShop />
				:
				<AddressShopKiev />
			}
			{/* //!Секция с картой */}
			<section className='contacts-map'>
				{isLoadedMap
					?
					<Map
						center={city}
					/>
					: <h2>Loading</h2>
				}
			</section>
			{/* //todo офисы */}
			<section className='contacts-page__office office-contacts'>
				{/* //* главный офис */}
				{isBtnNykolaev ?
					<ContactsOffice />
					:
					<ContactsOfficeKiev />
				}
				{/* //* отдел продаж */}
				<ContactsSales />
				{/* //* отдел бухгалтерии */}
				<ContactsAccounting />
				{/* //* Сервисная служба */}
				<ContactsService />
			</section>
			<ContactsWareHous />
			<WriteToUs />
		</article>
	);
}

