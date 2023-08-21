//Валидация

// Отображение ошибки
function showInputError(input, settings) {
	input.classList.add(settings.inputErrorClass);
}

// Удаление ошибки
function hideInputError(input, settings) {
	input.classList.remove(settings.inputErrorClass);
}

// Проверка валидации всех ворм
const isValid = (inputs) => {
	return inputs.every(input => {
		return input.validity.valid;
	})
}

// Смена цвета кнопки
function changeSubmitStatus(inputs, submit) {
	if (isValid(inputs)) {
		submit.removeAttribute("disabled", "");
	} else {
		submit.setAttribute("disabled", "");
	}
}


function showErrorText(input, settings) {
	if (input.validity.patternMismatch) {
		showInputError(input, settings);
		input.nextElementSibling.textContent = input.dataset.message;
	} else if (!input.validity.valid) {
		showInputError(input, settings);
		input.nextElementSibling.textContent = input.validationMessage;
	} else {
		hideInputError(input, settings);
		input.nextElementSibling.textContent = "";
	}
}


function setEventListener(form, settings) {
	const inputs = [...form.querySelectorAll(settings.inputSelector)];
	const submit = form.querySelector(settings.submitButtonSelector);
	changeSubmitStatus(inputs, submit);
	inputs.forEach((input) => {
		input.addEventListener('input', (e) => {
			showErrorText(e.target, settings);
			changeSubmitStatus(inputs, submit);
		});
	})
}

// Включение валидации и перебор форм
export function enableValidation(settings) {
	const forms = [...document.querySelectorAll(settings.formSelector)];
	forms.forEach((form) => {
		setEventListener(form, settings);
	});
}