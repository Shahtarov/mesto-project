import './pages/index.css';
import {
	enableValidation
} from "./components/validate.js";

import {
	openPopupProfile,
	openPopupAddCard,
	popupGallery
} from "./components/modal.js";

import {
	addCardFormSubmit,
	addСardToPage
} from "./components/card.js";

import {
	editProfile,
	popupProfile,
	setUserProfile,
	setDefaultInputValue,
}
from "./components/editProfile.js";

import {
	getUserProfile,
	getInitialCards,
} from "./components/api.js"

let userAccount = {
	userName: "",
	userId: ""
};

// Включение редактирования профиля
editProfile();

// Открытие popup-ов
openPopupProfile(popupProfile);
openPopupAddCard(popupGallery);

// Добавление карточки из формы
addCardFormSubmit();


// Включение валидации форм
enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__information',
	submitButtonSelector: '.popup__submit',
	inputErrorClass: 'popup__information_type_error'
});


// Получение своего профиля
getUserProfile()
	.then(res => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	})
	.then(data => {
		setUserProfile(data.name, data.about, data.avatar);
		setDefaultInputValue(data.name, data.about);
		userAccount.userName = data.name;
		userAccount.userId = data['_id'];
	})
	.catch((err) => {
		console.log(err);
	});


// Получение карточек с сервера
getInitialCards()
	.then(res => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	})
	.then(data => {
		data.forEach((e) => {
			addСardToPage(e.name, e.link, e._id, e.likes, e.owner['_id'] === userAccount.userId, e.owner['_id']);
		})
	})
	.catch((err) => {
		console.log(err);
	});