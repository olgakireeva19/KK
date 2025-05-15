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

});
