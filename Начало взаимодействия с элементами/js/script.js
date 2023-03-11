'use strict';

const box = document.getElementById('box'), //Получить элемент по id (один)
    btns = document.getElementsByTagName('button'), //Получить элементы по тэгу
    circles = document.getElementsByClassName('circle'), //Поулчить элементы по классу и взятие коллекции
    wrapper = document.querySelector('.wrapper'), //Обёртка
    hearts = wrapper.querySelectorAll('.heart'), //Весь класс внутри wrapper
    oneHeart = wrapper.querySelector('.heart'); //Одно сердечко из класса

// box.style.backgroundColor = 'blue'; //По id меняем стиль
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; // можно заменить код выше таким способом
// можно использовать `${}`

btns[1].style.borderRadius = '100%'; // Из коллекции кнопок, собранных по тегу, меняем у 2 элемента 
circles[0].style.backgroundColor = 'red'; //Меняем у кружочка, найденного по тегу, стиль у 1 элемента

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }; //Перебор элементов и назначение класса

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
}); //Можно использовать этот вариант



// const text = document.createTextNode('Тут появится текст'); //Но обычно не используется

const div = document.createElement('div'); //Создается только внутри JS файла, на странице он не появится

div.classList.add('black'); //Добавили класс к созданному элементу 

// document.body.append(div); //Берем тег body и в его самый конец добавляем переменную div

// document.querySelector('.wrapper').append(div); //Переходим в класс wrapper и добавляем в конец div

wrapper.append(div); //Вынесли отдельную переменную wrapper вверх, чтобы добавить в конец класса div
// wrapper.appendChild(div); 

// wrapper.prepend(div); //Чтобы добавить в начало класса wrapper созданный div

// hearts[0].after(div); //После первого сердечка появится div

// circles[0].remove(); //Удалить кружочек

// hearts[0].replaceWith(circles[0]); // Заменить Первое сердечко на Первый круг

div.innerHTML = "<h1>Hello World</h1>"; //Можно добавлять HTML структуру

// div.textContent = "Hello"; //Добавить текст, безопасно при получении данных от пользователя

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); //Вставили перед началом div HTML струтуру с h2

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); //Вставили внутри div, в начале, HTML струтуру с h2

div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); //Вставили внутри div, в конец div, HTML струтуру с h2

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); //Вставили снаружи div, после элемента HTML струтуру с h2