import './pages/index.css';
import {
	enableValidation
} from "./components/validate.js";

import {
	initialCards
} from "./components/initialData.js";

import {
	closePopup,
	openPopupProfile,
	openPopupAddCard,
} from "./components/modal.js";

import {
	elements,
	createCard
} from "./components/card.js";



// Редактирование профиля

const formProfile = document.querySelector('form[name="profile-edit"]');
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');

// Работа с карточками
const formGallery = document.querySelector('form[name="gallery-add"]');
const popupGallery = document.querySelector('.popup-gallery-add');
const titleInput = formGallery.querySelector('input[name="popup__title"]');
const urlInput = formGallery.querySelector('input[name="popup__url"]');

// popup редактирование профиля
const popupProfile = document.querySelector('.popup-profile-edit');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');


// Функция добавление лайка
export function addLike(like) {
	like.addEventListener('click', (e) => {
		like.classList.toggle('element__like_active');
	});
}


// Функция удаление карочки
export function handleDelButton(button, element) {
	button.addEventListener('click', (e) => {
		element.remove();
	});
}

function addСardToPage(elementName, elementLink) {
	const card = createCard(elementName, elementLink);
	elements.prepend(card);
}




// Добавление карточки из формы
export function handleCardFormSubmit(e) {
	e.preventDefault();
	initialCards.unshift({
		name: titleInput.value,
		link: urlInput.value
	});
	addСardToPage(initialCards[0].name, initialCards[0].link);
	formGallery.reset();
	closePopup(popupGallery);
}

// Отредактировать профиль
export function handleProfileFormSubmit(e) {
	e.preventDefault();
	profileName.textContent = nameInput.value;
	profileInformation.textContent = jobInput.value;
	closePopup(popupProfile);
}

// Отредактировать профиль
formProfile.addEventListener('submit', handleProfileFormSubmit);


// Добавление карточки из формы
formGallery.addEventListener('submit', handleCardFormSubmit);

// Включение валидации форм
enableValidation();

// Открытие popup-ов
openPopupProfile(popupProfile);
openPopupAddCard(popupGallery);

// Добавление карточек из массива
initialCards.forEach((e) => {
	addСardToPage(e.name, e.link);
});