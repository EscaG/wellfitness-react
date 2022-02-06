import React, { useEffect, useState } from 'react';
import "./style-header.scss";
import DynamicAdapt from '../dynamicAdapt_dev';
import TopHeader from "./Blocks/TopHeader";
import MiddleHeader from "./Blocks/MiddleHeader";
import BottomHeader from "./Blocks/BottomHeader";


export const Header = () => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	useEffect(() => {
		// Открываю и закрываю меню
		// openMenu();
		new DynamicAdapt("max").init();
	}, []);

	const closeMenu = () => {
		setIsActiveMenu(false)
	}

	return (
		< header className="header">
			{/* <!-- Верхняя часть - логотип + инфо --> */}
			<TopHeader
				closeMenu={closeMenu}
				isActiveMenu={isActiveMenu}
				setIsActiveMenu={setIsActiveMenu}></TopHeader>

			{/* <!-- Средняя часть - основное меню--> */}
			<MiddleHeader
				closeMenu={closeMenu}
				isActiveMenu={isActiveMenu}
				setIsActiveMenu={setIsActiveMenu}></MiddleHeader>

			{/* <!-- Нижняя часть для подкаталога--> */}
			<BottomHeader></BottomHeader>

		</header>
	)
}
