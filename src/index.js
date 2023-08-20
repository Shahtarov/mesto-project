import './pages/index.css';

// popup редактирование профиля
const popupProfile = document.querySelector('.popup-profile-edit');
const buttonProfile = document.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');

// Увеличение изображения
const popupImage = document.querySelector('.popup_type_image');
const imageZoom = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');

// Редактирование профиля
const formProfile = document.querySelector('form[name="profile-edit"]');
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');

// Работа с карточками
const formGallery = document.querySelector('form[name="gallery-add"]');
const titleInput = formGallery.querySelector('input[name="popup__title"]');
const urlInput = formGallery.querySelector('input[name="popup__url"]');
const popupGallery = document.querySelector('.popup-gallery-add');
const buttonAddCard = document.querySelector('.profile__button');
const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const element = document.querySelector('.element');
const closeButtons = document.querySelectorAll('.popup__close-icon');

// Все popup окна
const popups = Array.from(document.querySelectorAll(".popup"));

// Массив карточек
const initialCards = [{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];


// Функции открытия и закрытия popup
function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

// Открытие popup редактирование профиля
buttonProfile.addEventListener('click', () => {
	openPopup(popupProfile);
});

// Открытие popup добавления карточки
buttonAddCard.addEventListener('click', () => {
	openPopup(popupGallery);
});

// Закрытие popup-ов нажатием крестика
closeButtons.forEach((button) => {
	const popup = button.closest('.popup');
	button.addEventListener('click', () => closePopup(popup));
});

// Закрытие popup-ов кликом на оверлей и нажатием Esc
popups.forEach((popup) => {
	closePopupOverlay(popup);
	closePopupEsc(popup);
});

function closePopupOverlay(popup) {
	popup.addEventListener("click", ((e) => {
		e.stopImmediatePropagation();
		if (e.target.classList[0] === "popup") {
			closePopup(popup);
		}
	}));
}

function closePopupEsc(popup) {
	document.addEventListener('keyup', (e) => {
		if (e.key === "Escape") {
			closePopup(popup);
		}
	});
}


// Отредактировать профиль
function handleProfileFormSubmit(e) {
	e.preventDefault();
	profileName.textContent = nameInput.value;
	profileInformation.textContent = jobInput.value;
	closePopup(popupProfile);
}
formProfile.addEventListener('submit', handleProfileFormSubmit);


// Функция добавление лайка
function addLike(like) {
	like.addEventListener('click', (e) => {
		like.classList.toggle('element__like_active');
	});
}


// Функция удаление карочки
function handleDelButton(button, element) {
	button.addEventListener('click', (e) => {
		element.remove();
	});
}


// Функция увеличения изображения
function increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName) {
	openPopup(popupImage);
	imageZoom.src = elementLink;
	imageZoom.alt = elementName;
	imageTitle.textContent = elementName;
}


// Создание карточки
function createCard(elementName, elementLink) {
	const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
	const elementImage = cardElement.querySelector('.element__image');
	elementImage.src = elementLink;
	elementImage.alt = elementName;

	const elementHeader = cardElement.querySelector('.element__header');
	elementHeader.textContent = elementName;

	// Добавление лайка
	const like = cardElement.querySelector('.element__like');
	addLike(like);

	// Удаление карочки
	const deleteButton = cardElement.querySelector('.element__delete');
	handleDelButton(deleteButton, cardElement);

	// Увеличение изображения
	elementImage.addEventListener('click', (e) => {
		increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName);
	});

	return cardElement;
}

// Добавление карточки на страницу
function addСardToPage(elementName, elementLink) {
	const card = createCard(elementName, elementLink);
	elements.prepend(card);
}


// Добавление карточек из массива
initialCards.forEach((e) => {
	addСardToPage(e.name, e.link);
});


// Добавление карточки из формы
function handleCardFormSubmit(e) {
	e.preventDefault();
	initialCards.unshift({
		name: titleInput.value,
		link: urlInput.value
	});
	addСardToPage(initialCards[0].name, initialCards[0].link);
	formGallery.reset();
	closePopup(popupGallery);
}
formGallery.addEventListener('submit', handleCardFormSubmit);


//Валидация

// Валидация input
function validationInputs(input) {
	if (input.validity.patternMismatch) {
		showInputError(input);
		input.nextElementSibling.textContent = input.dataset.message;
	} else if (!input.validity.valid) {
		showInputError(input);
		input.nextElementSibling.textContent = input.validationMessage;
	} else {
		hideInputError(input);
		input.nextElementSibling.textContent = "";
	}
}


// Установка слушателей на формы
function searchInputs(form) {
	const elements = Array.from(form.elements).filter((e) => {
		return e.className === "popup__information";
	});
	elements.forEach((input) => {
		setEventListener(input, elements);
	});
}


// Установка слушателей на поля
function setEventListener(input, elements) {
	input.addEventListener('input', (e) => {
		validationInputs(e.target);
		changeSubmit(elements[0].validity.valid && elements[1].validity.valid, elements[0].form.lastElementChild);
	})
}

// Отображение ошибки
function showInputError(input) {
	input.classList.add('popup__information_type_error');
}

// Удаление ошибки
function hideInputError(input) {
	input.classList.remove('popup__information_type_error');
}

// Смена цвета кнопки
function changeSubmit(valid, buttonSubmit) {
	valid ? buttonSubmit.removeAttribute("disabled", "disabled") : buttonSubmit.setAttribute("disabled", "disabled");
}

// Включение валидации и перебор форм
function enableValidation() {
	const forms = Array.from(document.forms);
	forms.forEach((form) => {
		searchInputs(form);
	});
}
enableValidation();