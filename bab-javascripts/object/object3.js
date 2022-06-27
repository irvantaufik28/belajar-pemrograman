// cara membuat Object 

// 1. Obeject literal
// let warga = {
//     nama: 'cindy',
//     cash: 4000000,
//     belanja: function (shop) {
//         this.cash = this.cash - shop;
//         console.log(`Sudah belanja ${this.nama}, selamat belanja`)

//     }
// }
// / let warga = {
    //     nama: 'irvan',
    //     cash: 5000000,
    //     belanja: function (shop) {
    //         this.cash = this.cash - shop;
    //         console.log(`Sudah belanja ${this.nama}, selamat belanja`)
    
    //     }
    // }
    

// // 2. function Declaration

//  function warga (nama,cash){
//     let warga = {}
//     warga.nama =nama;
//     warga.cash =cash;

//     warga.belanja = function (shop){
//         this.cash  -= shop;
//         console.log(`sudah belanja ${this.warga} selamat belanja`)
//     }
// warga.kerja =function (gaji){
//     this.cash +=gaji;
//     console.log(`kerja ${this.warga} selamat bekerja`)
// }

// return warga;
//  }
//  let cindy = warga ('cindy', 4000000);
//  let irvan = warga('irvan',5000000);



// 3. constructor Function

class warga {
    constructor (nama,cash){
        this.nama=nama;
        this.cash=cash;
        
    }
    belanja (shop){
        this.cash -=shop;
        console.log(`selamat berbelanja, ${this.nama}`)
    }
    gaji (uang){
        this.cash +=uang;
        console.log(`hore ${this.nama}, gajian hemat uangnya ya`)
    }
}

let irvan= new warga('irvan',5000000);
let cindy= new warga ('cindy',3500000)