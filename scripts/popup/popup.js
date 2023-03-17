const popup = document.querySelector('.popup');
const buttonProfile = document.querySelector('.profile-info__button-edit');
const buttonClosePopup = document.querySelector('.popup__close-icon');


buttonProfile.addEventListener('click', () => {
	popup.classList.add('popup_opened');
	console.log('2');
});

buttonClosePopup.addEventListener('click', () => {
	popup.classList.remove('popup_opened');
});