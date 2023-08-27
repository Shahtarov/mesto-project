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

export let userId;

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
	.then(([user, cards]) => {
		setUserProfile(user.name, user.about, user.avatar);
		setDefaultInputValue(user.name, user.about);
		userId = user._id;
		cards.forEach((card) => {
			addСardToPage(card.name, card.link, card._id, card.likes, card.owner._id === user._id, card.owner._id);
		})
	})