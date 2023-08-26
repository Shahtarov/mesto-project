// Работа с api
// import {
// 	user
// } from "./editProfile";

const config = {
	baseUrl: 'https://nomoreparties.co/v1/plus-cohort-28',
	headers: {
		authorization: '0ad49ebc-d439-4122-a1bb-b1c1bfd063b4',
		'Content-Type': 'application/json'
	}
}


// Получение пользователя с сервера
export const getUserProfile = () => {
	return fetch(`${config.baseUrl}/users/me`, {
		headers: config.headers
	})
}

// Получение карточек
export const getInitialCards = () => {
	return fetch(`${config.baseUrl}/cards`, {
		headers: config.headers
	})
}

// Сохранить данные профиля на сервере
export const pushUserProfile = (userName, userInformation) => {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: userName,
			about: userInformation
		})
	})
}

// Сохранить карточку на сервере
export const pushCard = (cardName, cardLink) => {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: cardName,
			link: cardLink
		})
	})
}

// Удаление карточки
export const deleteCard = (cardId) => {
	return fetch(`${config.baseUrl}/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers
	})
}

// Поставить like
export const setLikeApi = (cardId) => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers,
	})
}

// Удалить like
export const delLikeApi = (cardId) => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	})
}

// Сохранить аватарку
export const saveUserAvatar = (url) => {
	return fetch(`${config.baseUrl}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: url
		})
	})
}