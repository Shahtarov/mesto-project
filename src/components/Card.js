//Функции для работы с карточками
import { closePopup, popupGallery } from "./modal.js";

import { renderLoading } from "./Section.js";

import { userId } from "../index.js";

// // Увеличение изображения
// const popupImage = document.querySelector(".popup_type_image");
// const imageZoom = document.querySelector(".popup__image");
// const imageTitle = document.querySelector(".popup__image-title");

// const elementTemplate = document.querySelector("#element").content;
// const elements = document.querySelector(".elements");

// // Работа с карточками
// const formGallery = document.forms["gallery-add"];
// const titleInput = formGallery.querySelector('input[name="popup__title"]');
// const urlInput = formGallery.querySelector('input[name="popup__url"]');

// Удаление карточки

// const formCardDelete = document.forms["card-delete"];
// let cardDelete;
// let cardDeleteId;

export default class Card {
	constructor(
		{ elementName, elementLink, cardId, likes, isCardOwner, ownerId },
		elementTemplate,
		popupDelCard
	) {
		this.elementName = elementName;
		this.elementLink = elementLink;
		this.cardId = cardId;
		this.likes = likes;
		this.isCardOwner = isCardOwner;
		this.owner = ownerId;
		this.elementTemplate = elementTemplate;
		this.popupDelCard = popupDelCard;
		this.cardDelete;
		this.cardDeleteId;
	}

	// Добавление лайка
	#addLike() {
		const likeElement = cardElement.querySelector(".element__like");
		const likesCounter = cardElement.querySelector(".element__likes-counter");
		likesCounter.textContent = arrLikes.length;

		if (arrLikes.find((e) => e["_id"] === owner)) {
			likeElement.classList.add("element__like#active");
		}

		likeElement.addEventListener("click", () => {
			if (likeElement.classList.contains("element__like#active")) {
				api.delLikeApi(elementId)
					.then((data) => {
						likeElement.classList.remove("element__like#active");
						likesCounter.textContent = data.likes.length;
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				api.setLikeApi(elementId)
					.then((data) => {
						likeElement.classList.add("element__like#active");
						likesCounter.textContent = data.likes.length;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
	}

	// Удаление карточки при подтверждении в popup
	#handletDeleteCard(e) {
		e.preventDefault();
		const submitButton = e.submitter;
		renderLoading(true, submitButton);
		api.deleteCard(cardDeleteId)
			.then(() => {
				cardDelete.remove();
				popupDelCard.close();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				renderLoading(false, submitButton, "Да");
			});
	}

	#delCardFormSubmit() {
		const formCardDelete = document.forms["card-delete"];
		formCardDelete.addEventListener("submit", this.#handletDeleteCard);
	}

	// #zoomImage() {
	// 	elementImage.addEventListener("click", () => {
	// 		const increaseImage = new PopupWithImage();
	// 		increaseImage.open(elementName, elementLink);
	// 		// increaseImage(
	// 		// 	popupImage,
	// 		// 	imageZoom,
	// 		// 	imageTitle,
	// 		// 	elementLink,
	// 		// 	elementName
	// 		// );
	// 	});
	// }

	// Удаление карочки
	#delCard() {
		const deleteButton = cardElement.querySelector(".element__delete");
		if (isCardOwner) {
			deleteButton.addEventListener("click", function () {
				popupDelCard.open();
				cardDelete = cardElement;
				cardDeleteId = elementId;
			});
		} else {
			deleteButton.remove();
		}
	}

	// Создание карточки
	getElement() {
		// забираем разметку из HTML и клонируем элемент
		const cardElement = this.elementTemplate
			.querySelector(".element")
			.cloneNode(true);
		const elementImage = cardElement.querySelector(".element__image");
		elementImage.src = this.elementLink;
		elementImage.alt = this.elementName;

		const elementHeader = cardElement.querySelector(".element__header");
		elementHeader.textContent = this.elementName;

		this.#addLike();
		// this.#zoomImage();
		this.#handletDeleteCard();
		this.#delCard();
		this.#delCardFormSubmit();

		return cardElement;
	}
}

// Создание карточки
// function createCard(elementName, elementLink, elementId, arrLikes, isCardOwner, owner) {
// const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
// const elementImage = cardElement.querySelector('.element##image');
// elementImage.src = elementLink;
// elementImage.alt = elementName;

// const elementHeader = cardElement.querySelector('.element##header');
// elementHeader.textContent = elementName;

// // Добавление лайка
// const likeElement = cardElement.querySelector('.element##like');
// const likesCounter = cardElement.querySelector('.element##likes-counter');
// likesCounter.textContent = arrLikes.length;

// if (arrLikes.find((e) => e['#id'] === owner)) {
// 	likeElement.classList.add('element##like#active');
// }

// likeElement.addEventListener('click', () => {
// 	if (likeElement.classList.contains('element##like#active')) {
// 		delLikeApi(elementId)
// 			.then((data) => {
// 				likeElement.classList.remove('element##like#active');
// 				likesCounter.textContent = data.likes.length;
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	} else {
// 		setLikeApi(elementId)
// 			.then((data) => {
// 				likeElement.classList.add('element##like#active');
// 				likesCounter.textContent = data.likes.length;
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}
// });

// Удаление карочки
// const deleteButton = cardElement.querySelector('.element##delete');
// if (isCardOwner) {

// 	deleteButton.addEventListener('click', () => {
// 		openPopup(popupDelCard);
// 		cardDelete = cardElement;
// 		cardDeleteId = elementId;

// 	});
// } else {
// 	deleteButton.remove();
// }

// 	return cardElement;
// }

// Добавление карточек на страницу
// export function addСardToPage(elementName, elementLink, elementId, arrLikes, isCardOwner, owner) {
// 	const card = createCard(elementName, elementLink, elementId, arrLikes, isCardOwner, owner);
// 	elements.prepend(card);
// }

// // Добавление карточки из формы
// function handlerCardFormSubmit(e) {
// 	e.preventDefault();
// 	const submitButton = e.submitter;
// 	renderLoading(true, submitButton);
// 	pushCard(titleInput.value, urlInput.value)
// 		.then((card) => {
// 			addСardToPage(
// 				card.name,
// 				card.link,
// 				card._id,
// 				card.likes,
// 				card.owner._id === userId,
// 				card.owner._id
// 			);
// 		})
// 		.then(() => {
// 			closePopup(popupGallery);
// 			e.target.reset();
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		})
// 		.finally(() => {
// 			renderLoading(false, submitButton);
// 		});
// }

// // Добавление карточки из формы
// export function addCardFormSubmit() {
// 	formGallery.addEventListener("submit", handlerCardFormSubmit);
// }

// // Удаление карточки при подтверждении в popup
// function handletDeleteCard(e) {
// 	e.preventDefault();
// 	const submitButton = e.submitter;
// 	renderLoading(true, submitButton);
// 	deleteCard(cardDeleteId)
// 		.then(() => {
// 			cardDelete.remove();
// 			closePopup(popupDelCard);

// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		})
// 		.finally(() => {
// 			renderLoading(false, submitButton, "Да");
// 		})
// }

// export function delCardFormSubmit() {
// 	formCardDelete.addEventListener('submit', handletDeleteCard);
// }
