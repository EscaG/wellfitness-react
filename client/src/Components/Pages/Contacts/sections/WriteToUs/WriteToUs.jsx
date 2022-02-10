import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './writetous.scss';


export default function WriteToUs() {

	const [isStatus, setIsStatus] = useState(0);
	const formRef = useRef();
	useEffect(() => {
		// sendMessage("adads", 'asda', 'asd');
	}, []);

	const sendMessage = async (name, email, message) => {
		// this.setState({ isLoaded: false })
		await fetch("/api/sendTelegram/",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			}
		)
			.then(res => {
				console.log("Result:", res.status);
				setIsStatus(res.status)
				formRef.current.reset();
				return res.json();
			})
			.then(data => {
				console.log(data);
				// this.setState({ isLoaded: true })
			})
			.catch(err => {
				// this.setState({ error: err, isLoaded: true })
			})
	}

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const message = form.message.value;
		sendMessage(name, email, message);
		if (isStatus === 200) {
			// form.reset();
			// 	form.name.value = '';
			// 	form.email.value = '';
			// 	form.message.value = '';
		}
	}

	return (
		<section className='contacts-form' id='contacts-form'>
			<h1 className='contacts-form__title'>Написать нам</h1>
			<div className='contacts-form__flex'>

				<form ref={formRef} onSubmit={handleSubmit}>
					<label>Имя
						<input type="text" name='name' placeholder='Имя' required />
					</label>
					<label>E-mail
						<input type="email" name='email' placeholder='E-mail' required />
					</label>
					<label>Сообщение
						<textarea type="text" name='message' required />
					</label>
					<div className='contacts-form__btn-block'>
						<div className='contacts-form__warning'>
							Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c
							<Link className='contacts-form__privacy-policy' to='/privacy-policy'> политикой конфиденциальности</Link>
						</div>
						<button type="submit" className='article__link submit-form'>Отправить сообщение</button>
					</div>
					{/* <button type="reset">clear</button> */}
				</form>

			</div>

		</section>
	)
}
