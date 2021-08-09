'use strict'

// // Task 1

// // 1) вывожу элементы списка

// let elements = document.querySelectorAll(`ul > li`);

// for (let elem of elements) {
//     console.log(elem.innerHTML);
// }

// // 2) общее количество элементов

// let totalElemNumber = document.getElementsByTagName('li');
// console.log(`Общее количество эл-в: ${totalElemNumber.length}`);

// //3) Вытянуть текст из тегов li и записать текст содержащийся в 
// //каждом элементе в массив — вывести этот массив в консоль

// let array = [];

// for (let elem of elements) {
//     array.push(elem.innerHTML);
// }
// console.log(array);

// // 4) Вытянуть все аттрибуты которые есть в теге ul, перебрать их 
// //(for..of) и записать значение каждого аттрибута в массив — вывсести
// //этот массив в консоль

// let attrValueList = [];

// for (let attr of ulId.attributes) {
//     attrValueList.push(attr.value);
// }

// console.log(attrValueList);

// // 5) записать в отдельный массив каждое имя аттрибута — вывести массив в консоль

// let attrNameList = [];

// for (let attr of ulId.attributes) {
//     attrNameList.push(attr.name);
// }

// console.log(attrNameList);

// // 6) изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя

// let someList = document.getElementById('ulId');
// console.log(someList.lastElementChild.innerHTML = `«Привет, меня зовут Роман»`);

// // 7) Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя

// ulId.setAttribute('data-my-name', 'Роман');
// console.log(ulId.getAttribute('data-my-name'));

// // 8) Удалить у тега ul аттрибут ‘data-dog-tail‘

// ulId.removeAttribute('data-dog-tail');


// // Task 2 - Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел 
// //(например[1, 2, 3]) и генерирует список из елементов. 
// // А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3]) то делать вложенный список. 
// //Для проверки на массив используйте Array.isArray()


// function generateList(array) {

//     // создаем список
//     let ul = document.createElement('ul'); 

//     //перебираем список и создаем/наполняем его элементы
//     for (let item of array) {

//         let li = document.createElement('li');

//         if (!Array.isArray(item)) li.innerHTML = item; // если эл-т не массив - записываем в него значение массива

//         else { // иначе создаем внутренний список и помощью рекурсии проделываем вышесказанное для элемнта-массива
//             let innerUl = generateList(item);

//             if (innerUl) li.appendChild(innerUl);

//             ul.appendChild(li);
//         }
//         ul.append(li);
//     }
//     return ul;
// }

// let array = [1, [1.1, 1.2, 1.3], 2, 3, [3.1, 3.2, [4.1, 4.2, 4.3], 3.3]];

// console.log(generateList(array));

// 3) Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100

// function createTable() {
    

//     let body = document.getElementsByTagName("body")[0];
//     let table = document.createElement('table'); //создаем таблицу

//     let num = 1;

//     for (let i = 0; i < 10; i++) {

//         let row = document.createElement('tr'); //создаем строку 

//         for (let j = 0; j < 10; j++) {

//             let cell = document.createElement('td'); //создаем ячейку
            
//             let textCell = document.createTextNode(num++); 

//             cell.appendChild(textCell); // наполняем ячейки числами
//             row.appendChild(cell); //аналогично вставляем ячейки в строку
//         }

//         table.appendChild(row);
//     }

//     body.appendChild(table);
// }

// createTable();

