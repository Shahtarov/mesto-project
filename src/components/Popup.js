//Работа модальных окон
import { profileAvatarEdit } from "./editProfile.js";

export const popupGallery = document.querySelector(".popup-gallery-add");
const buttonAddCard = document.querySelector(".profile__button");
const buttonProfile = document.querySelector(".profile__button-edit");

export class Popup {
	constructor(popupSelector) {
		this.popupSelector = popupSelector;
	}

	// Функции открытия и закрытия popup
	openPopup() {
		this.popupSelector.classList.add("popup_opened");
		document.addEventListener("keydown", this._handleEscClose);
		this.popupSelector.addEventListener("mousedown", this.setEventListeners);
	}

	closePopup() {
		this.popupSelector.classList.remove("popup_opened");
		document.removeEventListener("keydown", this._handleEscClose);
		this.popupSelector.removeEventListener(
			"mousedown",
			this.setEventListeners
		);
	}

	// Закрытие popup-ов Esc
	_handleEscClose(e) {
		if (e.key === "Escape") {
			const openedPopup = document.querySelector(".popup_opened");
			this.closePopup(openedPopup);
		}
	}

	// Закрытие popup-ов кликом на оверлей или крестик
	setEventListeners(e) {
		if (
			e.target.classList.contains("popup_opened") ||
			e.target.classList.contains("popup__close-icon")
		) {
			this.closePopup(e.currentTarget);
		}
	}
}
const popup = new Popup("popup_opened");

// Функции открытия и закрытия popup
// export function openPopup(popup) {
// 	popup.classList.add('popup_opened');
// 	document.addEventListener('keydown', closePopupEsc);
// 	popup.addEventListener('mousedown', handlerPopupClose);
// }

// export function closePopup(popup) {
// 	popup.classList.remove('popup_opened');
// 	document.removeEventListener('keydown', closePopupEsc);
// 	popup.removeEventListener('mousedown', handlerPopupClose);
// }

// Popup с увеличенным изображением

// Открытие popup редактирование профиля
export function openPopupProfile(popupProfile) {
	buttonProfile.addEventListener("click", () => {
		popup.openPopup(popupProfile);
	});
}

// Открытие popup добавления карточки
export function openPopupAddCard(popupGallery) {
	buttonAddCard.addEventListener("click", () => {
		popup.openPopup(popupGallery);
	});
}

// Открытие popup добавления карточки
export function openPopupAddAvatar(popupAvatar) {
	profileAvatarEdit.addEventListener("click", () => {
		popup.openPopup(popupAvatar);
	});
}

// // Закрытие popup-ов Esc
// function closePopupEsc(e) {
// 	if (e.key === "Escape") {
// 		const openedPopup = document.querySelector('.popup_opened');
// 		closePopup(openedPopup);
// 	}
// }

// // Закрытие popup-ов кликом на оверлей или крестик
// function handlerPopupClose(e) {
// 	if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-icon')) {
// 		closePopup(e.currentTarget);
// 	}
// }

