import React, { Component } from 'react';

export default class ProductCatalogItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			URI: process.env.REACT_APP_BASE_URL,
			item: props.item, // сам элемент
			isEdit: false
		}
	}


	sendFileData() {
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
				const item = this.state.item;
				item.gallery.push(this.state.URI + "/upload/" + fileName); // размещаю информацию о файле с папкой
				this.setState({ item }); // обновляю информацию
			})
			.catch(err => console.log(err));
	}


	doOpenForm() {
		this.oldItem = this.state.item;
		if (!this.state.item) {
			this.state.item = new Object();
			this.state.item.name = "";
			this.state.item.price = "";
			this.state.item.des = "";
			this.state.item.img = "";
			this.state.item.gallery = [];
		}
		this.setState({ isEdit: true });
	}

	doCloseForm() {
		this.setState({ isEdit: false, item: this.oldItem });
	}

	doSaveForm() {
		if (this.props.create) {
			this.props.create(this.state.item);
			this.setState({ isEdit: false, item: null });
		} else {
			this.props.update(this.state.item);
			this.setState({ isEdit: false });
		}
	}

	doDelete() {
		this.props.delete(this.state.item);
	}

	onChange(el) {
		const i = this.state.item;
		i[el.target.name] = el.target.value;
		this.setState({ item: i });
	}

	// Вывести на экран саму сущность (продукт)
	renderData() {
		console.log(this.state.item);
		return (
			<div className="card" key={this.state.item._id}  >
				<div id='imgGalleryInForm'>
					{
						this.state.item.gallery.map(imgSrc =>
							<img src={"http://localhost:5000/" + imgSrc} key={'productImgNew' + imgSrc} alt="img" />

						)
					}
				</div>

				{/* <img className="card-img-top" alt="" /> */}
				<div className="card-body">
					<h5 className="card-title">{this.state.item.name} </h5>
					<p className="card-text"> {this.state.item.des}</p>
					<p className="card-text"> {this.state.item.price} грн</p>
					<button type="button" className="btn btn-success" onClick={this.doOpenForm.bind(this)}> Edit </button>
					<button type="button" className="btn btn-danger" onClick={this.doDelete.bind(this)}> Delete </button>
				</div>
			</div>
		)
	}

	renderForm() {

		return (
			<form className="card">
				<input type="hidden" className="form-control" id="_id" name="_id" />
				<div className="mb-3">
					<label className="form-label">Название продукта</label>
					<input value={this.state.item.name} type="text" className="form-control" id="name" name="name" onChange={this.onChange.bind(this)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Цена</label>
					<input value={this.state.item.price} type="number" className="form-control" id="price" name="price" onChange={this.onChange.bind(this)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Описание</label>
					<textarea value={this.state.item.des} className="form-control" id="des" name="des" onChange={this.onChange.bind(this)}></textarea>
				</div>

				<div className="mb-3">
					<input type='file' name='fileData' id='fileData' onChange={this.sendFileData.bind(this)} />
					<ul id='imgGalleryInForm'>
						{
							this.state.item.gallery.map(imgSrc =>
								<img src={imgSrc} key={'productImgNew' + imgSrc} alt="img" />
							)
						}
					</ul>
				</div >
				<div className=" btn-form">

					<button type="button" className="btn btn-secondary" onClick={this.doCloseForm.bind(this)}> Close </button>
					<button type="button" className="btn btn-success" onClick={this.doSaveForm.bind(this)}> Save</button>
				</div>
			</form>
		)
	}

	renderNew() {
		return (
			<div className="newCard">
				<button type="button" className="btn btn-success" onClick={this.doOpenForm.bind(this)}> Create </button>
				<div className="white-space"></div>
				<button type="button" className="btn btn-success" onClick={this.props.doAutoCreate.bind(this)}> Auto create </button>
			</div>
		)
	}

	render() {
		if (this.state.isEdit)
			return this.renderForm();
		if (!this.state.item)
			return this.renderNew();

		return this.renderData();
	}
}
