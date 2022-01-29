/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import "./style-header.scss";
import DynamicAdapt from '../dynamicAdapt_dev';
// import { openMenu } from "./js/burger";
// import {useDispatch, useSelector} from "react-redux";
import TopHeader from "./Blocks/TopHeader";
import MiddleHeader from "./Blocks/MiddleHeader";
import BottomHeader from "./Blocks/BottomHeader";


export const Header = () => {
	useEffect(() => {
		// Открываю и закрываю меню
		// openMenu();
		new DynamicAdapt("max").init();
	}, []);

	return (
		< header className="header">
			{/* <!-- Верхняя часть - логотип + инфо --> */}
			<TopHeader ></TopHeader>

			{/* <!-- Средняя часть - основное меню--> */}
			<MiddleHeader></MiddleHeader>

			{/* <!-- Нижняя часть для подкаталога--> */}
			<BottomHeader></BottomHeader>

		</header>
	)
}
