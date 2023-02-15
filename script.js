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

'use strict';
//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3
let a = prompt('Один из последних просмотренных фильмов?');
let b = prompt('На сколько оцените его?');
let c = prompt('Один из последних просмотренных фильмов?');
let d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = +b; //Когда пишем свойства в объекте используем []
personalMovieDB.movies[c] = +d;
console.log(personalMovieDB);