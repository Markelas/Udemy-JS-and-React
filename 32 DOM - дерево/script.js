console.log(document.body.childNodes); //Узлы, которые являются детьми у body
//Внутри в консоли будет 9 элементов, так как между элементами есть текстовые ноды (перенос строки)
//Элементы DOM-дерева это то что видим в HTML, узлы, это различные текстовые ноды

console.log(document.body.firstChild);

console.log(document.body.lastChild); //Первый и последний ребенок у body

console.log(document.querySelector('#current').parentNode); //Получили родитель элемента, это будет класс first

console.log(document.querySelector('#current').parentNode.parentNode); //Чтобы найти родитель родителя, отобразится wrapper

//----Data-modal, data-current, data-close и другие атрибуты для ориентировки

console.log(document.querySelector('[data-current="3"]').nextSibling); //Находим по атрибуту объект и находим следующего соседа
//Получится у нас перенос строки (текстовая нода)

console.log(document.querySelector('[data-current="3"]').previousSibling); //Находим по атрибуту объект и находим предыдущего соседа
//Получится у нас перенос строки (текстовая нода)





//Чтобы не попадаться на ноду, а на элемент, есть другой метод

console.log(document.querySelector('[data-current="3"]').nextElementSibling); //Находим по атрибуту объект и находим следующего соседа
//Получится у нас следующий элемент


//Также и с другими методами
console.log(document.querySelector('#current').parentElement); //Получим родительский элемент

console.log(document.body.firstElementChild); //Первый ребенок - элемент

for (let node of document.body.childNodes) { //Сможем отобразить элементы внутри body, текстовые ноды не отображаются в консоли
    if (node.nodeName = "#text"){
        continue;
    }
    console.log(node);
}