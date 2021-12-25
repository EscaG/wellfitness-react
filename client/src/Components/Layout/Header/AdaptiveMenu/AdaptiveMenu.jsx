import React from 'react'
import {adaptiveMenuCatalogBack, adaptiveMenuCatalogClub, adaptiveMenuCatalogHome} from "../js/burger";

export default function AdaptiveMenu() {
	return (
		<div>
			<div className="top-header__menu adaptive-menu">
				<div className="adaptive-menu__icon-menu menu-icon">
					<span></span>
					<span></span>
					<span></span>

				</div>
				{/* <!-- Весь контент меню --> */}
				<div className="adaptive-menu__content">
					{/* <!-- Блок для логина --> */}
					<div className="adaptive-menu__login"></div>
					<div className="adaptive-menu__main-menu">
						<button
							onClick={adaptiveMenuCatalogHome}
							className="adaptive-menu__main-menu_home" type="button">
							Для дома
						</button>
						<button
							onClick={adaptiveMenuCatalogClub}
							className="adaptive-menu__main-menu_club" type="button">
							Для фитнес клубов
						</button>
					</div>
					{/* <!-- Начало блока для подкаталога --> */}
					<div className="subdirectory__container sub_home">
						<button
							onClick={adaptiveMenuCatalogBack}
							type="button">Назад
						</button>
						<h3>Для Дома</h3>
						<ul className="subdirectory__list list-home">
							<li><a href="" className="subdirectory__link"><span>Беговые дорожки</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Эллиптические тренажеры</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Велотренажеры</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Горнолыжные тренажеры</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Силовые тренажеры</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Гребные тренажеры</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Батуты</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Игровые столы</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Массажные кресла</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Фитнес аксессуары</span></a></li>
						</ul>
					</div>
					<div className="subdirectory__container sub_club">
						<button
							onClick={adaptiveMenuCatalogBack}
							type="button">Назад
						</button>
						<h3>Для фитнес клубов</h3>
						<ul className="subdirectory__list list_club">
							<li><a href="" className="subdirectory__link"><span>Кардиотренажеры</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Силовые тренажеры</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Функциональный тренинг</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Свободные веса</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Аэробика</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Wellness, СПА, массаж</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Реабилитация и спортивная медицина</span></a>
							</li>
							<li><a href="" className="subdirectory__link"><span>Оборудование для бассейна</span></a></li>
							<li><a href="" className="subdirectory__link"><span>Средства гигиены</span></a></li>
						</ul>
					</div>
					{/* <!-- Конец блока для подкаталога --> */}
					{/* <!-- Блок для всех контактов --> */}
					<div className="adaptive-menu__contacts"></div>
				</div>
			</div>
		</div>
	)
}
