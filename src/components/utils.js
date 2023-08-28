//Утилитарные функции, которые используются в работе сразу нескольких других функций
export function renderLoading(isLoading, button, buttonText = 'Сохранить') {
	let loadingText = 'Сохранение...';
	if (isLoading) {
		button.textContent = loadingText;
	} else {
		button.textContent = buttonText;
	}
}

function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка ${res.status}`);
}

export function request(url, options) {
	return fetch(url, options)
		.then(checkResponse)
}