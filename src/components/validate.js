//Валидация



// class FormValidator() {
// 	constructor({
// 			inputSelector,
// 			submitButtonSelector,
// 			inputErrorClass
// 		}, formSelector) {
// 		this.formSelector = formSelector;
// 		this.inputSelector = inputSelector;
// 		this.submitButtonSelector = submitButtonSelector;
// 		this.inputErrorClass = inputErrorClass;
// 	}
// }

class FormValidator {
	constructor({
		formSelector,
		inputSelector,
		submitButtonSelector,
		inputErrorClass
	}) {
		this.formSelector = formSelector;
		this.inputSelector = inputSelector;
		this.submitButtonSelector = submitButtonSelector;
		this.inputErrorClass = inputErrorClass;
	}

	// Отображение ошибки
	showInputError(input) {
		input.classList.add(inputErrorClass);
	}

	// Удаление ошибки
	hideInputError(input) {
		input.classList.remove(inputErrorClass);
	}

	// Проверка валидации всех ворм
	isValid(inputs) {
		return inputs.every(input => {
			return input.validity.valid;
		})
	}

	// Смена цвета кнопки
	changeSubmitStatus(inputs, submit) {
		if (isValid(inputs)) {
			submit.removeAttribute("disabled", "");
		} else {
			submit.setAttribute("disabled", "");
		}
	}

	showErrorText(input) {
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

	// Установка слушателей на inputs
	_setEventListener(form) {
		const inputs = [...form.querySelectorAll(this.inputSelector)];
		const submit = form.querySelector(this.submitButtonSelector);
		changeSubmitStatus(inputs, submit);
		form.addEventListener('reset', () => {
			submit.setAttribute("disabled", "");
		});
		inputs.forEach((input) => {
			input.addEventListener('input', (e) => {
				showErrorText(e.target);
				changeSubmitStatus(inputs, submit);
			});
		})
	}

	// Включение валидации и перебор форм
	enableValidation() {
		const forms = [...document.querySelectorAll(this.formSelector)];
		forms.forEach((form) => {
			this._setEventListener(form);
		});
	}
}





// function setEventListener(form, settings) {
// 	const inputs = [...form.querySelectorAll(settings.inputSelector)];
// 	const submit = form.querySelector(settings.submitButtonSelector);
// 	changeSubmitStatus(inputs, submit);
// 	form.addEventListener('reset', () => {
// 		submit.setAttribute("disabled", "");
// 	});
// 	inputs.forEach((input) => {
// 		input.addEventListener('input', (e) => {
// 			showErrorText(e.target, settings);
// 			changeSubmitStatus(inputs, submit);
// 		});
// 	})
// }

// // Включение валидации и перебор форм
// export function enableValidation(settings) {
// 	const forms = [...document.querySelectorAll(settings.formSelector)];
// 	forms.forEach((form) => {
// 		setEventListener(form, settings);
// 	});
// }