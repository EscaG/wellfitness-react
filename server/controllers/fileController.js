const fs = require("fs"); // работа с файловой системой
const ext = require("mime-types"); // анализ типа файла





exports.moveGallery = function (gallery, path) {
	console.log("Move files", gallery, path);
	// for (let i = 0; i < gallery.length; i++) {
		if (gallery.startsWith("/upload/")) { //Если путь к картинке начинается с аплоад
			let newPlace = gallery.replace("/upload/", path) // поставим новый путь
			console.log("Мы находимся" + __dirname);
			fs.rename(
				__dirname + "/../public" + gallery,
				__dirname + "/../public" + newPlace,
				function (err) {
					if (err) {
						console.log("Error404 move gallery", err);
					}
				});
			gallery = newPlace;
		}
	// }
	console.log("готовый адрес картинки" , gallery)
	return gallery;
}

exports.createFile = function (request, response) {
	console.log("Start work with file");
	// console.log(request.file);
	let newFileName = request.file.filename + "." + ext.extension(request.file.mimetype)
	fs.rename(
		request.file.path,
		request.file.path + "." + ext.extension(request.file.mimetype),
		function (err) {
			if (err) {
				console.log(err);
				response.send(err);
			}
		});

	response.send(newFileName);
}



exports.deleteFile = function (request, response) {
	console.log("delete file");
	console.log(request.body);
	fs.unlink('./public/storage/products/' + request.body.source,
		function (err) {
			if (err) {
				console.log(err);
				response.send(err);
			}
		})
	response.sendStatus(200);
}