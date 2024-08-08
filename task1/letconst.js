// let: Mendeklarasikan variabel dengan cakupan blok (block scope). Bisa diubah nilainya setelah deklarasi.
// const: Mendeklarasikan variabel yang tidak dapat diubah setelah diinisialisasi. Digunakan untuk nilai tetap.



// use let
let nama = "adli";
console.log(nama);
nama = "bukan adli"
console.log(nama);

// use const
const name = "adliv2"
console.log(name);
// name = "bukan adliv2" / / error: Assignment to constant variable.