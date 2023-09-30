//Работа модальных окон
export default class Popup {
	constructor(popupElement) {
		this.popupElement = popupElement;
	}

	// Функции открытия и закрытия popup
	open() {
		this.popupElement.classList.add("popup_opened");
		document.addEventListener(
			"keydown",
			function (e) {
				this.#handleEscClose(e);
			}.bind(this)
		);
		this.popupElement.addEventListener("mousedown", function (e) {
			this.setEventListeners(e);
		});
	}

	close() {
		this.popupElement.classList.remove("popup_opened");
		document.removeEventListener("keydown", this.#handleEscClose.bind(this));
		this.popupElement.removeEventListener(
			"mousedown",
			this.setEventListeners
		);
	}

	// Закрытие popup-ов Esc
	#handleEscClose(e) {
		if (e.key === "Escape") {
			if (document.querySelector(".popup_opened")) {
				this.close();
			}
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
