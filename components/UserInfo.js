// Редактирование профиля
export default class UserInfo {
	constructor(userName, userInformation) {
		this.userName = userName.textContent;
		this.userInformation = userInformation.textContent;
		this.userAvatar = document.querySelector(".profile__avatar-img").src;
		this.userId;
	}

	getUserInfo() {
		return {
			name: this.userName,
			about: this.userInformation,
			id: this.userId,
			avatar: this.userAvatar
		};
	}

	setUserInfo({ name, about, id }) {
		this.userName = name;
		this.userInformation = about;
		this.userId = id;
	}

	setUserAvatar(avatar) {
		this.userAvatar = avatar;
	}
}
