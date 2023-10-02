//Валидация форм
export default class FormValidator {
	constructor(
		{ inputSelector, submitButtonSelector, inputErrorClass },
		formSelector
	) {
		this.form = document.querySelector(formSelector);
		this.inputs = [...this.form.querySelectorAll(inputSelector)];
		this.submitButton = this.form.querySelector(submitButtonSelector);
		this.inputErrorClass = inputErrorClass;
	}

	// Отображение ошибки
	#showInputError(input) {
		input.classList.add(this.inputErrorClass);
	}

	// Удаление ошибки
	#hideInputError(input) {
		input.classList.remove(this.inputErrorClass);
	}

	// Проверка валидации всех ворм
	#isValid(inputs) {
		return inputs.every((input) => {
			return input.validity.valid;
		});
	}

	// Смена цвета кнопки
	#changeSubmitStatus(inputs, submit) {
		if (this.#isValid(inputs)) {
			submit.removeAttribute("disabled", "");
		} else {
			submit.setAttribute("disabled", "");
		}
	}

	#showErrorText(input) {
		if (input.validity.patternMismatch) {
			this.#showInputError(input);
			input.nextElementSibling.textContent = input.dataset.message;
		} else if (!input.validity.valid) {
			this.#showInputError(input);
			input.nextElementSibling.textContent = input.validationMessage;
		} else {
			this.#hideInputError(input);
			input.nextElementSibling.textContent = "";
		}
	}

	// Установка слушателей на inputs
	#setEventListener() {
		this.#changeSubmitStatus(inputs, submit);
		this.form.addEventListener("reset", () => {
			submit.setAttribute("disabled", "");
		});

		this.inputs.forEach((input) => {
			input.addEventListener("input", (e) => {
				this.#showErrorText(e.target);
				this.#changeSubmitStatus(inputs, submit);
			});
		});
	}

	// Включение валидации и перебор форм
	enableValidation() {
		this.form.addEventListener("submit", function (e) {
			e.preventDefault();
		});
		this.#setEventListener();
		// const forms = [...document.querySelectorAll(this.formSelector)];
		// forms.forEach((form) => {
		// 	this.#setEventListener(form);
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

