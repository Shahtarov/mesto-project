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
	addCardFormSubmit
} from "./components/card.js";

import {
	addInitialCards
}
from "./components/utils.js";

import {
	editProfile,
	popupProfile
}
from "./components/editProfile.js";



// Включение редактирования профиля
editProfile();

// Открытие popup-ов
openPopupProfile(popupProfile);
openPopupAddCard(popupGallery);

// Добавление карточки из формы
addCardFormSubmit();

// Добавление карточек из массива на страницу
addInitialCards();

// Включение валидации форм
enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__information',
	submitButtonSelector: '.popup__submit',
	inputErrorClass: 'popup__information_type_error'
});