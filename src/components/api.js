// Работа с api
export default class Api {
	constructor({ baseUrl, headers }) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}

	#checkResponse(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка ${res.status}`);
	}

	#request(url, options) {
		return fetch(url, options).then(this.#checkResponse);
	}

	// Получение карточек
	getInitialCards() {
		return this.#request(`${this.baseUrl}/cards`, {
			headers: this.headers
		});
	}

	// Получение пользователя с сервера
	getUserProfile() {
		return this.#request(`${this.baseUrl}/users/me`, {
			headers: this.headers
		});
	}

	// Сохранить данные профиля на сервере
	pushUserProfile(userName, userInformation) {
		return this.#request(`${this.baseUrl}/users/me`, {
			method: "PATCH",
			headers: this.headers,
			body: JSON.stringify({
				name: userName,
				about: userInformation
			})
		});
	}

	// Сохранить карточку на сервере
	pushCard(cardName, cardLink) {
		return this.#request(`${this.baseUrl}/cards`, {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify({
				name: cardName,
				link: cardLink
			})
		});
	}

	// Удаление карточки
	deleteCard(cardId) {
		return this.#request(`${this.baseUrl}/cards/${cardId}`, {
			method: "DELETE",
			headers: this.headers
		});
	}

	// Поставить like
	setLikeApi(cardId) {
		return this.#request(`${this.baseUrl}/cards/likes/${cardId}`, {
			method: "PUT",
			headers: this.headers
		});
	}

	// Удалить like
	delLikeApi(cardId) {
		return this.#request(`${this.baseUrl}/cards/likes/${cardId}`, {
			method: "DELETE",
			headers: this.headers
		});
	}

	// Сохранить аватарку
	saveUserAvatar(url) {
		return this.#request(`${this.baseUrl}/users/me/avatar`, {
			method: "PATCH",
			headers: this.headers,
			body: JSON.stringify({
				avatar: url
			})
		});
	}
}
