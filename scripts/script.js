let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let cross = popup.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
// Переменные второго проекта
let addButton = document.querySelector('.profile__add-button');
let popupImage = document.querySelector('.popup_type_image');
let popupPicture = popupImage.querySelector('.popup__image');
let secondContainer = document.querySelector('.popup__container_type-second');
let addPopup = document.querySelector('.popup_type_new-card');
let titleInput = addPopup.querySelector('#title');
let linkInput = addPopup.querySelector('#link');
let addCross = addPopup.querySelector('.popup__close_type-second');
let elements = document.querySelector('.elements');
let cardsTemplate = document.querySelector('#cards');
let picturePopup = document.querySelector('.popup_type_image');
let pictureCross = picturePopup.querySelector('.popup__close_type-third');


const initialCards = [
    {
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

function formSubmitHandler(evt) {
    evt.preventDefault();

    let job = jobInput.value;
    let name = nameInput.value;

    title.textContent = name;
    subtitle.textContent = job;
    formCloseHandler();
}

function formCloseHandler() {
    popup.classList.remove('popup_opened');
}

function formOpenHandler() {
    let name = title.textContent;
    let job = subtitle.textContent;
    nameInput.value = name;
    jobInput.value = job;
    popup.classList.add('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
cross.addEventListener('click', formCloseHandler);
editButton.addEventListener('click', formOpenHandler);

// let like = card.querySelector('.card__like');
// like.forEach(function (item) {
//     console.log(item);
//     item.addEventListener('click', evt => {
//         evt.target.classList.toggle('card__like_painted');
//     })
// });


initialCards.forEach(function (item) {
   let card = creatingCard(item.name, item.link);

    elements.append(card);
});

function creatingCard(text, src) {
    let card = cardsTemplate.content.querySelector('.card').cloneNode(true);
    let caption = card.querySelector('.card__caption');
    let picture = card.querySelector('.card__image');
    let image = document.querySelector('.popup__image');
    let basket = card.querySelector('.card__basket');
    let like = card.querySelector('.card__like');

    caption.textContent = text;
    picture.setAttribute('src', src);

    picture.addEventListener('click', popupImageHandler);
    basket.addEventListener('click', cardRemove);
    like.addEventListener('click', evt => {
        evt.target.classList.toggle('card__like_painted');
    });

    return card;
}

function cardRemove (evt) {
    let card = evt.target.closest('.card');
    card.remove();
}

//Мои попытки работать с формой

addButton.addEventListener('click', cardPopupOpen);
addCross.addEventListener('click', cardPopupClose);
pictureCross.addEventListener('click', pictureClose);

function pictureClose() {
    picturePopup.classList.remove('popup_opened');
}

function cardPopupOpen() {
    addPopup.classList.add('popup_opened');
}

function cardPopupClose() {
    addPopup.classList.remove('popup_opened');
}


// Добавление карточки

function formCardHandler(evt) {
    evt.preventDefault();
    let card = creatingCard(titleInput.value, linkInput.value);

    elements.prepend(card);
    cardPopupClose();

    secondContainer.reset();
}

secondContainer.addEventListener('submit', formCardHandler);


// Увеличение изображения

function popupImageHandler(evt) {
    popupImage.classList.add('popup_opened');
    popupPicture.setAttribute('src', evt.target.getAttribute('src'));
}


