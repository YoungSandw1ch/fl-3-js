import BSN from 'bootstrap.native';

const MAX_OPENS = 3;
const MODAL_TIME_INTERVALS = 3000;
const modal = new BSN.Modal('#exampleModal');
let modalOpensCounter = 0;
let subscriptionStatus = false;
const refs = {
  modal: document.querySelector('#exampleModal'),
  subscribeBtn: document.querySelector('button[data-subscription]'),
};

openModal();

refs.subscribeBtn.addEventListener('click', onSubscriptionBtn);
refs.modal.addEventListener('hide.bs.modal', onModalHide);

function openModal() {
  const modalTimerId = setTimeout(() => {
    modal.show();
    modalOpensCounter += 1;
  }, MODAL_TIME_INTERVALS);
}

function onModalHide() {
  if (modalOpensCounter === MAX_OPENS || subscriptionStatus) return;
  openModal();
}

function onSubscriptionBtn() {
  subscriptionStatus = true;
  modal.hide();
}
