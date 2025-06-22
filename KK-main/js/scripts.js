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

const cardsPrice=document.querySelector('.price');
if (cardsPrice){
    const priceList=cardsPrice.querySelector('.price_list');
    const cardsPriceData={
        price1: {
            level:'СТАНДАРТ',
            price:'10000',
            button:'КУПИТЬ'
        },
        price2:{
            level:'БИЗНЕС',
            price:'12000',
            button:'КУПИТЬ'
        },
        price3:{
            level:'ИНДИВИДУАЛЬНЫЙ',
            price:'15000',
            button:'КУПИТЬ'
        }
    }
    const createCard=(level, price, button)=>{
        const card=`
        <li class="price_item">
            <p class="price_level">${level}</p>
            <p class="price_price">${price}</p>
            <button class="price_button button">${button}</p>    
        </li>
    `;
    return card;    
    }

    for (const cardKey in cardsPriceData){
        const card=cardsPriceData[cardKey];
        const cardElement=createCard(card.level, card.price, card.button);
        priceList.insertAdjacentHTML('beforeend', cardElement);
    }
}    

//3.6
const cardsCon = document.querySelector(".inventar");
if (cardsCon){
    const cardList = cardsCon.querySelector(".inventar__wrapper");

// Пример URL для получения данных с сервера
const apiUrl = "data.json";

// Функция для создания карточки
const createCard = (
    titel,
    image,
    iconAlt,
    iconWidth,
    iconHeight
) =>{
    // Шаблонные строки и подстановки
    const card = `
    <div class="inventar__wrap">
    <p class= "inventar__vid">${titel}</p>
    <img class="job__img" src="${image}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
    `;

    return card;
}
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // Данные
        console.log(typeof data); // Тип полученных данных

        data.forEach((item) => {
            const cardElement = createCard(
                item.titel,
                item.image,
                item.iconAlt,
                item.iconWidth,
                item.iconHeight
            );
            cardList.insertAdjacentHTML("beforeend", cardElement);
        });
    })
    .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
    });

const sliders = document.querySelector('.swiper');
//проверяем существует ли элемент
    if (sliders) {
const swiper = new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    }

}
