import "./pages/index.css";

import Api from "./components/Api.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInf.js";

const api = new Api({
	baseUrl: "https://nomoreparties.co/v1/plus-cohort-28",
	headers: {
		authorization: "0ad49ebc-d439-4122-a1bb-b1c1bfd063b4",
		"Content-Type": "application/json"
	}
});

// editProfile();
// editAvatar();

// openPopupProfile(popupProfile);
// openPopupAddCard(popupGallery);
// openPopupAddAvatar(popupAvatar);

// enableValidation({
// 	inputSelector: ".popup__information",
// 	submitButtonSelector: ".popup__submit",
// 	inputErrorClass: "popup__information_type_error"
// }, ".popup__form",);

// Шаблон карточек
const elementTemplate = document.querySelector("#element").content;

// Контейнер для карточек
const cardContainer = document.querySelector(".elements");

// Данные профиля
const profileName = document.querySelector(".profile__name");
const profileInformation = document.querySelector(".profile__information");
const profileAvatarImg = document.querySelector(".profile__avatar-img");
const userInfo = new UserInfo(
	profileName,
	profileInformation,
	profileAvatarImg,
	api
);
// let userId;
const section = new Section({ renderer: render }, cardContainer);

// Создание popup-ов
const popupProfileElement = document.querySelector(".popup-profile-edit");
const popupAvatarElement = document.querySelector(".popup-avatar-add");
const popupGalleryElement = document.querySelector(".popup-gallery-add");
const popupImageElement = document.querySelector(".popup_type_image");
const popupDelCard = document.querySelector(".popup-card-delete");

// Работа с карточками
const formGallery = document.forms["gallery-add"];
const titleInput = formGallery.querySelector('input[name="popup__title"]');
const urlInput = formGallery.querySelector('input[name="popup__url"]');

// Редактирование профиля
const buttonAddCard = document.querySelector(".profile__button");
const buttonProfile = document.querySelector(".profile__button-edit");
const formProfile = document.forms["profile-edit"];
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');

// Аватар
const formAvatar = document.forms["avatar-add"];
const avatarInput = formAvatar.querySelector('input[name="popup__avatar"]');
// const profileAvatarImg = document.querySelector(".profile__avatar-img");
const profileAvatarEdit = document.querySelector(".profile__avatar-edit");
// const popupAvatar = document.querySelector(".popup-avatar-add");

// Увеличение изображения
// const popupImage = document.querySelector(".popup_type_image");
// const imageZoom = document.querySelector(".popup__image");
// const imageTitle = document.querySelector(".popup__image-title");

// Селекторы формы
const formSelectors = {
	formSelector: ".popup__form",
	inputSelector: ".popup__information",
	submitButtonSelector: ".popup__submit",
	inputErrorClass: "popup__information_type_error"
};

// Создание Popup-ов
const popupProfile = new PopupWithForm(
	formSelectors,
	popupProfileElement,
	handlerProfileFormSubmit
);
const popupAvatar = new PopupWithForm(
	formSelectors,
	popupAvatarElement,
	handlerSetAvatar
);
const popupGallery = new PopupWithForm(
	formSelectors,
	popupGalleryElement,
	handlerCardFormSubmit
);
const popupImage = new PopupWithImage(popupImageElement);

const popupDel = new Popup(formSelectors, popupDelCard, handlerDeleteCard);

// Включение валидации форм
const validationEditProfile = new FormValidator(
	formSelectors,
	popupProfileElement
);
const validationEditAvatar = new FormValidator(
	formSelectors,
	popupAvatarElement
);
const validationAddCard = new FormValidator(formSelectors, popupGalleryElement);

validationEditProfile.enableValidation();
validationEditAvatar.enableValidation();
validationAddCard.enableValidation();

// // Включение редактированиий
// formAvatar.addEventListener("submit", validationEditAvatar);
// formProfile.addEventListener("submit", validationEditProfile);

// // Добавление карточки из формы
// formGallery.addEventListener("submit", validationAddCard);

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
function handlerProfileFormSubmit(nameInput, jobInput) {
	const submitButton = findSubmit(nameInput);
	renderLoading(true, submitButton);
	userInfo
		.setUserInfo(nameInput, jobInput)
		.then(() => {
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
function handlerCardFormSubmit(titleInput, urlInput) {
	const submitButton = findSubmit(titleInput);
	renderLoading(true, submitButton);
	api.pushCard(titleInput, urlInput)
		.then((card) => {
			const cardElement = new Card(
				card.name,
				card.link,
				card._id,
				card.likes,
				card.owner._id === userInfo.userId,
				card.owner._id
			);
			section.addItem(cardElement);
		})
		.then(() => {
			popupGallery.close();
			e.target.reset();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		});
}

// Удаление карточки при подтверждении в popup
// function handlerDeleteCard(cardDeleteId) {
// 	const submitButton = findSubmit(popupDelCard);
// 	renderLoading(true, submitButton);
// 	api.deleteCard(cardDeleteId)
// 		.then(() => {
// 			cardDelete.remove();
// 			popupDelCard.close();
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		})
// 		.finally(() => {
// 			renderLoading(false, submitButton, "Да");
// 		});
// }

//Установка аватара
function handlerSetAvatar(avatarInput) {
	const submitButton = findSubmit(avatarInput);
	// const submitButton = e.submitter;
	renderLoading(true, submitButton);
	userInfo
		.setUserAvatar(avatarInput)
		.then(() => {
			popupAvatar.close();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton);
		});
}

buttonProfile.addEventListener("click", () => {
	popupProfile.open();
});

buttonAddCard.addEventListener("click", () => {
	popupGallery.open();
});

profileAvatarEdit.addEventListener("click", () => {
	popupAvatar.open();
});

// popupDelCard.addEventListener("click", () => {
// 	popupDel.open();
// });

// addCardFormSubmit();
// delCardFormSubmit();

// Получение карточек и профиля
Promise.all([userInfo.getUserInfo(), api.getInitialCards()])
	.then(([user, cards]) => {
		userInfo.fillProfileInputs(nameInput, jobInput, user.name, user.about);
		userInfo.userId(user._id);
		userInfo.setUserAvatar(user.avatar);
		cards.forEach((card) => {
			const cardElement = new Card(
				card.name,
				card.link,
				card._id,
				card.likes,
				card.owner._id === userInfo.userId,
				card.owner._id
			);
			// if (card.owner._id === userInfo.userId) {
			// 	handlerDeleteCard(card._id);
			// }
			section.addItem(cardElement);
		});
	})
	.catch((err) => {
		console.log(err);
	});

// Добавление карточки из формы
// function addCardFormSubmit() {
// 	formGallery.addEventListener("submit", handlerCardFormSubmit);
// }

// function delCardFormSubmit() {
// 	formCardDelete.addEventListener("submit", handlerDeleteCard);
// }

// function editProfile() {
// 	formProfile.addEventListener("submit", handlerProfileFormSubmit);
// }
