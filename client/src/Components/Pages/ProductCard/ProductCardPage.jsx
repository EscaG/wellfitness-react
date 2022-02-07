import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PromotionItem from '../../Layout/PromotionItem/PromotionItem';
import Characteristics from './Sections/Characteristics';
import Description from './Sections/Description';
import FeedBack from './Sections/FeedBack';
import MenuList from './Sections/MenuList';
import Presentation from './Sections/Presentation';
import './style-productcard.scss';


export default function ProductCardPage() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const API_URL = process.env.REACT_APP_BASE_URL;
	const navigate = useNavigate();
	const goError = () => navigate('/404', { replace: true });
	let params = useParams();

	useEffect(() => {
		async function getProduct(id) {
			setIsLoading(false)
			try {
				const response = await axios.get(API_URL + "/product/byid/" + id)
				setIsLoading(true)
				if (response) { setProduct(response.data) }
				setIsLoading(true)
				console.log(response);
				document.body.scrollIntoView();
			} catch (error) {
				goError()
				console.log(error.message);
			};
		}
		getProduct(params.id)

	}, [params.id]);



	return (
		<article className='page-productcard'>
			{!isLoading ?
				<div className='loader-block'>

					<div className="loader"></div>
				</div>
				:
				<>
					<Presentation product={product} />
					<MenuList />
					<Description product={product} />
					<Characteristics product={product} />
					<FeedBack />
					<PromotionItem />
				</>
			}
		</article>
	);
}
