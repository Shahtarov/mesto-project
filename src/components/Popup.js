//Работа popup окон
export default class Popup {
	constructor(popupElement) {
		this.popupElement = popupElement;

		this._handleEscClose = this._handleEscClose.bind(this);
		this._handleOverlayClose = this._handleOverlayClose.bind(this);
		this.close = this.close.bind(this);
	}

	open() {
		this.popupElement.classList.add("popup_opened");
		document.addEventListener("keydown", this._handleEscClose);
		this.setEventListeners();
	}

	close() {
		this.popupElement.classList.remove("popup_opened");
		this.removeEventListeners();
	}

	setEventListeners() {
		this.popupElement
			.querySelector(".popup__close-icon")
			.addEventListener("click", this.close);
		this.popupElement.addEventListener("mousedown", this._handleOverlayClose);
	}

	removeEventListeners() {
		this.popupElement
			.querySelector(".popup__close-icon")
			.removeEventListener("click", this.close);
		this.popupElement.removeEventListener(
			"mousedown",
			this._handleOverlayClose
		);
		document.removeEventListener("keydown", this._handleEscClose);
	}

	_handleEscClose(e) {
		if (e.key === "Escape") {
			this.close();
		}
	}

	_handleOverlayClose(e) {
		if (e.target === this.popupElement) {
			this.close();
		}
	}
}
