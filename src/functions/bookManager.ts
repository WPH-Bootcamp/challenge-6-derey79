import inquirer from 'inquirer';
import { MenuItem, Book } from '../types';
import { books } from '../data/books';

// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

// Function: Show menu
export function showMenu(menu: MenuItem[]): void {
  console.log('\n============ OPTION MENU ============');
  menu.forEach((item) => {
    const status = item.isMandatory ? '' : '(new feature)';
    console.log(`  [${item.id}] ${item.menuTitle.padEnd(22)} ${status}`);
  });
  console.log('=====================================\n');
}

export async function mainMenu() {
  let exit = false;

  while (!exit) {
    const { menu } = await inquirer.prompt([
      {
        type: 'input',
        name: 'menu',
        message: 'Insert Your choice? (1-4)',
      },
    ]);

    switch (menu) {
      case '1':
        console.log('\nInsert Book :');
        //await addBook();
        // your add logic
        break;

      case '2':
        console.log('Search selected');
        //listBooks();
        // your search logic
        break;

      case '4':
        const { confirmExit } = await inquirer.prompt([
          {
            type: 'input',
            name: 'confirmExit',
            message: 'Are you sure you want to exit? (y/n)',
          },
        ]);

        if (confirmExit.toLowerCase() === 'y') {
          console.log('Exiting...');
          exit = true;
        }
        break;

      default:
        console.log('Invalid choice');
    }
  }
}
