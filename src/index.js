import './pages/index.css';
import {
	enableValidation
} from "./components/validate.js";

import {
	initialCards
} from "./components/initialData.js";



import {
	// openPopup,
	closePopup,
	openPopupProfile,
	openPopupAddCard,
	increaseImage
} from "./components/modal.js";

// import {
// 	handleProfileFormSubmit,
// 	handleCardFormSubmit,
// 	createCard,
// 	addLike,
// 	handleDelButton
// } from "./components/card";



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


// Увеличение изображения
const popupImage = document.querySelector('.popup_type_image');
const imageZoom = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');

const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
// const element = document.querySelector('.element');


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

// Создание карточки
export function createCard(elementName, elementLink) {
	const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
	const elementImage = cardElement.querySelector('.element__image');
	elementImage.src = elementLink;
	elementImage.alt = elementName;

	const elementHeader = cardElement.querySelector('.element__header');
	elementHeader.textContent = elementName;

	// Добавление лайка
	const like = cardElement.querySelector('.element__like');
	addLike(like);

	// Удаление карочки
	const deleteButton = cardElement.querySelector('.element__delete');
	handleDelButton(deleteButton, cardElement);

	// Увеличение изображения
	elementImage.addEventListener('click', (e) => {
		increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName);
	});

	return cardElement;
}


// Добавление карточки на страницу
export function addСardToPage(elementName, elementLink) {
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