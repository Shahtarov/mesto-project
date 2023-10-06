//import { bind } from "core-js/core/function";

//Работа модальных окон
export default class Popup {
	constructor(popupElement) {
		this.popupElement = popupElement;

		//this.popup = document.querySelector(this.popupElement);
		this._handleEscClose = this._handleEscClose.bind(this);
		this.setEventListeners = this.setEventListeners.bind(this);
	}

	// Функции открытия и закрытия popup
	open() {
		this.popupElement.classList.add("popup_opened");
		document.addEventListener("keydown", this._handleEscClose);
		this.popupElement.addEventListener("mousedown", this.setEventListeners);
	}

	// close() {
	// 	this.popupElement.classList.remove("popup_opened");
	// 	document.removeEventListener("keydown", this._handleEscClose);
	// 	this.popupElement.removeEventListener(
	// 		"mousedown",
	// 		this.setEventListeners
	// 	);

	// 	this.popupElement.classList.add("popup_opened");
	// 	document.addEventListener(
	// 		"keydown",
	// 		function (e) {
	// 			this._handleEscClose(e);
	// 		}.bind(this)
	// 	);
	// 	this.popupElement.addEventListener("mousedown", function (e) {
	// 		this.setEventListeners(e);
	// 	});
	// }

	close() {
		this.popupElement.classList.remove("popup_opened");
		document.removeEventListener("keydown", this._handleEscClose);
		this.popupElement.removeEventListener("mousedown", (e) => {
			this.setEventListeners(e);
		});
	}

	// Закрытие popup-ов Esc
	_handleEscClose(e) {
		if (e.key === "Escape") {
			//if (document.querySelector(".popup_opened"))
			this.close();
		}
	}

	// Закрытие popup-ов кликом на оверлей или крестик
	setEventListeners() {
		this.popupElement.addEventListener("mousedown", (e) => {
			if (
				e.target.classList.contains("popup_opened") ||
				e.target.classList.contains("popup__close-icon")
			) {
				this.close();
			}
		});
	}
}

// бинды раскомментил
// в setEventListeners добавил слушатель

