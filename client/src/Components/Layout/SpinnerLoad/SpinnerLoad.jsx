import React from 'react';
import { useEffect } from 'react';
import './spinner.scss';

export default function SpinnerLoad() {
	useEffect(() => {
		document.body.scrollIntoView({ behavior: "smooth" });
	}, [])
	return (
		<div className='loader-block'>
			<div className="loader"></div>
		</div>
	);
}
