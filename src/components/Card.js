//Создание карточки
export default class Card {
	constructor(
		{ elementName, elementLink, cardId, likes, isCardOwner, ownerId },
		elementTemplate
		// popupDelCard,
	) {
		this.elementName = elementName;
		this.elementLink = elementLink;
		this.cardId = cardId;
		this.likes = likes;
		this.isCardOwner = isCardOwner;
		this.owner = ownerId;
		this.elementTemplate = elementTemplate;
		// this.popupDelCard = popupDelCard;
		// this.api = api;
	}

	// // Добавление лайка
	// #addLike(cardElement) {
	// 	const likeElement = cardElement.querySelector(".element__like");
	// 	const likesCounter = cardElement.querySelector(".element__likes-counter");
	// 	likesCounter.textContent = this.likes.length;

	// 	if (this.likes.some((like) => like._id === this.owner)) {
	// 		likeElement.classList.add("element__like_active");
	// 	}

	// 	likeElement.addEventListener("click", () => {
	// 		if (likeElement.classList.contains("element__like_active")) {
	// 			this.api
	// 				.deleteLikeApi(this.cardId)
	// 				.then((data) => {
	// 					likeElement.classList.remove("element__like_active");
	// 					likesCounter.textContent = data.likes.length;
	// 				})
	// 				.catch((err) => {
	// 					console.log(err);
	// 				});
	// 		} else {
	// 			this.api
	// 				.setLikeApi(this.cardId)
	// 				.then((data) => {
	// 					likeElement.classList.add("element__like_active");
	// 					likesCounter.textContent = data.likes.length;
	// 				})
	// 				.catch((err) => {
	// 					console.log(err);
	// 				});
	// 		}
	// 	});
	// }

	// // Удаление карточки при подтверждении в popup
	// #handleDeleteCard(cardDelete) {
	// 	const submitButton = e.submitter;
	// 	renderLoading(true, submitButton);
	// 	this.api
	// 		.deleteCard(this.cardId) //
	// 		.then(() => {
	// 			this.cardDelete.remove();
	// 			this.popupDelCard.close();
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		})
	// 		.finally(() => {
	// 			renderLoading(false, submitButton, "Да");
	// 		});
	// }

	// // #delCardFormSubmit(cardElement) {
	// // 	// Принимаем cardElement в качестве аргумента
	// // 	const formCardDelete = cardElement.querySelector(".card-delete"); // Находим форму внутри cardElement
	// // 	formCardDelete.addEventListener("submit", (e) =>
	// // 		this.#handleDeleteCard(e)
	// // 	); // Привязываем обработчик к formCardDelete
	// // }

	// // Удаление карточки
	// #delCard(cardElement) {
	// 	const deleteButton = cardElement.querySelector(".element__delete");
	// 	if (this.isCardOwner) {
	// 		deleteButton.addEventListener("click", () => {
	// 			this.popupDelCard.open();
	// 		});
	// 	} else {
	// 		deleteButton.remove();
	// 	}
	// }

	// Создание карточки
	getElement() {
		const cardElement = this.elementTemplate
			.querySelector(".element")
			.cloneNode(true);
		const elementImage = cardElement.querySelector(".element__image");
		elementImage.src = this.elementLink;
		elementImage.alt = this.elementName;

		const elementHeader = cardElement.querySelector(".element__header");
		elementHeader.textContent = this.elementName;

		// this.#addLike(cardElement);
		// this.#handleDeleteCard(cardElement);
		// this.#delCard(cardElement);
		// this.#delCardFormSubmit(cardElement);

		return cardElement;
	}
}
