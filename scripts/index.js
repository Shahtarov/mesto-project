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

// Закрытие popup-ов
closeButtons.forEach((button) => {
	const popup = button.closest('.popup');
	button.addEventListener('click', () => closePopup(popup));
});



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
	const card = createCard(elementName, elementLink)
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