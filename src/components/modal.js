//Работа модальных окон

export const popupGallery = document.querySelector('.popup-gallery-add');
const buttonAddCard = document.querySelector('.profile__button');
const buttonProfile = document.querySelector('.profile__button-edit');


// Функции открытия и закрытия popup
export function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEsc);
	document.addEventListener('mousedown', closePopupСrossOverlay);
}

export function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEsc);
	document.removeEventListener('mousedown', closePopupСrossOverlay);
}

// Popup с увеличенным изображением
export function increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName) {
	openPopup(popupImage);
	imageZoom.src = elementLink;
	imageZoom.alt = elementName;
	imageTitle.textContent = elementName;
}

// Открытие popup редактирование профиля
export function openPopupProfile(popupProfile) {
	buttonProfile.addEventListener('click', () => {
		openPopup(popupProfile);
	});
}

// Открытие popup добавления карточки
export function openPopupAddCard(popupGallery) {
	buttonAddCard.addEventListener('click', () => {
		openPopup(popupGallery);
	});
}


// Закрытие popup-ов Esc
function closePopupEsc(e) {
	if (e.key === "Escape") {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup);
	}
}

// Закрытие popup-ов кликом на оверлей или крестик
function closePopupСrossOverlay(e) {
	const openedPopup = document.querySelector('.popup_opened');
	if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-icon')) {
		closePopup(openedPopup);
	}
}