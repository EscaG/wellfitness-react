import React from 'react'
import { Link } from 'react-router-dom';
import './myProfile.scss';

export default function MyProfile() {

	return (
		<section className='profile-myprofile'>

			<div className='profile-myprofile__block'>
				<h3 className='profile-myprofile__title'>Ближайшая доставка</h3>
				<div className='profile-myprofile__pickup'>Самовывоз</div>
				<div className='profile-myprofile__pickup-date'>14 июля с 10:00-12:00</div>
				<div>
					<Link to='' className='profile-myprofile__link'>Подробнее</Link>
				</div>
			</div>

			<div className='profile-myprofile__block'>
				<h3 className='profile-myprofile__title'>Заказы</h3>
				<div className='profile-myprofile__description '>№ 1521751218 от 26.03.2021</div>
				<div className='profile-myprofile__status'>Оплачен. Заказ выполнен</div>
				<div className='profile-myprofile__price'>500 000 &#8372;</div>
				<div>
					<Link to='' className='profile-myprofile__link'>Все заказы</Link>
				</div>
			</div>

			<div className='profile-myprofile__block'>
				<h3 className='profile-myprofile__title'>Ваша скидка</h3>
				<div className='profile-myprofile__discount'>15%</div>
				<div className='profile-myprofile__description order'>Сумма выкупа 1 785 000 ₽</div>
				<div>
					<Link to='' className='profile-myprofile__link'>Подробнее</Link>
				</div>
			</div>

			<div className='profile-myprofile__block'>
				<h3 className='profile-myprofile__title'>Баланс бонусных гривен</h3>
				<div className='profile-myprofile__discount'>2000</div>
				<div className='profile-myprofile__pickup-date'>Доступно для оплаты</div>
				<div>
					<Link to='' className='profile-myprofile__link'>Подробнее</Link>
				</div>
			</div>

			<div className='profile-myprofile__block'>
				<h3 className='profile-myprofile__title'>Инструкции</h3>
				<div className='profile-myprofile__description'>Инструкции по сборке и использованию приобретенных товаров</div>
				<div>
					<Link to='' className='profile-myprofile__link'>Подробнее</Link>
				</div>
			</div>

			<div className='profile-myprofile__block'>
				<h3 className='profile-myprofile__title'>Ваши обращения</h3>
				<div className='profile-myprofile__description'>Оставте свое обращение, если у вас возникнут вопросы по работе интернет-магазина</div>
				<div>

					<Link to='' className='profile-myprofile__link appeals'>Написать</Link>
				</div>
			</div>
		</section>
	)
}
