import React, { useState, useEffect } from 'react';

export default function UpdateInfo({ user, updateProfile }) {
	const [surname, setSurname] = useState(user.surname);
	const [name, setName] = useState(user.name);
	const [phone, setPhone] = useState(user.phone);
	const [email, setEmail] = useState(user.email);
	const [birthday, setBirthday] = useState(user?.data?.birthday && user.data.birthday);
	const [gender, setGender] = useState(user?.data?.gender && user.data.gender);
	const [city, setCity] = useState(user?.data?.city && user.data.city);
	const [address, setAddress] = useState(user?.data?.address && user.data.address);
	// const [isEdit, setIsEdit] = useState(false);

	const upToServer = () => {
		updateProfile(email, surname, name, phone, { birthday, gender, city, address })
	}

	return (
		<div>
			{/* <div className="editprofile-block__edit-username">
			</div> */}
			<div className='editprofile-block__grid grid-editprofile'>
				<div>
					<span>Фамилия</span>
					<input id="user__surname" value={surname} onChange={(e) => setSurname(e.target.value)} type="text" />
				</div>
				<div>
					<span>Имя</span>
					<input id='user__name' value={name} onChange={(e) => setName(e.target.value)} type="text" />
				</div>
				<div>
					<span>Телефон</span>
					<input value={phone} placeholder={user?.phone && user.phone} onChange={(e) => setPhone(e.target.value)} type="text" />
				</div>
				<div>
					<span>E-mail</span>
					<input value={email} onChange={(e) => setEmail(e.target.value)} type="text" disabled />
				</div>
				<div>
					<span>Дата рождения</span>
					<input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" />
				</div>
				<div>
					{/* <span>Пол</span>
					<input value={gender} onChange={(e) => setGender(e.target.value)} type="text" /> */}
					<span>Пол</span>
					<select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} >
						<option value="Мужской">Мужской</option>
						<option value="Женский">Женский</option>
					</select>
				</div>
				<div>
					<span>город</span>
					<input value={city} onChange={(e) => setCity(e.target.value)} type="text" />
				</div>
				<div className='grid-editprofile__address'>
					<span>Адрес</span>
					<input value={address} onChange={(e) => setAddress(e.target.value)} type="text" />
				</div>
			</div>
			<button className='editprofile-block__save-edit' onClick={() => upToServer()}>Сохранить</button>
		</div>
	)
}
