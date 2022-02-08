import React from 'react';

export default function ContactsSales() {
	return (
		<div className='office-contacts__address-block address-sales'>
			<div className='address-sales__address-wrapper'>
				<div className='address-sales__title-small'>Отдел продаж</div>
				<div className='address-sales__tel'>
					<a href="tel:88001234567">8 (800) 123-45-67</a>
				</div>
			</div>
			<div className='address-sales__email-block'>
				<div>
					<a href="mailto:info@wellfitness.ua">info@wellfitness.ua</a>
				</div>
				<div className='address-sales__desc-email'>по общим вопросам, вопросам сотрудничества, жалобам и предложениям</div>
				<div>
					<a href="mailto:zakaz@wellfitness.ua">zakaz@wellfitness.ua</a>
				</div>
				<div className='address-sales__desc-email'>для приема дилерских заказов на оборудование, аксессуары, запчасти</div>
				<div>
					<a href="mailto:agent@wellfitness.ua">agent@wellfitness.ua</a>
				</div>
				<div className='address-sales__desc-email'>для приема агентских заказов</div>
			</div>
		</div>
	);
}
