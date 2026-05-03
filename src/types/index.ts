// Tugas 1: Definisikan tipe data Book di sini
// Book harus memiliki properti: title, author, dan publicationYear
// Petunjuk: gunakan type alias atau interface untuk mendefinisikan struktur data ini
// Pastikan tipe data untuk setiap properti sudah sesuai dengan kebutuhan

// Book Main data
export interface Book {
  title: string;
  author: string;
  publicationYear: number;
}

// Interface --> Main Menu Data
export interface MenuItem {
  id: number;
  menuTitle: string;
  isMandatory: boolean;
}
