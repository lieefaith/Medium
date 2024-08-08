// Classes adalah blueprint untuk membuat objek yang memiliki properti dan metode.
// Inheritance memungkinkan Anda membuat kelas baru berdasarkan kelas yang sudah ada.

// Membuat Class
class Person {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    perkenalan() {
      return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
  }
  
  const adli = new Person("adli", 16);
  console.log(adli.perkenalan()); // Output: Halo, nama saya adli dan saya berumur 16 tahun.
  
  
  // Inheritance
  class Pelajar extends Person {
    constructor(nama, umur, mataPelajaran) {
      super(nama, umur);
      this.mataPelajaran = mataPelajaran;
    }
  
    belajar() {
      return `Saya belajar ${this.mataPelajaran}.`;
    }
  }
  
  const muridadli = new Pelajar("adli", 16, "React JS");
  console.log(muridadli.perkenalan()); // Output: Halo, nama saya adli dan saya berumur 16 tahun.
  console.log(muridadli.belajar());   // Output: Saya belajar React JS.