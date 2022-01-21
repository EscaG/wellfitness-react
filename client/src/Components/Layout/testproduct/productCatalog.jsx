import React from "react";
import ProductCatalogItem from "./productCatalogItem";


export default class ProductCatalog extends React.Component {

	// Конструктор - запускается первым в начале работы
	// props - данные для начала жизни компонента (его свойства)
	constructor(props) {
		super(props); // Вызов конструктора предка

		// Состояние компонента
		this.state = {
			URI: process.env.REACT_APP_BASE_URL,
			error: null, // Состояние ошибки
			isLoaded: false, // Состояние загрузки
			items: [] // Данные для отображения в компаненте
		}

	}

	componentDidMount() {
		this.readAll();
	}

	create(item) {
		fetch(this.state.URI + "/api/products",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(item)
			}
		)
			.then(response => response.json())
			.then(item => {
				const items = this.state.items;
				items.push(item);
				this.setState({
					items: items
				});
			})
			.catch(err => {
				this.setState({ error: err });
			});
	}

	doAutoCreate() {
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
			fetch(this.state.URI + "/api/products",
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(item)
				}
			)
				.then(response => response.json())
				.then(item => {
					const items = this.state.items;
					items.push(item);
					this.setState({
						items: items
					});
				})
				.catch(err => {
					this.setState({ error: err });
				});
		}
	}

	// Читает всю коллекцию из базы данных в компонент
	readAll() {
		fetch(this.state.URI + "/api/products")
			.then(response => response.json())
			.then(items => {
				this.setState({
					isLoaded: true,
					items: items
				});
			})
			.catch(err => {
				this.setState({ error: err });
			});
	}

	update(item) {
		const items = this.state.items;
		items[items.indexOf(i => i._id === item._id)] = item;
		this.setState({
			isLoaded: false,
			items: items
		});
		fetch(this.state.URI + "/api/products",
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(item)
			}
		)
			.then(response => { })
			.then(item => {
				// const items = this.state.items;
				// items.push(item);
				// this.setState({
				// 	items: items
				// });

				this.setState({ isLoaded: true })
			})
			.catch(err => {
				this.setState({ error: err });
			});
	}

	delete(item) {
		const items = this.state.items;
		console.log(item);
		items.splice(items.indexOf(item), 1);

		this.setState({
			// isLoaded: false,
			items: items
		});



		fetch(this.state.URI + "/api/products",
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(item)
			}
		)
			.then(response => { })
			.then(ite => {
				for (const source of item.gallery) {
					console.log(source)
					this.deleteFile(source);
				}
				//  this.setState({ isLoaded: true }) 
			})
			.catch(err => {
				this.setState({ error: err });
			});
	}

	deleteFile(path) {

		let source = path.split("/")[path.split("/").length - 1];
		// let source = '/storage/products' + item.split('/upload/')[1];
		console.log(source);
		fetch(this.state.URI + "/api/files", {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ source })
		})
			.then(response => { })
			.then(fileName => {
				// const items = this.state.items;
				// items.splice(items.indexOf(source), 1);
				// this.setState({ items });
				// this.render();
			})
			.catch(err => console.log(err))
	}


	// Этот метод будет отрабатывать каждый раз при отрисовке компонента
	render() {
		if (this.state.error) return this.renderError(); // Если ошибка - вывожу ее
		if (!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
		return this.renderData();
	}

	// Вывод основного состояния компонента
	renderData() {
		return (
			<div className="row" id="productCatalog" >
				{
					this.state.items.map(item =>
						<ProductCatalogItem key={item._id}
							update={this.update.bind(this)}
							delete={this.delete.bind(this)}
							item={item}
						></ProductCatalogItem>
					)
				}
				<ProductCatalogItem
					doAutoCreate={this.doAutoCreate.bind(this)}
					key="newElement" create={this.create.bind(this)}></ProductCatalogItem>
			</div>
		);
	}

	// Компонент в состоянии загрузки
	renderLoading() {
		return (
			<div className="d-flex justify-content-center">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		)
	}

	// Отображение компонента в состоянии ошибки
	renderError() {
		return (
			<div className="alert alert-danger" role="alert">
				Error: {this.state.error.message}
			</div>
		);
	}
}













// import React, { useState } from 'react';

// export default function ProductCatalog() {
// 	const [items, setItems] = useState([]);



// 	const create = (item) => {
// 		fetch("/api/products",
// 			{
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(item)
// 			}
// 		)
// 			.then(response => response.json())
// 			.then(item => {
// 				const items = items;
// 				items.push(item);
// 				// this.setState({
// 				// 	items: items
// 				// });
// 				setItems(items);
// 			})
// 			.catch(err => {
// 				// this.setState({ error: err });
// 			});
// 	}

// 	const doAutoCreate = () => {
// 		let products = [
// 			{
// 				name: 'Лапша бобовая с курицей и овощами 250 г',
// 				price: 55,
// 				des: `Лапша бобовая - 55.2% (гороховый и кукурузный крахмал, крахмал бобов мунг, вода), соус для лапши (овощи - 11.3% (лук, морковь, перец болгарский), вода, грибы древесные, соус устричный 3.5%...`,
// 				img: String,
// 				gallery: ['/storage/products/bobi.jpeg']
// 			},
// 			{
// 				name: 'Лапша с курицей и овощами',
// 				price: 55,
// 				des: `Лапша - 55.2% (мука из твердых сортов пшеницы, вода), соус для гарнира (овощи-11.1% (лук, морковь, перец болгарский), соус "Терияки" 7.3% ...`,
// 				img: String,
// 				gallery: ['/storage/products/chiken.jpeg']
// 			},
// 			{
// 				name: 'Лапша с овощами 250г',
// 				price: 48,
// 				des: `Лапша - 55.2% (мука из твердых сортов пшеницы, вода), соус для гарнира (овощи-11.1% (лук, морковь, перец болгарский), соус "Терияки" 7.3% ...`,
// 				img: String,
// 				gallery: ['/storage/products/vegetables.jpeg']
// 			},
// 		];
// 		for (const item of products) {
// 			fetch("/api/products",
// 				{
// 					method: 'POST',
// 					headers: { 'Content-Type': 'application/json' },
// 					body: JSON.stringify(item)
// 				}
// 			)
// 				.then(response => response.json())
// 				.then(item => {
// 					// const items = this.state.items;
// 					// items.push(item);
// 					// this.setState({
// 					// 	items: items
// 					// });
// 					const items = items;
// 					items.push(item);
// 					setItems(items);
// 				})
// 				.catch(err => {
// 					// this.setState({ error: err });
// 				});
// 		}
// 	}

// 	// Читает всю коллекцию из базы данных в компонент
// 	const readAll = () => {
// 		fetch("/api/products")
// 			.then(response => response.json())
// 			.then(items => {
// 				// this.setState({
// 				// 	isLoaded: true,
// 				// 	items: items
// 				// });
// 				setItems(items);
// 			})
// 			.catch(err => {
// 				// this.setState({ error: err });
// 			});
// 	}

// 	const update = (item) => {
// 		const items = this.state.items;
// 		items[items.indexOf(i => i._id === item._id)] = item;
// 		this.setState({
// 			isLoaded: false,
// 			items: items
// 		});
// 		fetch("/api/products",
// 			{
// 				method: 'PUT',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(item)
// 			}
// 		)
// 			.then(response => { })
// 			.then(item => {
// 				const items = items;
// 				items.push(item);
// 				setItems(items);
// 				// this.setState({
// 				// 	items: items
// 				// });

// 				// this.setState({ isLoaded: true })

// 			})
// 			.catch(err => {
// 				// this.setState({ error: err });
// 			});
// 	}

// 	const deleteProduct = (item) => {
// 		const items = items;
// 		console.log(item);
// 		items.splice(items.indexOf(item), 1);
// 		setItems(items);




// 		fetch("/api/products",
// 			{
// 				method: 'DELETE',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(item)
// 			}
// 		)
// 			.then(response => { })
// 			.then(ite => {
// 				for (const source of item.gallery) {
// 					console.log(source)
// 					this.deleteFile(source);
// 				}
// 				//  this.setState({ isLoaded: true })
// 			})
// 			.catch(err => {
// 				// this.setState({ error: err });
// 			});
// 	}

// 	const deleteFile = (path) => {

// 		let source = path.split("/")[path.split("/").length - 1];
// 		// let source = '/storage/products' + item.split('/upload/')[1];
// 		console.log(source);
// 		fetch("/api/files", {
// 			method: 'DELETE',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify({ source })
// 		})
// 			.then(response => { })
// 			.then(fileName => {
// 				// const items = this.state.items;
// 				// items.splice(items.indexOf(source), 1);
// 				// this.setState({ items });
// 				// this.render();
// 			})
// 			.catch(err => console.log(err))
// 	}


// 	return <div>

// 	</div>;
// }
