import '../css/promises.css';
import BSN from 'bootstrap.native';

const modal = new BSN.Modal('#exampleModal');
const refs = {
  modal: document.querySelector('#exampleModal'),
  startBtn: document.querySelector('[data-start-btn]'),
  infoStart: document.querySelector('[data-info-start]'),
  infoWinner: document.querySelector('[data-info-winner]'),
  tableBody: document.querySelector('.table > tbody'),
  horsesList: document.querySelector('.horses'),
  modalTiile: document.querySelector('#exampleModalLabel'),
  modalBody: document.querySelector('.modal-body'),
};
const horses = Array.from(document.querySelectorAll('input[name="horse"]')).map(
  el => el.id,
);
let raceCounter = 0;
let horseName = null;

refs.startBtn.addEventListener('click', onStartRace);
refs.horsesList.addEventListener('change', onRadioPush);

function onStartRace() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerInfo('');
  updateStartInfo('Забег начался! Ставки не принимаются');
  findAndRenderWinner(promises);
}

function onRadioPush(e) {
  // console.log(e.target);
  horseName = e.target.id;
  refs.startBtn.removeAttribute('disabled');
  // console.log(horseName);
}

function findAndRenderWinner(promises) {
  Promise.race(promises).then(({ horse, time }) => {
    updateWinnerInfo(`Первым финиширует ${horse} за время ${time}`);
    const tableMarkup = createTableBodyMarkup({ horse, time, raceCounter });
    renderTable(tableMarkup);
    updateStartInfo('Выберите лошадь и делайте ставки до начала забега');
    winOrNot(horse);
  });
}

function winOrNot(horse) {
  if (horseName === horse) {
    console.log('You win');
    refs.modalTiile.textContent = 'ПОЗДРАВЛЯЕМ';
    refs.modalBody.textContent = `${horse} приносит Вам побегу в этом забеге`;
  } else {
    console.log('you suck');
    refs.modalTiile.textContent = 'СОБОЛЕЗНУЕМ';
    refs.modalBody.textContent = `${horseName} проигрывает забег`;
  }
  modal.show();
}

function updateStartInfo(message) {
  refs.infoStart.textContent = message;
}

function updateWinnerInfo(message) {
  refs.infoWinner.textContent = message;
}

function renderTable(markup) {
  refs.tableBody.insertAdjacentHTML('beforeend', markup);
}

function createTableBodyMarkup({ horse, time, raceCounter }) {
  return `
  <tr>
    <td>${raceCounter}</td>
    <td>${horse}</td>
    <td>${time}</td>
  </tr>`;
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 4000);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
