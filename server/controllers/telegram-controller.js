const fetchs = require('cross-fetch');

exports.post = function (request, response) {
	console.log("Run POST");
	let Bot_token = "2069433667:AAGpLTxaYV3r1Y_cWvjIVZCwdU-h8eeKRhI";
	// let Bot_token = "5167202531:AAHFuSgwt1Rz1qYWkxkQZJLC-WKFCplOwXM";
	let chatId = "923506713";
	console.log("request", request.body)

	let name = encodeURI(request.body.name);
	let email = request.body.email;
	let message = encodeURI(request.body.message);
	let body = `Name:%20${name}\n Email:%20${email}\n Message:%20${message}`;
	let url = `https://api.telegram.org/bot${Bot_token}/sendMessage?chat_id=${chatId}&text=${body}`;
	fetchs(url)
		.then(res => res.json())
		.then(res => {
			console.log()
		})
		.catch(e => {
			console.log(e)
		})

	// console.error(request.body);
	response.send(request.body)
}
