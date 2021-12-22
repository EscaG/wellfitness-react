import React from 'react';
import './modal-style.css';

export default function Modal({ active, setActive, children }) {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(!active)}>
			<div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
