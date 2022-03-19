import '../css/common.css';

/*
 - Создание
 - Unix-время - 
 - Методы
 - Разница времени
 - Date.now()
*/

const date = new Date();  // new Date() - Создает целый объект и бьет по производительности
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth()); // Возвращает месяц от 0 до 11

// console.log(date.getTime());
// Метод getTime() возвращает числовое представл-е даты (timestamp) - кол-во миллисекунд прошедших с 1 января 1970г 00:00.

//-----------------------------------

const date1 = Date.now();
// console.log('date1', date1);

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1);
  console.log('date2', date2);
  console.log(date2 - date1);
}, 3000);
