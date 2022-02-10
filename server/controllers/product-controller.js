const ProductModel = require("../models/product-model");
const FileController = require("./fileController");
const uuid = require('uuid');

// Create => POST
exports.post = function (request, response) {
	console.log("Run POST");
	const element = new ProductModel(request.body);
	element.gallery = FileController.moveGallery(element.gallery, "/storage/products/product_");
	// проверить все поля на наличие /upload/ и если он есть - переместить в новое место /public/storage/products
	// исправить все ссылки в создаваемой сущности
	element.save(function (err) {
		if (err) {
			console.log(err);
			return err;
		}
		return response.json(element);
	});
}

// Read => GET
exports.get = function (request, response) {
	console.log("Run GET");
	ProductModel.find({},
		function (err, allData) {
			if (err) {
				console.log(err);
				return err;
			}
			response.json(allData);
		}
	);
}

// Update => PUT
exports.put = function (request, response) {
	console.log("Run PUT");
	const element = new ProductModel(request.body);
	element.gallery = FileController.moveGallery(element.gallery, "/storage/products/product_");
	ProductModel.findByIdAndUpdate(
		request.body._id,
		element,
		{}, // new:true - создаст новый если не нашел по ID
		function (err, result) {
			if (err) {
				console.log(err);
				response.send(err);
			}
			response.send(result);
		}
	);
}

// Delete => DELETE
exports.delete = function (request, response) {
	console.log("Run DELETE");
	ProductModel.findByIdAndDelete(
		request.body._id,
		{},
		function (err) {
			if (err) response.send(err);
			response.sendStatus(200);
		}
	);
}

exports.autocomplete = function (request, response) {
	const searchProduct = request.query.searchProduct;
	// /api/product?searchProduct=Samsung
	console.log("searchProduct: " + searchProduct);
	if (searchProduct.length < 2) {
		response.json([]);
		return;
	}
	ProductModel.find({name: {$regex: searchProduct, "$options": "-i"}},
		function (err, allData) {
			if (err) {
				console.log(err);
				response.json(err);
				return;
			}
			response.json(allData);
		}
	);

	//response.send("Ok");
}
exports.category = function (request, response) {
	const category = request.query.category;
	// /api/product?category=Samsung
	console.log("category: " + category);
	// if (category.length < 2) {
	// 	response.json([]);
	// 	return;
	// }
	ProductModel.find({category: {$regex: category, "$options": "-i"}},
		function (err, allData) {
			if (err) {
				console.log(err);
				response.json(err);
				return;
			}
			response.json(allData);
		}
	);

	//response.send("Ok");
}
exports.getById = function (request, response) {
	let id = request.params.id;
	console.log("Run GET");
	ProductModel.findById(id,
		function (err, product) {
			if (err) {
				console.log(err);
				 response.status(400).json({success: false, error :'Sorry, error'});

			}
			response.json(product);
		}
	);
}



exports.seed = function (request, response) {
	console.log("SEED");
	let product1 = new ProductModel();
	product1.type = 'forhome';
	product1.category = ['Кардиотренажеры','Силовые тренажеры'];
	product1.brand = {name:'Bowflex', image:"/storage/brands/bowflex.png"};
	product1.name = "Беговая дорожка CardioPower S20";
	product1.availability = false;
	product1.slider =[
		{id: "s"+ uuid.v4(),
		image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
		image: "/storage/presentation/slider-second.jpg"},
		{id: "s"+ uuid.v4(),
		image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
		image: "/storage/presentation/slider-second.jpg"},
	]
	product1.gallery = [
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"}];
	product1.rating = 5;
	product1.price = {fullPrice: "1 134 999 ", sharePrice: "999 999 "};
	product1.configuration = {
		size: "1500x2000",
		weight: "150",
		color: "Черный",
		frameColor: "Черный",
		upholsteryColor: "Черный"
	};
	product1.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: "ad"+uuid.v4(),
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product1.presentation = [
		{
			id: "p"+ uuid.v4(),
			image: "/storage/presentation/presentation-first.png",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			id: "p"+ uuid.v4(),
			name: "Современные технологии",
			image: "/storage/presentation/presentation-second.jpg",
			value: "<p>Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.</p>" +
				"\n" +
				"<p>Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.</p>" +
				"\n" +
				"<p>Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!</p>"
		},
		{
			id: "p"+ uuid.v4(),
			name: "Мультимедия",
			image: "/storage/presentation/presentation-third.jpg",
			value: "<p>На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!</p>" +
				"\n" +
				"<p>Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!</p>"
		}
	]
	product1.save();

	let product2 = new ProductModel();
	product2.type = 'forclub';
	product2.category = ['Кардиотренажеры','Силовые тренажеры'];
	product2.brand = {name:'Boxingbar', image:"/storage/brands/boxingbar.png"};
	product2.name = "Беговая дорожка CardioPower S10";
	product2.availability = true;
	product2.slider =[
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
	];
	product2.gallery = [
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"}];
	product2.rating = 5;
	product2.price = {fullPrice: "1 134 999 ", sharePrice: null};
	product2.configuration = {
		size: "1700x2000",
		weight: "500",
		color: "Графит",
		frameColor: "Белый",
		upholsteryColor: "Красный"
	};
	product2.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: "ad"+uuid.v4(),
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product2.presentation = [
		{
			id: "p"+ uuid.v4(),
			image: "/storage/presentation/presentation-first.png",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			id: "p"+ uuid.v4(),
			name: "Современные технологии",
			image: "/storage/presentation/presentation-second.jpg",
			value: "<p>Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.</p>" +
				"\n" +
				"<p>Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.</p>" +
				"\n" +
				"<p>Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!</p>"
		},
		{
			id: "p"+ uuid.v4(),
			name: "Мультимедия",
			image: "/storage/presentation/presentation-third.jpg",
			value: "<p>На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!</p>" +
				"\n" +
				"<p>Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!</p>"
		}
	]
	product2.save();

	let product3 = new ProductModel();
	product3.type = 'forhome';
	product3.category=['Силовые тренажеры','Свободные веса'];
	product3.brand = {name:'Cardiopower', image:"/storage/brands/cardiopower.png"};
	product3.name = "Беговая дорожка CardioPower S35";
	product3.availability = false;
	product3.slider =[
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
	];
	product3.gallery = [
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"}];
	product3.rating = 5;
	product3.price = {fullPrice: "1 199 999 ", sharePrice: "1 099 199"};
	product3.configuration = {
		size: "1900x2000",
		weight: "800",
		color: "Белый",
		frameColor: "Белый",
		upholsteryColor: "Графит"
	};
	product3.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: "ad"+uuid.v4(),
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product3.presentation = [
		{
			id: "p"+ uuid.v4(),
			image: "/storage/presentation/presentation-first.png",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			id: "p"+ uuid.v4(),
			name: "Современные технологии",
			image: "/storage/presentation/presentation-second.jpg",
			value: "<p>Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.</p>" +
				"\n" +
				"<p>Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.</p>" +
				"\n" +
				"<p>Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!</p>"
		},
		{
			id: "p"+ uuid.v4(),
			name: "Мультимедия",
			image: "/storage/presentation/presentation-third.jpg",
			value: "<p>На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!</p>" +
				"\n" +
				"<p>Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!</p>"
		}
	]
	product3.save();

	let product4 = new ProductModel();
	product4.type = 'forhome';
	product4.category = ['Уличные виды спорта','Силовые тренажеры'];
	product4.brand = {name:'Doublefish', image:"/storage/brands/doublefish.png"};
	product4.name = "Беговая дорожка CardioPower S01";
	product4.availability = true;
	product4.slider =[
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
	];
	product4.gallery = [
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"}];
	product4.rating = 5;
	product4.price = {fullPrice: "1 049 999 ", sharePrice: "849 999"};
	product4.configuration = {
		size: "1500x2000",
		weight: "500",
		color: "Красный",
		frameColor: "Черный",
		upholsteryColor: "Графит"
	};
	product4.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: "ad"+uuid.v4(),
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product4.presentation = [
		{
			id: "p"+ uuid.v4(),
			image: "/storage/presentation/presentation-first.png",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			id: "p"+ uuid.v4(),
			name: "Современные технологии",
			image: "/storage/presentation/presentation-second.jpg",
			value: "<p>Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.</p>" +
				"\n" +
				"<p>Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.</p>" +
				"\n" +
				"<p>Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!</p>"
		},
		{
			id: "p"+ uuid.v4(),
			name: "Мультимедия",
			image: "/storage/presentation/presentation-third.jpg",
			value: "<p>На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!</p>" +
				"\n" +
				"<p>Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!</p>"
		}
	]
	product4.save();

	let product5 = new ProductModel();
	product5.type = 'forclub';
	product5.category = ['Силовые тренажеры'];
	product5.brand = {name:'Doublefish', image:"/storage/brands/doublefish.png"};
	product5.name = "Беговая дорожка CardioPower S30";
	product5.availability = true;
	product5.slider =[
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-first.jpg"},
		{id: "s"+ uuid.v4(),
			image: "/storage/presentation/slider-second.jpg"},
	];
	product5.gallery = [
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/first.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/second.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/third.png"},
		{id: "a"+ uuid.v4(),
			image: "/storage/products/fourth.png"}];
	product5.rating = 5;
	product5.price = {fullPrice: "1 049 999 ", sharePrice: "849 999"};
	product5.configuration = {
		size: "1500x2000",
		weight: "500",
		color: "Красный",
		frameColor: "Черный",
		upholsteryColor: "Графит"
	};
	product5.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: "ad"+uuid.v4(),
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: "ad"+uuid.v4(),
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product5.presentation = [
		{
			id: "p"+ uuid.v4(),
			image: "/storage/presentation/presentation-first.png",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			id: "p"+ uuid.v4(),
			name: "Современные технологии",
			image: "/storage/presentation/presentation-second.jpg",
			value: "<p>Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.</p>" +
				"\n" +
				"<p>Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.</p>" +
				"\n" +
				"<p>Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!</p>"
		},
		{
			id: "p"+ uuid.v4(),
			name: "Мультимедия",
			image: "/storage/presentation/presentation-third.jpg",
			value: "<p>На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!</p>" +
				"\n" +
				"<p>Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!</p>"
		}
	]
	product5.save();
	response.send("ok");

};




































