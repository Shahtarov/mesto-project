// Редактирование профиля
export default class UserInfo {
	constructor(userName, userInformation, userAvatar, api) {
		this.userName = userName;
		this.userInformation = userInformation;
		this.userAvatar = userAvatar;
		this.api = api;
		this.userId;
	}

	// Сохранить данные пользователя в inputs
	fillProfileInputs(nameInput, jobInput, name, job) {
		nameInput.value = name;
		jobInput.value = job;
	}

	set userId(id) {
		this.userId = id;
	}

	get userId() {
		return this.userId;
	}

	// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
	getUserInfo() {
		return this.api.getUserProfile().then((userData) => {
			const { name, about, avatar } = userData;
			this.userName.textContent = name;
			this.userInformation.textContent = about;
			this.userAvatar.alt = `Фото профиля ${name}`;
			this.userAvatar.src = avatar;
		});
	}

	// Содержит публичный метод setUserInfo, который принимает новые данные пользователя, отправляет их на сервер и добавляет их на страницу.
	setUserInfo(name, job) {
		return this.api.pushUserProfile(name, job).then(() => {
			this.userName.textContent = name;
			this.userInformation.textContent = job;
			this.userAvatar.alt = `Фото профиля ${name}`;
		});
	}

	// Содержит публичный метод setUserAvatar, который отправляет новую аватарку пользователя на сервер и обновляет её на странице.
	setUserAvatar(avatar) {
		return this.api.saveUserAvatar(avatar).then(() => {
			this.userAvatar.src = avatar;
		});
	}
}
