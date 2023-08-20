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
	addinitialCards
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
addinitialCards();

// Включение валидации форм
enableValidation();