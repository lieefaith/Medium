// Destructuring adalah cara untuk mengekstrak nilai dari array atau properti dari objek ke dalam variabel yang terpisah.

// Destructuring Array
const angka = [1, 2, 3];
const [satu, dua, tiga] = angka;
console.log(satu, dua, tiga); // Output: 1 2 3

// Destructuring Object
const user = { nama: "adli", umur: 16 };
const { nama, umur } = user;
console.log(nama, umur); // Output: adli 16