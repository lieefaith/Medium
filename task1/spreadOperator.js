// Spread operator (...) digunakan untuk menyebarkan elemen array atau properti objek.
// Rest operator (...) digunakan untuk mengumpulkan elemen atau properti yang tersisa ke dalam array atau objek.

// Spread Operator pada Array
const angka1 = [1, 2];
const angka2 = [...angka1, 3, 4];
console.log(angka2); // Output: [1, 2, 3, 4]

// Spread Operator pada Object
const user1 = { nama: "adli", umur: 16 };
const user2 = { ...user1, pekerjaan: "siswa" };
console.log(user2); // Output: { nama: "adli", umur: 16, pekerjaan: "siswa" }

// Rest Operator pada Fungsi
function hitung(...angka) {
  return angka.reduce((acc, curr) => acc + curr, 0);
}
console.log(hitung(1, 2, 3, 4)); // Output: 10