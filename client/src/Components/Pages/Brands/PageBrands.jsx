import React, {useEffect, useState} from 'react'
import {Link, NavLink, Route, Routes} from 'react-router-dom';
import {LoginForm} from "../Login/LoginForm";
import Modal from "../../Layout/ModalWindow/Modal";

export function PageBrands() {
	const [activeModel, setActiveModel] = useState(true);

	return (
		<div>
			<Link to='login' >Login</Link>
			<Routes>
				<Route path="login" element={<Modal active={activeModel} setActive={setActiveModel}/>}/>
			</Routes>
		</div>
	)

}
