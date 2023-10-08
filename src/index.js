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
import PopupWithDel from "./components/PopupWithDel";

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
const popupDel = new PopupWithDel(popupDelCard, formSelectors, handleDelCard);
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
				popupDel.setItemForDelete(card);
				popupDel.open();
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
	return input
		.closest("form")
		.querySelector(formSelectors.submitButtonSelector);
}

// Отредактировать профиль
function handlerProfileFormSubmit({ popup__name, popup__job }) {
	const submitButton = findSubmit(nameInput);
	renderLoading(true, submitButton);
	api.pushUserProfile(popup__name, popup__job)
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
function handlerCardFormSubmit({ popup__title, popup__url }) {
	const submitButton = findSubmit(titleInput);
	renderLoading(true, submitButton);
	api.pushCard(popup__title, popup__url)
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
function handlerSetAvatar({ popup__avatar }) {
	const submitButton = findSubmit(avatarInput);
	renderLoading(true, submitButton);
	api.saveUserAvatar(popup__avatar)
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

function handleDelCard(card) {
	api.deleteCard(card.cardId)
		.then(() => {
			card.cardElement.remove();
			popupDel.close();
		})
		.catch((err) => {
			console.log(err);
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
