var penumpang = []; // array kosong
var tambahPenumpang = function(namaPenumpang, penumpang){ // untuk meambahkan nama penumpang
    if(penumpang.length == 0){ // untuk menghitung pada isi datanya
        penumpang.push(namaPenumpang); //untuk menambah data ke array
        return penumpang; // untuk mengulang isi array & keluar dari function
    }else{
        for (i = 0; i<penumpang.length; i++){ // untuk cari ulang isi panjang data yg sudah di isi
            if( namaPenumpang == penumpang[i]){ // untuk mencari data yg sudahg di input
                console.log(namaPenumpang + - ' sudah ada didalam angkot'); // memberikan informasi yg udh ada datanya
                return penumpang; // mengembalikan isi array & keluar dari function
            }else if(i == penumpang.length - 1){ //karena i nilainya 0, dan panjang penumpang mempunyai nilai 1. 
                // fungsi - 1 setelah panjang penumpang adalah untuk menyamakan nilai i panjang penumpang 
                penumpang.push(namaPenumpang); // untuk menambahkan nama
                return penumpang; // mengembalikan isi array & keluar dari function 
        
            }
        }
    }
}