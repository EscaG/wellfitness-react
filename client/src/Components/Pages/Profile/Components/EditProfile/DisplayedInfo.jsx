import React from 'react'
import { useSelector } from 'react-redux';

export default function DisplayedInfo() {
	const { currentUser, isLoading } = useSelector(state => state.user);

	return (
		<div>
			{!isLoading ?
				<h1>Загрузка</h1>

				:
				<>
					<div className="editprofile-block__username">
						<div >{currentUser.surname} {currentUser.name}</div>

					</div>

					<div className='editprofile-block__grid grid-editprofile'>
						<div>
							<span>Телефон</span>
							<div className='grid-editprofile__loadinfo'>{currentUser.phone}</div>
						</div>
						<div>
							<span>E-mail</span>
							<div className='grid-editprofile__loadinfo'>{currentUser.email}</div>
						</div>
						<div>
							<span>Дата рождения</span>
							<div className='grid-editprofile__loadinfo'>{currentUser?.data?.birthday && currentUser.data.birthday}</div>
						</div>
						<div>
							<span>Пол</span>
							<div className='grid-editprofile__loadinfo'>{currentUser?.data?.gender && currentUser.data.gender}</div>
						</div>
						<div>
							<span>город</span>
							<div className='grid-editprofile__loadinfo'>{currentUser?.data?.city && currentUser.data.city}</div>
						</div>
						<div className='grid-editprofile__address'>
							<span>Адрес</span>
							<div className='grid-editprofile__loadinfo'>{currentUser?.data?.address && currentUser.data.address}</div>
						</div>

					</div>
				</>
			}
		</div>
	)
}
