import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setConditionAutocomplite } from '../../../http/reducers/modalReducerAutocomplite';
import './modal-style.scss';

export default function Modal({ active, children }) {
	// const isModal = useSelector(state => state.modalAutocomplete.currentCondition);
	// console.log(isModal);
	const dispatch = useDispatch();

	useEffect(() => {
		document.body.classList.toggle("block");
		return () => {
			document.body.classList.toggle("block");
		};
	}, []);

	return (
		<div className={active ? "modal active" : "modal"} onClick={() => { dispatch(setConditionAutocomplite(false)) }}>
			<div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
