// Шаблон карточек
export const elementTemplate = document.querySelector("#element").content;

// Контейнер для карточек
export const cardContainer = document.querySelector(".elements");

// Создание popup-ов
export const popupProfileElement = document.querySelector(
	".popup-profile-edit"
);
export const popupAvatarElement = document.querySelector(".popup-avatar-add");
export const popupGalleryElement = document.querySelector(".popup-gallery-add");
export const popupImageElement = document.querySelector(".popup_type_image");
export const popupDelCard = document.querySelector(".popup-card-delete");

// Формы
export const formGallery = document.forms["gallery-add"];
export const formCardDelete = document.forms["card-delete"];
export const formAvatar = document.forms["avatar-add"];
export const formProfile = document.forms["profile-edit"];

// Редактирование профиля
export const buttonAddCard = document.querySelector(".profile__button");
export const buttonProfile = document.querySelector(".profile__button-edit");
export const nameInput = formProfile.querySelector('input[name="popup__name"]');
export const jobInput = formProfile.querySelector('input[name="popup__job"]');
export const avatarInput = formAvatar.querySelector(
	'input[name="popup__avatar"]'
);

// Добавление карточки
export const titleInput = formGallery.querySelector(
	'input[name="popup__title"]'
);
export const urlInput = formGallery.querySelector('input[name="popup__url"]');

// Данные профиля
export const profileName = document.querySelector(".profile__name");
export const profileInformation = document.querySelector(
	".profile__information"
);
export const profileAvatarEdit = document.querySelector(
	".profile__avatar-edit"
);

// Селекторы формы
export const formSelectors = {
	formSelector: ".popup__form",
	inputSelector: ".popup__information",
	submitButtonSelector: ".popup__submit",
	inputErrorClass: "popup__information_type_error"
};
