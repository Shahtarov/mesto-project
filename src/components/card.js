//Создание карточки
export default class Card {
	constructor(
		{ elementName, elementLink, cardId, likes, isCardOwner, ownerId, userId },
		elementTemplate,
		{ handleDeleteLike, handleAddLike, addZoom, handleDeleteCard }
	) {
		this.elementName = elementName;
		this.elementLink = elementLink;
		this.cardId = cardId;
		this.likes = likes;
		this.isCardOwner = isCardOwner;
		this.ownerId = ownerId;
		this.elementTemplate = elementTemplate;
		this.userId = userId;

		this.handleDeleteLike = handleDeleteLike;
		this.handleAddLike = handleAddLike;
		this.addZoom = addZoom;
		this.handleDeleteCard = handleDeleteCard;
	}

	#isLiked() {
		return this.likes.some((item) => item._id === this.userId);
	}

	#setLikeIcon() {
		this.likeElement.classList.add("element__like_active");
	}

	#deleteLikeIcon() {
		this.likeElement.classList.remove("element__like_active");
	}

	#toggleLike() {
		this.likesCounter.textContent = this.likes.length;

		if (this.#isLiked()) {
			this.#setLikeIcon();
		} else {
			this.#deleteLikeIcon();
		}
	}

	#handleImageClick() {
		this.addZoom(this.elementName, this.elementLink);
	}

	switchLikes(likes) {
		this.likes = likes;
		this.#toggleLike();
	}

	// Установка слушателей
	#setEventListeners() {
		this.elementImage.addEventListener("click", () => {
			this.#handleImageClick();
		});

		this.likeElement.addEventListener("click", () => {
			if (this.#isLiked()) {
				this.handleDeleteLike();
			} else {
				this.handleAddLike();
			}
		});

		if (this.isCardOwner) {
			this.deleteButton.addEventListener("click", () => {
				this.handleDeleteCard();
			});
		} else {
			this.deleteButton.remove();
		}
	}

	// Создание карточки
	getElement() {
		this.cardElement = this.elementTemplate
			.querySelector(".element")
			.cloneNode(true);
		this.elementImage = this.cardElement.querySelector(".element__image");
		this.elementImage.src = this.elementLink;
		this.elementImage.alt = this.elementName;

		this.elementHeader = this.cardElement.querySelector(".element__header");
		this.elementHeader.textContent = this.elementName;

		this.likesCounter = this.cardElement.querySelector(
			".element__likes-counter"
		);
		this.likesCounter.textContent = this.likes.length;

		this.likeElement = this.cardElement.querySelector(".element__like");
		this.deleteButton = this.cardElement.querySelector(".element__delete");

		// Установка слушателей событий
		this.#setEventListeners();

		this.#toggleLike();

		return this.cardElement;
	}
}
