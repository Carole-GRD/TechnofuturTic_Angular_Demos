import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  books: Book[] = [
    new Book(1, 'Book 1'),
    new Book(2, 'Book 2'),
    new Book(3, 'Book 3'),
  ];

  idBook: number = 3;
  bookName: string = '';
  newBook!: Book;
  errorMessage: string = '';

  constructor() { }

  addNewBook(newTitle: string) {
    this.errorMessage = '';
    
    if (newTitle.trim()) {
      this.idBook += 1;
      const newBook = new Book(this.idBook, newTitle);
      this.books.push(newBook);

    }
    else {
      this.errorMessage = 'Book Name Is Required !';
    }

  }

  deleteOneBook(idBookToDelete: number) {
    
    const indexBook = this.books.findIndex((book) => {
      return book.id === idBookToDelete;
    })

    if (indexBook === -1) {
      console.log("Book Not Found");
      return;
    }
    
    this.books.splice(indexBook, 1);
  }
}
