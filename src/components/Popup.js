//Работа модальных окон
export default class Popup {
	constructor(popupElement) {
		this.popupElement = popupElement;
		this.popup = document.querySelector(this.popupElement);
		this._handleEscClose = this._handleEscClose.bind(this);
		this.setEventListeners = this.setEventListeners.bind(this);
	}

	// Функции открытия и закрытия popup
	open() {
		this.popup.classList.add("popup_opened");
		document.addEventListener("keydown", this._handleEscClose);
		this.popup.addEventListener("mousedown", this.setEventListeners);
	}

	close() {
		this.popup.classList.remove("popup_opened");
		document.removeEventListener("keydown", this._handleEscClose);
		this.popup.removeEventListener("mousedown", this.setEventListeners);
	}

	// Закрытие popup-ов Esc
	_handleEscClose(e) {
		if (e.key === "Escape") {
			//if (document.querySelector(".popup_opened"))
			this.close();
		}
	}

	// Закрытие popup-ов кликом на оверлей или крестик
	setEventListeners(e) {
		if (
			e.target.classList.contains("popup_opened") ||
			e.target.classList.contains("popup__close-icon")
		) {
			this.close();
		}
	}
}

