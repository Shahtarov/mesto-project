import './pages/index.css';
import {
	enableValidation
} from "./components/validate.js";

import {
	closePopup,
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



// Редактирование профиля
const formProfile = document.querySelector('form[name="profile-edit"]');
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');


// popup редактирование профиля
const popupProfile = document.querySelector('.popup-profile-edit');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');


// Отредактировать профиль
function handleProfileFormSubmit(e) {
	e.preventDefault();
	profileName.textContent = nameInput.value;
	profileInformation.textContent = jobInput.value;
	closePopup(popupProfile);
}
formProfile.addEventListener('submit', handleProfileFormSubmit);



// Включение валидации форм
enableValidation();

// Открытие popup-ов
openPopupProfile(popupProfile);
openPopupAddCard(popupGallery);

// Добавление карточки из формы
addCardFormSubmit();

// Добавление карточек из массива на страницу
addinitialCards();