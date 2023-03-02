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