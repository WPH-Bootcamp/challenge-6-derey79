import inquirer from 'inquirer';
import {
  MenuItem,
  Book,
  MenuAnswer,
  ExitAnswer,
  DataAnswers,
} from '../types/index';
import { books, mainmenuList } from '../data/books';

// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
async function addBook(): Promise<void> {
  const answers = await inquirer.prompt<DataAnswers>([
    {
      type: 'input',
      name: 'title',
      message: 'Enter book title:',
      validate: (input: string) => {
        const title = input.trim();
        if (!title) return 'Title cannot be empty';

        const bookExists = books.some(
          (b) => b.title.toLowerCase() === title.toLowerCase()
        );

        if (bookExists) {
          return 'Title already exists!';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter author name:',
    },
    {
      type: 'input',
      name: 'publicationYear',
      message: 'Enter publication year (yyyy):',
      validate: (input: string) => {
        // const year = Number(input);
        if (!input.trim()) return 'Year cannot be empty';
        // if (isNaN(year)) return 'Year must be a number';
        if (Number(input) <= 0) return 'Year must be greater than 0';
        if (input.trim().length !== 4) {
          return 'Year must be exactly 4 digits';
        }
        return true;
        // return !isNaN(year) || 'Year must be a number';
      },
    },
  ]);

  const newBook: Book = {
    // id: Date.now(),
    title: answers.title.trim(),
    author: answers.author.trim(),
    publicationYear: Number(answers.publicationYear),
  };

  books.push(newBook);

  // console.log('New book added successfully :', newBook);
  console.log('New book added successfully\n');

  // Prompt to insert again

  const { confirmAgain } = await inquirer.prompt<{ confirmAgain: boolean }>([
    {
      type: 'confirm',
      name: 'confirmAgain',
      message: 'Add another book ?',
      default: false,
    },
  ]);

  //
  if (confirmAgain) {
    await addBook();
  }
  showMenu(mainmenuList);
}

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks(): void {
  console.log('\n=============== List Books ===============');

  if (books.length === 0) {
    console.log('No books available.');
    return;
  }

  books.forEach((book, index) => {
    console.log(
      `[${index + 1}]. Title : ${book.title}, Author : ${book.author} (${book.publicationYear})`
    );
  });
  console.log('==========================================\n');
}

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
async function searchBook(): Promise<void> {
  if (books.length === 0) {
    console.log('📭 No books available.\n');
    return;
  }

  // 1) ask keyword
  const { keyword } = await inquirer.prompt<{ keyword: string }>([
    {
      type: 'input',
      name: 'keyword',
      message: 'input title/author/year :',
    },
  ]);

  const q = keyword.trim().toLowerCase();

  // 2) filter (title OR author OR year)
  const results = books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.publicationYear.toString().includes(q)
  );

  // show results
  if (results.length === 0) {
    console.log('No books found.\n');
    return;
  }

  console.log('\n Search Results:');
  results.forEach((book, index) => {
    // console.log(`${i + 1}. ${b.title} - ${b.author} (${b.publicationYear})`);
    console.log(
      `${index + 1}. Title : ${book.title}, Author : ${book.author} (${book.publicationYear})`
    );
  });
  console.log();
}

// Function: Render Menu
export function showMenu(menu: MenuItem[]): void {
  console.log('\n============ OPTION MENU ============');
  menu.forEach((item) => {
    const status = item.isMandatory ? '' : '(new feature)';
    console.log(`  [${item.id}]. ${item.menuTitle.padEnd(22)} ${status}`);
  });
  console.log('=====================================\n');
}

export async function mainMenu() {
  let exit = false;

  while (!exit) {
    const { menu } = await inquirer.prompt<MenuAnswer>([
      {
        type: 'input',
        name: 'menu',
        message: 'Insert Your choice? (1-4)',
      },
    ]);

    switch (menu) {
      case '1':
        // console.log('\nInsert Book :');
        await addBook();
        break;

      case '2':
        listBooks();
        // your search logic
        break;

      case '3':
        await searchBook();
        // your search logic
        break;

      case '4':
        const { confirmExit } = await inquirer.prompt<ExitAnswer>([
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
