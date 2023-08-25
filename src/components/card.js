//Функции для работы с карточками

import {
	increaseImage,
	closePopup,
	popupGallery,
} from "./modal.js";

import {
	pushCard,
	deleteCard,
	setLikeApi,
	delLikeApi
} from "./api.js"


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


// Функция удаление карочки
function handleDelButton(button, element, elementId) {
	button.addEventListener('click', () => {
		element.remove();
		deleteCard(elementId)
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
			.then(data => console.log(`DEL ${data}`))
			.catch((err) => {
				console.log(err);
			})
	});
}

function setLikesSum(likesCounter, arrLikes) {
	likesCounter.textContent = arrLikes.length;
}

function setLikeIcon(likeElement, arrLikes, owner) {
	if (arrLikes.find((e) => e['_id'] === owner)) {
		likeElement.classList.add('element__like_active');
	} else {
		likeElement.classList.remove('element__like_active');

	}
}


export function validationLike(likeElement, likesCounter, owner, elementId, arrLikes) {
	// console.log(`e['_id'] - ${e['_id']}, owner - ${owner}. Итог ${arrLikes.some((e) => e['_id'] === owner)}`);

	// console.log(arrLikes);
	if (arrLikes.find((e) => e['_id'] === owner)) {
		delLikeApi(elementId)
			.then(res => {
				if (res.ok) {
					console.log("Нажал дизлайк");
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
			.then((data) => {
				console.log(data.likes);
				setLikeIcon(likeElement, data.likes, owner)
				setLikesSum(likesCounter, data.likes);
			})
			.catch((err) => {
				console.log(err);
			})
	} else {
		setLikeApi(elementId)
			.then(res => {
				if (res.ok) {
					console.log("Нажал лайк");
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
			.then((data) => {
				console.log(data.likes);
				setLikeIcon(likeElement, data.likes, owner)
				setLikesSum(likesCounter, data.likes);
			})
			.catch((err) => {
				console.log(err);
			})
	}
}


// function handlerClickLike(likeElement, likesCounter, owner, elementId, arrLikes) {
// 	likeElement.addEventListener('click', () => {
// 		validationLike(likeElement, likesCounter, owner, elementId, arrLikes)
// 	})
// }


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
	setLikeIcon(likeElement, arrLikes, owner);
	setLikesSum(likesCounter, arrLikes);
	// handlerClickLike(likeElement, likesCounter, owner, elementId, arrLikes);
	likeElement.addEventListener('click', () => {
		validationLike(likeElement, likesCounter, owner, elementId, arrLikes);
	})

	// Удаление карочки
	const deleteButton = cardElement.querySelector('.element__delete');
	if (isCardOwner) {
		handleDelButton(deleteButton, cardElement, elementId);
	} else {
		deleteButton.remove();
	}

	// Увеличение изображения
	elementImage.addEventListener('click', (e) => {
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
function handleCardFormSubmit(e) {
	e.preventDefault();
	addСardToPage(titleInput.value, urlInput.value);
	pushCard(titleInput.value, urlInput.value)
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err);
		});
	formGallery.reset();
	closePopup(popupGallery);
}

// Добавление карточки из формы
export function addCardFormSubmit() {
	formGallery.addEventListener('submit', handleCardFormSubmit);
}