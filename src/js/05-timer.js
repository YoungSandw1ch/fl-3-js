import '../css/timer.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  pauseBtn: document.querySelector('button[data-action-pause]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  resetBtn: document.querySelector('button[data-action-reset]'),
  timer: document.querySelector('.js-timer'),
};

// class Timer {
//   #isActive;

//   constructor(renderTimer) {
//     this.renderTimer = renderTimer;
//     this.#isActive = false;
//     this.time = 0;
//     this.timerId = null;
//     this.pauseId = null;
//     this.currentTime = 0;
//     this.pauseTime = 0;
//     this.init();
//   }

//   init() {
//     const time = this.secondToStringTimer(0);
//     this.renderTimer(time);
//   }

//   start() {
//     if (this.#isActive) return;

//     const startTime = this.currentTime || Date.now();

//     this.#isActive = true;

//     this.timerId = setInterval(() => {
//       this.currentTime = this.pauseTime
//         ? Date.now() - (this.pauseTime - startTime)
//         : Date.now();
//       this.time = this.secondToStringTimer(this.currentTime - startTime);

//       this.renderTimer(this.time);
//     }, 1000);

//     if (this.pauseId) {
//       clearInterval(this.pauseId);
//       this.pauseId = null;
//     }
//   }

//   stop() {
//     clearInterval(this.timerId);
//     this.time = 0;
//     this.#isActive = false;
//     this.currentTime = 0;
//     this.init();
//   }

//   pause() {
//     clearInterval(this.timerId);
//     this.#isActive = false;

//     this.pauseId = setInterval(() => {
//       this.pauseTime = Date.now();
//     }, 1000);
//   }

//   reset() {
//     this.time = 0;
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }

//   secondToStringTimer(time) {
//     const hour = this.pad(Math.floor((time / (60 * 60 * 1000)) % 24));
//     const min = this.pad(Math.floor(((time / 1000) % (60 * 60)) / 60));
//     const sec = this.pad(Math.floor(time / 1000) % 60);
//     return { hour, min, sec };
//   }
// }

function renderTimer({ hour, min, sec }) {
  refs.timer.textContent = `${hour}:${min}:${sec}`;
}

const timer = new Timer(renderTimer);

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
refs.pauseBtn.addEventListener('click', timer.pause.bind(timer));

//================================================================
// function secondToStringTimer(time) {
//   const hour = pad(Math.floor((time / (60 * 60 * 1000)) % 24));
//   const min = pad(Math.floor(((time / 1000) % (60 * 60)) / 60));
//   const sec = pad(Math.floor(time / 1000) % 60);
//   return { hour, min, sec };
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// renderTimer(secondToStringTimer(423565235));
//================================================================
