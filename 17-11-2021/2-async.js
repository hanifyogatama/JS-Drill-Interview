let num = 0;
async function increment() {
    num += await 2;
    console.log(num);
}

increment();

num += 1;
console.log(num)


/*
result is

1
2

*/

// asyncronoush menjalankan oerintah tanpa menunggu perintah lain selesai, perintah di eksekusi secara bersamaan dalam satu waktu

