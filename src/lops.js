
/*
    TUGAS LOPS KELIPATAN 1 <= 20 dan hasikkan if 1 <= 20
    dan milah loops dengan index = 0 dan akhiri index dengan nilai 
    nTinggi = 50;
*/ 
// function mainLop() {
//     let index = 0;
//     const Tengah = 20;
//     const nTinggi = 50;

//     for (index; index < nTinggi; index++) {
//         index +=1
//         if (index <= Tengah) {
//             console.log(index,)
//         } else (
//             console.log(index, "Nilai else")
//         )
//     }
// }
// mainLop()


// function perkalianLops() {
//     let i = 0;
//     const nTinggi = 10;

//     for (i; i < nTinggi; i) {
//         i += 1
//         if (i <= nTinggi) {
//             console.log(`5 x ${i} = ${5 * i} `)
//         }
//     }
// }

// perkalianLops()

function segitigaBintang() {
    const tinggi = 5; // Jumlah baris segitiga

    for (let i = 1; i <= tinggi; i++) { // Loop untuk baris
        let baris = ""; // String kosong untuk menyimpan bintang

        for (let j = 1; j <= i; j++) { // Loop untuk bintang di setiap baris
            baris += "*"; // Tambahkan bintang ke dalam string
        }

        console.log(baris); // Cetak hasil setiap baris
    }
}

segitigaBintang();
