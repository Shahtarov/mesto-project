import { Popup } from "./Popup.js";
import api from "../index.js";

// Popup с формой
export class PopupWithForm extends Popup {
	constructor(popupSelector, handler) {
		super(popupSelector);
		this._form = this.popupSelector.querySelector(".popup__form");
		this._handler = handler;
	}

	//Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
	closePopup() {
		super.closePopup();
		this._form.reset();

		// popup.classList.remove(this.popupSelector);
		// document.removeEventListener("keydown", this._handleEscClose);
		// popup.removeEventListener("mousedown", this.setEventListeners);
	}

	//Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
	_getInputValues() {
		const inputs = [...form.querySelectorAll(".popup__information").value];
		return inputs;
	}

	// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener("submit", (e) => {
			e.preventDefault();
			this.handler(this._getInputValues());
		});
	}
}

