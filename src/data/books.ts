import { Book, MenuItem } from '../types';

// Tugas 2: Buat array untuk menyimpan koleksi buku
// Array ini akan digunakan sebagai penyimpanan data sementara selama aplikasi berjalan
// Pertimbangkan tipe data yang tepat untuk array ini berdasarkan definisi Book yang sudah dibuat

// books array
export let books: Book[] = [];

//menu array, isMandatory true = fitur yang di tampilkan sesuai challenge 6, isMandatory false = fitur tambahan
export const mainmenuList: MenuItem[] = [
  {
    id: 1,
    menuTitle: 'Add New Book',
    isMandatory: true,
  },
  {
    id: 2,
    menuTitle: 'List Book',
    isMandatory: true,
  },
  {
    id: 3,
    menuTitle: 'Search Book',
    isMandatory: true,
  },
  // {
  //   id: 4,
  //   menuTitle: 'Edit Book',
  //   isMandatory: false,
  // },
  // {
  //   id: 5,
  //   menuTitle: 'Delete Book',
  //   isMandatory: false,
  // },
  {
    id: 4,
    menuTitle: 'Exit',
    isMandatory: true,
  },
];
