//Функции для работы с карточками

import {
	increaseImage,
	closePopup,
	popupGallery,
} from "./modal.js";

import {
	initialCards
} from "./initialData.js";

// import {
// 	// addLike,
// 	// handleDelButton
// } from "./../index.js";


// Увеличение изображения
const popupImage = document.querySelector('.popup_type_image');
const imageZoom = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');

const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');

// Работа с карточками
const formGallery = document.querySelector('form[name="gallery-add"]');
const titleInput = formGallery.querySelector('input[name="popup__title"]');
const urlInput = formGallery.querySelector('input[name="popup__url"]');


// Добавление лайка
function addLike(like) {
	like.addEventListener('click', (e) => {
		like.classList.toggle('element__like_active');
	});
}

// Функция удаление карочки
function handleDelButton(button, element) {
	button.addEventListener('click', () => {
		element.remove();
	});
}

// Создание карточки
function createCard(elementName, elementLink) {
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

// Добавление карточек на страницу
export function addСardToPage(elementName, elementLink) {
	const card = createCard(elementName, elementLink);
	elements.prepend(card);
}

// Добавление карточки из формы
function handleCardFormSubmit(e) {
	e.preventDefault();
	initialCards.unshift({
		name: titleInput.value,
		link: urlInput.value
	});
	addСardToPage(initialCards[0].name, initialCards[0].link);
	formGallery.reset();
	closePopup(popupGallery);
}

// Добавление карточки из формы
export function addCardFormSubmit() {
	formGallery.addEventListener('submit', handleCardFormSubmit);
}