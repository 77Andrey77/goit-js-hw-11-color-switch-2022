
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const refs = {
  daysEl: document.querySelector('[data-value= "days"]'),
  hoursEl: document.querySelector('[data-value= "hours"]'),
  minsEl: document.querySelector('[data-value= "mins"]'),
  secsEl: document.querySelector('[data-value= "secs"]'),
}

class Timer{
  constructor({ selector, targetDate }) { 
    this.selector = selector;
    this.targetDate = targetDate;
  }
     start() {     
      //  console.log(this.targetDate);
      //  this.getTime();
      //  console.log(this.getTime());
      //  this.getTimeComponents(this.getTime());
      //  console.log(this.getTimeComponents(this.getTime()));
       updateClockfase(this.getTimeComponents(this.getTime()));
  
    setInterval(() => {
       updateClockfase(this.getTimeComponents(this.getTime()));
      

     }, 1000);
  }  
  //получение сколько времени осталось
  getTime() {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
    return deltaTime;
  }
 

  //правильное отображение времени ,добавление 0
   pad(value) {
  return String(value).padStart(2, '0');
}
// формулы получения дней часов мин сек
   getTimeComponents(time) {
     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
  };
}

//визуальное отображение
function updateClockfase({ days, hours, mins, secs }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minsEl.textContent = `${mins}`;
  refs.secsEl.textContent = `${secs}`;
}

const timer1 = new Timer({
  selector: '#timer-1',
  targetDate: new Date('Nov 1, 2022'),
});

// document.addEventListener("DOMContentLoaded", timer1.start());
timer1.start();