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


Promise.all([getUserProfile(), getInitialCards()])
	.then(([resUser, resCards]) => {
		if (resUser.ok && resCards.ok) {
			return Promise.all([resUser.json(), resCards.json()]);
		}
		return Promise.reject(`Ошибка. Профиль: ${resUser.status}, Карточки ${resCards.status}`);
	})
	.then(([user, cards]) => {
		setUserProfile(user.name, user.about, user.avatar);
		setDefaultInputValue(user.name, user.about);
		cards.forEach((card) => {
			addСardToPage(card.name, card.link, card._id, card.likes, card.owner._id === user._id, card.owner._id);
		})
	})
	.catch((err) => {
		console.log(err);
	});