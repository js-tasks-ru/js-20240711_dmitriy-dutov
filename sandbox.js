function alert(str) {
  console.log(str);
}
// --------------------------------------

// // -- Проверка функции pick
// const fruits = {
//   apple: 2,
//   orange: 4,
//   banana: 3
// };

// function pick(obj, ...fields) {
//   let result = {};

//   Object.entries(obj).forEach(([key, value]) => {
//     if (fields.includes(key)) {
//       result[key] = value;
//     }
//   });

//   return result;
// }

// console.log(pick(fruits, 'apple', 'banana'));

// //-- Проверка деструктурирующего присваивания
// let [a, b, c] = "abc";
// let [aa, , cc] = "a b c".split(' ');
// let [one, two, three] = new Set([1, 2, 3]);

// console.log(aa);
// console.log(cc);
// console.log(two);

// //-- Проверка деструктурирующего присваивания в цикле
// let user = {
//   name: "John",
//   age: 30
// };

// // цикл по ключам и значениям
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, затем age:30
// }

// //-- Проверка деструктурирующего присваивания в цикле
// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// // --Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
// for (let [key, value] of user) {
//   console.log(`${key}:${value}`); // name:John, затем age:30
// }

// // --Смена мест занчений
// let guest = "Jane";
// let admin = "Pete";

// // Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
// [guest, admin] = [admin, guest];

// console.log(`${guest} ${admin}`); // Pete Jane (успешно заменено!)

// // --Получение оставшихся элементов в массив
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// for (let item of rest) {
//   console.log(item);
// }

// console.log(name1);
// console.log(name2);

// // --prompt запустится только для surname
// let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

// console.log(name);    // Julius (из массива)
// console.log(surname); // результат prompt

// // -- НЕ ПОНЯЛ ЭТУ ЧАСТЬ
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// console.log(name); // Julius (из массива)
// console.log(surname); // Anonymous (значение по умолчанию)

// // -- Деструктуризация объекта
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// //let {title, width, height} = options;

// // let {height, width, title} = { title: "Menu", height: 200, width: 100 }
// // let {width: w, height: h, title} = options;
// // let {width: w} = options;
// let {title, ...rest} = options;

// console.log(title);  // Menu
// // console.log(width);  // 100
// // console.log(height); // 200

// console.log(rest.height);
// console.log(rest.width);

// // // --ПОЧЕМУ НЕ РАБОТАЕТ FOR 
// // for (let item of rest) {
// //   console.log(item);
// // }

// // console.log(title);  // Menu
// // console.log(w);  // 100
// // console.log(h); // 200

// // Вложенная деконструкция (Пригождается когда надо передать много параметров в функцию)
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // деструктуризация разбита на несколько строк для ясности
// let {
//   size: { // положим size сюда
//     width,
//     height
//   },
//   items: [item1, item2], // добавим элементы к items
//   title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
// } = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut
// console.log(options.items[0]);  
// console.log(options.extra);
// console.log(options.size.height);

// // Пример передачи объекта в функцию
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...и она немедленно извлекает свойства в переменные
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – взято из options,
//   // width, height – используются значения по умолчанию
//   console.log( `${title} ${width} ${height}` ); // My Menu 200 100
//   console.log( items ); // Item1, Item2
// }

// showMenu(options);

// // Пример передачи объекта в функцию
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({
//   title = "Untitled",
//   width: w = 100,  // width присваиваем в w
//   height: h = 200, // height присваиваем в h
//   items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
// }) {
//   console.log( `${title} ${w} ${h}` ); // My Menu 100 200
//   console.log( item1 ); // Item1
//   console.log( item2 ); // Item2
//   // console.log( items ); // НЕ РАБОТАЕТ
// }

// showMenu(options);

// // Чтобы можно было вызвать showMenu() без параметров надо присвоить значение по умолчанию всему набору параметров
// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   console.log( `${title} ${width} ${height}` );
// }

// showMenu(); // Menu 100 200

// // ЗАДАЧА 1
// let user = {
//   name: "John",
//   years: 30
// };

// // ваш код должен быть с левой стороны:
// let { name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// // ЗАДАЧА 2
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert(topSalary(salaries));

// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

// // ДЗ 1
// const product = {
//   category: {
//     title: "Goods"
//   }
// };

// const getter = createGetter('category.title');
// console.log(getter(product)); 

// // function createGetter(path) {
// //   let [...items] = path.split('.');
// //   let last = items.length;

// //   for (let i = 0; i < items.length; i++) {
// //     let num = i + 1;

// //     if (num === last) {
// //       alert(items[i]);
// //     }
// //   }
// // }

// // function createGetter(path) {
// //   let [...items] = path.split('.');
// //   let last = items.length;
// //   let resValue = '';

// //   for (let i = 0; i < items.length; i++) {
// //     let num = i + 1;

// //     if (num === last) {
// //       resValue = items[i];
// //     }
// //   }

// //   alert(rec(product, resValue));

// // }

// // function rec(obj, eqal = '') {
// //   alert(eqal);

// //   for (const [prop, val] of Object.entries(obj)) {
// //     if (typeof val === 'object') {
// //       if (prop === eqal) {
// //         // alert('FFFFFF');
// //         return val;
// //       }
// //       else {
// //         // alert(val);
// //         rec(val);
// //       }
// //     }
// //   }
// // }

// function createGetter(field) {
//   // Разбиваем строку пути на массив свойств
//   const fields = field.split('.');

//   // Возвращаем новую функцию, которая будет принимать объект и возвращать значение по заданному пути
//   return function(obj) {
//     // Используем reduce для последовательного доступа к вложенным свойствам объекта
//     return fields.reduce((accumulator, currentField) => {
//       // Если на каком-то этапе объект становится undefined, возвращаем undefined
//       if (accumulator === undefined) {
//         return undefined;
//       }
//       // Иначе возвращаем текущее вложенное свойство
//       return accumulator[currentField];
//     }, obj);
//   };
// }

// // --ДЗ 2
// function invertObj(obj) {
//   // Проверяем, что переданный аргумент является объектом
//   if (typeof obj !== 'object' || obj === null) {
//     throw new TypeError('Argument should be an object');
//   }

//   // Используем Object.entries для получения массива пар [ключ, значение]
//   const entries = Object.entries(obj);

//   // Создаем новый объект, используя reduce для изменения ключей и значений местами
//   const invertedObj = entries.reduce((accumulator, [key, value]) => {
//     accumulator[value] = key;
//     return accumulator;
//   }, {});

//   return invertedObj;
// }

// // Пример использования
// const obj = { key: 'value' };

// console.log(invertObj(obj)); // { value: 'key'}

// export default class NotificationMessage {
//   // статическое поле общее для всех классов
//   static activeNotification;

//   // в конструктор передётся message + объект с полями duration и type
//   constructor(message, {
//     duration = 2000,
//     type = 'success',
//   } = {}) {
//     // проверка поля activeNotification на существование
//     if (NotificationMessage.activeNotification) {
//       NotificationMessage.activeNotification.remove();
//     }

//     // создаём и заполняем новые поля
//     this.message = message;
//     this.durationInSeconds = (duration / 1000) + 's';
//     this.type = type;
//     this.duration = duration;

//     // вызываем метод render
//     this.render();
//   }

//   get template() {
//     return `<div class="notification ${this.type}" style="--value:${this.durationInSeconds}">
//       <div class="timer"></div>
//       <div class="inner-wrapper">
//         <div class="notification-header">Notification</div>
//         <div class="notification-body">
//           ${this.message}
//         </div>
//       </div>
//     </div>`;
//   }

//   render() {
//     const element = document.createElement('div');

//     //  строка в которой результат от template
//     element.innerHTML = this.template;

//     this.element = element.firstElementChild;

//     // в наш класс в статичное поле добавляем значение
//     NotificationMessage.activeNotification = this.element;
//   }

//   show(parent = document.body) {
//     parent.append(this.element);

//     setTimeout(() => {
//       this.remove();
//     }, this.duration);
//   }

//   remove() {
//     if (this.element) {
//       this.element.remove();
//     }
//   }

//   destroy() {
//     this.remove();
//     this.element = null;
//     NotificationMessage.activeNotification = null;
//   }
// }

export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = [...headerConfig];
    this.data = [...data];

    const element = document.createElement('div');
    element.innerHTML = this.createTemplate();
  }

  createTemplate() {
    return `<div data-element="productsContainer" class="products-list__container">
      <div class="sortable-table">

        <div data-element="header" class="sortable-table__header sortable-table__row">
          ${this.createHeades}
        </div>`;
  }

  createHeades() {
    return this.headerConfig.map(({id, title, sortableTable, sortType}) => 
      ` <div class="sortable-table__cell" data-id="${id}" data-sortable="${sortableTable}" data-order="${sortType}">
        <span>${title}</span>
      </div>`);
  }
}


