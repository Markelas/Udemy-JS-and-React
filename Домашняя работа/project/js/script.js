/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => { //Когда DOM структура загружена, будет работать скрипт
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoAd = document.querySelectorAll('.promo__adv img'),
    promoPoster = document.querySelector('.promo__bg'),
    promoGenre = promoPoster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'), //У формы, которой есть класс add
    addInput = addForm.querySelector('.adding__input'),
    checkBox = addForm.querySelector('[type="checkbox"]'); //Получим галочку в форму




    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //Отменяем стандартное поведение

        let newFilm = addInput.value; //Здесь будет храниться информация, что ввел пользователь
        const favorite = checkBox.checked; //Атрибут checked даст буллиновое значение

        if (favorite) console.log('Добавляем любимый фильм');

        if (newFilm.length > 21) newFilm = `${newFilm.slice(0, 21)}...`; //Если больше 21 символа, то будет многоточие

        if (newFilm) { //Если строка не пустая (не false), то выполнение

            movieDB.movies.push(newFilm); //Пушим в массив название фильма в конец
            sortArr(movieDB.movies);

            createMoveList(movieDB.movies, movieList); //Вызов функции с созданием
            
            event.target.reset(); //Очистка формы, передавали ее
        }

    });




    const sortArr = (arr) => {
        arr.sort(); //Сортируем массив с фильмами
    }


    const makeChanges = () => {
        promoGenre.textContent = "ДРАМА"; //Меняем жанр
        promoPoster.style.backgroundImage = "url('img/bg.jpg')";
    }




    const deleteAdv = (arr) => {
        arr.forEach( item => { //Убираем картинки с рекламой на странице
            item.remove();
        });
    }




    function createMoveList(films, parent) {
        parent.innerHTML = ''; //Очищаем весь блок с фильмами

        sortArr(films); //Вызов функции для сортировки

        films.forEach((film, i) => { //Создаем структуру
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => { //При нажатии на корзину в списке, фильм будет удаляться
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); //Из списка на сайте
                movieDB.movies.splice(i, 1); //i это номер в массиве, а 1 это сколько элементов нужно удалить

                createMoveList(films, parent); //Каждый раз, когда мы нажимаем на корзинку и вызываем функцию удаления
                //Будет также и вызываться функция перестраивания списка, это рекурсия, когда вызов функции внутри себя
            });
        });
    };
    
    makeChanges();
    deleteAdv(promoAd);
    createMoveList(movieDB.movies, movieList);
});