const fetchs = require('cross-fetch');

exports.post = function (request, response) {

	console.log("Run POST TG");

	let Bot_token = process.env.TELEGRAM_TOKEN;
	let chatId = process.env.TELEGRAM_BOT_ID;
	// console.log("request", request.body)

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
