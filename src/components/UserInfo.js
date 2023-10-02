// Редактирование профиля
export default class UserInfo {
	constructor({ userName, userInformation }) {
		this.userName = document.querySelector(userName);
		this.userInformation = document.querySelector(userInformation);
		this.userAvatar = document.querySelector(".profile__avatar-img");
		this.userId;
	}

	getUserInfo() {
		return {
			name: this.userName.textContent,
			about: this.userInformation.textContent,
			id: this.userId,
			avatar: this.userAvatar.src,
		};
	}

	setUserInfo({ name, about, id }) {
		this.userName.textContent = name;
		this.userInformation.textContent = about;
		this.userId = id;
	}

	setUserAvatar(avatar) {
		this.userAvatar.src = avatar;
	}
}

