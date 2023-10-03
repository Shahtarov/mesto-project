//Валидация форм
export default class FormValidator {
	constructor(
		{ inputSelector, submitButtonSelector, inputErrorClass },
		formSelector
	) {
		this.form = formSelector;
		this.inputs = [...this.form.querySelectorAll(inputSelector)];

		this.submitButton = this.form.querySelector(submitButtonSelector);
		this.inputErrorClass = inputErrorClass;
	}

	// Отображение ошибки
	_showInputError(input) {
		input.classList.add(this.inputErrorClass);
	}

	// Удаление ошибки
	_hideInputError(input) {
		input.classList.remove(this.inputErrorClass);
	}

	// Проверка валидации всех ворм
	_isValid() {
		return this.inputs.every((input) => {
			return input.validity.valid;
		});
	}

	// Смена цвета кнопки
	_changeSubmitStatus() {
		if (this._isValid()) {
			this.submitButton.removeAttribute("disabled", "");
		} else {
			this.submitButton.setAttribute("disabled", "");
		}
	}

	_showErrorText(input) {
		if (input.validity.patternMismatch) {
			this._showInputError(input);
			input.nextElementSibling.textContent = input.dataset.message;
		} else if (!input.validity.valid) {
			this._showInputError(input);
			input.nextElementSibling.textContent = input.validationMessage;
		} else {
			this._hideInputError(input);
			input.nextElementSibling.textContent = "";
		}
	}

	// Установка слушателей на inputs
	_setEventListener() {
		this._changeSubmitStatus(this.inputs, this.submitButton);
		this.form.addEventListener("reset", () => {
			this.submitButton.setAttribute("disabled", "");
		});

		this.inputs.forEach((input) => {
			input.addEventListener("input", (e) => {
				this._showErrorText(e.target);
				this._changeSubmitStatus();
			});
		});
	}

	// Включение валидации и перебор форм
	enableValidation() {
		this.form.addEventListener("submit", function (e) {
			e.preventDefault();
		});
		this._setEventListener();
		// const forms = [...document.querySelectorAll(this.formSelector)];
		// forms.forEach((form) => {
		// 	this._setEventListener(form);
		// });
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
