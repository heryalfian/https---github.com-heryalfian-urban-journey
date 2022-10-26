'use strict';

const tombolModal = document.querySelectorAll('.show-modal');
// console.log(tombolModal);
const modal = document.querySelector('.modal');
// console.log(modal);
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const tampungan = {
    tutupModal: function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    },

    bukaModal: function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
};


for (let i = 0; i < tombolModal.length; i++)
    tombolModal[i].addEventListener('click', tampungan.bukaModal);

closeModal.addEventListener('click', tampungan.tutupModal);

overlay.addEventListener('click', tampungan.tutupModal);


document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {

        tampungan.tutupModal();

    }
})