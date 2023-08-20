//Работа модальных окон


export const popupGallery = document.querySelector('.popup-gallery-add');

const buttonAddCard = document.querySelector('.profile__button');
const buttonProfile = document.querySelector('.profile__button-edit');


// Все popup окна
const popups = Array.from(document.querySelectorAll(".popup"));


// Функции открытия и закрытия popup
export function openPopup(popup) {
	popup.classList.add('popup_opened');
}

export function closePopup(popup) {
	popup.classList.remove('popup_opened');
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

// Закрытие popup-ов нажатием крестика
// closeButtons.forEach((button) => {
// 	const popup = button.closest('.popup');
// 	button.addEventListener('click', () => closePopup(popup));
// });


// Закрытие popup-ов кликом на оверлей
function closePopupOverlay(popup) {
	popup.addEventListener("click", ((e) => {
		e.stopImmediatePropagation();
		if (e.target.classList[0] === "popup") {
			closePopup(popup);
		}
	}));
}

// Закрытие popup-ов Esc
function closePopupEsc(popup) {
	document.addEventListener('keyup', (e) => {
		if (e.key === "Escape") {
			closePopup(popup);
		}
	});
}

// Закрытие popup-ов нажатием на крестик
function closePopupСross(popup) {
	const closeButton = popup.querySelector(".popup__close-icon");
	closeButton.addEventListener('click', () => closePopup(popup));
}

popups.forEach((popup) => {
	closePopupOverlay(popup);
	closePopupEsc(popup);
	closePopupСross(popup);
});