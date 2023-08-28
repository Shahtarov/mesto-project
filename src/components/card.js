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
} from "./api.js"

import {
	renderLoading
} from "./utils.js"

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
				.catch((err) => {
					console.log(err);
				});
		} else {
			setLikeApi(elementId)
				.then((data) => {
					likeElement.classList.add('element__like_active');
					likesCounter.textContent = data.likes.length;
				})
				.catch((err) => {
					console.log(err);
				});
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
	elements.prepend(card);
}

// Добавление карточки из формы
function handlerCardFormSubmit(e) {
	e.preventDefault();
	const submitButton = e.submitter;
	renderLoading(true, submitButton);
	pushCard(titleInput.value, urlInput.value)
		.then((card) => {
			addСardToPage(card.name, card.link, card._id, card.likes, card.owner._id === userId, card.owner._id);
		})
		.then(() => {
			closePopup(popupGallery);
			e.target.reset();;

		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		})
}

// Добавление карточки из формы
export function addCardFormSubmit() {
	formGallery.addEventListener('submit', handlerCardFormSubmit);
}

// Удаление карточки при подтверждении в popup
function handletDeleteCard(e) {
	e.preventDefault();
	const submitButton = e.submitter;
	renderLoading(true, submitButton);
	deleteCard(cardDeleteId)
		.then(() => {
			cardDelete.remove();
			closePopup(popupDelCard);

		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton, "Да");
		})
}

export function delCardFormSubmit() {
	formCardDelete.addEventListener('submit', handletDeleteCard);
}