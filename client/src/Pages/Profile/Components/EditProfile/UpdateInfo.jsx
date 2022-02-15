import React, { useState, useEffect, useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import GoogleAutocomplete from '../../../../Components/Layout/Google/GoogleAutocomplete/GoogleAutocomplete';
const libraries = ['places'];
export default function UpdateInfo({ user, updateProfile, updateUserAvatar, setIsEdit }) {
	const [surname, setSurname] = useState(user.surname);
	const [name, setName] = useState(user.name);
	const [phone, setPhone] = useState(user.phone);
	const [email, setEmail] = useState(user.email);
	const [birthday, setBirthday] = useState(user?.data?.birthday && user.data.birthday);
	const [gender, setGender] = useState(user?.data?.gender && user.data.gender);
	const [city, setCity] = useState(user?.data?.city && user.data.city);
	const [address, setAddress] = useState(user?.data?.address && user.data.address);
	// const [isEdit, setIsEdit] = useState(false);
	const genderRef = useRef();

	const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	const { isLoaded: isLoadedMap } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: GOOGLE_KEY,
		libraries
	})


	useEffect(() => {
		setGender(genderRef.current.value)
	}, [])
	const upToServer = () => {
		updateProfile(email, surname, name, phone, { birthday, gender, city, address });
		updateUserAvatar();
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
					<select ref={genderRef} id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} >
						<option value="Мужской">Мужской</option>
						<option value="Женский">Женский</option>
					</select>
				</div>
				{/* <div>
					<span>город</span>
					<input value={city} onChange={(e) => setCity(e.target.value)} type="text" />
				</div> */}
				<div className='grid-editprofile__address'>
					<span>Адрес</span>
					{/* <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" /> */}
					<GoogleAutocomplete isLoaded={isLoadedMap} setAddress={setAddress} address={address} />
				</div>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>

				<button className='editprofile-block__save-edit' onClick={() => upToServer()}>Сохранить</button>
				<button className='editprofile-block__save-edit' onClick={() => setIsEdit(false)}>Отмена</button>
			</div>
		</div>
	)
}
