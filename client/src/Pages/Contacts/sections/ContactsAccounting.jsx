import React from 'react';

export default function ContactsAccounting() {
	return (
		<div className='office-contacts__address-block address-accounting'>
			<div className='address-accounting__address-wrapper'>
				<div className='address-accounting__title-small'>Отдел бухгалтерии</div>
				<div className='address-accounting__tel'>
					<a href="tel:88001234567">8 (800) 765-45-12</a>
				</div>
			</div>
			<div className='address-accounting__email-block'>
				<a href="mailto:buh@wellfitness.ua">buh@wellfitness.ua</a>
			</div>
		</div>
	)
}
