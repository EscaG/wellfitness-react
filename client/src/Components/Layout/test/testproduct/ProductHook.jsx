import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductItemHook from './ProductItemHook';

export default function ProductHook() {
	const [items, setItems] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState("");
	const BASE_URL = process.env.REACT_APP_BASE_URL;

	console.log(items);

	useEffect(() => {
		readAll();
	}, []);

	const create = (item) => {
		fetch(BASE_URL + "/productsfood",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(item)
			}
		)
			.then(response => response.json())
			.then(item => {
				const items = items;
				items.push(item);
				setItems(items);
			})
			.catch(err => {
				setError(err);
			});
	}

	const readAll = () => {
		fetch(BASE_URL + "/productsfood")
			.then(response => response.json())
			.then(items => {
				console.log(items);
				setItems(items);
				setIsLoaded(true);
			})
			.catch(err => {
				setError(err);
			});
	}

	const update = (item) => {
		// const items = items;
		// items[items.indexOf(i => i._id === item._id)] = item;
		setItems(items => items[items.indexOf(i => i._id === item._id)] = item);
		// setState(arr.map(item => item.id === newItem.id ? {…newItem} : item))
		setIsLoaded(false);

		fetch(BASE_URL + "/productsfood",
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(item)
			}
		)
			.then(response => { })
			.then(item => {
				const items = items;
				items.push(item);
				setItems(items);
				setIsLoaded(true);
			})
			.catch(err => {
				setError(err)
			});
	}

	const deleteProduct = (item) => {

		// const itemsDel = items;
		// console.log(item);
		// itemsDel.splice(itemsDel.indexOf(item), 1);
		setItems(items => items.filter(i => i._id !== item._id));
		// console.log(itemsDel);

		fetch(BASE_URL + "/productsfood",
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(item)
			}
		)
			.then(response => { })
			.then(ite => {
				for (const source of item.gallery) {
					// console.log(source)
					// deleteFile(source);
				}
			})
			.catch(err => {
				setError(err)
			});
	}

	const deleteFile = (path) => {

		let source = path.split("/")[path.split("/").length - 1];
		// let source = '/storage/products' + item.split('/upload/')[1];
		console.log(source);
		fetch(BASE_URL + "/files", {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ source })
		})
			.then(response => { })
			.then(fileName => {

			})
			.catch(err => console.log(err))
	}






	const doAutoCreate = () => {
		let products = [
			{
				name: 'Лапша бобовая с курицей и овощами 250 г',
				price: 55,
				des: `Лапша бобовая - 55.2% (гороховый и кукурузный крахмал, крахмал бобов мунг, вода), соус для лапши (овощи - 11.3% (лук, морковь, перец болгарский), вода, грибы древесные, соус устричный 3.5%...`,
				img: String,
				gallery: ['/storage/products/bobi.jpeg']
			},
			{
				name: 'Лапша с курицей и овощами',
				price: 55,
				des: `Лапша - 55.2% (мука из твердых сортов пшеницы, вода), соус для гарнира (овощи-11.1% (лук, морковь, перец болгарский), соус "Терияки" 7.3% ...`,
				img: String,
				gallery: ['/storage/products/chiken.jpeg']
			},
			{
				name: 'Лапша с овощами 250г',
				price: 48,
				des: `Лапша - 55.2% (мука из твердых сортов пшеницы, вода), соус для гарнира (овощи-11.1% (лук, морковь, перец болгарский), соус "Терияки" 7.3% ...`,
				img: String,
				gallery: ['/storage/products/vegetables.jpeg']
			},
		];
		for (const item of products) {
			fetch(BASE_URL + "/productsfood",
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(item)
				}
			)
				.then(response => response.json())
				.then(item => {
					// const itemsProd = items;
					// itemsProd.push(item);
					setItems(items => [...items, item]);
				})
				.catch(err => {
					setError(err);
				});
		}
	}



	return (
		<div>
			<button type="button" className="btn btn-danger" onClick={() => doAutoCreate()}> create </button>
			{items.map(item =>
				<ProductItemHook
					key={item._id}
					itemProduct={item}
					deleteProduct={deleteProduct}
					doAutoCreate={doAutoCreate}
					updateProduct={update}
					createProduct={create}
				/>
			)}
		</div>
	)
}
