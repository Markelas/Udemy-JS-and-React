const btn = document.querySelector('button'),
    btnAll = document.querySelectorAll('button');

// btn.onclick = function () { //Так не используют
//     alert('Click'); //Нельзя назначать несколько событий
// };

btn.addEventListener('click', () => { //Можно использовать событие несколько раз
    alert('Hello');
});

let i = 0;

const deleteElement = (event) => { //Удаление при нажатии
    console.log(event); //Информация, что произошло с элементом 
    console.log(event.target); //Выводим элемент это будет <button id='btn'>Нажми на меня</button>
    //event.target.remove(); //Удалить кнопку
    //console.log('Элемент удалился');
    i++;
    if (i == 1) { //Удаляем это событие с кнопки, после первого нажатия
        btn.removeEventListener('click', deleteElement); //Есть отмена действия обработчика
    }
};

btn.addEventListener('click', deleteElement);

//Есть также всплытие событий, когда выполняется событие, сначала на вложенном элементе,
//а затем на родительском элементе, обёртке

//Для этого есть currentTarget, событие уже всплывает наверх, но чаще используется обычный target


//----------Можем отменять стандартное поведение браузера, например, выделение текста-----

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //Отменяет переход по ссылке
    console.log(event.target) //Вместо этого показывает элемент в консоль
});

//Чтобы на несколько элементов назначить события, берем коллекцию и используем forEach()

btnAll.forEach(item => {
    item.addEventListener('click', deleteElement)
}); //Теперь созданная функция deleteElement работает на всех кнопках

// btnAll.forEach(item => {
//     item.addEventListener('click', deleteElement, {once:true}) //Можно третьим аргументом передавать опции
//     //Из-за опции совершается действие один раз, а на второй она отключается
// }); //Теперь созданная функция deleteElement работает на всех кнопках




//--------------------TOUCH---------------------//

window.addEventListener('DOMContentLoaded', () => { //Срабатывает при загрузки браузера
    const box = document.querySelector('.box'); //Берем элемент коробки

    box.addEventListener('touchstart', (e) => { //Срабатывает при касании
        e.preventDefault(); //Отменяет стандартные действия браузера
        
    })
})

//Используется touchmove - при движении пальца
// touchend - регистрация когда палец перестает держать экран

// touches - проверить, сколько пальцев касается экрана

window.addEventListener('DOMContentLoaded', () => { //Срабатывает при загрузки браузера
    const box = document.querySelector('.box'); //Берем элемент коробки

    box.addEventListener('touchstart', (e) => { //Срабатывает при касании
        e.preventDefault(); //Отменяет стандартные действия браузера
        
        console.log(e.touches);
    })
})

// Чтобы узнать, сколько пальцев взаимодействует в конкретном элементе, используется targetTouches

// changedTouches - список пальцев, которые исопльзуются в событии, пальцы, которые совершили определенные действия


/*-------------------------------Взаимодействие с классами----------------------*/

btn.classList.item(1); //Показывает класс на элементе
btn.classList.add('red'); //Добавляет класс
btn.classList.remove('red'); //Удаляет класс
btn.classList.toggle('blue'); //Переключает класс

//Чтобы проверить наличие класса, используется contains, можно с ним создать цикл

btns[0].addEventListener('click', ()=> {
    if (!btns[1].classList.contains('red')) { //Если на элементе нет класса red, то он добавляется
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red'); //Иначе, удаляется этот класс
    }
});

//Можно использовать toggle, но иногда нужно вручную проверить класс и дальше взаимодействовать

/*---------------------------Делегирование Событий------------------------------*/

//Например, есть обертка wrapper внутри которых кнопки button, их несколько

wrapper.addEventListener('click', (newEvent) => {
    if (newEvent.target && newEvent.target.tagName == "BUTTON") { //У кнопки будет свойство tagName, с именем BUTTON, мы проверим
        //Является ли кнопка кнопкой, то ли мы выбрали
        console.log('Hello');
    }
});
//Т.е. создали события именно на кнопки, а не на обёртку 

wrapper.addEventListener('click', (newEvent) => {
    if (newEvent.target && newEvent.target.classList.contains('blue')) { //Проверим в обёртке, есть ли элементы с классом blue, то на нем будет срабатывать действие
        console.log('Hello');
    }
});

//Делегируем события с родителей, на его потомков

//Создадим динамическое создание элемента

const newBtn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); //Добавили в обёртку новую кнопку и этот элемент все равно будет выполнять функции, которые мы назначили на кнопки внутри обёртки

//Вместо contains можно сделать matches

wrapper.addEventListener('click', (newEvent) => {
    if (newEvent.target && newEvent.target.matches("button.red")) { //Аналог contains
        console.log('Hello');
    }
});






/*---------------------------------setTimeout-----------------------------*/

const timerId = setTimeout(function(text) { //Передаем таймер в переменную
    console.log(text);
}, 2000, 'Hello'); //Третий аргумент передается в text




const timerTwo = setTimeout(logger, 2000);

function logger () {
    console.log(text);
}

/*-----------------------------clearInterval------------------------------*/
clearInterval(timerTwo) //Чтобы сбросить таймер, исопльзуется clearInterval(), уже не будет действовать таймер


const btnNew = document.querySelector('.btn') 

btnNew.addEventListener('click', () => {
    const timerThree = setTimeout(logger, 2000);
}); //Создали локальную переменную с таймером, чтобы при клике на кнопку запускать наймер


/*---------------------------setInterval()-------------------------------*/
//Чтобы повторялось действие и таймер срабатывал несколько раз, пока не остановится, используется
//setInterval()

btnNew.addEventListener('click', () => {
    const timerFour = setInterval(logger, 2000);
}); //Будет повторяться действие 

clearInterval(timerFour); //Для отключения


//Пример

let timerNew;
let iteration = 0;

btn.addEventListener('click', () => {
    timerNew = setInterval(log, 500);
});

function log() {
    if (i === 3) { //Будет действовать 4 раза
        clearInterval(timerNew);
    }
    console.log('text');
    iteration++;
}

//Рекурсивный setTimeout, будет выполняться и ждать строгоотведенное ему время, например, если кода много и долго нужно ждать

let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);




/*------------------------Даты--------------------------*/

const now = new Date();

console.log(now);

const nowNew =new Date(2020, 5, 1, 20);

console.log(nowNew)

//Можем использовать методы

const nowNew1 = new Date();

console.log(now.getFullYear()); //Год
console.log(now.getMonth()); //Месяц
console.log(now.getDate()); //День в месяце
console.log(now.getDay()); //Дент в недели, начиная с воскресенья 

console.log(now.getHours()); //Время
console.log(now.getUTCHours()); //Время по UTC

console.log(now.getTimezoneOffset()); //Разница текущего времени с UTC


//Методы для установки времени

const nowtime1 = new Date();

console.log(nowtime1.setHours(18)); //get просто меняем на set
console.log(nowtime1);

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

console.log(end, start, `Цикл отработал за ${end - start} миллисекунд`)