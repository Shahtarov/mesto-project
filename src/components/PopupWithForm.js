import Popup from "./Popup.js";

// Popup с формой
export default class PopupWithForm extends Popup {
	constructor(popupElement, handler) {
		super(popupElement);
		this.form = this.popupElement.querySelector(".popup__form");
		this.input = this.popupElement.querySelector(".popup__information");
		this.handler = handler.bind(this);
		this.handlerSubmit = this.handlerSubmit.bind(this);
	}

	close() {
		super.close();
		this.form.reset();
	}

	#getInputValues() {
		const inputs = [...this.form.querySelectorAll(this.input.name)].map(
			(input) => input.value
		);

		return inputs;
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
