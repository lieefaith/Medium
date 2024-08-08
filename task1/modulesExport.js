
// Modules memungkinkan Anda untuk membagi kode menjadi file yang lebih kecil dan dapat diimpor di file lain.
// export digunakan untuk mendefinisikan apa yang dapat diimpor, dan
// import digunakan untuk mengimpor modul tersebut.

 function tambah(a, b) {
    return a + b;
  }
const PI = 3.14;
  
module.exports = { tambah, PI }
