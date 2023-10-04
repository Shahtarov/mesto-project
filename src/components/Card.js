//Создание карточки
export default class Card {
	constructor(
		{ elementName, elementLink, cardId, likes, isCardOwner, ownerId },
		elementTemplate,
		{ addLike, delCard, addZoom }
	) {
		this.elementName = elementName;
		this.elementLink = elementLink;
		this.cardId = cardId;
		this.likes = likes;
		this.isCardOwner = isCardOwner;
		this.owner = ownerId;
		this.elementTemplate = elementTemplate;
		this.addLike = addLike;
		this.delCard = delCard;
		this.addZoom = addZoom;
	}

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

		const likesCounter = cardElement.querySelector(".element__likes-counter");
		likesCounter.textContent = this.likes.length;

		const likeElement = cardElement.querySelector(".element__like");

		this.addLike(
			likeElement,
			this.likes,
			this.cardId,
			likesCounter,
			this.owner
		);
		this.delCard(cardElement, this.cardId, this.isCardOwner);
		this.addZoom(this.elementName, this.elementLink, elementImage);

		return cardElement;
	}
}

