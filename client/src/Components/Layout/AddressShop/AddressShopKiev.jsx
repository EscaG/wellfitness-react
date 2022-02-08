import React from 'react';
import './addressshop.scss';

export default function AddressShopKiev() {
	return (
		<section className='contacts-page__shop-contacts contacts-shop'>
			<div className='contacts-shop__padding'>
				<h2 className='contacts-shop__name'>Фирменный магазин <br /> Well Fitness</h2>
				<div className="contacts-shop__address-box box-address">
					<div >
						<div className='box-address__address'>
							Киев, ТРК "Ашан", <br />
							пр. Уличный 100500,<br />
							Где-то там
						</div>
						<a className="box-address__phone" href="tel:88001234567">+8 (800) 677-56-32</a><br />
						<a className="box-address__email" href="mailto:info@wellfitness.ru">wellfitness@wellfit.ru</a><br />
					</div>
					<div className='box-address__work-time'>
						<div className='box-address__work-text'>Режим работы </div>
						<div>10:00 – 21:00</div>
					</div>
				</div>
				<button className='box-address__drive'>Как проехать</button><br />
				<button className='article__link box-address__write'>Написать нам</button>
			</div>
			<div>
				{/* //todo картинка */}
				<div className='box-address__item-image-kiev'></div>
			</div>
		</section>
	)
}
