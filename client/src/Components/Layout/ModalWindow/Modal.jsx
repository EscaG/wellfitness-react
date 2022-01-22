import React, { useEffect } from 'react';
import './modal-style.scss';

export default function Modal({ active, setActive, children }) {

	useEffect(() => {
		document.body.classList.toggle("block");
		return () => {
			document.body.classList.toggle("block");
		};
	}, []);

	return (
		<div className={active ? "modal active" : "modal"} onClick={() => { setActive(!active) }}>
			<div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
