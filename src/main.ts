export {};
import { mainmenuList, newBooks, newBooksInd } from './data/books';
import {
  showMenu,
  addBooks,
  listBooks,
  searchBook,
} from './functions/bookManager';

// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini

// Fungsi untuk menjalankan langkah berdasarkan async
const runBookApps = async () => {
  console.log('Step [1]. Add New Book to Array');
  await addBooks(newBooks);
  await addBooks(newBooksInd);
  console.log('\nStep [2]. List of Book from Array');
  listBooks();
  console.log('Step [3]. Search Book in Array');
  searchBook('PAULO');
  searchBook(2017);
  searchBook('Cerita');
};

// menampilkan Menu
showMenu(mainmenuList);
// eksekusi porgram
runBookApps();
