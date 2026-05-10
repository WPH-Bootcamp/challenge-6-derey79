import { MenuItem, Book } from '../types';

// Tugas 2: Buat array untuk menyimpan koleksi buku
// Array ini akan digunakan sebagai penyimpanan data sementara selama aplikasi berjalan
// Pertimbangkan tipe data yang tepat untuk array ini berdasarkan definisi Book yang sudah dibuat

// books array
export let books: Book[] = [];

//menu array, isMandatory true = fitur yang di tampilkan sesuai challenge 6, isMandatory false = fitur tambahan
export const mainmenuList: MenuItem[] = [
  {
    id: 1,
    menuTitle: 'Add New Book to Array',
  },
  {
    id: 2,
    menuTitle: 'List of Book from Array',
  },
  {
    id: 3,
    menuTitle: 'Search Book in Array',
  },
];

// Data buku untuk di tambahkan ke array
export const newBooks: Book[] = [
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

export const newBooksInd: Book[] = [
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
