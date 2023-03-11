window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item =>{ //Перебираем псевдомассив и скрываем контент на сайте
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); //У каждого из табов удаляем класс активности
        });
    }
    
    function showTabContent(i = 0) { //В объявлении аргументов можем сразу присвоить значнеие 0, так как оно по умолчанию
        tabsContent[i].classList.add('show', 'fade'); //Добавляем css анимации
        tabsContent[i].classList.remove('hide'); //Ранее мы ставили display none, и в противовес этому, делаем display block, чтобы отбразить на странице
        tabs[i].classList.add('tabheader__item_active'); //Добавляем класс 
    }
    //Т.е. мы скрываем все табы и отображаем только тот, который нас интересует

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target; //Чтобы сэкономить время и не писать везде event.target, можем просто перенести в переменную target

        if (target && target.classList.contains('tabheader__item')) { //Проверяем, кликнули ли в один из элементов в списке, а не на родителя
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i); //Перебираются элементы на страницы, проверятся, куда был клик и тот элемент, на который был клик, подставляется
                    //В функцию showTabContent
                }
            });
        }
    });


    //Timer

    const deadline = '2023-05-20';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()), //Получаем разницу в миллисекундах
            days = Math.floor(t / (1000 * 60 * 60 * 24)), //Делим миллисекунды и переводим в дни
            hours = Math.floor((t / (1000 * 60 * 60) % 24)), //Количество часов, делим % 24 это будет остаток от деления, чтобы получить от общего количества часов 
            minutes = Math.floor((t / 1000 / 60) % 60), //Получаем от общего кол-ва минут, минуты в 60
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t, //В будущем это значение также будем использовать, сравнивать, вдруг время уже закончилось
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    function getZero(num) { //Чтобы на странице отображались цифры меньше 10, с 0, например, 09
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    };

    function setClock(selector, endtime) { //Установка таймера
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'), //Получили все элементы со страницы
            timeInterval = setInterval(updateClock, 1000); //Чтобы время обновлялось каждую секунду, создаем интервал и вызываем функцию
        
        updateClock(); //Вызываем функцию, чтобы на странице не была отображена верстка со стандартными числами

        function updateClock() {
            const t = getTimeRemaining(endtime); //Здесь передается полученное время в виде объекта

            days.innerHTML = getZero(t.days); //Обращаемся к объекту и передаем информацию из него на страницу
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0) { //Если разница между текущей датой и установленной даты уже меньше нуля
                clearInterval(timeInterval) //Останавливаем интервал, если время закончилось
            };
        }
    }

    setClock('.timer', deadline);
});