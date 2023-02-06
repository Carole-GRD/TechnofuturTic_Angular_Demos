import { Component, Input } from '@angular/core';


// à mettre dans un fichier séparé ??
export type Book = {
  id?: number;
  title: string;
}


@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component {
  
  idBook: number = 1;
  // idBook: number = 4;
  
  newBook: string = '';

  books: Book[] = [];
  // books: Book[] = [
  //   { id: 1, title: 'Book 1' },
  //   { id: 2, title: 'Book 2' },
  //   { id: 3, title: 'Book 3' },
  // ];
  
  addBook(bookToAdd: string) {
    console.log(this.books);
    this.books.push({ id: this.idBook, title: bookToAdd });
    this.idBook += 1;
    this.newBook = '';
  }

  indexToFind: number = 0;
  receiveBookToDelete(event: Book) {

    this.indexToFind = this.books.findIndex((book) => {
      return book.title === event.title;
    })

    this.books.splice(this.indexToFind, 1);

  }  
}
