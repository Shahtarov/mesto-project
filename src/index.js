import "./pages/index.css";

import Api from "./components/Api.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

const api = new Api({
	baseUrl: "https://nomoreparties.co/v1/plus-cohort-28",
	headers: {
		authorization: "0ad49ebc-d439-4122-a1bb-b1c1bfd063b4",
		"Content-Type": "application/json"
	}
});

// Шаблон карточек
const elementTemplate = document.querySelector("#element").content;

// Контейнер для карточек
const cardContainer = document.querySelector(".elements");

const section = new Section(
	{
		renderer: (item) => {
			const card = createCard(item);
			section.addItem(card);
		}
	},
	cardContainer
);

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

// Данные профиля
const profileName = document.querySelector(".profile__name");
const profileInformation = document.querySelector(".profile__information");
const profileAvatarEdit = document.querySelector(".profile__avatar-edit");
// const profileAvatarImg = document.querySelector(".profile__avatar-img");

const userInfo = new UserInfo(profileName, profileInformation);
// Аватар

// const avatarInput = formAvatar.querySelector('input[name="popup__avatar"]');
// const profileAvatarImg = document.querySelector(".profile__avatar-img");

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
	popupProfileElement,
	formSelectors,
	handlerProfileFormSubmit
);
const popupAvatar = new PopupWithForm(
	popupAvatarElement,
	formSelectors,
	handlerSetAvatar
);
const popupGallery = new PopupWithForm(
	popupGalleryElement,
	formSelectors,
	handlerCardFormSubmit
);
const popupImage = new PopupWithImage(popupImageElement);
// В handleDeleteCard нужно как то передавать card id
// const popupDel = new Popup(formSelectors, popupDelCard, handleDeleteCard);

// Включение валидации форм
const validationEditProfile = new FormValidator(formSelectors, formProfile);
const validationEditAvatar = new FormValidator(formSelectors, formAvatar);
const validationAddCard = new FormValidator(formSelectors, formGallery);
// const validationDelCard = new FormValidator(formSelectors, formCardDelete);

validationEditProfile.enableValidation();
validationEditAvatar.enableValidation();
validationAddCard.enableValidation();

// // Включение редактированиий
// formAvatar.addEventListener("submit", validationEditAvatar);
// formProfile.addEventListener("submit", validationEditProfile);

// // Добавление карточки из формы
// formGallery.addEventListener("submit", validationAddCard);

function createCard(data) {
	const card = new Card(
		{
			elementName: data.name,
			elementLink: data.link,
			cardId: data._id,
			likes: data.likes,
			isCardOwner: data.owner._id === userInfo.userId,
			ownerId: data.owner._id
		},
		elementTemplate,
		{
			addLike,
			delCard,
			addZoom
		}
	);
	return card;
}

function addZoom(cardElement, cardName, cardLink) {
	cardElement.addEventListener("click", function () {
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
			console.log(card);
			section.render(card);
		})
		// 	const cardElement = new Card(
		// 		{
		// 			elementName: card.name,
		// 			elementLink: card.link,
		// 			cardId: card._id,
		// 			likes: card.likes,
		// 			isCardOwner: card.owner._id === userInfo.userId,
		// 			ownerId: card.owner._id,
		// 		},
		// 		elementTemplate,
		// 		popupDelCard
		// 	);
		// 	section.addItem(cardElement);
		// })
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

// elementName: data.name,
// 			elementLink: data.link,
// 			cardId: data._id,
// 			likes: data.likes,
// 			isCardOwner: data.owner._id === userInfo.userId,
// 			ownerId: data.owner._id

// Добавление лайка
function addLike(card) {
	const likeElement = card.querySelector(".element__like");
	// const likesCounter = card.querySelector(".element__likes-counter");
	// console.log(card.likes.length);
	// likesCounter.textContent = card.likes.length;

	if (card.likes.some((like) => like._id === card.ownerId)) {
		likeElement.classList.add("element__like_active");
	}

	likeElement.addEventListener("click", () => {
		if (likeElement.classList.contains("element__like_active")) {
			api.delLikeApi(card.cardId)
				.then((data) => {
					likeElement.classList.remove("element__like_active");
					likesCounter.textContent = data.likes.length;
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			api.setLikeApi(card.cardId)
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

// Удаление карточки при подтверждении в popup
function handleDeleteCard(card, cardId) {
	const submitButton = findSubmit(popupDelCard);
	renderLoading(true, submitButton);
	api.deleteCard(cardId) //
		.then(() => {
			card.remove();
			popupDelCard.close();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			renderLoading(false, submitButton, "Да");
		});
}

// #delCardFormSubmit(cardElement) {
// 	// Принимаем cardElement в качестве аргумента
// 	const formCardDelete = cardElement.querySelector(".card-delete"); // Находим форму внутри cardElement
// 	formCardDelete.addEventListener("submit", (e) =>
// 		this.#handleDeleteCard(e)
// 	); // Привязываем обработчик к formCardDelete
// }

// Удаление карточки
function delCard(card) {
	const deleteButton = card.querySelector(".element__delete");
	if (card.isCardOwner) {
		deleteButton.addEventListener("click", () => {
			// В handleDeleteCard нужно как то передавать card id
			const popupDel = new Popup(
				formSelectors,
				popupDelCard,
				handleDeleteCard(card, card.cardId)
			);
			popupDel.open();
		});
	} else {
		deleteButton.remove();
	}
}

buttonProfile.addEventListener("click", () => {
	popupProfile.open();

	const getUserInfo = userInfo.getUserInfo();
	console.log(getUserInfo);
	nameInput.value = getUserInfo.name;
	jobInput.value = getUserInfo.about;
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
		userInfo.setUserInfo({
			name: user.name,
			about: user.about,
			id: user._id
		});
		userInfo.setUserAvatar(user.avatar);
		section.render(cards);
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
