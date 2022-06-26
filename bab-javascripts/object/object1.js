// // object literal
// let warga = {
//     nama : 'jaenudin',
//     Nik : 123599912,
//     alamat : 'jalan babakan muncang',
//     pekerjaan : 'karyawan'
// }


// // function Declration
// function warga( nama, nik , alamat , pekerjaan){
//     let wrg = {};
//     wrg.nama = nama;
//     wrg.nik = nik;
//     wrg.alamat = alamat;
//     wrg.pekerjaan = pekerjaan;
//         return wrg;
// }
// let warga1= warga ('jaenudin', 1234124, 'jalan babakan muncang', 'karyawan');
// console.log(warga1);


// function Constructor

function Warga(nama,nik, alamat , pekerjaan) {
    this.nama = nama;
    this.nik = nik;
    this.alamat = alamat;
    this.pekerjaan = pekerjaan;
}
let wrg = new Warga ('jaenudin', 1234124, 'jalan babakan muncang', 'karyawan');
