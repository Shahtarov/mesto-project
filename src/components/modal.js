//Работа модальных окон
import {
	profileAvatarEdit
} from "./editProfile.js"

export const popupGallery = document.querySelector('.popup-gallery-add');
const buttonAddCard = document.querySelector('.profile__button');
const buttonProfile = document.querySelector('.profile__button-edit');

export class Popup {
	constructor(popupSelector) {
		this.popupSelector = popupSelector;
	}

	// Функции открытия и закрытия popup
	openPopup(popup) {
		popup.classList.add(this.popupSelector);
		document.addEventListener('keydown', this._handleEscClose);
		popup.addEventListener('mousedown', this.setEventListeners);
	}

	closePopup(popup) {
		popup.classList.remove(this.popupSelector);
		document.removeEventListener('keydown', this._handleEscClose);
		popup.removeEventListener('mousedown', this.setEventListeners);
	}

	// Закрытие popup-ов Esc
	_handleEscClose(e) {
		if (e.key === "Escape") {
			const openedPopup = document.querySelector(`.${this.popupSelector}`);
			this.closePopup(openedPopup);
		}
	}

	// Закрытие popup-ов кликом на оверлей или крестик
	setEventListeners(e) {
		if (e.target.classList.contains(this.popupSelector) ||
			e.target.classList.contains('popup__close-icon')) {
			this.closePopup(e.currentTarget);
		}
	}
}
const popup = new Popup('popup_opened');


// Popup с увеличенным изображением
export class PopupWithImage extends Popup {
	constructor(popupSelector) {
		this.popupSelector = popupSelector;
	}

	// Перезаписывание открытие popup
	openPopup(popup) {
		popup.classList.add(this.popupSelector);
		document.addEventListener('keydown', this._handleEscClose);
		popup.addEventListener('mousedown', this.setEventListeners);

		// ? Сделать zoom
		imageZoom.src = elementLink;
		imageZoom.alt = elementName;
		imageTitle.textContent = elementName;
	}
}
const popupWithImage = new PopupWithImage(popupImage);

// Popup с формой
export class PopupWithForm extends Popup {
	constructor(popupSelector) {
		this.popupSelector = popupSelector;
	}

	//Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
	closePopup(popup) {
		popup.classList.remove(this.popupSelector);
		document.removeEventListener('keydown', this._handleEscClose);
		popup.removeEventListener('mousedown', this.setEventListeners);
	}

	//Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
	_getInputValues() {

	}

	// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
	setEventListeners(e) {
		if (e.target.classList.contains(this.popupSelector) ||
			e.target.classList.contains('popup__close-icon')) {
			this.closePopup(e.currentTarget);
		}
	}
}



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
export function increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName) {
	popup.openPopup(popupImage);
	imageZoom.src = elementLink;
	imageZoom.alt = elementName;
	imageTitle.textContent = elementName;
}

// Открытие popup редактирование профиля
export function openPopupProfile(popupProfile) {
	buttonProfile.addEventListener('click', () => {
		popup.openPopup(popupProfile);
	});
}

// Открытие popup добавления карточки
export function openPopupAddCard(popupGallery) {
	buttonAddCard.addEventListener('click', () => {
		popup.openPopup(popupGallery);
	});
}

// Открытие popup добавления карточки
export function openPopupAddAvatar(popupAvatar) {
	profileAvatarEdit.addEventListener('click', () => {
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