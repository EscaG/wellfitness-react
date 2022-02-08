import React, { useCallback } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useRef } from 'react';
import './map.css';
import MyMarker from '../MyMarker/MyMarker';


export function Map({ center, markers }) {

	const mapRef = useRef(undefined);
	const containerStyle = {
		width: '100%',
		height: '100%'
	};

	const onLoad = useCallback(function callback(map) {
		mapRef.current = map
	}, [])

	const onUnmount = useCallback(function callback(map) {
		mapRef.current = undefined;
	}, [])

	const options = {
		// panControl: true,
		// zoomControl: true,
		mapTypeControl: false,
		// scaleControl: false,
		streetViewControl: false,
		// rotateControl: false,
		// clickableIcons: false,
		// keyboardShortcuts: false,
		// scrollwheel: false,
		// disableDoubleClickZoom: false,
		// fullscreenControl: false
	}


	return (
		<div className='map'>

			<GoogleMap
				options={options}
				mapContainerStyle={containerStyle}
				center={center}
				zoom={12}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{markers?.length ? markers.map((pos, index) =>
					<MyMarker
						key={pos.lat}
						position={pos}
					/>
				)
					:
					<MyMarker
						position={center}
					/>
				}

			</GoogleMap>
		</div>
	)
}
