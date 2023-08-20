//Функции для работы с карточками

import {
	increaseImage
} from "./modal.js";

import {
	// addLike,
	// handleDelButton
} from "./../index.js";





// Увеличение изображения
const popupImage = document.querySelector('.popup_type_image');
const imageZoom = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');

const elementTemplate = document.querySelector('#element').content;

const elements = document.querySelector('.elements');

// Добавление карточки на страницу
// export function addСardToPage(elementName, elementLink) {
// 	const card = createCard(elementName, elementLink);
// 	elements.prepend(card);
// }

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