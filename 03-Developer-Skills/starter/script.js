// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const cetakBilGenap = function cekDuls(angka) {
//     let hasil = [];
//     for (let i = angka; i > 0; i -= 2) {
//         hasil.push(angka[i]);
//         console.log(hasil);
//     }
//     return hasil;
// }

// console.log(cetakBilGenap(24));

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const data3 = data1.concat(data2);

const printForecast = function (arr) {
    let hasil = '';
    for (let i = 0; i < arr.length; i++) {
        hasil += ` ${arr[i]}ºC in day ${i + 1}`;
    }
    return hasil;
}

const output = printForecast(data3);
console.log(output);

//1) understanding the problem

//2) breaking up into the problem
