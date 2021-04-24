let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let cross = popup.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
    function formSubmitHandler (evt) {
        evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
        // Получите значение полей jobInput и nameInput из свойства value
        let job = jobInput.value;
        let name = nameInput.value;
        // Выберите элементы, куда должны быть вставлены значения полей
        // Вставьте новые значения с помощью textContent
        title.textContent = name;
        subtitle.textContent = job;
        popup.classList.remove('popup_opened');
    }
    function formCloseHandler () {
        popup.classList.remove('popup_opened');
    }
    function formOpenHandler () {
        let name = title.textContent;
        let job = subtitle.textContent;
        nameInput.value = name;
        jobInput.value = job;
        popup.classList.add('popup_opened');
    }
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
cross.addEventListener('click', formCloseHandler);
editButton.addEventListener ('click', formOpenHandler);
