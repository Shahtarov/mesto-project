import Popup from "./Popup.js";

// Popup с формой
export default class PopupWithImage extends Popup {
	constructor(popupElement) {
		super(popupElement);

		this.imageZoom = this.popupElement.querySelector(".popup__image");
		this.imageTitle = this.popupElement.querySelector(".popup__image-title");
	}

	open(elementName, elementLink) {
		super.open();

		this.imageZoom.src = elementLink;
		this.imageZoom.alt = elementName;
		this.imageTitle.textContent = elementName;
	}
}
