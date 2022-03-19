// import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args) 

Метод setTimeout() позволяет запланировать запуск функции через определённое время.
Вызывает 1 раз.
 */

// const logMessage = () => {
//   console.log('Лог при вызове callback-функции через 3 секунды');
// }

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000);

// setTimeout((x) => {
//   console.log(x);
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000, 50);

// console.log('После вызова setTimeout');


/* Сначала выполняется весь синхронный код, а потом отложенные функкции  */

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

// setTimeout(logger, 2000, 2000);

const timerId = setTimeout(logger, 2000, 2000);  // Создание идентификатора таймаута

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
