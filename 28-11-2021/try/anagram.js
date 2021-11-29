function anagram(s,t){
    let arrayString = [];
    if(s.length !==     t.length) return false;
    for(let char of s){
        arrayString[char] = (arrayString[char] || 0)+1;
    }
    for(let char of t) {
        if(!arrayString[char]) return false
        arrayString[char]--
    }

    return true;
}

console.log(anagram("Mary","arMy"));

/**
  
 Untuk memecahkan masalah, selalu ada beberapa pendekatan dan solusi dengan runtime yang bervariasi. Menyortir karakter dari kedua string dan kemudian membandingkannya satu per satu dapat menjadi hal pertama yang muncul di pikiran kita untuk memecahkan masalah yang diberikan ini, tetapi ingat bahwa waktu yang dibutuhkan untuk mengurutkan lebih besar dari O(n). Pendekatan saya adalah menggunakan hashmap sebagai struktur data kami dan kami tidak perlu menggunakan metode JavaScript bawaan dengan cara ini:
Bandingkan panjang dari dua string yang diberikan dan kembalikan false jika tidak sama.
Buat objek kosong untuk menyimpan semua karakter sebagai kunci dan jumlah kemunculannya sebagai nilai.
Ulangi karakter string pertama dan tambahkan setiap karakter ke dalam hash sebagai kunci dengan menyetel nilainya menjadi 1 dan kemudian menambah nilai pada kunci sebesar 1 pada setiap kemunculan.
Ulangi string kedua dan periksa apakah karakter ada di objek yang dibuat di atas. Jika tidak, kembalikan false. Jika karakter ada di hash, kurangi nilai karakter itu dengan 1.
Setelah kedua loop selesai, kembalikan true, karena ini berarti panjang dan karakter string sama. 
 */