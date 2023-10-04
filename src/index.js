import "./pages/index.css";

import Api from "./components/Api.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

// Шаблон карточек
const elementTemplate = document.querySelector("#element").content;

// Контейнер для карточек
const cardContainer = document.querySelector(".elements");

// Создание popup-ов
const popupProfileElement = document.querySelector(".popup-profile-edit");
const popupAvatarElement = document.querySelector(".popup-avatar-add");
const popupGalleryElement = document.querySelector(".popup-gallery-add");
const popupImageElement = document.querySelector(".popup_type_image");
const popupDelCard = document.querySelector(".popup-card-delete");

// Формы
const formGallery = document.forms["gallery-add"];
const formCardDelete = document.forms["card-delete"];
const formAvatar = document.forms["avatar-add"];
const formProfile = document.forms["profile-edit"];

// Редактирование профиля
const buttonAddCard = document.querySelector(".profile__button");
const buttonProfile = document.querySelector(".profile__button-edit");
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');
const avatarInput = formAvatar.querySelector('input[name="popup__avatar"]');

// Добавление карточки
const titleInput = formGallery.querySelector('input[name="popup__title"]');
const urlInput = formGallery.querySelector('input[name="popup__url"]');

// Данные профиля
const profileName = document.querySelector(".profile__name");
const profileInformation = document.querySelector(".profile__information");
const profileAvatarEdit = document.querySelector(".profile__avatar-edit");

const userInfo = new UserInfo(profileName, profileInformation);

// Селекторы формы
const formSelectors = {
	formSelector: ".popup__form",
	inputSelector: ".popup__information",
	submitButtonSelector: ".popup__submit",
	inputErrorClass: "popup__information_type_error",
};

const api = new Api({
	baseUrl: "https://nomoreparties.co/v1/plus-cohort-28",
	headers: {
		authorization: "0ad49ebc-d439-4122-a1bb-b1c1bfd063b4",
		"Content-Type": "application/json",
	},
});

const section = new Section(
	{
		renderer: (item) => {
			const card = createCard(item);
			section.addItemAppend(card.getElement());
		},
	},
	cardContainer
);

// Создание Popup-ов
const popupProfile = new PopupWithForm(
	popupProfileElement,
	handlerProfileFormSubmit
);
const popupAvatar = new PopupWithForm(popupAvatarElement, handlerSetAvatar);
const popupGallery = new PopupWithForm(
	popupGalleryElement,
	handlerCardFormSubmit
);
const popupImage = new PopupWithImage(popupImageElement);

// Включение валидации форм
const validationEditProfile = new FormValidator(formSelectors, formProfile);
const validationEditAvatar = new FormValidator(formSelectors, formAvatar);
const validationAddCard = new FormValidator(formSelectors, formGallery);

validationEditProfile.enableValidation();
validationEditAvatar.enableValidation();
validationAddCard.enableValidation();

function createCard(data) {
	const card = new Card(
		{
			elementName: data.name,
			elementLink: data.link,
			cardId: data._id,
			likes: data.likes,
			isCardOwner: data.owner._id === userInfo.userId,
			ownerId: data.owner._id,
		},
		elementTemplate,
		{
			addLike,
			delCard,
			addZoom,
		}
	);
	return card;
}

function addZoom(cardName, cardLink, elementImage) {
	elementImage.addEventListener("click", function () {
		popupImage.open(cardName, cardLink);
	});
}

// Кнопка Сохранение...
function renderLoading(isLoading, button, buttonText = "Сохранить") {
	let loadingText = "Сохранение...";
	if (isLoading) {
		button.textContent = loadingText;
	} else {
		button.textContent = buttonText;
	}
}

// Найти кнопку submit в форме
function findSubmit(input) {
	return input.closest("form").querySelector('button[type="submit"]');
}

// Отредактировать профиль
function handlerProfileFormSubmit() {
	const submitButton = findSubmit(nameInput);
	renderLoading(true, submitButton);
	api.pushUserProfile(nameInput.value, jobInput.value)
		.then(({ name, about, _id }) => {
			userInfo.setUserInfo(name, about, _id);
			popupProfile.close();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		});
}

// Добавление карточки из формы
function handlerCardFormSubmit() {
	const submitButton = findSubmit(titleInput);
	renderLoading(true, submitButton);
	api.pushCard(titleInput.value, urlInput.value)
		.then((card) => {
			section.addItemPrepend(createCard(card).getElement());
		})
		.then(() => {
			popupGallery.close();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		});
}

//Установка аватара
function handlerSetAvatar() {
	const submitButton = findSubmit(avatarInput);
	renderLoading(true, submitButton);
	api.saveUserAvatar(avatarInput.value)
		.then(({ avatar }) => {
			userInfo.setUserAvatar(avatar);
			popupAvatar.close();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		});
}

function addLike(likeElement, likes, cardId, likesCounter, ownerId) {
	if (likes.some((e) => e["_id"] === ownerId)) {
		likeElement.classList.add("element__like_active");
	}

	likeElement.addEventListener("click", function () {
		if (likeElement.classList.contains("element__like_active")) {
			api.delLikeApi(cardId)
				.then((data) => {
					likeElement.classList.remove("element__like_active");
					likesCounter.textContent = data.likes.length;
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			api.setLikeApi(cardId)
				.then((data) => {
					likeElement.classList.add("element__like_active");
					likesCounter.textContent = data.likes.length;
				})
				.catch((err) => {
					console.log(err);
				});
		}
	});
}

//Удаление карточки при подтверждении в popup
function handleDeleteCard(cardDelete, cardDeleteId, popupDel) {
	api.deleteCard(cardDeleteId)
		.then(() => {
			cardDelete.remove();
			popupDel.close();
		})
		.catch((err) => {
			console.log(err);
		});
}

// Удаление карточки
function delCard(card, cardId, isCardOwner) {
	const deleteButton = card.querySelector(".element__delete");
	if (isCardOwner) {
		deleteButton.addEventListener("click", () => {
			const popupDel = new Popup(popupDelCard);
			popupDel.open();

			formCardDelete.addEventListener("submit", function (e) {
				e.preventDefault();
				handleDeleteCard(card, cardId, popupDel);
			});
		});
	} else {
		deleteButton.remove();
	}
}

buttonProfile.addEventListener("click", () => {
	popupProfile.open();

	const getUserInfo = userInfo.getUserInfo();

	nameInput.value = getUserInfo.name;
	jobInput.value = getUserInfo.about;
});

buttonAddCard.addEventListener("click", () => {
	popupGallery.open();
});

profileAvatarEdit.addEventListener("click", () => {
	popupAvatar.open();
});

// Получение карточек и профиля
Promise.all([api.getUserProfile(), api.getInitialCards()])
	.then(([user, cards]) => {
		userInfo.setUserInfo(user.name, user.about, user._id);
		userInfo.setUserAvatar(user.avatar);
		section.render(cards);
	})
	.catch((err) => {
		console.log(err);
	});

