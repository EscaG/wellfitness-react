import React, { useEffect, useRef, useState } from 'react';
import './burger.scss';

export default function Burger({ isActiveMenu, setIsActiveMenu }) {
	// const [isActiveMenu, setIsActiveMenu] = useState(false);
	const burgerRef = useRef();

	useEffect(() => {
		if (isActiveMenu) {

			burgerRef.current.classList.add('_active');
		} else {
			burgerRef.current.classList.remove('_active');
		}
	}, [isActiveMenu])



	return (
		<div ref={burgerRef}
			onClick={(e) => setIsActiveMenu(!isActiveMenu)}
			className="adaptive-menu__icon-menu menu-icon">
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
