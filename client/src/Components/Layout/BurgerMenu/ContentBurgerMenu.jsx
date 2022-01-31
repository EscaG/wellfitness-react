import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './contentBurgerMenu.scss';

export default function ContentBurgerMenu({ border, isActiveMenu, setIsActiveMenu }) {

	const menuContentRef = useRef();
	const mainMenuRef = useRef();
	const loginBlockRef = useRef();
	const subHomeRef = useRef();
	const subClubRef = useRef();


	useEffect(() => {
		setTimeout(() => {

			menuContentRef.current.style.transition = "0.3s";
		}, 300)
		if (isActiveMenu) {
			menuContentRef.current.classList.add('_active');
			document.body.classList.add("lock");
			border.current.classList.remove('_active')
			subMenuRemoveDisActive()
			document.addEventListener('click', (e) => { handleMenu(e) })
		}

		else {
			closeMenu();
		}

	}, [isActiveMenu]);

	//* проверка события на клик, если мимо меню - значит закрыть меню 
	const handleMenu = (e) => {
		if (menuContentRef?.current && !menuContentRef.current.contains(e.target) && menuContentRef.current.classList.contains("_active")) {
			closeMenu();
			setIsActiveMenu(false);
		}
	}

	const closeMenu = () => {
		menuContentRef.current.classList.remove('_active');
		document.body.classList.remove("lock");
		border.current.classList.remove('_active');
		subMenuRemoveDisActive();
	}


	const submenuAddDisactive = () => {
		mainMenuRef.current.classList.add('_disactive');
		loginBlockRef.current.classList.add('_disactive');
		border.current.classList.add('_active');
	}
	const subMenuRemoveDisActive = () => {
		mainMenuRef.current.classList.remove('_disactive');
		subHomeRef.current.classList.remove('_active');
		subClubRef.current.classList.remove('_active');
		loginBlockRef.current.classList.remove('_disactive');
	}

	const menuCatalogHome = () => {
		submenuAddDisactive();
		subHomeRef.current.classList.add('_active');
	}
	const menuCatalogClub = () => {
		submenuAddDisactive();
		subClubRef.current.classList.add('_active');

	}
	const menuCatalogBack = () => {
		subMenuRemoveDisActive();
		border.current.classList.remove('_active');
	}




	return (
		<div ref={menuContentRef} className="adaptive-menu__content _active">
			{/* //!-- Блок для логина -- */}
			<div ref={loginBlockRef} className="adaptive-menu__login"></div>
			<div ref={mainMenuRef} className="adaptive-menu__main-menu">
				<button
					onClick={menuCatalogHome}
					className="adaptive-menu__main-menu_home" type="button">
					Для дома
				</button>
				<button
					onClick={menuCatalogClub}
					className="adaptive-menu__main-menu_club" type="button">
					Для фитнес клубов
				</button>
			</div>
			{/*// !-- Начало блока для подкаталога -- */}
			<div ref={subHomeRef} className="subdirectory__container sub_home">
				<button
					onClick={menuCatalogBack}
					type="button">Назад
				</button>
				<h3>Для Дома</h3>
				<ul className="subdirectory__list list-home">
					<li><Link onClick={() => setIsActiveMenu(false)} to='/' className="subdirectory__link"><span>Беговые дорожки</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Эллиптические тренажеры</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Велотренажеры</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Горнолыжные тренажеры</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Силовые тренажеры</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Гребные тренажеры</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Батуты</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Игровые столы</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Массажные кресла</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Фитнес аксессуары</span></Link></li>
				</ul>
			</div>
			<div ref={subClubRef} className="subdirectory__container sub_club">
				<button
					onClick={menuCatalogBack}
					type="button">Назад
				</button>
				<h3>Для фитнес клубов</h3>
				<ul className="subdirectory__list list_club">
					<li><Link to='/' className="subdirectory__link"><span>Кардиотренажеры</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Силовые тренажеры</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Функциональный тренинг</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Свободные веса</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Аэробика</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Wellness, СПА, массаж</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Реабилитация и спортивная медицина</span></Link>							</li>
					<li><Link to='/' className="subdirectory__link"><span>Оборудование для бассейна</span></Link></li>
					<li><Link to='/' className="subdirectory__link"><span>Средства гигиены</span></Link></li>
				</ul>
			</div>
			{/* //!-- Конец блока для подкаталога --> */}
			{/* //!-- Блок для всех контактов --> */}
			<div className="adaptive-menu__contacts"></div>
		</div>
	);
}
