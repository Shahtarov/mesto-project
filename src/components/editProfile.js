import {
	closePopup
} from "./modal.js";

import {
	// pushUserProfile,
	// saveUserAvatar,
	api
} from "./api.js"

import {
	renderLoading
} from "./utils.js"

// Редактирование профиля
const formProfile = document.forms["profile-edit"];
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');


// popup редактирование профиля
export const popupProfile = document.querySelector('.popup-profile-edit');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');

// Аватар
const formAvatar = document.forms["avatar-add"];
const avatarInput = formAvatar.querySelector('input[name="popup__avatar"]');
const profileAvatarImg = document.querySelector('.profile__avatar-img');
export const profileAvatarEdit = document.querySelector('.profile__avatar-edit');
export const popupAvatar = document.querySelector('.popup-avatar-add');


class UserInfo {
	constructor(userName, userInformation) {
		this.userName = userName;
		this.userInformation = userInformation;
	}

	//Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Данные для этого метода нужно получать от методов класса Api — подумайте над тем, как внедрить метод класса Api в getUserInfo. Когда данные пользователя нужно будет подставить в форму при открытии — метод вам пригодится.
	getUserInfo() {
		api.getUserProfile();
	}

	//Содержит публичный метод setUserInfo, который принимает новые данные пользователя, отправляет их на сервер и добавляет их на страницу.
	setUserInfo() {
		profileName.textContent = this.userName;
		profileInformation.textContent = this.userInformation;
		profileAvatarImg.alt = `Фото профиля ${this.userName}`;
	}
}
// const fillProfileInputs = new UserInfo(nameInput.value, jobInput.value);

// Сохранить данные пользователя в inputs
export function fillProfileInputs(userName, userInformation) {
	nameInput.value = userName;
	jobInput.value = userInformation;
}

// Установка данных пользователя из api
export function setUserProfile(userName, userInformation, userAvatar) {
	profileAvatarImg.src = userAvatar;
	// profileName.textContent = userName;
	// profileInformation.textContent = userInformation;
	// profileAvatarImg.alt = `Фото профиля ${userName}`;
}


// Отредактировать профиль
function handlerProfileFormSubmit(e) {
	e.preventDefault();
	const submitButton = e.submitter;
	renderLoading(true, submitButton);
	pushUserProfile(nameInput.value, jobInput.value)
		.then(() => {
			profileName.textContent = nameInput.value;
			profileInformation.textContent = jobInput.value;
			profileAvatarImg.alt = `Фото профиля ${nameInput.value}`;
		})
		.then(() => {
			closePopup(popupProfile);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		})
}

export function editProfile() {
	formProfile.addEventListener('submit', handlerProfileFormSubmit);
}

// Отредактировать аватарку
function handlerEditAvatar(e) {
	e.preventDefault();
	const submitButton = e.submitter;
	renderLoading(true, submitButton);
	saveUserAvatar(avatarInput.value)
		.then(() => {
			profileAvatarImg.src = avatarInput.value;
		})
		.then(() => {
			closePopup(popupAvatar);
			e.target.reset();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		})
}

export function editAvatar() {
	formAvatar.addEventListener('submit', handlerEditAvatar);
}