
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
let timerId = null;
let isActiv = false;

refs.startBtn.addEventListener('click', onClickStart);
refs.stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
  if (isActiv) { return; }

  timerId = setInterval(() => {
    const color = colors[randomIntegerFromInterval(0, 5)];
    isActiv = true;
    refs.startBtn.setAttribute('disabled',true);

    refs.body.style.backgroundColor = color;
    // console.log('старт');
    
  },1000)
}

function onClickStop() {
  clearInterval(timerId);
  // console.log('стоп');
  isActiv = false;
  refs.startBtn.removeAttribute('disabled');
}
