'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    //Алгоритм
    //1.Начало
    //2. Находим кнопку
    //3. Проверяем есть ли она.
    //   3.1. Добавляем обработчик наведения курсора на кнопку:
    //   3.1.1. Да:
    //   3.1.1.1 Появляется форма входа
    //   3.1.2. Нет: продолжаем.
    // 4. Конец
    const headerButton = document.querySelector(".header__button");
    headerButton.addEventListener('click', () => {
        console.log('Нажали кнопку');
    });


const trainersImg = document.querySelectorAll('.trainers__image');
trainersImg.forEach((item, index) => {
    const trainersText = document.querySelectorAll('.trainers__desp');
    item.addEventListener('mouseenter', () => {
        item.style.opacity = 0.5;
        trainersText[index].removeAttribute('hidden');
    });
        item.addEventListener('mouseleave', () => {
            item.style.opacity = 1;
            trainersText[index].setAttribute('hidden', true);
        });
    });

});
const trenersContainer = document.querySelector(".trainers");
if (trenersContainer) {
    const dataTitleTrainers= [
            "Ирина Лайм",
            "Марина Орлова",
            "Лиза Весенняя",
        ];
        const titleTreners =trenersContainer.querySelectorAll(".trainers__name");
      titleTreners.forEach((item, index) => {
      item.textContent = dataTitleTrainers[index];
           });
}
/* Модальное окно*/


const welcоmeButtonModal = document.querySelector(".training__button");
let modalApplication = document.querySelector(".popup");
welcоmeButtonModal.addEventListener("click", () => {
    modalApplication.removeAttribute("hidden");
    //
    let modal = document.querySelector(".applications");
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(58, 60, 65, 0.7)";
    console.log(modal);
    //
});
document.querySelector(".form__close").addEventListener("click", (event) => {
        modalApplication.setAttribute("hidden", true);
        let close = document.querySelector(".applications");
        close.style.width = "";
        close.style.height = "";
        close.style.background = "";
});
console.log(welcоmeButtonModal)
console.log(modalApplication);

/*
if (welcоmeButtonModal && modalApplication) {
    welcоmeButtonModal.addEventListener("click", () => {
      modalApplication.removeAttribute("hidden");
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});
*/