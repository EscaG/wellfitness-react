import React from 'react';
import { useState } from 'react';

export default function ProductItemHook({ itemProduct, deleteProduct, doAutoCreate, updateProduct, createProduct }) {
	const [isEdit, setIsEdit] = useState(false);
	const [itemName, setItemName] = useState(itemProduct?.name && itemProduct.name);
	const [price, setPrice] = useState(itemProduct?.price && itemProduct.price);
	const [description, setDescription] = useState(itemProduct?.des && itemProduct.des);
	const [image, setImage] = useState(itemProduct?.img && itemProduct.img);
	const [gallery, setGallery] = useState(itemProduct?.gallery && itemProduct.gallery);

	// console.log(itemProduct);
	const BASE_URL = process.env.REACT_APP_BASE_URL;



	const sendFileData = () => {
		let formData = new FormData();
		formData.append("fileData", document.getElementById("fileData").files[0]);

		fetch("/api/files",
			{
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(fileName => {
				console.log(fileName);
				const item = item;
				item.gallery.push(this.state.URI + "/upload/" + fileName); // размещаю информацию о файле с папкой
				// this.setState({ item }); // обновляю информацию
				setItemName(item);
			})
			.catch(err => console.log(err));
	}

	const doOpenForm = () => {
		setIsEdit(true);
	}
	const doCloseForm = () => {
		setIsEdit(false);
	}


	return (
		<div className="card"   >

			<div id='imgGalleryInForm'>
				{gallery.map(imgSrc =>
					<img src={"http://localhost:5000/" + imgSrc} key={'productImgNew' + imgSrc} alt="img" />

				)}
			</div>

			{/* <img className="card-img-top" alt="" /> */}
			<div className="card-body">
				<h5 className="card-title">{itemName} </h5>
				<p className="card-text"> {description}</p>
				<p className="card-text"> {price} грн</p>
				<button type="button" className="btn btn-success" onClick={doOpenForm}> Edit </button>
				<button type="button" className="btn btn-danger" onClick={() => deleteProduct(itemProduct)}> Delete </button>
			</div>

		</div>
	);
}
