// const tampilNama = function (nama){
//     return`halo , ${nama}`;
// }


// const tampilNama = (nama) => {retun ` halo, ${nama}`}


// const tampilNama = (nama, waktu) =>  { return ` selamat, ${waktu}, ${nama}`}

// console.log(tampilNama("irvan", "malam"))

// const tampilNama =( nama, waktu)=> `selamat ${waktu} ${nama}`
// console.log (tampilNama('siang', 'irvan'))

let mahasiswa = ['cindy', 'irvan', 'qianu'];
// jumlahuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })
// console.log(jumlahuruf)

// let jumlahuruf= mahasiswa.map (nama =>nama.length);


let jumlahuruf=mahasiswa.map = (nama => ({nama: nama, jmlHuruf: nama.length})); 
console.log(jumlahuruf)