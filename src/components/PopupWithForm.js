import Popup from "./Popup.js";

// Popup с формой
export default class PopupWithForm extends Popup {
	constructor({ formSelector, inputSelector }, popupElement, handler) {
		super(popupElement);
		this.form = formSelector;
		this.input = inputSelector;
		this.handler = handler;
	}

	//Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
	close() {
		super.close();
		this.form.reset();
	}

	//Содержит приватный метод getInputValues, который собирает данные всех полей формы.

	_getInputValues() {
		const inputs = [...this.form.querySelectorAll(this.input)].map(
			(input) => input.value
		);

		return inputs;
	}

	// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
	setEventListeners() {
		super.setEventListeners();
		this.form.addEventListener("submit", function (e) {
			e.preventDefault();
			this.handler(this._getInputValues());
		});
	}
}
