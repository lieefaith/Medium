// Arrow functions adalah cara singkat untuk menuliskan fungsi anonim. Arrow functions tidak memiliki binding this sendiri, sehingga sering digunakan dalam konteks callback.

// Fungsi biasa
function salim(nama) {
    return `Halo, ${nama}`;
  }
  
  // Arrow function
  const salam = (nama) => `Halo, ${nama}`;
  
  console.log(salam("Liee")); // Output: Halo, Mirza