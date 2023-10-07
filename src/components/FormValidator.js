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
	#showInputError(input) {
		input.classList.add(this.inputErrorClass);
	}

	// Удаление ошибки
	#hideInputError(input) {
		input.classList.remove(this.inputErrorClass);
	}

	// Проверка валидации всех форм
	#isValid() {
		return this.inputs.every((input) => {
			return input.validity.valid;
		});
	}

	// Смена цвета кнопки
	#changeSubmitStatus() {
		if (this.#isValid()) {
			this.submitButton.removeAttribute("disabled", "");
		} else {
			this.submitButton.setAttribute("disabled", "");
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
		this.#changeSubmitStatus(this.inputs, this.submitButton);
		this.form.addEventListener("reset", () => {
			this.submitButton.setAttribute("disabled", "");
		});

		this.inputs.forEach((input) => {
			input.addEventListener("input", (e) => {
				this.#showErrorText(e.target);
				this.#changeSubmitStatus();
			});
		});
	}

	// Включение валидации и перебор форм
	enableValidation() {
		this.form.addEventListener("submit", (e) => e.preventDefault());
		this.#setEventListener();
	}
}
