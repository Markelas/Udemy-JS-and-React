'use strict';
'use moz';
// let a = prompt('Hi');
// console.log(a);



/*const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');
console.log(typeof(answers));*/


/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/





/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов?');
        let b = prompt('На сколько оцените его?');
        if (a != null && a.length < 50 && a!= "" && b != null && b.length < 50 && b != ""){
            personalMovieDB.movies[a] = b; //Когда пишем свойства в объекте используем []
        } else {
            i--;
        }    
    }
}

rememberMyFilms();

function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genre);
    }
}
writeYourGenres();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    }else if (personalMovieDB.count < 30){
        alert('Вы классический зритель');
    }else if (personalMovieDB.count >= 30){
        alert('Вы киноман');
    }else {
        alert('Произошла ошибка');
    }    
}

detectPersonalLevel ();



/*Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);