import React from 'react';
import './googleautocomplete.scss';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect } from 'react';

export default function GoogleAutocomplete({ isLoaded, setAddress, address }) {
	const { ready, value, suggestions: { status, data }, setValue, init, clearSuggestions, }
		= usePlacesAutocomplete({
			initOnMount: false,
			debounce: 300,
		});

	useEffect(() => {
		if (isLoaded) {
			init();
		}
	}, [isLoaded, init])

	useEffect(() => {
		if (address && address !== value) {
			setValue(address)
		}
	}, [address])

	const ref = useOnclickOutside(() => {
		clearSuggestions();
	});

	const handleInput = (e) => {
		setValue(e.target.value);
	};

	const handleSelect = ({ description }) =>
		() => {
			setAddress(description)
			// When user selects a place, we can replace the keyword without request data from API
			// by setting the second parameter to "false"
			setValue(description, false);
			clearSuggestions();

			// // Get latitude and longitude via utility functions
			// getGeocode({ address: description })
			// 	.then((results) => getLatLng(results[0]))
			// 	.then(({ lat, lng }) => {
			// 		console.log("📍 Coordinates: ", { lat, lng });
			// 	})
			// 	.catch((error) => {
			// 		console.log("😱 Error: ", error);
			// 	});
		};

	const renderSuggestions = () => {
		if (1) {
			return (

				data.map((suggestion) => {
					const {
						place_id,
						structured_formatting: { main_text, secondary_text },
					} = suggestion;

					return (
						<li key={place_id} onClick={handleSelect(suggestion)}>
							<strong>{main_text}</strong> <small>{secondary_text}</small>
						</li>
					);
				}
				))
		}
	}
	return (
		<div ref={ref} className='google-autocomplete'>
			<input
				value={value}
				onChange={handleInput}
				disabled={!ready}

			/>
			{/* We can use the "status" to decide whether we should display the dropdown or not */}
			{status === "OK" && <ul>{renderSuggestions()}</ul>}
		</div>
	);
}
