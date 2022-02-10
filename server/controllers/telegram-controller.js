const fetchs = require('cross-fetch');

exports.post = function (request, response) {
	console.log("Run POST");
	let Bot_token = "2069433667:AAGpLTxaYV3r1Y_cWvjIVZCwdU-h8eeKRhI";
	let chatId = "923506713";
	console.log("request", request.body)

	let message = encodeURI(request.body.body);
	let name = encodeURI(request.body.name);
	let tel = request.body.tel;
	let body = `Tel:%20${tel}\n Name:%20${name}\n Message:%20${message}`;
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
