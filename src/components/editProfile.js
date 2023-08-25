import {
	closePopup
} from "./modal.js";

import {
	pushUserProfile
} from "./api.js"

// Редактирование профиля
const formProfile = document.forms["profile-edit"];
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');

// popup редактирование профиля
export const popupProfile = document.querySelector('.popup-profile-edit');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');

// Аватар
const profileAvatar = document.querySelector('.profile__avatar');


export function setDefaultInputValue(userName, userInformation) {
	nameInput.value = userName;
	jobInput.value = userInformation;
}

// Установка данных пользователя из api
export function setUserProfile(userName, userInformation, userAvatar) {
	profileAvatar.src = userAvatar;
	profileName.textContent = userName;
	profileInformation.textContent = userInformation;
}


// Отредактировать профиль
function handleProfileFormSubmit(e) {
	e.preventDefault();
	profileName.textContent = nameInput.value;
	profileInformation.textContent = jobInput.value;
	pushUserProfile(nameInput.value, jobInput.value)
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err);
		});
	closePopup(popupProfile);
}

export function editProfile() {
	formProfile.addEventListener('submit', handleProfileFormSubmit);
}