import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './editprofile.scss';

import profile from '../../img/profile.svg';
import edit from '../../img/edit.svg';
import { checkAuth, editAndUpdateUser, editUser } from '../../../../../http/actions/user';
import UpdateInfo from './UpdateInfo';

export default function EditProfile() {
	const user = useSelector(state => state.user.currentUser);
	const dispatch = useDispatch();
	const [surname, setSurname] = useState(user.surname);
	const [name, setName] = useState(user.name);
	const [phone, setPhone] = useState(user?.phone && user.phone);
	const [email, setEmail] = useState(user.email);
	const [birthday, setBirthday] = useState(user?.data?.birthday && user.data.birthday);
	const [gender, setGender] = useState(user?.data?.gender && user.data.gender);
	const [city, setCity] = useState(user?.data?.city && user.data.city);
	const [address, setAddress] = useState(user?.data?.address && user.data.address);
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		setSurname(user.surname)
	}, [])

	useEffect(() => {
		// dispatch(checkAuth())
		setBirthday(user?.data?.birthday && user.data.birthday)
	}, [isEdit]);

	console.log(user);

	const updateProfile = (surname, name, phone, { birthday, gender, city, address }) => {
		setCity(city);
		setIsEdit(false);
		dispatch(editUser(surname, name, phone, { birthday, gender, city, address }));
	}

	return (
		<section className='edit-profile'>
			<div className='edit-profile__block-avatar avatar-block'>
				<img src={profile} alt="profile" />
			</div>

			<img className='editprofile-block__image' src={edit} alt="edit" onClick={() => setIsEdit(true)} />
			<div className='edit-profile__block-profile editprofile-block'>


				{!isEdit ?
					<div>
						<div className="editprofile-block__username">
							<div >{user.surname} {name}</div>

						</div>

						<div className='editprofile-block__grid grid-editprofile'>
							<div>
								<span>Телефон</span>
								<div className='grid-editprofile__loadinfo'>{phone}</div>
							</div>
							<div>
								<span>E-mail</span>
								<div className='grid-editprofile__loadinfo'>{email}</div>
							</div>
							<div>
								<span>Дата рождения</span>
								<div className='grid-editprofile__loadinfo'>{birthday}</div>
							</div>
							<div>
								<span>Пол</span>
								<div className='grid-editprofile__loadinfo'>{gender}</div>
							</div>
							<div>
								<span>город</span>
								<div className='grid-editprofile__loadinfo'>{city}</div>
							</div>
							<div className='grid-editprofile__address'>
								<span>Адрес</span>
								<div className='grid-editprofile__loadinfo'>{address}</div>
							</div>

						</div>
					</div>
					:
					<UpdateInfo
						user={user}
						updateProfile={updateProfile}
					/>

					// <div>

					// 	<div className='editprofile-block__grid grid-editprofile'>
					// 		<div>
					// 			<span>Телефон</span>
					// 			<input value={phone} placeholder={user?.phone && user.phone} onChange={(e) => setPhone(e.target.value)} type="text" />
					// 		</div>
					// 		<div>
					// 			<span>E-mail</span>
					// 			<input value={user?.email && user.email} onChange={(e) => setEmail(e.target.value)} type="text" disabled />
					// 		</div>
					// 		<div>
					// 			<span>Дата рождения</span>
					// 			<input value={user?.data?.birthday && user.data.birthday} onChange={(e) => setBirthday(e.target.value)} type="text" />
					// 		</div>
					// 		<div>
					// 			<span>Пол</span>
					// 			<input value={user?.data?.gender && user.data.gender} onChange={(e) => setGender(e.target.value)} type="text" />
					// 		</div>
					// 		<div>
					// 			<span>город</span>
					// 			<input value={user?.data?.city && user.data.city} onChange={(e) => setCity(e.target.value)} type="text" />
					// 		</div>
					// 		<div className='grid-editprofile__address'>
					// 			<span>Адрес</span>
					// 			<input value={user?.data?.address && user.data.address} onChange={(e) => setAddress(e.target.value)} type="text" />
					// 		</div>
					// 	</div>
					// 	<button onClick={() => updateProfile()}>Сохранить</button>
					// </div>
				}
			</div>
		</section>
	)
}
