import Popup from "./Popup.js";

export default class PopupWithDel extends Popup {
	constructor(popupElement, formSelectors, handler) {
		super(popupElement);
		this.form = this.popupElement.querySelector(formSelectors.formSelector);
		this.handler = handler.bind(this);
		this.handleDelSubmit = this.handleDelSubmit.bind(this);
	}

	setItemForDelete(item) {
		this.item = item;
	}

	handleDelSubmit(e) {
		e.preventDefault();
		this.handler(this.item);
	}

	open() {
		super.open();
		this.form.addEventListener("submit", this.handleDelSubmit);
	}

	close() {
		super.close();
		this.form.removeEventListener("submit", this.handleDelSubmit);
	}
}
