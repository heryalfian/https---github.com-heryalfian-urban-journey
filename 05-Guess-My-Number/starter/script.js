'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.label-score').textContent);

//rubahCobak
let angkaAcak = document.querySelector('.number').value = Math.trunc(Math.random() * 20 + 1);
console.log(angkaAcak);

let match = 20;
let highscore = 0;

function notifPesan(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        // document.querySelector('.message').textContent = 'masukkan angka dulu ngab';
        notifPesan('masukkan angka dulu ngab');

    } else if (guess !== angkaAcak) {
        if (match > 1) {
            notifPesan(guess < angkaAcak ? 'angka masih di bawah angka asli' : 'angka melebihi angka asli');
            match = match - 1;
            document.querySelector('.label-score').textContent = match;
        } else {
            notifPesan('anda kalah');
            document.querySelector('.label-score').textContent = 0;
        }
        // } else if (guess > angkaAcak) {
        //     if (match > 1) {
        //         document.querySelector('.message').textContent = 'angka melebihi angka asli';
        //         match = match - 1;
        //         document.querySelector('.label-score').textContent = match;
        //     } else {
        //         document.querySelector('.message').textContent = 'anda kalah';
        //         document.querySelector('.label-score').textContent = 0;
        //     }
    } else if (guess === angkaAcak) {

        notifPesan('angka yang anda masukkan benar');
        document.querySelector('.number').textContent = angkaAcak;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (match > highscore) {
            highscore = match;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {

    // if (confirm('main lagi gak bro?') ? location.reload() : alert('tks brodi!', location.reload()));

    match = 20;
    highscore = 0;
    angkaAcak = document.querySelector('.number').value = Math.trunc(Math.random() * 20 + 1);
    console.log(angkaAcak);

    notifPesan('start guessing...');
    document.querySelector('.label-score').textContent = match;
    document.querySelector('.number').textContent = angkaAcak;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = highscore;
});





