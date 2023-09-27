//Утилитарные функции, которые используются в работе сразу нескольких других функций
import { Card } from "./Card";

export class Section {
	constructor({ items, renderer }, selector) {
		this.items = items;
		this.renderer = renderer;
		this.selector = selector;
	}

	addСardToPage() {
		const elements = document.querySelector(".elements");
		const card = new Card();
		elements.prepend(card.getElement());
	}
}

export function renderLoading(isLoading, button, buttonText = "Сохранить") {
	let loadingText = "Сохранение...";
	if (isLoading) {
		button.textContent = loadingText;
	} else {
		button.textContent = buttonText;
	}
}
