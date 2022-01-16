import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './editprofile.scss';

import profile from '../../img/profile.svg';
import edit from '../../img/edit.svg';
import { editUser } from '../../../../../http/actions/user';
import UpdateInfo from './UpdateInfo';
import DisplayedInfo from './DisplayedInfo';

export default function EditProfile() {
	const user = useSelector(state => state.user.currentUser);
	console.log(user);
	const dispatch = useDispatch();

	const [isEdit, setIsEdit] = useState(false);

	const updateProfile = async (email, surname, name, phone, { birthday, gender, city, address }) => {
		setIsEdit(false);
		await dispatch(editUser(email, surname, name, phone, { birthday, gender, city, address }));
	}

	return (
		<section className='edit-profile'>
			<div className='edit-profile__block-avatar avatar-block'>
				<img src={profile} alt="profile" />
			</div>

			<img className='editprofile-block__image' src={edit} alt="edit" onClick={() => setIsEdit(true)} />
			<div className='edit-profile__block-profile editprofile-block'>
				{!isEdit ?
					<DisplayedInfo />
					:
					<UpdateInfo
						user={user}
						updateProfile={updateProfile}
					/>
				}
			</div>
		</section>
	)
}




	// const [surname, setSurname] = useState(user.surname);
	// const [name, setName] = useState(user.name);
	// const [phone, setPhone] = useState(user?.phone && user.phone);
	// const [email, setEmail] = useState(user.email);
	// const [birthday, setBirthday] = useState(user?.data?.birthday && user.data.birthday);
	// const [gender, setGender] = useState(user?.data?.gender && user.data.gender);
	// const [city, setCity] = useState(user?.data?.city && user.data.city);
	// const [address, setAddress] = useState(user?.data?.address && user.data.address);
