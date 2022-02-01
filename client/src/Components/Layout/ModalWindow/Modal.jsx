import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setConditionAutocomplite } from '../../../http/reducers/modalReducerAutocomplite';
import './modal-style.scss';

export default function Modal({ modalActive, setModalActive, active, children }) {
	// modalActive={modalActive}
	// 									setModalActive={setModalActive}
	// const isModal = useSelector(state => state.modalAutocomplete.currentCondition);
	// isModal = true;
	// console.log(isModal);
	// const dispatch = useDispatch();
	// console.log(modalActive);
	useEffect(() => {
		document.body.classList.toggle("block");
		return () => {
			document.body.classList.toggle("block");
		};
	}, []);

	return (
		<div className={modalActive ? "modal active" : "modal"}
			// onClick={() => { dispatch(setConditionAutocomplite(false)) }}
			onClick={() => setModalActive(!modalActive)}
		>
			<div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
