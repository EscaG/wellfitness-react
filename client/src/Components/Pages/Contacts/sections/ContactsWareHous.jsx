import React from 'react';

export default function ContactsWareHous() {
	return (
		<section className='contacts-page__warehouse warehouse-contacts'>
			<h2 className='warehouse-contacts__title'>Склады</h2>
			<div className='warehouse-contacts__cards'>
				<div>
					<h3 className='warehouse-contacts__name'>Склад, Николаев</h3>
					<div className='warehouse-contacts__address'>
						г. Николаев, <br />
						ул. Лягина 4, <br />
						Там за туманами
					</div>
					<a href="tel:88001234567">8 (800) 667-56-32</a>
				</div>
				<div>
					<h3 className='warehouse-contacts__name'>Дополнительный, склад Киев</h3>
					<div className='warehouse-contacts__address'>
						г. Киев, <br />
						ул. Разбитый Фонарей<br />
						Вечными пьяными
					</div>
					<a href="tel:+380445569412">+38 (044) 556-94-12</a>
				</div>
			</div>
		</section>
	)
}
