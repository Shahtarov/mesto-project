import { Popup } from "./Popup.js";
import api from "../src/index.js";

// Popup с формой
export class PopupWithForm extends Popup {
	constructor(popupSelector, apiPush, form) {
		super(popupSelector);
		this.apiPush = apiPush;
		this.form = form;
	}

	//Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
	closePopup() {
		super.closePopup();
		this.form.reset();
	}

	//Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
	_getInputValues(form) {
		form.elements;
	}

	// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
	setEventListeners(e) {
		super.setEventListeners(e);
		form.addEventListener("submit", this.handler);
	}
}

