// Работа с api
import {
	request
} from "./utils.js";


class Api {
	constructor({
		baseUrl,
		headers
	}) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}

	// Получение карточек
	getInitialCards() {
		return request(`${this.baseUrl}/cards`, {
			headers: this.headers
		});
	}

	// Получение пользователя с сервера
	getUserProfile() {
		return request(`${this.baseUrl}/users/me`, {
			headers: this.headers
		});
	}



	// Сохранить данные профиля на сервере
	pushUserProfile(userName, userInformation) {
		return request(`${this.baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				name: userName,
				about: userInformation
			})
		});
	}

	// Сохранить карточку на сервере
	pushCard(cardName, cardLink) {
		return request(`${this.baseUrl}/cards`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify({
				name: cardName,
				link: cardLink
			})
		});
	}

	// Удаление карточки
	deleteCard(cardId) {
		return request(`${this.baseUrl}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this.headers
		});
	}

	// Поставить like
	setLikeApi(cardId) {
		return request(`${this.baseUrl}/cards/likes/${cardId}`, {
			method: 'PUT',
			headers: this.headers,
		});
	}

	// Удалить like
	delLikeApi(cardId) {
		return request(`${this.baseUrl}/cards/likes/${cardId}`, {
			method: 'DELETE',
			headers: this.headers,
		});
	}

	// Сохранить аватарку
	saveUserAvatar(url) {
		return request(`${this.baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				avatar: url
			})
		});
	}
}

export const api = new Api({
	baseUrl: 'https://nomoreparties.co/v1/plus-cohort-28',
	headers: {
		authorization: '0ad49ebc-d439-4122-a1bb-b1c1bfd063b4',
		'Content-Type': 'application/json'
	}
});



// const config = {
// 	baseUrl: 'https://nomoreparties.co/v1/plus-cohort-28',
// 	headers: {
// 		authorization: '0ad49ebc-d439-4122-a1bb-b1c1bfd063b4',
// 		'Content-Type': 'application/json'
// 	}
// }