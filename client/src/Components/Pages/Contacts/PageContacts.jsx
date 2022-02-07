import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { Map } from '../../Layout/GoogleMaps/Map';
import './contacts.scss';
// import GoogleAutocomplete from '../../Layout/GoogleAutocomplete/GoogleAutocomplete';
const libraries = ['places'];

export default function PageContacts() {
	const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	const { isLoaded: isLoadedMap } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: GOOGLE_KEY,
		libraries
	})

	const defaultCenter = [
		{
			lat: 46.97507581147494,
			lng: 31.99273449824243
		},
		{
			lat: 46.968460649408755,
			lng: 31.973085839935543
		},
		{
			lat: 46.96814128814943,
			lng: 32.002101538777104
		},
	]

	console.log(isLoadedMap);
	return (
		<section className='contacts-page'>
			{/* <GoogleAutocomplete isLoaded={isLoadedMap} /> */}
			{isLoadedMap
				?
				<Map
					center={defaultCenter}
				/>
				: <h2>Loading</h2>
			}

		</section>
	);
}

