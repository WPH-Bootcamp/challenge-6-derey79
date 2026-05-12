import { MenuItem, Book } from '../types/index';
import { books } from '../data/books';
// import { keyword } from '../main';

// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
// Simple validation function

// Simple validation function
async function isValid(book: Book): Promise<boolean> {
  const currentYear = new Date().getFullYear();
  const yearPublish = book.publicationYear ?? 0;

  // 1. check apakah null atau tidak
  if (!book.title.trim() || !book.author.trim()) return false;

  // 2. check validasi publicationYear
  // if (book.publicationYear > currentYear || book.publicationYear <= 0)
  //   return false;
  if (
    book.publicationYear !== undefined &&
    (book.publicationYear > currentYear || book.publicationYear < 0)
  )
    return false;

  // 3. check untuk duplikasi
  const exists = books.some(
    (b) => b.title.trim().toLowerCase() === book.title.trim().toLowerCase()
  );
  if (exists) return false;

  return true;
}

// Simple push function
export async function addBooks(prBooks: Book[]) {
  console.log('start inserting...');

  for (const book of prBooks) {
    // menghapus spasi sebelum data di push
    book.title = book.title.trim();
    book.author = book.author.trim();

    if (await isValid(book)) {
      books.push(book);
      console.log(`Title: ${book.title.padEnd(30)} (V)`);
    } else {
      console.log(`Title: ${book.title.padEnd(30)} (Failed)`);
    }
  }
  console.log('end insert....');
  // console.log(books);
}

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
export function listBooks(): void {
  console.log(
    '\n======================= List of Books ======================='
  );

  if (books.length === 0) {
    console.log('No books available.');
    return;
  }

  books.forEach((book, index) => {
    // supaya tampilan no urut lebih rapih
    let noOrder = String(index + 1).padStart(2, '0');
    const publishLabel =
      book.publicationYear !== undefined ? `(${book.publicationYear})` : '';
    console.log(
      `${noOrder}. Title : ${book.title.padEnd(28)} Author : ${book.author.padEnd(25)} ${publishLabel}`
    );
  });
  console.log(
    '=============================================================\n'
  );
}

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
export async function searchBook(keyword?: string | number): Promise<void> {
  if (keyword === undefined) {
    console.log('Search Book without keyword. All data will show');
    listBooks();
    return;
  } else {
    if (books.length === 0) {
      console.log('No books available.\n');
      return;
    }
    //
    console.log(`\nResult for keyword : ${keyword}`);
    console.log('==================================');

    const results = books.filter((b) => {
      // 1. check kalau type Number, cari berdasarkan publicationYear
      if (typeof keyword === 'number') {
        return b.publicationYear === keyword;
      }

      // 2. kalau type string, cari untuk title atau author
      const lowerKeyword = keyword.toLowerCase();
      return (
        b.title.toLowerCase().includes(lowerKeyword) ||
        b.author.toLowerCase().includes(lowerKeyword)
      );
    });

    results.forEach((book, index) => {
      // console.log(`${i + 1}. ${b.title} - ${b.author} (${b.publicationYear})`);
      let resIndex = String(index + 1).padStart(2, '0');
      console.log(
        `${resIndex}. Title : ${book.title.padEnd(28)} Author : ${book.author.padEnd(25)} (${book.publicationYear})`
      );
    });
    console.log();
  }
}

// Function: Render Menu
export function showMenu(menu: MenuItem[]): void {
  console.log('\n=====================================');
  menu.forEach((item) => {
    console.log(` Step [${item.id}]. ${item.menuTitle.padEnd(22)}`);
  });
  console.log('=====================================\n');
}
