import React from 'react';

export default function ContactsOffice() {
	return (
		<div className='office-contacts__address-block address-office'>
			<div className='address-office__address-wrapper'>
				<div>
					<h3 className='address-office__title'>Офис</h3>
				</div>
				<div>
					<div className='address-office__address'>
						Николаев <br />
						ул. Лягина 4 <br />
						На углу
					</div>
					<div className='address-office__work-time'>
						<span>Режим работы</span> 10:00 – 21:00
					</div>
					<button className='box-address__drive'>Как проехать</button>
				</div>
			</div>
			<div className='address-office__background-img'></div>
		</div>)
}
