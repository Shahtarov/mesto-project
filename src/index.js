import './pages/index.css';
import {
	enableValidation
} from "./components/validate.js";

import {
	openPopupProfile,
	openPopupAddAvatar,
	openPopupAddCard,
	popupGallery,
} from "./components/modal.js";

import {
	addCardFormSubmit,
	addСardToPage
} from "./components/card.js";

import {
	editProfile,
	popupProfile,
	popupAvatar,
	editAvatar,
	setUserProfile,
	setDefaultInputValue,
}
from "./components/editProfile.js";

import {
	getUserProfile,
	getInitialCards,
} from "./components/api.js"

export let userAccount = {
	userName: "",
	userId: ""
};

// Включение редактированиий
editProfile();
editAvatar();

// Открытие popup-ов
openPopupProfile(popupProfile);
openPopupAddCard(popupGallery);
openPopupAddAvatar(popupAvatar);

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
		return data;
	})
	.then(() => {
		// Получение карточек с сервера
		getInitialCards()
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
			.then(data => {
				(async function () {
					await data.forEach((e) => {
						addСardToPage(e.name, e.link, e._id, e.likes, e.owner['_id'] === userAccount.userId, e.owner['_id']);
					})
				})();
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	});