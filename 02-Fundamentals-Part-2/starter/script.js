'use strict';

// let driverLicensed = false;
// const berkendara =true;

// if (berkendara) driverLicensed = true;
// if (driverLicensed) console.log("selamat anda bisa berkendara")
// let i;

// let i=0;

// function cek() {
//     for (i; i < 10; i++) {
//         console.log(`hello word ${i + 1}`);
//     }
// }

// function rombok(){
//     console.log("hari-hari");
// }

// const div = cek()+rombok();

// console.log(div)

// function jus(alpukat, keju) {
//     console.log(alpukat, keju);
//     const isiJus = `jus ini terbuat dari ${alpukat} alpukat, dengan topping ${keju} keju diatasnya`;
//     return isiJus;
// }

// console.log(jus("buku", "tulis"));

// const koalasScore = [65, 54, 49];
// let avgDolphinScore = 0;

// const taskOne = calAverageDolphin => calAverageDolphin / 3;

// const hasil = taskOne(44 + 23 + 71);
// console.log(hasil);

//challenge4

//1.arrowFunction
// const calAverrage = (a, b, c) => (a + b + c) / 3;
// let teamDolphin = calAverrage(44, 23, 71);
// let teamKoalas = calAverrage(65, 54, 49);
// console.log(`nilai rata rata tim dolphin ${teamDolphin}, & tim koala ${teamKoalas}`);

// //2.Calculate Average the teams
// function checkWinner(avgDolphins, avgKoalas) {
//     if (teamDolphin >= 2 * teamKoalas) {
//         console.log(`team dolphin menang dengan score ${avgDolphins}`);
//     } else if (teamKoalas >= 2 * teamDolphin) {
//         console.log(`team dolphin menang dengan score ${avgKoalas}`);
//     } else {
//         console.log("belum ada tim yang menang");
//     }
// }
// checkWinner(teamDolphin, teamKoalas);

// teamDolphin = calAverrage(85, 54, 41);
// teamKoalas = calAverrage(23, 34, 27);
// checkWinner(teamDolphin, teamKoalas);


// const umur = calculateAge => 2022 - calculateAge;
// const tahunLahir = [1991, 1995, 1996, 2000, 2002];

// // console.log(umur(tahunLahir[tahunLahir.length - 2]));
// // console.log(umur(1994));

// for (let i = 0; i < tahunLahir.length; i++) {
//     const cekNilai = ` umur orang ke-${i + 1} adalah ${umur(tahunLahir[i])} tahun`;
//     console.log(cekNilai);
// }


//coding challenge 2
// 1. function calculate bill
// const calculateBill = function invoice(tip) {
//     if (tip >= 50 && tip <= 300) {
//         const hitungBil = tip * (15 / 100);
//         console.log(`tip anda ${hitungBil}`);
//         return hitungBil;
//     } else {
//         const hitungBil = tip * (20 / 100);
//         console.log(`tip anda ${hitungBil}`);
//         return hitungBil
//     }

// }

// // const hitungRata = tip1 => tip1 >= 50 && tip1 <= 300 ? tip1 * (15 / 100) : tip1 * (20 / 100);
// // const tesLagi = hitungRata(100);
// // console.log(tesLagi);

// // const totalBill = calculateBill(200);
// // console.log(totalBill)

// //2 create array dari setiap bill
// const tips = [];
// const totalSpending = [];
// const bills = [125, 555, 44];
// for (let i = 0; i < bills.length; i++) {
//     const hasil = calculateBill(bills[i]);
//     tips.push(hasil);
// }
// console.log(tips);

// for (let y = 0; y < tips.length; y++) {
//     const dataY = tips[y] + bills[y];
//     totalSpending.push(dataY);
// }
// console.log(totalSpending);


// const zainal = {
//     firstName: 'Zainal',
//     lastName: 'Abidin',
//     age: new Date().getFullYear() - 1995,
//     job: 'Youtuber',
//     friend: ['yunus', 'reza', 'wulan']
// };

// console.log(zainal['age']);

// const data = prompt('Kepo dengan Zainal, stalking yuk ada data fistname, lastname, age, job, friend');
// console.log(data);


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Zainal',
//     friend: ['Qwik', 'Reza', 'Abidin']
// };

// console.log(jonas.firstName);
// console.log(jonas.friend);
// console.log(jonas['friend'][0]);

// console.log(`${jonas.firstName} has 3 friend ${jonas.friend.length}, and his best friend is called ${jonas['friend'][0]} `);

// const zainal = {
//     firstName: 'Zainal',
//     lastName: 'Abidin',
//     birthYear: 1995,
//     job: 'Youtuber',
//     friend: ['yunus', 'reza', 'wulan'],
//     driverLicense: true,

//     calcAge: function () {
//         this.age = new Date().getFullYear() - this.birthYear;
//         return this.age;
//     },

//     // caclAge: tahunLahir => 2022 - tahunLahir

//     izinMengemudi: function () {
//         this.ngebut = '';
//         if (this.driverLicense ? this.ngebut = 'boleh mengemudi' : this.ngebut = 'belum boleh mengemudi');
//         return this.ngebut;
//     },

//     getSummary: function () {
//         return `${this.firstName} berumur ${this.age}-tahun, dia seorang ${this.job} dan dia ${this.ngebut}`;
//     }

// };

// zainal.calcAge();
// // console.log(zainal.age);
// // console.log(zainal.age);
// zainal.izinMengemudi();

// console.log(zainal.getSummary());
// console.log(zainal.ngebut);
// console.log(zainal.age());
// console.log(zainal.izinMengemudi());

// console.log(`${zainal.firstName} berumur ${zainal.age}-tahun, dia seorang ${zainal['job']} dan dia ${zainal.ngebut}`)

//coding challenge 3

// 1. create object for each them which Mark Miller & John Smith

// const bmi = {

//     mark: {
//         firstName: 'Mark',
//         lastName: 'Miller',
//         mass: 78,
//         height: 1.69,
//     },

//     john: {
//         firstName: 'John',
//         lastName: 'Smith',
//         mass: 92,
//         height: 1.95,
//     },

//     calcBMI: function () {

//         this.dataM = this.mark.mass / this.mark.height ** 2;
//         this.dataJ = this.john.mass / (this.john.height * this.john.height);

//         return this.sehatBmi = `${this.dataM < this.dataJ
//             ? `${this.john.firstName} BMI ${this.dataJ} lebih besar dibandingkan data BMI ${this.mark.firstName} yang berjumlah ${this.dataM} `
//             : `${this.mark.firstName} BMI ${this.dataM} lebih besar dibandingkan data BMI ${this.john.firstName} yang berjumlah ${this.dataJ} `
//             }`;
//     }

// }

// console.log(bmi.calcBMI());


// for (let i = 1; i <= 10; i++) {
//     document.write('<br>');
//     for (let x = 1; x <= i; x++) {
//         document.write('*');
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     document.write('<br>');
//     for (let y = 10; y >= i; y--) {
//         document.write('*');
//     }
// }

// const year = [1995, 1996, 1999, 2000, 2003];
// const age = [];

// for (let i = 0; i < year.length; i++) {
//     const umur = 2022 - year[i];
//     age.push(umur);
// }

// console.log(age);


// const mark = [
//     55,
//     'Mark',
//     'Miller',
//     78,
//     true,
//     false,
//     [1995, 1996, 1999, 2000, 2003],
//     1.69,
// ]

// for (let i = 0; i < mark.length; i++) {

//     if (typeof (mark[i]) !== 'number') {
//         continue;
//     }
//     console.log(mark[i], typeof (mark[i]));

// }


// let dice = Math.trunc(Math.random() * 2) + 1;

// while (dice !== 6) {
//     console.log(`nilai dadu adalah ${dice}`)
// }

//coding challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = hitungTip => hitungTip >= 50 && hitungTip <= 300 ? hitungTip * (15 / 100) : hitungTip * (20 / 100);

for (let i = 0; i < bills.length; i++) {
    const isiArrayTips = Math.trunc(calcTip(bills[i]));
    totals.push(isiArrayTips + bills[i]);
    tips.push(Math.trunc(calcTip(bills[i])));
}

// console.log(`ini tips ${tips} & ini total ${totals}`);
console.log(bills, tips, totals);

//bonus challenge 4
const data1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const year = [1995, 1996, 1999, 2000, 2003];
const calcAverage = function nilaiRataRata(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] / arr.length;
    }
    return Math.trunc(sum);
}

console.log(calcAverage(data1));
