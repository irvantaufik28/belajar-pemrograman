let jmlAngkot =10;
let angkotBeroprasi = 6;

for (let i =1; i<=jmlAngkot; i++){
    if(i <= angkotBeroprasi ) 
    { console.log('angkot ke - ' + i + ' sedang Beroprasi');
    } else if (i=== 8 || i === 10){
        console.log('angkot ke - ' + i + ' sedang lembur')
    } else
     {console.log ('angkot ke - ' + i + ' sedang Ruksak');}
    
}