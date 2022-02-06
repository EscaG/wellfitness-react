import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './editprofile.scss';

import profile from '../../img/profile.svg';
import edit from '../../img/edit.svg';
import { editAvatar, editUser } from '../../../../../http/actions/user';
import UpdateInfo from './UpdateInfo';
import DisplayedInfo from './DisplayedInfo';
import { useRef } from 'react';

export default function EditProfile() {
	const [isEdit, setIsEdit] = useState(false);
	const [filePath, setFilePath] = useState(null);
	// const avatarInputRef = useRef();
	const user = useSelector(state => state.user.currentUser);
	// console.log(user);
	const avatarImgRef = useRef();
	const dispatch = useDispatch();


	const updateProfile = async (email, surname, name, phone, { birthday, gender, city, address }) => {
		setIsEdit(false);
		await dispatch(editUser(email, surname, name, phone, { birthday, gender, city, address }));
	}


	function handleAvatar(e) {
		console.log(e.target.files[0]);
		if (e.target.files[0]) {
			var fr = new FileReader();

			fr.addEventListener("load", function () {
				// document.querySelector("#avatar-label").style.backgroundImage = "url(" + fr.result + ")";
				avatarImgRef.current.src = fr.result;
			}, false);

			fr.readAsDataURL(e.target.files[0]);


			let formData = new FormData();
			formData.append("fileData", e.target.files[0]);
			console.log(formData);
			fetch("http://localhost:5000/api/files",
				{
					method: 'POST',
					body: formData
				})
				.then(response => response.text())
				.then(fileName => {
					// console.log(fileName);
					setFilePath("/upload/" + fileName)
					// updateUserAvatar("/upload/" + fileName)
					// const item = this.state.item;
					// item.gallery.push("/upload/" + fileName); // размещаю информацию о файле с папкой
					// this.setState({ item }); // обновляю информацию
				})
				.catch(err => console.log(err));
		}

	}
	function updateUserAvatar() {
		console.log("start fetch");
		if (filePath) {

			dispatch(editAvatar(user.email, filePath));
		}
	}

	return (
		<section className='edit-profile'>
			<div className='edit-profile__block-avatar avatar-block'>
				{/* <img src={profile} alt="profile" /> */}

				<label id='avatar-label' htmlFor='avatar'>
					<img ref={avatarImgRef} src={user.avatar ? user.avatar : profile} alt="avatar" />
				</label>
				<input onChange={handleAvatar} type='file' id='avatar' disabled={!isEdit} />
			</div>
			<img className='editprofile-block__image' src={edit} alt="edit" onClick={() => setIsEdit(true)} />
			<div className='edit-profile__block-profile editprofile-block'>
				{!isEdit ?
					<DisplayedInfo />
					:
					<UpdateInfo
						setIsEdit={setIsEdit}
						user={user}
						updateProfile={updateProfile}
						updateUserAvatar={updateUserAvatar}
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
