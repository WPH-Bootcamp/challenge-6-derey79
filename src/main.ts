export {};
import { mainmenuList } from './data/books';
import {
  showMenu,
  addBooks,
  listBooks,
  searchBook,
} from './functions/bookManager';
import { Book } from './types';

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

// Data buku untuk di tambahkan ke array
const newBooks: Book[] = [
  {
    title: 'The Wonderful Wizard Of Oz ',
    author: 'L. Frank Baum',
  },
  {
    title: ' Lord of the Flies ', // ada spasi depan dan belakang
    author: ' William Golding', // ada spasi di depan
    publicationYear: 1954,
  },
  { title: 'The Alchemist', author: 'Paulo Coelho', publicationYear: 1988 },
  { title: ' ', author: 'Unknown', publicationYear: 2020 }, // title kosong, tidak di terima
  { title: 'Next Espana', author: 'Author', publicationYear: 3000 }, //
  { title: 'Atomic Habits', author: 'James Clear', publicationYear: -800 }, // tahun tidak valid
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    publicationYear: 2020,
  }, //

  {
    title: 'The Little Prince',
    author: 'Antoine de Saint',
    publicationYear: 1943,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationYear: 1813,
  },
  { title: 'Ulysses', author: 'James Joyce', publicationYear: 1922 },
];

const newBooksInd: Book[] = [
  {
    title: 'Laut Bercerita',
    author: 'Leila S. Chudori',
    publicationYear: 2017,
  },

  {
    title: 'Laut Bercerita II',
    author: ' Cerita ',
    publicationYear: 2022,
  },
  {
    title: 'Cerita Kancil dan Buaya',
    author: 'Kak Sato',
    publicationYear: 2017,
  },

  {
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    publicationYear: 1980,
  },
  {
    title: 'Negeri 5 Menara',
    author: 'A. Fuadi',
    publicationYear: 2009,
  },
  {
    title: 'Gadis Kretek',
    author: 'Ratih Kumala',
    publicationYear: 2012,
  },
  {
    title: ' ',
    author: 'Tidak Tahu',
    publicationYear: 2012,
  },
  {
    title: 'Gadis Kretek',
    author: 'Ratih Kumala',
    publicationYear: 2012,
  }, // duplikasi
  {
    title: 'Cantik itu Luka',
    author: 'Eka Kurniawan',
  },
];

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
  searchBook();
};

// Eksekusi program disini....
// menampilkan Menu
showMenu(mainmenuList);
// eksekusi porgram
runBookApps();
