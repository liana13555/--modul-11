import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

// const timer = {
//   intervalId: null,
//   isActive: false,
  
//   start() {
//     if (this.isActive) {
//       return;
//     }
    
//     const startTime = Date.now();
//     this.isActive = true;
    
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);

//       updateClockface(time);
//     }, 1000);
//   },
  
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   }
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// })

// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// })

// /*
//  * - updateClockface - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Рисует интерфейс
//  */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

//   /*
//    * padStart() - Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//    1 -> 01
//    7 -> 07
//    12 -> 12

//    */
//   function pad(value) {
//     return String(value).padStart(2, '0');
//   }

// //   /*
// //    * - Принимает время в миллисекундах
// //    * - Высчитывает сколько в них вмещается часов/минут/секунд
// //    * - Возвращает обьект со свойствами hours, mins, secs
// //    * - Адская копипаста со стека 💩
// //    */

// function getTimeComponents(time) {
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// };

//========================================================================================



class Timer {            // Класс не знает об обновлении интерфейса, только подсчетом. 
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    
    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time); 
  }

    start() {
    if (this.isActive) {
      return;
    }
    
    const startTime = Date.now();
    this.isActive = true;
    
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        const time = this.getTimeComponents(deltaTime);

        this.onTick(time);   

    }, 1000);
  }

    stop() {
    clearInterval(this.intervalId);
      this.isActive = false;
      const time = this.getTimeComponents(0);
      this.onTick(time);  
  }

  getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  };
  
  pad(value) {
    return String(value).padStart(2, '0');
  };

};

const timer = new Timer({     // Для обновления интерфейса в объекте создаем св-во куда передаем ф-ю updateClockface
  onTick: updateClockface,
});

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));


//---------------------------------------------------------------------

// const timer = {
  // start() {       // Когда вызываем старт мы хотим сохранить текущее время и запустить интервал
  //   const startTime = Date.now();    

  //   setInterval(() => {
  //     const currentTime = Date.now();
  //     const deltaTime = currentTime - startTime;
  //     const { hours, mins, secs } = getTimeComponents(deltaTime);      
      // console.log(`${hours}:${mins}:${secs}`);

      // console.log(currentTime - startTime);
//     }, 1000);
//   },
// };

// timer.start();
