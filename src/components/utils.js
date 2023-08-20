//Утилитарные функции, которые используются в работе сразу нескольких других функций

import {
	initialCards
} from "./initialData.js";

import {
	addСardToPage
} from "./card.js";

// Добавление карточек из массива на страницу
export function addinitialCards() {
	initialCards.forEach((e) => {
		addСardToPage(e.name, e.link);
	});
}