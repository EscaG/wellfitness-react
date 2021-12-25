import React from 'react'
import {NavLink} from "react-router-dom";

export default function BottomHeader() {

	const setActiveLink = ({isActive}) => isActive ? "active-link" : '';

	return (
		<div className="header__bottom bottom-header">
			<div className="bottom-header__content _container">
				<div className="bottom-header__column">
					<div className="bottom-header__categories categories-select">
						<NavLink className={setActiveLink} to='/forhome'>Для дома</NavLink>
						<NavLink className={setActiveLink} to='/forclub'>Для фитнес клуба</NavLink>
					</div>
				</div>
			</div>
			{/* <!-- 	<option value="">Беговые дорожки</option>
						<option value="">Эллиптические тренажеры</option>
						<option value="">Велотренажеры</option>
						<option value="">Горнолыжные тренажеры</option>
						<option value="">Силовые тренажеры</option>
						<option value="">Гребные тренажеры</option>
						<option value="">Батуты</option>
						<option value="">Игровые столы</option>
						<option value="">Массажные кресла</option>
						<option value="">Фитнес аксессуары</option> --> */}

			{/* <!-- <option value="">Кардиотренажеры</option>
						<option value="">Силовые тренажеры</option>
						<option value="">Функциональный тренинг</option>
						<option value="">Свободные веса</option>
						<option value="">Аэробика</option>
						<option value="">Wellness, СПА, массаж</option>
						<option value="">Реабилитация и спортивная медицина</option>
						<option value="">Оборудование для бассейна</option>
						<option value="">Средства гигиены</option> --> */}
			{/* <Link to="/" > Main</Link >
				<Link to="/about" >О компании</Link> */}
		</div>
	)
}
