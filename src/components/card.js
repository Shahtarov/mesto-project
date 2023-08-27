//Функции для работы с карточками

import {
	increaseImage,
	openPopup,
	closePopup,
	popupGallery,
} from "./modal.js";

import {
	pushCard,
	deleteCard,
	setLikeApi,
	delLikeApi,
	getInitialCards
} from "./api.js"

import {
	userId
} from "../index.js"



// Увеличение изображения
const popupImage = document.querySelector('.popup_type_image');
const imageZoom = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');

const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');

// Работа с карточками
const formGallery = document.forms["gallery-add"];
const titleInput = formGallery.querySelector('input[name="popup__title"]');
const urlInput = formGallery.querySelector('input[name="popup__url"]');

// Удаление карточки
const popupDelCard = document.querySelector('.popup-card-delete');
const formCardDelete = document.forms["card-delete"];
let cardDelete;
let cardDeleteId;


// Создание карточки
function createCard(elementName, elementLink, elementId, arrLikes, isCardOwner, owner) {
	const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
	const elementImage = cardElement.querySelector('.element__image');
	elementImage.src = elementLink;
	elementImage.alt = elementName;

	const elementHeader = cardElement.querySelector('.element__header');
	elementHeader.textContent = elementName;

	// Добавление лайка
	const likeElement = cardElement.querySelector('.element__like');
	const likesCounter = cardElement.querySelector('.element__likes-counter');
	likesCounter.textContent = arrLikes.length;

	if (arrLikes.find((e) => e['_id'] === owner)) {
		likeElement.classList.add('element__like_active');
	}

	likeElement.addEventListener('click', () => {
		if (likeElement.classList.contains('element__like_active')) {
			delLikeApi(elementId)
				.then((data) => {
					likeElement.classList.remove('element__like_active');
					likesCounter.textContent = data.likes.length;
				})
		} else {
			setLikeApi(elementId)
				.then((data) => {
					likeElement.classList.add('element__like_active');
					likesCounter.textContent = data.likes.length;
				})
		}
	});

	// Удаление карочки
	const deleteButton = cardElement.querySelector('.element__delete');
	if (isCardOwner) {

		deleteButton.addEventListener('click', () => {
			openPopup(popupDelCard);
			cardDelete = cardElement;
			cardDeleteId = elementId;

		});
	} else {
		deleteButton.remove();
	}

	// Увеличение изображения
	elementImage.addEventListener('click', () => {
		increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName);
	});

	return cardElement;
}


// Добавление карточек на страницу
export function addСardToPage(elementName, elementLink, elementId, arrLikes, isCardOwner, owner) {
	const card = createCard(elementName, elementLink, elementId, arrLikes, isCardOwner, owner);
	elements.appendChild(card);
}

// Добавление карточки из формы
function handlerCardFormSubmit(e) {
	e.preventDefault();
	e.target.querySelector(".popup__submit").textContent = "Создание...";
	pushCard(titleInput.value, urlInput.value)
		.then(() => {
			while (elements.firstChild) {
				elements.removeChild(elements.firstChild);
			}
		})
		.then(() => {
			getInitialCards()
				.then((data) => {
					data.forEach((e) => {
						addСardToPage(e.name, e.link, e._id, e.likes, e.owner._id === userId, e.owner._id);
					})
				})
		})
		.then(() => {
			closePopup(popupGallery);
			formGallery.reset();
			e.target.querySelector(".popup__submit").textContent = "Создать";
		})
}

// Добавление карточки из формы
export function addCardFormSubmit() {
	formGallery.addEventListener('submit', handlerCardFormSubmit);
}

// Удаление карточки при подтверждении в popup
formCardDelete.addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.querySelector(".popup__submit").textContent = "Удаление...";
	deleteCard(cardDeleteId)
		.then(() => {
			cardDelete.remove();
			closePopup(popupDelCard);
			e.target.querySelector(".popup__submit").textContent = "Да";
		})
});