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
	addСardToPage,
	delCardFormSubmit
} from "./components/card.js";

import {
	editProfile,
	popupProfile,
	popupAvatar,
	editAvatar,
	setUserProfile,
	fillProfileInputs,
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

// Добавление и удаление карточки
addCardFormSubmit();
delCardFormSubmit();

// Открытие popup-ов
openPopupProfile(popupProfile);
openPopupAddCard(popupGallery);
openPopupAddAvatar(popupAvatar);


// Включение валидации форм
enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__information',
	submitButtonSelector: '.popup__submit',
	inputErrorClass: 'popup__information_type_error'
});


// Получение карточек и профиля
Promise.all([getUserProfile(), getInitialCards()])
	.then(([user, cards]) => {
		setUserProfile(user.name, user.about, user.avatar);
		fillProfileInputs(user.name, user.about);
		userId = user._id;
		cards.forEach((card) => {
			addСardToPage(card.name, card.link, card._id, card.likes, card.owner._id === user._id, card.owner._id);
		})
	})
	.catch((err) => {
		console.log(err);
	});