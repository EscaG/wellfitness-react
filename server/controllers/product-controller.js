const ProductModel = require("../models/product-model");
const FileController = require("./fileController");

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

exports.seed = function (request, response) {
	console.log("SEED");
	let product1 = new ProductModel();
	product1.name = "Беговая дорожка CardioPower S20";
	product1.availability = false;
	product1.gallery = ["/storage/products/first.png"];
	product1.rating = 5;
	product1.price = {fullPrice: "1 134 999 ", sharePrice: "999 999 "};
	product1.configuration = {
		size: "1500 &times; 2000",
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
					id: Date.now() + 1,
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: Date.now() + 2,
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: Date.now() + 3,
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: Date.now() + 4,
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: Date.now() + 1,
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: Date.now() + 1,
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: Date.now() + 1,
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: Date.now() + 1,
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product1.presentation = [
		{
			image: "",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			name: "Современные технологии",
			image: "",
			value: "Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.\n" +
				"\n" +
				"Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.\n" +
				"\n" +
				"Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!\n"
		},
		{
			name: "Мультимедия",
			image: "",
			value: "На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!\n" +
				"\n" +
				"Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!"
		}
	]
	product1.save();

	let product2 = new ProductModel();
	product2.name = "Беговая дорожка CardioPower S10";
	product2.availability = true;
	product2.gallery = ["/storage/products/second.png"];
	product2.rating = 5;
	product2.price = {fullPrice: "1 134 999 ", sharePrice: null};
	product2.configuration = {
		size: "1500 &times; 2000",
		weight: "150",
		color: "Черный",
		frameColor: "Черный",
		upholsteryColor: "Черный"
	};
	product2.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: Date.now() + 1,
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: Date.now() + 2,
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: Date.now() + 3,
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: Date.now() + 4,
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: Date.now() + 1,
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: Date.now() + 1,
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: Date.now() + 1,
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: Date.now() + 1,
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product2.presentation = [
		{
			image: "",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			name: "Современные технологии",
			image: "",
			value: "Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.\n" +
				"\n" +
				"Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.\n" +
				"\n" +
				"Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!\n"
		},
		{
			name: "Мультимедия",
			image: "",
			value: "На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!\n" +
				"\n" +
				"Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!"
		}
	]
	product2.save();

	let product3 = new ProductModel();
	product3.name = "Беговая дорожка CardioPower S35";
	product3.availability = false;
	product3.gallery = ["/storage/products/third.png"];
	product3.rating = 5;
	product3.price = {fullPrice: "1 199 999 ", sharePrice: "1 099 199"};
	product3.configuration = {
		size: "1500 &times; 2000",
		weight: "150",
		color: "Черный",
		frameColor: "Черный",
		upholsteryColor: "Черный"
	};
	product3.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: Date.now() + 1,
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: Date.now() + 2,
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: Date.now() + 3,
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: Date.now() + 4,
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: Date.now() + 1,
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: Date.now() + 1,
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: Date.now() + 1,
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: Date.now() + 1,
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product3.presentation = [
		{
			image: "",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			name: "Современные технологии",
			image: "",
			value: "Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.\n" +
				"\n" +
				"Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.\n" +
				"\n" +
				"Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!\n"
		},
		{
			name: "Мультимедия",
			image: "",
			value: "На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!\n" +
				"\n" +
				"Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!"
		}
	]
	product3.save();

	let product4 = new ProductModel();
	product4.name = "Беговая дорожка CardioPower S01";
	product4.availability = true;
	product4.gallery = ["/storage/products/fourth.png"];
	product4.rating = 5;
	product4.price = {fullPrice: "1 049 999 ", sharePrice: "849 999"};
	product4.configuration = {
		size: "1500 &times; 2000",
		weight: "150",
		color: "Черный",
		frameColor: "Черный",
		upholsteryColor: "Черный"
	};
	product4.characteristics = {
		main: {
			name: "Основные характеристики",
			list: [
				{
					id: Date.now() + 1,
					name: "Тип дорожки:",
					value: "Домашняя"
				},
				{
					id: Date.now() + 2,
					name: "Мощность двигателя:",
					value: "2,0 л.с."
				},
				{
					id: Date.now() + 3,
					name: "Тип двигателя:",
					value: "DC"
				},
				{
					id: Date.now() + 4,
					name: "Регулировка скорости:",
					value: "0,8-14 км/ч"
				},
			]
		},
		multimedia: {
			name: "Мультимедиа",
			list: [
				{
					id: Date.now() + 1,
					name: "Аудиосистема MP3:",
					value: "есть"
				},
				{
					id: Date.now() + 1,
					name: "Консоль:",
					value: "LCD 7 дюймовый дисплей"
				},
			]
		},
		additional: {
			name: "Дополнительные характеристики",
			list: [
				{
					id: Date.now() + 1,
					name: "Беговое полотно:",
					value: "2-х слойное"
				},
				{
					id: Date.now() + 1,
					name: "Беговое полотно (ДхШ):",
					value: "1200 х 450 мм"
				},
			]
		}
	};
	product4.presentation = [
		{
			image: "",
			value:"Беговые дорожки Bowflex Results Series ™ это самые совершенные технологии, высочайшее качество и полноценная синхронизация данных."
		},
		{
			name: "Современные технологии",
			image: "",
			value: "Беговая дорожка Bowlfex BXT128 – это одна из самых технологичных моделей для максимально эффективных и комфортных тренировок.\n" +
				"\n" +
				"Надежный двигатель мощностью 3.5 л.с. раскручивает полотно до 19.3 км/ч, а максимальный угол наклона в 15% позволяет разнообразить тренировки и имитировать условия интенсивногоподъема для любителей бега по пересеченной местности.\n" +
				"\n" +
				"Беговая дорожка Bowlfex BXT128 оснащена высокопрочным 3-х слойным полотном размером\n" +
				"51x152 см и инновационной системой амортизации Comfort Tech 3 Теперь каждый шаг идеально сглаживается, создавая ощущения пробежки на профессиональном покрытии!\n"
		},
		{
			name: "Мультимедия",
			image: "",
			value: "На поручнях с мягким полиуретановым покрытием размещены кнопки регулировки наклона и скорости. Менять тренировочные режимы стало еще проще и удобнее!\n" +
				"\n" +
				"Вся информация о тренировке выводится на 7,5-дюймовую LCD консоль. На панели отображается не только общее количество сжигаемых калорий, но и сожженные калории за последнюю минуту. Это одно из главных преимуществ модели BXT128 и отличная мотивация для еще более эффективной работы на кардио тренировках!"
		}
	]
	product4.save();
	response.send("ok");

};




































