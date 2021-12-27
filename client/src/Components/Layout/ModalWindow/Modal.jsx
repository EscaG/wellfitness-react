import React from 'react';
import './modal-style.scss';

export default function Modal({ active, setActive, children, setDisplay }) {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => { setActive(!active); setDisplay(false) }}>
			<div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
