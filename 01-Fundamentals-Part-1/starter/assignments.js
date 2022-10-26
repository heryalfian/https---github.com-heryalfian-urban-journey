// 

// let language = "bahasa indonesia";
// language = "bahasa sasak";

// const hariMerdeka = 170845;
// // hariMerdeka = 170846;

// var suku = "sasak";
// // suku = "sunda";

// const now = 2022;


// const umurZainal = now - 1995;
// const umurReza = now - 2000;
// const umurHery = 2 * umurReza;
// console.log(umurZainal, umurReza);

// if (umurZainal > umurHery) {
//     console.log("Reza lebih muda")
// } else {
//     console.log("Reza Seumuran")
// }

// console.log(umurZainal >= 28);

//Challenge 1

//data1
// const markWeights = 78;
// const markTall=1.69;
// const johnWeight = 92;
// const johnTall = 1.95;

//  console.log (markWeights, markTall, johnWeight, johnTall);

// // const bmi = mass/ (height*height);

// let nilaiSatu = markWeights/(markTall*markTall);

// let nilaiDua = johnWeight / (johnTall * johnTall);

// console.log(nilaiSatu>nilaiDua);
// console.log(typeof nilaiSatu);
// console.log(typeof nilaiDua);

// console.log(markWeights / (markTall * markTall))|
// console.log(johnWeight/(johnTall**2)); // sama artinya dengan (johnTall * johnTall)

// console.log(markWeights / (markTall * markTall)>johnWeight / (johnTall * johnTall));
// console.log(markWeights / (markTall * markTall)< johnWeight / (johnTall * johnTall));

// let bmiSatu = Math.ceil(nilaiSatu);
// let bmiDua = Math.ceil(nilaiDua);

// if (bmiSatu>bmiDua){
//     console.log(`Bmi mark dengan nilai ${bmiSatu} lebih besar dari nilai bmi John sebesar ${bmiDua}`);
// }else{
//     console.log(`Bmi mark dengan nilai ${bmiSatu} lebih kecil dari nilai bmi John sebesar ${bmiDua}`);
// }

// const fullName = "Septian Heri A.";
// const umur = 27;
// const tahunLahir = 1995;
// const bulanLahir = 09;
// const tanggalLahir =21;
// const pekerjaan = "Frontend Programmer"
// const hobi = "Basketball dan Traveling"
// const alamat = "Mataram, NTB"

// const dataUser = "Nama saya adalah "+ fullName + "lahir pada "+tanggalLahir+"-"+bulanLahir+"-"+tahunLahir+" saya seorang "+ pekerjaan + " bertempat tinggal di "+alamat+" dan saya senang bermain "+hobi+"";
// console.log(dataUser);

// const dataUserNew = `Nama saya adalah ${fullName} lahir pada ${tanggalLahir}-0${bulanLahir}-${tahunLahir} saya seorang ${pekerjaan} bertempat tinggal di ${alamat} dan saya senang bermain ${hobi}`;
// console.log(dataUserNew); 

// const age = [17,19,20,35,26] ;
// let rataUmur=0;

// for (i = 0; i < age.length; i++) {
//     rataUmur += (age[i] / age.length);
// }

// if(rataUmur>=24){
//     console.log(`zainal bisa daftar buat sim mengemudi, karena zainal berumur ${rataUmur} tahun`);
// } else{
//     console.log(`zainal harus menunggu ${18-rataUmur} tahun, baru bisa daftar sim mengemudi`)
// } 


//  

// const money = 0;

// if (money){
//     console.log(`jangan boros ya`);
// }else{
//     console.log(`cari duitlah bro`);
// }

// const angkaKesukaan =Number( prompt(`berapa angka kesukaan kamu?`));
// console.log(typeof angkaKesukaan);

// if (angkaKesukaan===4) {
//     console.log(`Selamat kamu orang beruntung`) ;
// } else if(){

// }

// const dataSatu=[];
// const balonUdara = function(warna,balon){
//     dataSatu.push(warna);
//     return balon;
// }

// const noKesukaan = Number(prompt(`masukkan no kesukaan kamu duls!`));

// if(noKesukaan===4){
//     console.log(`selamat anda dapat nomor beruntung`);
// } else if(noKesukaan===7){
//     console.log(`selamat kamu lagi hoki`);
// }else{
//     console.log(`belum nemu angka beruntung guys`);
// };


// const haruPunyaSim=true;
// const harusNormal=false;

// const ngebut = haruPunyaSim || harusNormal ;

// if (ngebut ? console.log(`waktunya mengemudi`) : console.log(`maaf anda belum bisa mengemudi`));

//latihan 3
// const timLumbaLumba=[96,108,89];
// const timKoala=[88,91,100];

// let totalLumba = 0;
// let totalKoala = 0;

// for (i=0; i<timLumbaLumba.length; i++){
//     totalLumba+=(timLumbaLumba[i]/timLumbaLumba.length);
// }

// for(x=0; x<timKoala.length; x++){
//     totalKoala+=(timKoala[x]/timKoala.length);
// }

// if(totalLumba<totalKoala){
//     console.log(`koala menang dengan nilai ${totalKoala} & tim Lumba lumba dengan nilai ${totalLumba}`);
// } else if(totalLumba>totalKoala){
//     console.log(`lumba lumba menang, dengan nilai ${totalLumba} & tim koala dengan nilai ${totalKoala}`);
// } else {
//     console.log(`pertandingan ulang`);
// }

// const timName=prompt(`masukkan nama tim`);
// let timSatu = 0;
// let timDua = 0;
// if (timName==`merah`) {

//     const jumlahPertandingan = Number(prompt(`masukkan jumlah pertandingan`));


//     let nilaiTimSatu = [];

//     if (jumlahPertandingan) {
//         for (i = 0; i < jumlahPertandingan; i++) {
//             nilaiTimSatu.push(Number(prompt(`nilai pertandingan ke ${i + 1}`)));
//         }

//     }

//     for (x = 0; x < nilaiTimSatu.length; x++) {
//         timSatu += nilaiTimSatu[x] / nilaiTimSatu.length;
//     }
// } else if (timName==`biru`){
//     const jumlahPertandinganBiru = Number(prompt(`masukkan jumlah pertandingan`));

//     let nilaiTimDua = [];

//     if (jumlahPertandinganBiru) {
//         for (n = 0; n < jumlahPertandinganBiru; n++) {
//             nilaiTimDua.push(Number(prompt(`nilai pertandingan ke ${n + 1}`)));
//         }

//     }

//     for (a = 0; a < nilaiTimDua.length; a++) {
//         timDua += nilaiTimDua[a] / nilaiTimSatu.length;
//     }
// } else{
//     alert(`tim gak ketemu cur`);
// }

// console.log(timSatu,timDua);

//Challenge 3

// const dolphins = [97, 112, 101];
// const koalas = [109, 95, 123];
// let totalNilaiDolphins = 0;
// let totalNilaiKoalas = 0;
// const skorMinimal = 100;

// for (x = 0; x < dolphins.length; x++) {
//     totalNilaiDolphins += dolphins[x] / dolphins.length;
// }
// console.log(`total nilai Dolphins ${totalNilaiDolphins}`);

// for (i = 0; i < koalas.length; i++) {
//     totalNilaiKoalas += koalas[i] / koalas.length;
// }
// console.log(`total nilai Koala ${totalNilaiKoalas}`);

//no1
// if (totalNilaiDolphins == totalNilaiKoalas) {
//     console.log(`pertandingan seri`);
// } else if (totalNilaiDolphins > totalNilaiKoalas) {
//     console.log(`Dolphins menang dengan nilai ${totalNilaiDolphins}`);
// } else {
//     console.log(`Koalas menang dengan nilai ${totalNilaiKoalas}`);
// }

//bonus1
// if(totalNilaiDolphins>=skorMinimal){
//     console.log(`dolphin menang`);
// } else if(totalNilaiKoalas>=skorMinimal){
//     console.log(`koala menang`)
// } else{
//     console.log(`draw cuy`);
// }

// if(totalNilaiDolphins>=skorMinimal||totalNilaiKoalas>=skorMinimal){
//     if(totalNilaiDolphins>totalNilaiKoalas){
//         console.log(`dolphin menang dengan nilai ${totalNilaiDolphins}`)
//     } else if(totalNilaiDolphins<totalNilaiKoalas){
//         console.log(`koala menang dengan nilai ${totalNilaiKoalas}`);
//     } else{
//         console.log(`pertandingan draw`);
//     }
// } else{
//     console.log(`nilai hasil pertandingan kurang dari skor minimum yaitu ${skorMinimal}`);
// }

// const day = `rabu`;

// switch (day) {
//     case `senin`:
//         console.log(`belajar kalkulus`);
//         console.log(`belajar teori darwin`);
//     // break;
//     case `selasa`:
//         console.log(`belajar algoritma & struktur data`);
//     break;
//     case `rabu`:
//         console.log(`belajar aljabar linier`);
//     break;
//     case `kamis`:
//         console.log(`belajar bahasa inggris`);
//     case `jumat`:
//         console.log(`belajar kerohanian`);
//     case `sabtu`: 
//         console.log(`belajar react.js`);
//     case `minggu`:
//         console.log(`pergi ke warung kopi. Healing :)`);
//     default:
//         console.log(`not a valid day!`);
// }

// if (day==`senin`){
//     console.log(`ini hari senin`);
// } else if(day==`selasa`){
//     console.log(`ini hari selasa`);
// } else if(day==`rabu`|| day==`kamis`){
//     console.log(`ini hari rabu kalo gak kamis`);
// } else {
//     console.log('not a valid day')
// }
const nama = "kkNals";
const bill=450;

const calculatorTip= bill >= 50 && bill<= 300 ? bill * 15/100 : bill * 20/100;

console.log(`Bil ${nama} sejumlah ${bill}, dengan jumlah tip ${calculatorTip}, serta total pengeluaran sebanyak ${bill+calculatorTip}`);


