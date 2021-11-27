//ASI, object literal, square bracket syntax, hoisting

let a = {a:123};
[a].forEach(function (x) {
    console.log(x);
});

// Hoisting adalah konsep dalam JavaScript, bukan fitur. Dalam bahasa skrip atau sisi server lain, variabel atau fungsi harus dideklarasikan sebelum menggunakannya.

// result : a:123