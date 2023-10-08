import Popup from "./Popup.js";

// Popup с формой
export default class PopupWithForm extends Popup {
	constructor(popupElement, formSelectors, handler) {
		super(popupElement);
		this.form = this.popupElement.querySelector(formSelectors.formSelector);
		this.inputs = [
			...this.form.querySelectorAll(formSelectors.inputSelector)
		];
		this.handler = handler.bind(this);
		this.handlerSubmit = this.handlerSubmit.bind(this);
	}

	close() {
		super.close();
		this.form.reset();
		this.form.removeEventListener("submit", this.handlerSubmit);
	}

	#getInputValues() {
		const inputValues = {};
		this.inputs.forEach((input) => {
			inputValues[input.name] = input.value;
		});
		return inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this.form.addEventListener("submit", this.handlerSubmit);
	}

	handlerSubmit(e) {
		e.preventDefault();
		this.handler(this.#getInputValues());
	}
}
