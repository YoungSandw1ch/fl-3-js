import BSN from 'bootstrap.native';

const MAX_OPENS = 3;
const MODAL_TIME_INTERVALS = 3000;
const modal = new BSN.Modal('#exampleModal');

// openModal();

// function openModal() {
setTimeout(openModal, MODAL_TIME_INTERVALS);
// }

function openModal() {
  modal.show();
}
