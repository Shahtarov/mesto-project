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

// popup редактирование профиля
const popupProfile = document.querySelector('.popup-profile-edit');
const buttonProfile = document.querySelector('.profile__button-edit');
const buttonClosePopupProfile = document.querySelector('button[name="popup__profile-close"]');

// Открытие и закрытие popup
function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

// Открытие и закрытие popup редактирование профиля
buttonProfile.addEventListener('click', () => {
	openPopup(popupProfile);
});

buttonClosePopupProfile.addEventListener('click', () => {
	closePopup(popupProfile)
});


// Редактирование профиля
const formProfile = document.querySelector('form[name="profile-edit"]');
const nameInput = formProfile.querySelector('input[name="popup__name"]');
const jobInput = formProfile.querySelector('input[name="popup__job"]');

function handleFormSubmit(evt) {
	evt.preventDefault();
	document.querySelector('.profile__name').textContent = nameInput.value;
	document.querySelector('.profile__information').textContent = jobInput.value;
	closePopup(popupProfile);
}
formProfile.addEventListener('submit', handleFormSubmit);



// Работа с карточками
const formGallery = document.querySelector('form[name="gallery-add"]');
const titleInput = formGallery.querySelector('input[name="popup__title"]');
const urlInput = formGallery.querySelector('input[name="popup__url"]');

const popupGallery = document.querySelector('.popup-gallery-add');
const buttonAddCard = document.querySelector('.profile__button');
const buttonClosePopupGallery = document.querySelector('button[name="popup__gallery-add-close"]');
const elements = document.querySelector('.elements');
const element = document.querySelector('.element');


// Открытие и закрытие popup добавления карточки
buttonAddCard.addEventListener('click', () => {
	openPopup(popupGallery);
});

buttonClosePopupGallery.addEventListener('click', () => {
	closePopup(popupGallery);
});


// Функция добавление лайка
function addLike(like) {
	like.addEventListener('click', (e) => {
		like.classList.toggle('element__like_active');
	});
}

// Функция удаление карочки
function delButton(button, element) {
	button.addEventListener('click', (e) => {
		element.remove();
	});
}


// Функция увеличения изображения
function increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName) {
	popupImage.classList.toggle('popup_opened');
	imageZoom.src = elementLink;
	imageTitle.textContent = elementName;
}

// Добавление карточек
function addElements(elementName, elementLink) {
	const elementTemplate = document.querySelector('#element').content;
	const element = elementTemplate.querySelector('.element').cloneNode(true);

	const element__image = element.querySelector('.element__image');
	element__image.src = elementLink;
	element__image.alt = elementName;
	const element__header = element.querySelector('.element__header');
	element__header.textContent = elementName;

	// Добавление лайка
	const like = element.querySelector('.element__like');
	addLike(like);

	// Удаление карочки
	const deleteButton = element.querySelector('.element__delete');
	delButton(deleteButton, element);

	// Увеличение изображения
	const popupImage = document.querySelector('.popup_type_image');
	const imageZoom = document.querySelector('.popup__image');
	const imageTitle = document.querySelector('.popup__image-title');

	element__image.addEventListener('click', (e) => {
		increaseImage(popupImage, imageZoom, imageTitle, elementLink, elementName);
	});

	//закрытие popup увеличения изображения
	const buttonClosePopupImage = document.querySelector('button[name="popup__image-close"]');
	buttonClosePopupImage.addEventListener('click', () => {
		closePopup(popupImage);
	});

	// Добавление карточек на страницу
	elements.prepend(element);
}



// Добавление карточек из массива
initialCards.forEach((e) => {
	addElements(e.name, e.link);
});


// Добавление карточки из формы
function addElementSubmit(evt) {
	evt.preventDefault();
	addElements(titleInput.value, urlInput.value)
	formGallery.reset();
	closePopup(popupGallery);
}
formGallery.addEventListener('submit', addElementSubmit);