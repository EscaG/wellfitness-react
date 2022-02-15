import React from 'react';

export default function ContactsOfficeKiev() {
	return (
		<div className='office-contacts__address-block address-office-kiev'>
			<div className='address-office-kiev__address-wrapper'>
				<div>
					<h3 className='address-office-kiev__title'>Офис</h3>
				</div>
				<div>
					<div className='address-office-kiev__address'>
						Киев <br />
						м. Золотые ворота <br />
						За забором
					</div>
					<div className='address-office-kiev__work-time'>
						<span>Режим работы</span> 07:00 – 23:00
					</div>
					<button className='box-address__drive'>Как проехать</button>
				</div>
			</div>
			<div className='address-office-kiev__background-img'></div>
		</div>)
}
