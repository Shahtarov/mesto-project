//Валидация

// Валидация input
function validationInputs(input) {
	if (input.validity.patternMismatch) {
		showInputError(input);
		input.nextElementSibling.textContent = input.dataset.message;
	} else if (!input.validity.valid) {
		showInputError(input);
		input.nextElementSibling.textContent = input.validationMessage;
	} else {
		hideInputError(input);
		input.nextElementSibling.textContent = "";
	}
}


// Установка слушателей на формы
function searchInputs(form) {
	const elements = Array.from(form.elements).filter((e) => {
		return e.className === "popup__information";
	});
	elements.forEach((input) => {
		setEventListener(input, elements);
	});
}


// Установка слушателей на поля
function setEventListener(input, elements) {
	input.addEventListener('input', (e) => {
		validationInputs(e.target);
		changeSubmit(elements[0].validity.valid && elements[1].validity.valid, elements[0].form.lastElementChild);
	})
}

// Отображение ошибки
function showInputError(input) {
	input.classList.add('popup__information_type_error');
}

// Удаление ошибки
function hideInputError(input) {
	input.classList.remove('popup__information_type_error');
}

// Смена цвета кнопки
function changeSubmit(valid, buttonSubmit) {
	valid ? buttonSubmit.removeAttribute("disabled", "disabled") : buttonSubmit.setAttribute("disabled", "disabled");
}

// Включение валидации и перебор форм
export function enableValidation() {
	const forms = Array.from(document.forms);
	forms.forEach((form) => {
		searchInputs(form);
	});
}