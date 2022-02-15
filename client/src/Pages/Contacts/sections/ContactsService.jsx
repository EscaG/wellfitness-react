import React from 'react';

export default function ContactsService() {
	return (
		<div className='office-contacts__address-block address-service'>
			<div className='address-service__address-wrapper'>
				<div className='address-service__title-small'>Сервисная служба</div>
				<div className='address-service__tel'>
					<a href="tel:88001234567">8 (800) 456-12-37</a>
				</div>
			</div>
			<div className='address-service__email-block'>
				<a href="mailto:service@wellfitness.ua">service@wellfitness.ua</a>
			</div>
		</div>
	)
}
