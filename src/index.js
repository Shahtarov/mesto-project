import "./pages/index.css";

import Api from "./components/Api.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

import {
	elementTemplate,
	cardContainer,
	popupProfileElement,
	popupAvatarElement,
	popupGalleryElement,
	popupImageElement,
	popupDelCard,
	formGallery,
	formCardDelete,
	formAvatar,
	formProfile,
	buttonAddCard,
	buttonProfile,
	nameInput,
	jobInput,
	avatarInput,
	titleInput,
	urlInput,
	profileName,
	profileInformation,
	profileAvatarEdit,
	formSelectors
} from "./utils/constants.js";

const api = new Api({
	baseUrl: "https://nomoreparties.co/v1/plus-cohort-28",
	headers: {
		authorization: "0ad49ebc-d439-4122-a1bb-b1c1bfd063b4",
		"Content-Type": "application/json"
	}
});

const userInfo = new UserInfo(profileName, profileInformation);

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
			userId: userInfo.getUserInfo().id
		},
		elementTemplate,
		{
			handleDeleteLike: () => {
				api.delLikeApi(card.cardId)
					.then((data) => {
						card.switchLikes(data.likes);
					})
					.catch((err) => {
						console.log(err);
					});
			},
			handleAddLike: () => {
				api.setLikeApi(card.cardId)
					.then((data) => {
						card.switchLikes(data.likes);
					})
					.catch((err) => {
						console.log(err);
					});
			},
			addZoom,
			handleDeleteCard: () => {
				const popupDel = new Popup(popupDelCard);
				popupDel.open();

				formCardDelete.addEventListener("submit", (e) => {
					e.preventDefault();
					api.deleteCard(card.cardId)
						.then(() => {
							card.cardElement.remove();
							popupDel.close();
						})
						.catch((err) => {
							console.log(err);
						});
				});
			}
		}
	);
	return card;
}

const section = new Section(
	{
		renderer: (item) => {
			const card = createCard(item);
			section.addItemAppend(card.getElement());
		}
	},
	cardContainer
);

function addZoom(cardName, cardLink) {
	popupImage.open(cardName, cardLink);
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

// Слушатели открытия popup-ов
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
