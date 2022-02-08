const nodemailer = require('nodemailer');

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		})
	}


	async sendActivationMail(to, link) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Активация аккаунта на сайте: wellfitness.herokuapp.com',
			text: '',
			html:
				`
					<div>
						<h1>Для активации учетной записи перейдите по ссылке</h1>
						<a href='${link}'>Well Fitness</a> 
						<h4>А после активации мы вас будем спамить ненужными акциями и 
						рекламами вещей которые вы все равно никогда не купите</h4>
					</div>
				`
		})
	}
}


module.exports = new MailService();